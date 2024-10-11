import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b">
      <button
        className={`py-2 px-4 focus:outline-none ${activeTab === 'all' ? 'border-b-2 border-blue-500' : ''}`}
        onClick={() => setActiveTab('all')}
      >
        Все объявления
      </button>
      <button
        className={`py-2 px-4 focus:outline-none ${activeTab === 'favorites' ? 'border-b-2 border-blue-500' : ''}`}
        onClick={() => setActiveTab('favorites')}
      >
        Избранное
      </button>
    </div>
  );
};

export default Tabs;
