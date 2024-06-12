import React, { useState } from 'react';
import axios from '../axiosConfig'; // Axios yapılandırmasını içe aktarma
function FishermanShare() {
  const [auctionId, setAuctionId] = useState('');
  const [fishermanId, setFishermanId] = useState('');
  const [shareAmount, setShareAmount] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/update_fisherman_share/${auctionId}/${fishermanId}`, {
        shareAmount: shareAmount,
      });
      setResponse(res.data);
    } catch (error) {
      setResponse(error.response.data);
    }
  };

  return (
    <div className="section">
      <h2>Update Fisherman Share</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Auction ID"
          value={auctionId}
          onChange={(e) => setAuctionId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fisherman ID"
          value={fishermanId}
          onChange={(e) => setFishermanId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Share Amount"
          value={shareAmount}
          onChange={(e) => setShareAmount(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
      {response && <div>{JSON.stringify(response)}</div>}
    </div>
  );
}

export default FishermanShare;
