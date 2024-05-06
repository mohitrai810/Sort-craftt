import React from 'react';

function Menu({ handleAlgorithmClick }) {
  return (
    <div className="menu-container">
      <ul className="menu-items">
        <li><a href="#home">Home</a></li>
        <li><button onClick={() => handleAlgorithmClick('mergeSort')}>Merge Sort</button></li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
}

export default Menu;
