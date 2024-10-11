const CustomerDashboard = () => {
    // Пример объявлений заказчика
    const ads = [
      { id: 1, metalType: "Сталь", quantity: "500 тонн", price: "10,000₽ за тонну", status: "Активно" },
      { id: 2, metalType: "Алюминий", quantity: "200 тонн", price: "15,000₽ за тонну", status: "Завершено" },
    ];
  
    return (
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-4">Личный кабинет заказчика</h1>
        <h2 className="text-xl font-semibold mb-2">Ваши объявления</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ads.map((ad) => (
            <div key={ad.id} className="border rounded-lg p-4 shadow-md bg-white">
              <h3 className="text-xl font-semibold">{ad.metalType}</h3>
              <p>Количество: {ad.quantity}</p>
              <p>Цена: {ad.price}</p>
              <p>Статус: {ad.status}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">Редактировать</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CustomerDashboard;
  