import queryString from "query-string";
import { setRecoil } from "recoil-nexus";
import { CURRENT_URL_WEB } from "../../config/const";
import { loadingState } from "../../master-data/store/common";
import { axiosClient } from "../../utils/axios-client";
import { urlFrontWebState } from "./store";
import { IFormSocialValues } from "./type";

export const checkExistAccountAPI = async (
  requestBody: IFormSocialValues,
  onCreateCallBack?: (formData: any) => void
) => {
  const data = {
    email: requestBody.email,
    ...(requestBody.facebookId && { facebook_id: requestBody.facebookId }),
    ...(requestBody.twitterId && { twitter_id: requestBody.twitterId }),
    ...(requestBody.instagramId && { instagram_id: requestBody.instagramId }),
  };

  const queryStringParams = queryString.stringify(data);
  setRecoil(loadingState, true);

  await axiosClient
    .post("users/check-exist?" + queryStringParams)
    .then((res: any) => {
      if (res === "exist") {
        // Toast.error("アカウントは存在していました", "top");
      } // Handle cases where a new account needs to be created or login is required
      else if (res === "create") {
        // Create a new account
        const formData = { ...requestBody, ...data };
        onCreateCallBack && onCreateCallBack(formData);
        // Can login
      } else if (res === "login") {
        // Determine the social ID if available
        const socialId =
          requestBody.facebookId ||
          requestBody.twitterId ||
          requestBody.instagramId;

        let uri = `${CURRENT_URL_WEB}/check-login/?email=${requestBody.email}&fullname=${requestBody.name}&socialId=${socialId}`;

        if (socialId) {
          uri += `&socialId=${socialId}`;
        }

        setRecoil(urlFrontWebState, uri);
      }
    })
    .catch((err) => {
      console.log("err", err);
    })
    .finally(() => {
      setTimeout(() => {
        setRecoil(loadingState, false);
      }, 400);
    });
};
