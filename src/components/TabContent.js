// components/TabContent.js
import AdList from './AdList';

const TabContent = ({ activeTab, favorites, toggleFavorite }) => {
  return (
    <div>
      {activeTab === 'all' ? (
        <>
          <h2 className="text-2xl font-bold">Все объявления</h2>
          <AdList
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold">Избранное</h2>
          {favorites.length > 0 ? (
            <AdList
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              onlyFavorites={true} // Флаг для отображения только избранных
            />
          ) : (
            <p>Нет избранных объявлений.</p>
          )}
        </>
      )}
    </div>
  );
};

export default TabContent;
