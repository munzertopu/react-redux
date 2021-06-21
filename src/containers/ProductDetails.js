import React from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/action/productActions';





const ProductDetails = () => {
    const {productId} = useParams()
    const dispatch = useDispatch()
  const product = useSelector(state => state.product)
    console.log('product id', productId)

    const fetchProductDetail = async (id) => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
        console.log('response from details===>', response.data)
        dispatch(selectedProduct())

    };
   
    return (
        <div >
            <h1>Product Details</h1>
        </div>
    )
}

export default ProductDetails
