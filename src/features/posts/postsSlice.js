import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
	{ id: '1', title: 'Learning reduxtoolkit', content: "I've hear a good story" },
	{ id: '2', title: 'slices.......', content: "I've hear a good story" },
]

const postsSlice = createSlice({
	name: 'posts',
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
						content,
					},
				}
			},
		},
	},
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
