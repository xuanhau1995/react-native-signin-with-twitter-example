import { atom } from "recoil";
import { CURRENT_URL_WEB } from "../../config/const";

export const urlFrontWebState = atom({
  key: "urlFrontWebState",
  default: CURRENT_URL_WEB,
});
