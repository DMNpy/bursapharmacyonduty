import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Eczaneler from '../data/BursaEczane';
import Header from './Header';

function Navbar({onSearch, onSubmit}) {

  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
 
    onSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
   
    onSubmit();
  };

  const isEczanelerPage = location.pathname === '/pharmacy';
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-30">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
              </div>
              <div className="hidden sm:ml-10 sm:block">
                <div className="flex space-x-6">
                  <Header />
                  <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/">
                    Ana Sayfa
                  </NavLink>
                  <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/pharmacy">
                    Eczaneler
                  </NavLink>
                  <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/pharmaonduty">
                    Nöbetçi Eczaneler
                  </NavLink>
                  {isEczanelerPage && (
                         <form onSubmit={handleSearchSubmit} className="flex">
                         <input
                           id="search"
                           name="search"
                           className="px-6 py-2 font-medium rounded-md"
                           placeholder="Eczane Ara"
                           type="search"
                           value={searchTerm}
                           onChange={handleSearchChange}
                         />
                         <button
                           type="submit"
                           className="px-4 py-2 bg-gray-700 text-white rounded-md"
                         >
                           Ara
                         </button>
                       </form>
                     )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
