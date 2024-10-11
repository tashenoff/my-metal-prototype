// Пример для UserCard.js
const UserCard = ({ name, role, level }) => {
    return (
      <div className="bg-white dark:bg-gray-700 shadow-md p-4 rounded mb-5">
        <h2 className="text-lg dark:text-white font-bold">{name}</h2>
        <p className="text-gray-700 dark:text-gray-300">{role}</p>
        <p className="text-gray-600 dark:text-gray-400">{level}</p>
      </div>
    );
  };
  
  export default UserCard;
  