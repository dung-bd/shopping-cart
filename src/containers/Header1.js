import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/productActions'
import { selectUser } from '../redux/reducers/productReducer'
const Header1 = ()=>{
    
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name)
    const product= useSelector(state => state.cart)
  const handleLogout = (e) =>{
      e.preventDefault();
      dispatch(logout())
  }
    return(
    <div className="ui fixed menu">
        
        <div className="ui container center">
            
            <h2>1 Product Shop</h2>
        </div>
        <Link to="/cart">
        <button className="btn1">Go to Cart
        <i class="fas fa-shopping-cart"></i>
       
        </button>
        </Link>
        <div>
                <span className="user_name">{name}</span>
                <Link to="/login">
                <button className="btn1" onClick={()=> setName('')}>Logout</button>
                </Link>
                </div>
    </div>
    )
}
export default Header1;