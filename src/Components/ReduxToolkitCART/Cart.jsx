import React from 'react'
import './shoppingcart.css';
import { useSelector } from 'react-redux';
import Items from './Items';

const Cart = () => {

  const cartItemsList = useSelector(state => state.cart);

  return (
    <div className='cart'>
      Cart Items
      {
       cartItemsList.map((item) => {
             return (
                <Items key={item.uid} item={item} screenType={"cart"}/>
             )   
            })
      }
    </div>
  )
}

export default Cart
