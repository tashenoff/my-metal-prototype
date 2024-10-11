// src/pages/ad/[id].js
import { useRouter } from 'next/router';
import Layout from '../../layout';
import ads from '../../data/ads'; // Импортируем объявления
import TimeAgo from '../../components/TimeAgo'; // Проверьте, что путь к компоненту верный

const AdDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const ad = ads.find(ad => ad.id === id);

  if (!ad) {
    return <div>Загрузка...</div>;
  }


  return (
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{ad.metalType}</h2>
        <p className="text-lg mb-2">Количество: {ad.quantity}</p>
        <p className="text-lg mb-2">Цена: {ad.price}</p>
        <p className="text-lg mb-2">Локация: {ad.location}</p>
        <p className="text-lg mb-2">Описание: {ad.description}</p>
        Дата публикации: <TimeAgo date={ad.publishedDate} />
      </div>
    </Layout>
  );
};

export default AdDetail;
