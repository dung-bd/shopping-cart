import {combineReducers} from 'redux'
import { cartReducer, productReducer, selectedProductReducer, user } from './productReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer,
    user: user,
})
export default reducers;