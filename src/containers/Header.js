import React from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
const Header = ()=>{
    const product= useSelector(state => state.cart)
    return(
    <div className="ui fixed menu">
        
        <div className="ui container center">
            
            <h2>1 Product Shop</h2>
        </div>
        <Link to="/cart">
        {/* <button className="btn1 z" >Go to Cart */}
        <i class="cart fas fa-shopping-cart"></i>
    <span class="header__cart-item-qnt">{Object.keys(product).length /6}</span>
        {/* </button> */}
        </Link>
        <Link to="/login">
        <button className="btn1">Login</button>
        </Link>
    </div>
    )
}
export default Header;
