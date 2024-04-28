import React from 'react';
import Services from './Services';
import AboutSection from '../components/About';

const Home = () => {
  return (
    <div>
    <div className="bg-gray-900 py-20">
    <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                    Welcome to our <br className="hidden md:block" />
                    <span className="text-indigo-500">iMayFixIt</span> Website
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                Don't Worry,I May Fix It—Probably!
                </p>
                <div className="flex gap-2">
                    <a href="/login" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Login/Register
                    </a>
                    <a href="/about" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn More
                    </a>
                </div>
            </div>
        

          <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
              <img src="home.jpg" alt="image description" className="h-auto max-w-xl rounded-lg shadow-xl shadow-xl-right dark:shadow-blue-800"/>
          </div>

        </div>       
    </div>
    </div>
    <div id="features" className="bg-blueGray-200">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Feature Box 1 */}
        <div className="feature-box">
          <i className="feature-img fas fa-check-circle text-primary text-4xl"></i>
          <h3 className="text-xl font-bold text-gray-800 mt-4">Quality Service Assurance</h3>
          <p className="text-gray-600">Rest easy knowing your device is in good hands. We've completed over 100 successful repairs.</p>
        </div>

        {/* Feature Box 2 */}
        <div className="feature-box">
          <i className="feature-img fas fa-smile text-primary text-4xl"></i>
          <h3 className="text-xl font-bold text-gray-800 mt-4">Customer Satisfaction</h3>
          <p className="text-gray-600">Our track record speaks for itself: 100+ repaired devices, 100% satisfied customers.</p>
        </div>

        {/* Feature Box 3 */}
        <div className="feature-box">
          <i className="feature-img fas fa-medkit text-primary text-4xl"></i>
          <h3 className="text-xl font-bold text-gray-800 mt-4">Saved 100+ Device</h3>
          <p className="text-gray-600">Successfully repaired over 100 devices with satisfied customers.</p>
        </div>

        {/* Feature Box 3 */}
        <div className="feature-box">
          <i className="feature-img fas fa-certificate text-primary text-4xl"></i>
          <h3 className="text-xl font-bold text-gray-800 mt-4">Professionalism and Reliability</h3>
          <p className="text-gray-600">100% professionalism: Experience our trusted repair service.</p>
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
