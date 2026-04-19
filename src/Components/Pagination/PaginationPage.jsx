import React, { useEffect, useState } from 'react'
import CryptoList from './CryptoList';
import PageNumbers from './PageNumbers';

const PaginationPage = () => {

  const [coinsData, setCoinsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);

  useEffect(() => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((response) => response.json())
      .then(
        data => {
          setCoinsData(data);
          setLoading(false);
        }
      ).catch(error => console.log("Error => ", error));
  }, []);

  const lastPostIndex = currentPage * postPerPage; // for page 2 it is 20
  const firstPostIndex = lastPostIndex - postPerPage; // 20 - 10 = 10
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <h2>Crypto Data</h2>
      {
        loading ? (<div>Loading...</div>) : 
        (
          <div>
              <CryptoList coinsData={currentPosts}/>
          </div>
        )
      }
      <PageNumbers totalPosts={coinsData.length} postPerPage={postPerPage} setcurrentPage={setcurrentPage} currentPage={currentPage}/>
    </div>
  )
}

export default PaginationPage
