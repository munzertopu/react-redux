import { ActionTypes } from "../constants/action-types";

const initialState = {
    prouducts: [{
        id:1,
        title: "Topu",
        category: "Programmer"

    }]
}
export const productReducer=(state={initialState}, {type,payload})=> {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
            
           
    
        default:
            return state
    }

}