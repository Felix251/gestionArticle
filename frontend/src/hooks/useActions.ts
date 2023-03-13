import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { favoritePostsActions } from "../store/slices/favoritePostsSlice";

const actions = {
  ...favoritePostsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
