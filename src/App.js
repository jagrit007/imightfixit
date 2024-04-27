import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About'
import Checkout from './pages/Checkout';
import Thanks from './pages/Thanks'
import React from 'react';

function App() {
  
  const isUserSignedIn = !!localStorage.getItem('token')


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        {isUserSignedIn && <Route path='/account' element={<Account />}/>}
        <Route path='/about' element={<About />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/thanks' element={<Thanks />}/>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
