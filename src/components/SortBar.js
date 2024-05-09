import React from 'react';

function SortBar({ handleSort }) {
  const sortBy = (criteria) => {
    handleSort(criteria);
  };

  return (
    <div className="sort-bar">
      <button className="sort-button" onClick={() => sortBy('health')}>
        Sort by Health
      </button>
      <button className="sort-button" onClick={() => sortBy('damage')}>
        Sort by Damage
      </button>
      <button className="sort-button" onClick={() => sortBy('armor')}>
        Sort by Armor
      </button>
    </div>
  );
}

export default SortBar;