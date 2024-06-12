import React, { useState } from 'react';
import axios from '../axiosConfig';

function TotalRevenue() {
  const [auctionId, setAuctionId] = useState('');
  const [totalRevenue, setTotalRevenue] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/update_total_revenue/${auctionId}`, {
        totalRevenue: totalRevenue,
      });
      if (res && res.data) {
        setResponse(res.data);
      } else {
        setResponse({ error: 'No response data' });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setResponse(error.response.data);
      } else {
        setResponse({ error: 'An unknown error occurred' });
      }
    }
  };

  return (
    <div className="section">
      <h2>Update Total Revenue</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Auction ID"
          value={auctionId}
          onChange={(e) => setAuctionId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total Revenue"
          value={totalRevenue}
          onChange={(e) => setTotalRevenue(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
      {response && <div>{JSON.stringify(response)}</div>}
    </div>
  );
}

export default TotalRevenue;
