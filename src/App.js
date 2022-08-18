import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Banner from './Banner';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import './App.css';

function App() {
  const user = true;

  return (
    <div className='App'>
      <Nav />
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          {!user ? (
            <Route path='/' element={<LoginScreen />} />
          ) : (
            <Route path='/' element={<HomeScreen />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
