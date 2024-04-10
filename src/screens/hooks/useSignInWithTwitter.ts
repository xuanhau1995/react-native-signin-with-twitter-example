import Axios from "axios";
import OAuth from "oauth-1.0a";
import { useEffect } from "react";
import { Linking } from "react-native";
import crypto from "react-native-quick-crypto";

const CONSUMER_KEY = "Xthjgb3zsIx0qpalePwPh7d30";
const CONSUMER_SECRET = "w6baTWYNxMwqCxov5GOS6nkyUJ1btBvbU4LNAq9Dyc1BI7sqjh";
const TWITTER_API = "https://api.twitter.com";
const OAUTH_CALLBACK_URL = "oauth-app://oauth"; // your app scheme

export const useSignInWithTwitter = () => {
  const hash = (baseString: string, key: string) => {
    console.log(
      crypto.createHmac("sha1", key).update(baseString).digest("base64")
    );
    return crypto.createHmac("sha1", key).update(baseString).digest("base64");
  };

  // request token
  const signInWithTwitter = async () => {
    const oauth = new OAuth({
      consumer: {
        key: CONSUMER_KEY,
        secret: CONSUMER_SECRET,
      },
      signature_method: "HMAC-SHA1",
      hash_function: hash,
    });

    const request_data = {
      url: TWITTER_API + "/oauth/request_token",
      method: "POST",
      data: {
        oauth_callback: OAUTH_CALLBACK_URL,
      },
    };

    try {
      const res = await Axios.post(
        request_data.url,
        {},
        { headers: { ...oauth.toHeader(oauth.authorize(request_data)) } }
      );
      const responseData = res.data;
      const requestToken = responseData.match(/oauth_token=([^&]+)/)[1];
      // now redirect user to twitter login screen
      const twitterLoginURL =
        TWITTER_API + `/oauth/authenticate?oauth_token=${requestToken}`;
      Linking.openURL(twitterLoginURL);
    } catch (error) {
      console.log(error);
    }
  };

  // handle redirect from twitter
  useEffect(() => {
    const subscribe = Linking.addEventListener(
      "url",
      async (event: { url: string }) => {
        const url = event.url;
        console.log("url", url);
        const params = url.split("?")[1];
        const tokenParts = params.split("&");
        const requestToken = tokenParts[0].split("=")[1];
        const oauthVerifier = tokenParts[1].split("=")[1];

        const oauth = new OAuth({
          consumer: {
            key: CONSUMER_KEY,
            secret: CONSUMER_SECRET,
          },
          signature_method: "HMAC-SHA1",
          hash_function: (baseString, key) =>
            crypto.createHmac("sha1", key).update(baseString).digest("base64"),
        });

        const request_data = {
          url: TWITTER_API + "/oauth/access_token",
          method: "POST",
          data: {
            oauth_token: requestToken,
            oauth_verifier: oauthVerifier,
          },
        };

        try {
          const res = await Axios.post(
            request_data.url,
            {},
            { headers: { ...oauth.toHeader(oauth.authorize(request_data)) } }
          );
          const responseData = res.data;
          const authToken = responseData.match(/oauth_token=([^&]+)/)[1];
          const authTokenSecret = responseData.match(
            /oauth_token_secret=([^&]+)/
          )[1];

          // https://rnfirebase.io/auth/social-auth#twitter
          // import auth from '@react-native-firebase/auth';
          // const twitterCredential = auth.TwitterAuthProvider.credential(authToken, authTokenSecret);

          // // Sign-in the user with the credential
          // const result = auth().signInWithCredential(twitterCredential);
          console.log(responseData);
        } catch (error) {
          console.log("Error: access token", error);
        }
      }
    );

    return () => subscribe.remove();
  }, []);

  return {
    signInWithTwitter,
  };
};
