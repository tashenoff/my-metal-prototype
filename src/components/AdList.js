import AdCard from './AdCard';
import ads from '../data/ads'; // Импортируем объявления из файла

const AdList = ({ favorites, toggleFavorite, onlyFavorites }) => {
  // Фильтруем объявления, если нужно показывать только избранные
  const displayedAds = onlyFavorites
    ? ads.filter(ad => favorites.includes(ad.id))
    : ads;

  return (
    <div>
      {displayedAds.map((ad, index) => (
        <AdCard
          key={index}
          {...ad}
          isFavorite={favorites.includes(ad.id)} // Проверяем, является ли объявление избранным
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default AdList;
