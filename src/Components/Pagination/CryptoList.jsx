import React from 'react'
import CryptoCard from './CryptoCard';
import "./cryptolist.css"

const CryptoList = ({coinsData}) => {
  return (
    <div className='crypto-list'>
     {
        coinsData.map((coins) => {
          return (  <CryptoCard
                        key={coins.market_cap_rank}
                        name={coins.name}      
                        image={coins.image}
                        price={coins.current_price}
                    />)
        })
     }
    </div>
  )
}

export default CryptoList
