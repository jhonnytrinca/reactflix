import { CLOSE_REGISTER_VIDEO, OPEN_REGISTER_VIDEO } from "./actions";

export const openRegisterVideo = () => ({
  type: OPEN_REGISTER_VIDEO,
});

export const closeRegisterVideo = () => ({
  type: CLOSE_REGISTER_VIDEO,
});
