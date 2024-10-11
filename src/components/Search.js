// src/components/Search.js
import { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Здесь вы можете добавить логику для обработки поиска
    console.log('Ищем:', query);
    // Например, можно вызвать API для получения результатов поиска
  };

  return (
    <div className="flex items-center mb-6">
      <input
        type="text"
        placeholder="Введите запрос для поиска..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border bg-transparent border-gray-300 rounded-l-md p-2 w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded-r-md px-4 py-2"
      >
        Поиск
      </button>
    </div>
  );
};

export default Search;
