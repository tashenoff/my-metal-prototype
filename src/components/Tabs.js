const Tabs = ({ activeTab, setActiveTab }) => {
    return (
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setActiveTab('all')}
        >
          Все объявления
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'favorites' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setActiveTab('favorites')}
        >
          Избранное
        </button>
      </div>
    );
  };
  
  export default Tabs;
  