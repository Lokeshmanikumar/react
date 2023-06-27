const initialState = {
    products:[
        {
            id:1,
            title:"Lokesh",
            category:"React Learner"
        }
    ]
}

export const productReducer = (state,{type,payload}) =>{
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}
