import React from 'react'
import {Link} from 'react-router-dom';
const Header = ()=>{
    return(
    <div className="ui fixed menu">
        
        <div className="ui container center">
            
            <h2>New Shop</h2>
        </div>
        <Link to="/product/cart">
        <button>Go to Cart</button>
        </Link>
    </div>
    )
}
export default Header;
