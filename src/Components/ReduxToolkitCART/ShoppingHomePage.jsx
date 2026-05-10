import React, { useEffect, useState } from 'react'
import Items from './Items';
import './shoppingcart.css';
import Navbar from '../NavBar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getAllProducts } from './Products';
import Constants from '../Utils/Constants';

const ShoppingHomePage = () => {

    //const [itemsList, setItemsList] = useState([]);
    const dispatch = useDispatch();
    const {items:itemsList,status} = useSelector(state => state.products);

    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        // .then(response => response.json())
        // .then(data => setItemsList(data))
        //dispatch(getProducts());
        dispatch(getAllProducts());
    },[])

    if(status === Constants.LOADING){
            return <p>Loading.....</p>
    }

    if(status === Constants.ERROR){
        return <p>Error</p>
    }

    const renderList = itemsList.map((item) => {
            return (
                <Items key={item.id} item={item} screenType={"product_list"}/>
            )   
            }
        )

    return (
        <div>
            <div className='grid-container'>
            {
                itemsList ? renderList : <div>Loading...</div>
            }
            </div>
      </div>
    )
}

export default ShoppingHomePage
