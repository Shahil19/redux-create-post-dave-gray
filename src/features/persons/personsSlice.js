import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 1, name: "ifftekhar" },
]

const personsSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {}
})

export default personsSlice.reducer