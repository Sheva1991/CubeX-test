import {
  ADD_LIST_ITEM,
  SHOW_LOADER,
  HIDE_LOADER,
  UP_LIST_ITEM,
  DOWN_LIST_ITEM
} from "./types";

export function createPost(post) {
  return {
    type: ADD_LIST_ITEM,
    payload: post
  };
}
export function upPost(index) {
  return {
    type: UP_LIST_ITEM,
    index: index
  };
}
export function downPost(index) {
  return {
    type: DOWN_LIST_ITEM,
    index: index
  };
}
export function showLoader() {
  return {
    type: SHOW_LOADER
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER
  };
}
