// pages/index.js
import { useState, useEffect } from 'react';
import Layout from '../layout';
import UserCard from '../components/UserCard';
import PointsCard from '../components/PointsCard';
import Search from '../components/Search';
import Tabs from '../components/Tabs';
import TabContent from '../components/TabContent';

export default function Home() {
  const user = {
    name: "Иван Иванов",
    role: "Трейдер",
    level: 'Начинающий',
    points: 50
  };

  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [adType, setAdType] = useState(''); // Состояние для типа объявления

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter(favId => favId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Обработчик изменения типа объявления
  const handleTypeChange = (event) => {
    setAdType(event.target.value);
  };

  return (
    <Layout>
      <div className='container mx-auto'>
        <div className='py-5'>
          <Search />
        </div>

        {/* Выпадающий список для выбора типа объявления */}

        <div className='flex items-center justify-between'>
          <div>
            <label htmlFor="adType">Тип объявления: </label>
            <select id="adType" value={adType} onChange={handleTypeChange}>
              <option value="">Все</option>
              <option value="Тендерная заявка">Тендерная заявка</option>
              <option value="Прямой закуп">Прямой закуп</option>
              {/* Добавьте другие типы объявлений по мере необходимости */}
            </select>
          </div>

          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="min-h-screen p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-3">
            <TabContent
              activeTab={activeTab}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              adType={adType} // Передаем выбранный тип объявления в TabContent
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
