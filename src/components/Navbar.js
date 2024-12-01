import React from "react";

function Navbar({ onNavigate, currentPage }) {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h2 
        className="text-lg font-bold cursor-pointer" 
        onClick={() => onNavigate('home')}
      >
        Coworking
      </h2>
      <ul className="flex space-x-4">
        <li>
          <button 
            onClick={() => onNavigate('home')}
            className={`hover:underline ${currentPage === 'home' ? 'font-bold' : ''}`}
          >
            Inicio
          </button>
        </li>
        <li>
          <button 
            onClick={() => onNavigate('offices')}
            className={`hover:underline ${currentPage === 'offices' ? 'font-bold' : ''}`}
          >
            Oficinas
          </button>
        </li>
        <li>
          <button 
            onClick={() => onNavigate('contact')}
            className={`hover:underline ${currentPage === 'contact' ? 'font-bold' : ''}`}
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;