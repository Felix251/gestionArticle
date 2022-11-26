import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const FAV_KEY = 'rfk'

interface FavoriteState {
  favourites: string[]
}

const initialState: FavoriteState = {
  favourites: JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]'),
}

export const favoritePostsSlice = createSlice({
  name: 'favoritePosts',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload)
      localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites))
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload)
      localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites))
    },
  },
})

export const favoritePostsActions = favoritePostsSlice.actions
export const favoritePostsReducer = favoritePostsSlice.reducer
