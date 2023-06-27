import {createSlice} from "@reduxjs/toolkit"

const initialState = []

const ReducerSlice = createSlice({
    name:"Reducers",
    initialState, 
    reducers:{
        increment:(state,action) => {
           state.push(action.payload)
        },
        remove:(state,action) => {
            return state.filter((item) =>item.id !== action.payload)
        }
    } 
})


export const {increment,remove} = ReducerSlice.actions;
export default ReducerSlice.reducer;