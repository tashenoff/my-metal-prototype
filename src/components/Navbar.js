import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle'; // Импортируем переключатель тем


const Navbar = () => {
  return (
    <nav className="bg-blue-600 dark:bg-black p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl font-bold">Meta Solid</h1>
        <div className="space-x-4 flex items-center">
          <Link className="text-white" href="/">
           Главная
          </Link>
          <Link className="text-white" href="/customer">
            Кабинет заказчика
          </Link>
          <Link className="text-white" href="/trader">
           Кабинет трейдера
          </Link>
          {/* <Link className="text-white" href="/trader">
          Аренда складов
          </Link> */}
          <ThemeToggle /> {/* Добавляем переключатель темы */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
