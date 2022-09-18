import { configureStore } from '@reduxjs/toolkit'
import {searchReducer} from "./reducers/search.slice"

const store = configureStore({
  reducer: {
    searchReducer
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
