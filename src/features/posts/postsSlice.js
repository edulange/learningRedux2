import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Learning reduxtoolkit', content: "I've hear a good story"},
    { id: '2', title: 'slices.......', content: "I've hear a good story"},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer