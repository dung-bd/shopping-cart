import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from '../redux/actions/productActions'
 const ProductComponent = () =>{
    const addToCart = (cart)=>{
        dispatch(setCart(cart))

    }
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts.products)
    const renderList = products.map((product) =>{
        const {id, title, image, price, category} = product
        return(
        
           
        <div className="four wide column" key={id}>
            <Link to={`/product/${id}`}>
        < div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src={image} alt={title} />
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                </div>
            </div>
        </div>
        </Link>
        <button className="btn1" onClick={() => addToCart(product)}>Add item</button>
         
        </div>
        
        );
    })
   return(
<> {renderList} </>
   );
 }
 export default ProductComponent
