import Link from 'next/link';
import TimeAgo from './TimeAgo';
import { MapPinIcon, ArrowRightIcon, StarIcon, ClockIcon } from '@heroicons/react/24/outline'; // Импортируем иконки

const AdCard = ({ id, metalType, quantity, price, location, publishedDate, endDate, isFavorite, toggleFavorite, adType }) => {
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-4 mb-5">
      <h3 className="text-xl font-bold">{metalType}</h3>
      <p>Количество: {quantity}</p>
      <p>Цена: {price}</p>
      <p className="flex items-center">
        <MapPinIcon className="h-5 w-5 text-gray-500 mr-1" />
        {location}
      </p>
      <p>
        Дата публикации: <TimeAgo date={publishedDate} />
      </p>
      <p className='py-5'><span className='border border-gray-200 py-2 px-3 rounded-full'>{adType}</span></p>
      <div className='flex items-center'>
        <p> <ClockIcon className="h-5 w-5 text-gray-500 mr-1" /> </p>
        <span> Срок закупа:
        </span>
        {endDate}

      </div>

      <div className="flex justify-between items-center mt-2">
        <Link href={`/ad/${id}`} className="text-blue-500 flex items-center">
          Подробнее
          <ArrowRightIcon className="h-5 w-5 ml-1" />
        </Link>
        <button onClick={() => toggleFavorite(id)} className="text-yellow-500">
          <StarIcon className={`h-6 w-6 ${isFavorite ? 'fill-yellow-500' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default AdCard;
