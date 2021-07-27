import { ActionTypes } from "../contants/action-types"
export const setProducts = (products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProduct = (product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeSelectedProduct = ()=>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    }
}
export const setCart = (cart)=>{
    return{
        type: ActionTypes.SET_CART,
        payload: cart
        
    }
}
export function login(state){
    return{
        type: ActionTypes.LOG_IN,
        payload: state
    }
}
export function logout(state){
    return{
        type: ActionTypes.LOG_OUT
    }
}