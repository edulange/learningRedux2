import { createSlice } from "@reduxjs/toolkit";

 const initialState = [
    { id: '0', name: 'Dude Lebowski'},
    { id: '1', name: 'Eduardo Lange'},
    { id: '2', name: 'Sarana Lange'},
 ]

 const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
 })

 export const selectAllUsers = (state) => state.users

 export default usersSlice.reducer