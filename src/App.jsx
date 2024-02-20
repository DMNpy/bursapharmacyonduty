import { useState } from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import { useNavigate } from 'react-router-dom';
import SiteRoutes from './SiteRoutes';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {

  };

  return (
    <>
      <Navbar onSearch={setSearchTerm} onSubmit={handleSearch} />
      
      <SiteRoutes searchTerm={searchTerm}  />
    </>
  );
}

export default App;
