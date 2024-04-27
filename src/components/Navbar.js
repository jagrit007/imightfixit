import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';

const Navbar = () => {

	const isUserSignedIn = !!localStorage.getItem('token');
	const [showDropdown, setShowDropdown] = useState(false);

	const handleDropdownToggle = () => {
		setShowDropdown(!showDropdown);
	  };
	
	  const handleLogout = () => {
		// TODO: Implement logout logic here
		localStorage.removeItem('token');
	  };

  return (
    <nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		{/* <!-- Logo --> */}
    <a href='/'>
		<div class="text-indigo-500 md:order-1">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
				stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
			</svg>
		</div>
    </a>
		<div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul class="flex font-semibold justify-between">
        <li class="md:px-4 md:py-2 text-indigo-500"><Link to="/">Home</Link></li>
        <li class="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/services">Services</Link></li>
        {!isUserSignedIn && (<li class="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/signup">Register</Link></li>)}
        <li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/reviews">Reviews</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/about">About</a></li>
				<li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
			</ul>
		</div>
		<div class="order-2 md:order-3">
		{isUserSignedIn ? (
            <div className="relative">
              <button
                onClick={handleDropdownToggle}
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>Account</span>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg">
                  <button onClick={() => window.location.href = "/account"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                    My Account
                  </button>
				  <button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                    Logout
                  </button>
                </div>
				
              )}
            </div>
          ) : (
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
              {/* <!-- Heroicons - Login Solid --> */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <Link to="/login">Login</Link>
            </button>
          )}
		</div>
	</div>
</nav>
  );
}

export default Navbar;
