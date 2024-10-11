// components/AdList.js
import AdCard from './AdCard';
import ads from '../data/ads'; // Импортируем объявления из файла

const AdList = ({ favorites, toggleFavorite, onlyFavorites, adType }) => {
  // Фильтруем объявления, если нужно показывать только избранные
  const displayedAds = onlyFavorites
    ? ads.filter(ad => favorites.includes(ad.id))
    : ads;

  // Фильтруем по типу объявления
  const filteredAds = adType ? displayedAds.filter(ad => ad.adType === adType) : displayedAds;

  return (
    <div>
      {filteredAds.length > 0 ? (
        filteredAds.map((ad, index) => (
          <AdCard
            key={index}
            {...ad}
            isFavorite={favorites.includes(ad.id)} // Проверяем, является ли объявление избранным
            toggleFavorite={toggleFavorite}
          />
        ))
      ) : (
        <p>Нет объявлений для отображения.</p>
      )}
    </div>
  );
};

export default AdList;
