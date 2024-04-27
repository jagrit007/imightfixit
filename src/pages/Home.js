import React from 'react';

const Home = () => {
  return (
    <div class="bg-gray-900 py-20">
    <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:w-2/3">
                <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                    Welcome to our <br class="hidden md:block" />
                    <span class="text-indigo-500">iMayFixIt</span> Website
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                Don't Worry,I May Fix It—Probably!
                </p>
                <div class="flex gap-2">
                    <a href="/login" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Login/Register
                    </a>
                    <a href="/about" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn More
                    </a>
                </div>
            </div>
            
          <div class="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
              
              <img src="home.jpg" alt="image description" class="h-auto max-w-xl rounded-lg shadow-xl shadow-xl-right dark:shadow-blue-800"/>

          </div>


        </div>
    </div>
    </div>
  );
}

export default Home;

{/* <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div> */}
