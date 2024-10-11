// src/components/TimeAgo.js
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale'; // Импортируем локализацию для русского языка

const TimeAgo = ({ date }) => {
  const timeAgo = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ru,
  });
  
  return <span>{timeAgo}</span>;
};

export default TimeAgo; // Экспорт компонента
