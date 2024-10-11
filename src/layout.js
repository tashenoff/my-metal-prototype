import "../app/globals.css";
import Navbar from '../src/components/Navbar';


// src/layout.js
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Доска объявлений
      </footer>
    </div>
  );
};

export default Layout;
