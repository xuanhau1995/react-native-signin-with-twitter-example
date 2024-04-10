import React from "react";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { MainScreen } from "./screens/main";

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <MainScreen />
    </RecoilRoot>
  );
}

export default App;
