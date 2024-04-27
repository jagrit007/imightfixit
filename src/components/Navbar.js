import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isUserSignedIn = !!localStorage.getItem('token');

  const handleSignOut = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <nav className='flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300'>
      <Link to='/'><h1 className='text-3xl'>Mern Auth</h1></Link>
      <ul className='flex gap-6'>
      { isUserSignedIn ? (
        <>
        <Link to='/account'>Account</Link>
        <button onClick={handleSignOut}>Logout</button>
        </> ) : (
          <>
          <Link to='/login'><h1>Login</h1></Link>
          <Link to='/signup'><h1>Sign Up</h1></Link>
          </>
        )
      }
      </ul>
    </nav>
  )
}

export default Navbar;