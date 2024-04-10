import React, { useEffect, useRef, useState } from "react";
import { BackHandler, SafeAreaView, StyleSheet, View } from "react-native";
import WebView from "react-native-webview";
import { useRecoilValue } from "recoil";
import { CURRENT_URL_WEB } from "../../config/const";
import { useFacebookLogin } from "./hooks/useFacebookLogin";
import { useSignInWithTwitter } from "./hooks/useSignInWithTwitter";
import { urlFrontWebState } from "./store";

export const MainScreen = () => {
  const { signInWithTwitter } = useSignInWithTwitter();
  const { handleLoginFacebook } = useFacebookLogin();
  const webViewRef = useRef<WebView>(null);
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const initialWebUrl = useRecoilValue(urlFrontWebState);

  // Check behavior
  useEffect(() => {
    const backAction = () => {
      if (webViewRef.current) {
        if (
          currentUrl === `${CURRENT_URL_WEB}/` ||
          currentUrl === `${CURRENT_URL_WEB}/search/` ||
          currentUrl === `${CURRENT_URL_WEB}/scan/` ||
          currentUrl === `${CURRENT_URL_WEB}/my-page/` ||
          currentUrl === `${CURRENT_URL_WEB}/?isAccessToken=true` ||
          currentUrl === `${CURRENT_URL_WEB}/search/?isAccessToken=true` ||
          currentUrl === `${CURRENT_URL_WEB}/scan/?isAccessToken=true` ||
          currentUrl === `${CURRENT_URL_WEB}/my-page/?isAccessToken=true` ||
          currentUrl === `${CURRENT_URL_WEB}/auth/login/` ||
          currentUrl === `${CURRENT_URL_WEB}/auth/login/?isAccessToken=false`
        ) {
          // If current URL is the main page, prevent navigation to login screen
          return false; // Indicate back action is handled
        } else {
          // If current URL is a subpage, go back in WebView
          webViewRef.current.goBack();
          return true; // Indicate back action is handled
        }
      }
      return false; // WebView is not available, let default back action happen
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [currentUrl]);

  // Listen for messages sent from the ReactJS code
  const onNavigationStateChange = (event: any) => {
    setCurrentUrl(event.url);
    console.log(event.url);

    if (
      event.url === `${CURRENT_URL_WEB}/auth/login/?isLoginBySocial=facebook`
    ) {
      // Handle login by social
      handleLoginFacebook();
    }

    if (
      event.url === `${CURRENT_URL_WEB}/auth/login/?isLoginBySocial=twitter`
    ) {
      signInWithTwitter();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        {initialWebUrl && (
          <WebView
            ref={webViewRef}
            style={{ flex: 1 }}
            source={{
              uri: initialWebUrl,
            }}
            onNavigationStateChange={onNavigationStateChange}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
