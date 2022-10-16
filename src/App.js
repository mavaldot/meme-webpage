import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Button } from 'reactstrap';
import MemePage from './pages/MemePage'; 
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Button color='primary'>Home</Button> 
        <Button color='danger'>Authenticate</Button> 
      </Navbar>
      <h1 href='/' style={{cursor: 'pointer'}}>Meme Website</h1>
      <Routes>
        <Route path='/' element={<MemePage />} />
        <Route path='/favorites' element={<FavoritesPage/>} />
      </Routes>
    </div>
  );
}

export default App;
