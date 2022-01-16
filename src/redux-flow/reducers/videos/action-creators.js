import { ADD_VIDEO } from "./actions";
import { db } from "../../../config/firebase";
import {
  onValue,
  update,
  ref,
  push,
  child,
  orderByChild,
  query,
} from "@firebase/database";

export const registerVideo =
  ({ id, title }) =>
  (dispatch) => {
    const newVideo = { id, title };
    const newVideoKey = push(child(ref(db), "videos")).key;
    const updates = {};
    updates["/videos/" + newVideoKey] = newVideo;
    update(ref(db), updates);

    dispatch(addVideo(newVideo));
  };

export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title },
});

export const fetchVideos = () => (dispatch) => {
  const videos = ref(db, "videos");

  onValue(videos, (snapshot) => {
    snapshot.forEach((child) => {
      dispatch(addVideo(child.val()));
    });
  });
};
