"use client";

import { useState } from "react";
import { Menu, Search, User, X } from "lucide-react"; // Importamos X para el cierre
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg px-8">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 gap-2">
        {/* Nombre de la empresa */}
        <h1 className="text-xl font-bold">CarTracker</h1>

        {/* Buscador en el centro */}
        <div className="relative flex-1 max-w-[500px] sm:w-1/3">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg-gray-800 text-white rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>

        {/* Login y menú lateral a la derecha */}
        <div className="flex items-center gap-4">
          {/* Botón de Login con animación */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full flex items-center cursor-pointer"
          >
            <User className="w-5 h-5 mr-2" />
            Login
          </motion.button>

          {/* Botón del menú lateral */}
          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="p-2 cursor-pointer"
          >
            <Menu className="w-6 h-6 sm:w-6 sm:h-6" /> {/* Tamaño fijo en todas las pantallas */}
          </motion.button>
        </div>
      </div>

      {/* Menú lateral */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-64 h-full z-50 bg-gray-800 p-6 shadow-lg"
        >
          {/* Botón de cierre */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 cursor-pointer"
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          <nav className="mt-10">
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 10 }} className="text-white hover:text-blue-400 cursor-pointer">
                <a href="#">Inicio</a>
              </motion.li>
              <motion.li whileHover={{ x: 10 }} className="text-white hover:text-blue-400 cursor-pointer">
                <a href="#">Servicios</a>
              </motion.li>
              <motion.li whileHover={{ x: 10 }} className="text-white hover:text-blue-400 cursor-pointer">
                <a href="#">Contacto</a>
              </motion.li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
