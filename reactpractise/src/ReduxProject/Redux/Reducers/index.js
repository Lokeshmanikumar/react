import {combinedReducers} from "redux"
import {ProductReducer} from "./productReducer"

const reducers = combinedReducers({
    allProducts:ProductReducer
})