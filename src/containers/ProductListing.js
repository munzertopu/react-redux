import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/action/productActions'
import ProductComponent from './ProductComponent'



const ProductListing = () => {
    const products = useSelector((state)=> state)
    const dispatch= useDispatch();

    const fetchProducts = async ()=> {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=> {
            console.log('something bad happened', err)
        })
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
       fetchProducts()
    }, [])
   
    return (
        <div style={{paddingTop:"5rem"}} className="ui grid container">
           <ProductComponent/>
        </div>
    )
}

export default ProductListing
