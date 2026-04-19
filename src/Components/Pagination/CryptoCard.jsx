import React from 'react'
import './cryptocard.css'

const CryptoCard = ({name, image, price}) => {
  return (
    <div className='crypto-card'>
      <div className='card_image'>
        <img src={image} alt={name}/>
      </div>
      <div className='card_info'>
        <h2>{name}</h2>
        <h3>${price.toLocaleString()}</h3>
      </div>
    </div>
  )
}

export default CryptoCard
