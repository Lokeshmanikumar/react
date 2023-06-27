import {configureStore} from "@reduxjs/toolkit"
import ReducerSlice from "../Reducers"

export const Store = configureStore({
    reducer:{
        Reducers:ReducerSlice,
    }
})

