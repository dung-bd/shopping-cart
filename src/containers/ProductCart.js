import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {removeSelectedProduct, setCart } from '../redux/actions/productActions'

 const ProductCart = () =>{
     const [quantity, setQuantity] = useState(1);
    const product= useSelector(state => state.cart)
    const {image, title, price} = product;
    const {productId} = useParams()
    const dispatch = useDispatch()
    console.log(productId)
    
    const fetchProductDetail = async() =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
        console.log("Err", err);
    })

    dispatch(setCart(response.data))
   }
   useEffect(()=>{
        if(productId && productId !== ""){
            fetchProductDetail()
        }
        return ()=>{
            dispatch(removeSelectedProduct())
        }
   },[productId])
   
             
             
    return(
       
    <div className="ui grid container">
        
        {Object.keys(product).length === 0 ? (<div>...Loading</div>) : (
            <div>
                <h1>{title}- Price: ${price}</h1> 
                <img className="b" src={image}/>
                <h1>Quantity: {quantity}</h1>
                <button onClick={() => setQuantity(quantity + 1)}>
        Increase
      </button>
      
      <button onClick={() => setQuantity(quantity - 1)}>
        Decrease
      </button>
      <h1>Total price: ${price * quantity}</h1>
      <button onClick={()=>{alert("Done deal")}}>Submit</button>
            </div>

            
        )}
         
         </div>
   
         )
 }
 export default ProductCart

