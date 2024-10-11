const TraderDashboard = () => {
    // Пример откликов трейдера
    const responses = [
      { id: 1, adTitle: "Сталь 500 тонн", offerPrice: "9,500₽ за тонну", status: "Ожидает ответа" },
      { id: 2, adTitle: "Алюминий 200 тонн", offerPrice: "14,800₽ за тонну", status: "Отклонено" },
    ];
  
    return (
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-4">Личный кабинет трейдера</h1>
        <h2 className="text-xl font-semibold mb-2">Ваши отклики</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {responses.map((response) => (
            <div key={response.id} className="border rounded-lg p-4 shadow-md bg-white">
              <h3 className="text-xl font-semibold">{response.adTitle}</h3>
              <p>Предложенная цена: {response.offerPrice}</p>
              <p>Статус: {response.status}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Ваш баланс</h2>
          <p className="text-lg">Остаток баллов: 10</p>
          <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md">
            Купить баллы
          </button>
        </div>
      </div>
    );
  };
  
  export default TraderDashboard;
  