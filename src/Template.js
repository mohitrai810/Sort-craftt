// MenuBar.js
import React from 'react';

function MenuBar({ onAboutMeClick }) {
  return (
    <div className="menu-bar">
      <div className="menu-item" onClick={onAboutMeClick}>
        About Me
      </div>
      {/* Add more menu items here as needed */}
    </div>
  );
}

export default MenuBar;
