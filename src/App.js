import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar, Button } from 'reactstrap';
import MemePage from './pages/MemePage'; 
import FavoritesPage from './pages/FavoritesPage';
import { AuthPage } from './pages/AuthPage';

function App() {
  const navigate = useNavigate();
  const navigateAuth = () => {

    navigate('/auth');
  };
  return (
    <div className="App">
      <Navbar>
        <Button color='primary'>Home</Button> 
        <Button onClick={navigateAuth} color='danger'>Authenticate</Button> 
      </Navbar>
      <h1 href='/' style={{cursor: 'pointer'}}>Meme Website</h1>
      <Routes>
        <Route path='/' element={<MemePage />} />
        <Route path='/favorites' element={<FavoritesPage/>} />
        <Route path='/auth' element={<AuthPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
