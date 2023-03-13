import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const FAV_KEY = "rfk";

interface FavoriteState {
  favorites: string[];
}

const initialState: FavoriteState = {
  favorites: JSON.parse(localStorage.getItem(FAV_KEY) ?? "[]"),
};

export const favoritePostsSlice = createSlice({
  name: "favoritePosts",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
      localStorage.setItem(FAV_KEY, JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((f) => f !== action.payload);
      localStorage.setItem(FAV_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const favoritePostsActions = favoritePostsSlice.actions;
export const favoritePostsReducer = favoritePostsSlice.reducer;
