import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postsSlice";

import personsReducer from '../features/persons/personsSlice'

export const store = configureStore({
    reducer: {
        posts: postReducer,
        counte: counterReducer,
        persons: personsReducer
    }
})