import { useState, useEffect } from 'react';
import Layout from '../layout';
import UserCard from '../components/UserCard';
import PointsCard from '../components/PointsCard';
import Search from '../components/Search';
import Tabs from '../components/Tabs'; // Импортируем новый компонент вкладок
import TabContent from '../components/TabContent'; // Импортируем новый компонент для контента вкладок

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

        {/* Используем компонент вкладок */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="min-h-screen p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-3">
            {/* Используем компонент TabContent для отображения контента вкладок */}
            <TabContent
              activeTab={activeTab}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
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
