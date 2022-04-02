import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        addCart:(state, action)=>{
            state.push(action.payload)
        },
        delCart:(state, action)=>{
            state.splice(action.index, 1)
        }
    }
})

export const {addCart, delCart} = cartSlice.actions
export default cartSlice.reducer