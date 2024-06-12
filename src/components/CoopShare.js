import React, { useState } from 'react';
import axios from '../axiosConfig'; // Axios yapılandırmasını içe aktarma

function CoopShare() {
  const [auctionId, setAuctionId] = useState('');
  const [coopShareAmount, setCoopShareAmount] = useState('');
  const [coopSharePercentage, setCoopSharePercentage] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/update_coop_share/${auctionId}`, {
        coopShareAmount: coopShareAmount,
        coopSharePercentage: coopSharePercentage,
      });
      setResponse(res.data);
    } catch (error) {
      setResponse(error.response.data);
    }
  };

  return (
    <div className="section">
      <h2>Update Cooperative Share</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Auction ID"
          value={auctionId}
          onChange={(e) => setAuctionId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Coop Share Amount"
          value={coopShareAmount}
          onChange={(e) => setCoopShareAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Coop Share Percentage"
          value={coopSharePercentage}
          onChange={(e) => setCoopSharePercentage(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
      {response && <div>{JSON.stringify(response)}</div>}
    </div>
  );
}

export default CoopShare;
