import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from "react-native-fbsdk-next";
import { setRecoil } from "recoil-nexus";
import { CURRENT_URL_WEB } from "../../../config/const";
import { checkExistAccountAPI } from "../api";
import { urlFrontWebState } from "../store";
import { IFormSocialValues } from "../type";

// Implementation check login
export const handleImplementDirectToCreateAcc = (
  formData: IFormSocialValues
) => {
  if (formData) {
    let uri = `${CURRENT_URL_WEB}/auth/update-profile/?email=${formData.email}&fullname=${formData.name}`;

    if (formData.password) {
      uri += `&password=${formData.password}`;
    }

    if (formData.facebookId) {
      uri += `&facebook_id=${formData.facebookId}`;
    }

    if (formData.twitterId) {
      uri += `&twitter_id=${formData.twitterId}`;
    }

    if (formData.instagramId) {
      uri += `&instagram_id=${formData.instagramId}`;
    }

    setRecoil(urlFrontWebState, uri);
  }
};

export const onCheckExistAccount = async (result: IFormSocialValues) => {
  await checkExistAccountAPI(result, handleImplementDirectToCreateAcc);
};

export const useFacebookLogin = () => {
  // Hàm lấy thông tin hồ sơ người dùng từ Graph API của Facebook
  const fetchUserProfile = async (accessToken: string): Promise<any> => {
    const profileRequestParams = {
      fields: {
        string: "id,name,email", // Chọn các trường bạn muốn lấy thông tin
      },
    };

    const profileRequestConfig = {
      httpMethod: "GET",
      version: "v9.0",
      parameters: profileRequestParams,
      accessToken: accessToken,
    };

    return new Promise((resolve, reject) => {
      const profileRequest = new GraphRequest(
        "/me",
        profileRequestConfig,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      new GraphRequestManager().addRequest(profileRequest).start();
    });
  };

  // Hàm lấy avatar từ Graph API của Facebook
  const fetchUserAvatar = async (accessToken: string): Promise<string> => {
    const avatarRequestParams = {
      fields: {
        string: "picture.type(large)", // Lấy avatar
      },
    };

    const avatarRequestConfig = {
      httpMethod: "GET",
      version: "v9.0",
      parameters: avatarRequestParams,
      accessToken: accessToken,
    };

    return new Promise((resolve, reject) => {
      const avatarRequest = new GraphRequest(
        "/me",
        avatarRequestConfig,
        (error, result: any) => {
          if (error) {
            reject(error);
          } else {
            const avatarUrl = result.picture.data.url;
            resolve(avatarUrl);
          }
        }
      );

      new GraphRequestManager().addRequest(avatarRequest).start();
    });
  };

  // Hàm xử lý khi nhấn nút đăng nhập Facebook
  const handleLoginFacebook = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
    ]);

    if (result.isCancelled) {
      throw "User cancelled the login process";
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw "Something went wrong obtaining access token";
    }

    // Lấy thông tin hồ sơ của người dùng và avatar
    const userProfile = await fetchUserProfile(data.accessToken);
    const userAvatar = await fetchUserAvatar(data.accessToken);

    const basicInfo = {
      facebookId: userProfile.id,
      name: userProfile.name,
      email: userProfile.email,
      avatar: userAvatar,
    };

    if (basicInfo) await onCheckExistAccount(basicInfo);
  };

  return {
    handleLoginFacebook,
  };
};
