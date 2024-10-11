// components/TabContent.js
import AdList from './AdList';

const TabContent = ({ activeTab, favorites, toggleFavorite, adType }) => {
  return (
    <div>
      {activeTab === 'all' ? (
        <>
          <h2 className="text-2xl font-bold">Все объявления</h2>
          <AdList
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            adType={adType} // Передаем тип объявления
          />
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold">Избранное</h2>
          {favorites.length > 0 ? (
            <AdList
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              onlyFavorites={true}
              adType={adType} // Передаем тип объявления
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
