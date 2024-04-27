import React, { useState,useEffect  } from 'react';
import axios from 'axios'; // Import Axios library

const AdminPage = () => {
  const [serviceType, setServiceType] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [serviceTitle, setServiceTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [duration, setDuration] = useState('');
  const [services, setServices] = useState([]); // State to hold services

  const openBookingForm = (type) => {
    setServiceType(type);
    setShowBookingModal(true);
  };

  const closeBookingForm = () => {
    setShowBookingModal(false);
  };

  const handleAddService = () => {
    setShowBookingModal(true);
  };

  const handleSaveService = () => {
    // Create an object with service details
    const serviceData = {
      serviceTitle: serviceTitle,
      description: description,
      priceRange: priceRange,
      duration: duration
    };
    // Add new service to the list of services
    setServices([...services, serviceData]);

    // Clear input fields after saving
    setServiceTitle('');
    setDescription('');
    setPriceRange('');
    setDuration('');

    // Close the modal
    setShowBookingModal(false);

    // Send the service data to the backend
    axios.post('http://localhost:5000/add', {name: serviceTitle, price: priceRange, description:description, duration: 10})
      .then(response => {
        console.log('Service details saved successfully:', response.data);
        setShowBookingModal(false);
        // Clear input fields after saving
        setServiceTitle('');
        setDescription('');
        setPriceRange('');
      })
      .catch(error => {
        console.error('Error saving service details:', error);
        // Handle error
      });
  };

  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Fetch total revenue from backend API
    axios.get('/api/total-revenue')
      .then(response => {
        setTotalRevenue(response.data.totalRevenue);
      })
      .catch(error => {
        console.error('Error fetching total revenue:', error);
      });
  }, []); // Empty dependency array means this effect runs once after the component mounts


  return (
    <div>
      <button onClick={handleAddService} className="absolute top-20 right-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg z-50">
        Add Service
      </button>
      <div className="absolute top-20 left-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg z-50">
        Total Revenue: ${totalRevenue}
    </div>
    <section className="py-12 bg-gray-900 text-white sm:py-12 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Added Services
            </h2>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.serviceTitle}
            icon={<svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 4H3C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4Z" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 20V12H15V20" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12V6H15V12" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            description={service.description}
            priceRange={"₹" + service.priceRange}
            duration={service.duration+" Number of Days"}
          />
        ))}
      </div>
        </div>
      </section>
    <div class="mt-32">
        <div class="px-4 sm:px-8 max-w-5xl m-auto">
            <h1 class="text-center font-semibold text-sm">Order History</h1>
            <p class="mt-2 text-center text-xs mb-4 text-gray-500">Last 10 Orders</p>
            <ul class="border border-gray-200 rounded overflow-hidden shadow-md">
            <li class="flex justify-between px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
            <span>First Item</span>
                <div class="flex space-x-4">
                    <button class="relative inline-flex text-sm sm:text-base bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg z-50">Complete</button>
                    <button class="relative inline-flex text-sm sm:text-base bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg z-50">Cancel</button>
                </div>
            </li>
            <li class="flex justify-between px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
            <span>First Item</span>
                <div class="flex space-x-4">
                    <button class="relative inline-flex text-sm sm:text-base bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg z-50">Complete</button>
                    <button class="relative inline-flex text-sm sm:text-base bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg z-50">Cancel</button>
                </div>
            </li>
            <li class="flex justify-between px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
            <span>First Item</span>
                <div class="flex space-x-4">
                    <button class="relative inline-flex text-sm sm:text-base bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg z-50">Complete</button>
                    <button class="relative inline-flex text-sm sm:text-base bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg z-50">Cancel</button>
                </div>
            </li>
            </ul>
        </div>
    </div>
      {/* Modal component */}
      {showBookingModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-gray-900 bg-opacity-75">
          <div className="relative w-auto h-auto max-w-3xl mx-auto my-6 rounded-lg shadow-lg outline-none focus:outline-none bg-white">
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-purple-200">
              <h3 className="text-2xl font-semibold">Add Service</h3>
              <button onClick={closeBookingForm} className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none">×</button>
            </div>
            <div className="relative flex-auto p-6">
              <form className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="serviceTitle" className="block text-sm font-medium text-blue-700">Service Title</label>
                  <input type="text" id="serviceTitle" value={serviceTitle} onChange={(e) => setServiceTitle(e.target.value)} autoComplete="off" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-blue-700">Description</label>
                  <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" autoComplete="off" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"></textarea>
                </div>
                <div>
                  <label htmlFor="priceRange" className="block text-sm font-medium text-blue-700">Price Range</label>
                  <input type="text" id="priceRange" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} autoComplete="off" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-blue-700">Enter Number of Days</label>
                  <input type="text" id="priceRange" value={duration} onChange={(e) => setDuration(e.target.value)} autoComplete="off" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div className="flex justify-end mt-4">
                  <button type="button" onClick={closeBookingForm} className="mr-4 px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded focus:outline-none focus:shadow-outline">Cancel</button>
                  <button type="button" onClick={handleSaveService} className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded focus:outline-none focus:shadow-outline">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
function ServiceCard({ title, description, icon , priceRange, duration}) {
    return (
      <div className="overflow-hidden bg-white shadow-md rounded-xl">
        <div className="p-9">
          <div className="flex justify-center mb-6">{icon}</div>
          <h3 className="mt-6 text-xl font-bold text-gray-900 sm:mt-10">{title}</h3>
          <p className="mt-6 text-base text-gray-600">{description}</p>
          <p className="mt-6 text-base text-gray-600">{duration}</p>
          <p className="mt-6 text-base font-bold text-blue-600">{priceRange}</p>
        </div>
      </div>
    );
  }
export default AdminPage;
