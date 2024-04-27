import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Reviews from './pages/Reviews';
import Services from './pages/Services';
import UserDashboard from './pages/UserDashboard';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About'
import Checkout from './pages/Checkout';
import Thanks from './pages/Thanks'
import React from 'react';
import AdminPage from './pages/Admin';

function App() {
  
  const isUserSignedIn = !!localStorage.getItem('token')
  const isUserAdmin = localStorage.getItem('role') === "provider"
  console.log(isUserAdmin);


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/reviews' element={<Reviews />}/>
        <Route path='/services' element={<Services/>}/>
        {isUserSignedIn && isUserAdmin && <Route path='/admin' element={<AdminPage/>}/>}

        {isUserSignedIn && <Route path='/UserDashboard' element={<UserDashboard/>}/>}
        {isUserSignedIn && <Route path='/account' element={<Account />}/>}
        <Route path='/about' element={<About />}/>
        {isUserSignedIn && <Route path='/checkout' element={<Checkout />}/>}
        {isUserSignedIn && <Route path='/thanks' element={<Thanks />}/>}
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
