import React from 'react'
import './shoppingcart.css';
import { useDispatch } from 'react-redux';
import { addShopItem, removeShopItem } from './CartSlice';

const Items = ({item, screenType}) => {

  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(addShopItem(item));
  }

  const deleteItem = (id) => {
    dispatch(removeShopItem(id));
  }

  return (
    <div className='item-container'>
      
      {
        screenType === "product_list" ? (
          <>
          <img src={item.image} style={{width: "150px", height:"200px"}}/>
          <div>{item.title}</div>
          <div>$ {item.price}</div>
          <button onClick={() => addItem(item)}>Add to Cart</button>
          </>
        )
         : (
          <>
          <img src={item.item.image} style={{width: "150px", height:"200px"}}/>
          <div>{item.item.title}</div>
          <div>$ {item.item.price}</div>
          <button onClick={() => deleteItem(item.uid)}>Delete</button>
          </>
         )
      }
      
    </div>
  )
}

export default Items
