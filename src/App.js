import React from 'react';
import TotalRevenue from './components/TotalRevenue';
import CoopShare from './components/CoopShare';
import FishermanShare from './components/FishermanShare';
import './styles.css'; // Import the CSS file here

function App() {
  return (
    <div className="App">
      <h1>Auction Management Dashboard</h1>
      <TotalRevenue />
      <CoopShare />
      <FishermanShare />
    </div>
  );
}

export default App;
