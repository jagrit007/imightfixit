import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Reviews from './pages/Reviews';
import Services from './pages/Services';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  const isUserSignedIn = !!localStorage.getItem('token')


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/reviews' element={<Reviews />}/>
        {isUserSignedIn && <Route path='/account' element={<Account />}/>}
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
