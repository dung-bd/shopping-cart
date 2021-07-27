import { ActionTypes } from "../contants/action-types"
// import { login, logout } from "../actions/productActions";
const initialState = {
    products:[]
}
const initialState1={ user: null }
export const productReducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.payload};
            default:
                return state;
    }
}
export const selectedProductReducer = (state={}, action) =>{
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCT:
            return{...state, ...action.payload}
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return{}    
            default:
                return state;
    }
}
export const cartReducer = (state = {}, action)=>{
    switch(action.type){
        case ActionTypes.SET_CART:
            return {...state, ...action.payload};
            default:
                return state;
    }
}
 export const user = (state = initialState1, action) =>{
 switch(action.type){
  case ActionTypes.LOG_IN :
 return state.user = action.payload;
 case ActionTypes.LOG_OUT :
return state.user = null;
default:
return initialState1
}    
}
export const selectUser = (state) => state.user.user;