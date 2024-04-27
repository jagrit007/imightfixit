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

function App() {
  
  const isUserSignedIn = !!localStorage.getItem('token')


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/Reviews' element={<Reviews />}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/UserDashboard' element={<UserDashboard/>}/>
        {isUserSignedIn && <Route path='/account' element={<Account />}/>}
      </Routes>
    </div>
  );
}


export default App;
