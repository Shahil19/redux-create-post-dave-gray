import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: 'Learning redux-toolkit', content: "abc" },
    { id: 2, title: 'Slices', content: "def" },
]

const postsSlice = createSlice({
    name: 'posts ',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;

