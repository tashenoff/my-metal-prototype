import { useState, useEffect } from 'react';
import Layout from '../layout';
import AdList from '../components/AdList';
import UserCard from '../components/UserCard';
import PointsCard from '../components/PointsCard';
import Search from '../components/Search';

export default function Home() {
  const user = {
    name: "Иван Иванов",
    role: "Трейдер",
    level: 'Начинающий',
    points: 50
  };

  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('all'); // Состояние для отслеживания активной вкладки

  // Загрузка избранных объявлений из localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Обновление localStorage при изменении избранного
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter(favId => favId !== id); // Удаляем из избранного
      } else {
        return [...prev, id]; // Добавляем в избранное
      }
    });
  };

  return (
    <Layout>
      <div className='container mx-auto'>
        <div className='py-5'>
          <Search />
        </div>

        {/* Вкладки для переключения */}
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

        <div className="min-h-screen p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-3">
            {/* Отображение объявлений в зависимости от активной вкладки */}
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

          <div className="md:col-span-1">
            <UserCard name={user.name} role={user.role} level={user.level} />
            <PointsCard points={user.points} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
