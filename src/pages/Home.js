import React from 'react';
import Services from './Services';
import AboutSection from '../components/About';

const Home = () => {
  return (
    <div>
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
    <div id="features" className="bg-blueGray-200 w-full">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* <!-- Feature Box 1 (Top Row) --> */}
        <div class="feature-box lg:mb-6"> 
            <i class="feature-img fas fa-check-circle text-primary text-4xl"></i>
            <h3 class="text-xl font-bold text-gray-800 mt-4">Quality Service Assurance</h3>
            <p class="text-gray-600">Rest easy knowing your device is in good hands. We've completed over 100 successful repairs.</p>
        </div>

        {/* <!-- Feature Box 2 (Top Row) --> */}
        <div class="feature-box lg:mb-6"> 
            <i class="feature-img fas fa-smile text-primary text-4xl"></i>
            <h3 class="text-xl font-bold text-gray-800 mt-4">Customer Satisfaction</h3>
            <p class="text-gray-600">Our track record speaks for itself: 100+ repaired devices, 100% satisfied customers.</p>
        </div>

        {/* <!-- Feature Box 3 (Top Row) --> */}
        <div class="feature-box lg:mb-6"> 
            <i class="feature-img fas fa-medkit text-primary text-4xl"></i>
            <h3 class="text-xl font-bold text-gray-800 mt-4">Saved 100+ Device</h3>
            <p class="text-gray-600">Successfully repaired over 100 devices with satisfied customers.</p>
        </div>

        {/* <!-- Feature Box 4 (Top Row) --> */}
        <div class="feature-box lg:mb-6"> 
            <i class="feature-img fas fa-certificate text-primary text-4xl"></i>
            <h3 class="text-xl font-bold text-gray-800 mt-4">Professionalism and Reliability</h3>
            <p class="text-gray-600">100% professionalism: Experience our trusted repair service.</p>
        </div>

        {/* <!-- Additional Feature Box 5 (Bottom Row) --> */}
        <div class="feature-box mt-6 sm:mt-0"> 
            <i class="feature-img fas fa-tools text-primary text-4xl"></i>
            <h3 class="text-xl font-bold text-gray-800 mt-4">Expert Repairs</h3>
            <p class="text-gray-600">Our technicians are experts in device repairs, ensuring high-quality service.</p>
        </div>

        {/* <!-- Additional Feature Box 6 (Bottom Row) --> */}
        <div class="feature-box mt-6 sm:mt-0"> 
            <i class="feature-img fas fa-clock text-primary text-4xl"></i>
            <h3 class="text-xl font-bold text-gray-800 mt-4">Quick Turnaround</h3>
            <p class="text-gray-600">We offer fast repairs with quick turnaround times to minimize inconvenience.</p>
        </div>

        {/* <!-- Additional Feature Box 7 (Bottom Row) --> */}
        <div class="feature-box mt-6 lg:mt-0"> 
            <i class="feature-img fas fa-handshake text-primary text-4xl"></i>
            <h3 class="text-xl font-bold text-gray-800 mt-4">Trustworthy Service</h3>
            <p class="text-gray-600">Count on us for honest and trustworthy repair services.</p>
        </div>

        {/* <!-- Additional Feature Box 8 (Bottom Row) --> */}
        <div class="feature-box mt-6 lg:mt-0"> 
            <i class="feature-img fas fa-shield-alt text-primary text-4xl"></i>
            <h3 class="text-xl font-bold text-gray-800 mt-4">Reliable Warranty</h3>
            <p class="text-gray-600">We stand behind our repairs with a reliable warranty for your peace of mind.</p>
        </div>

      </div>
    </div>
    </div>
    <Services />
    <AboutSection/>
    </div>
    
  );
}

export default Home;
