import { favoritePostsReducer } from "./slices/favoritePostsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { postAPI } from "./api/postAPI";

export const store = configureStore({
  reducer: {
    // auth: authReducer
    [postAPI.reducerPath]: postAPI.reducer,
    favoritePosts: favoritePostsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([postAPI.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
