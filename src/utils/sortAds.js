// src/utils/sortAds.js
import ads from '../data/ads';

// Функция для сортировки по типу объявления (тендерная заявка или прямой закуп)
const sortAdsByType = (ads) => {
  return ads.sort((a, b) => a.adType.localeCompare(b.adType));
};

// Функция для сортировки по дате публикации (по убыванию)
const sortAdsByDate = (ads) => {
  return ads.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
};

// Функция для сортировки по цене (по убыванию)
const sortAdsByPrice = (ads) => {
  return ads.sort((a, b) => {
    const priceA = parseFloat(a.price.replace('₽ за тонну', '').replace(',', ''));
    const priceB = parseFloat(b.price.replace('₽ за тонну', '').replace(',', ''));
    return priceB - priceA;
  });
};

// Комбинированная сортировка по типу и дате
const sortAdsByTypeAndDate = (ads) => {
  return ads
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)) // Сначала по дате
    .sort((a, b) => a.adType.localeCompare(b.adType)); // Потом по типу
};

// Вывод сортированных объявлений
console.log('Сортировка по типу:', sortAdsByType(ads));
console.log('Сортировка по дате:', sortAdsByDate(ads));
console.log('Сортировка по цене:', sortAdsByPrice(ads));
console.log('Сортировка по типу и дате:', sortAdsByTypeAndDate(ads));
