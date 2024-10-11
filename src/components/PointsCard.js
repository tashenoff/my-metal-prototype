// src/components/PointsCard.js
const PointsCard = ({ points }) => {
    return (
      <div className="bg-white dark:bg-gray-700 dark:text-white shadow-md rounded-sm p-4 mb-6">
        <h2 className="text-xl font-bold">Баллы пользователя</h2>
        <p className="text-gray-500">{points} баллов</p>
      </div>
    );
  };
  
  export default PointsCard;
  