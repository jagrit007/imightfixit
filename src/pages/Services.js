import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MobileRepairServices() {
  const userToken = localStorage.getItem('token');
  const [serviceType, setServiceType] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    deviceModel: '',
    yearOfBuying: '',
    bookingDate: '',
    collectionPreference: '',
    deliveryAddress: '',
    service_id: ''
  });
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [serviceCards, setServiceCards] = useState([
    {
      name: "Software Update/Repair",
      description: "Update or repair your phone's software to improve performance and fix issues.",
      price: "500",
      duration: 30,
      id: 1,
      icon: <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C3.45 2 3 2.45 3 3V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V3C21 2.45 20.55 2 20 2H4ZM6 20H4V18H6V20ZM6 16H4V4H6V16ZM8 20H6V18H8V20ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM12 20H10V18H12V20ZM12 16H10V14H12V16ZM12 12H10V10H12V12ZM16 20H14V18H16V20ZM16 16H14V14H16V16ZM16 12H14V10H16V12ZM20 20H18V18H20V20ZM20 16H18V14H20V16Z" fill="#111827"/></svg>,
    },
  ]);

  useEffect(() => {
    // Fetch additional service cards from the database
    fetchServiceCards();
  }, []);

  function fetchServiceCards() {
    axios.get('http://localhost:5001/service/getAll')
      .then(response => {
        console.log(response.data.data);
        if (response.data.status === 'success') {
          if (response.data.data.length > 0) {
            setServiceCards(prevServiceCards => [...prevServiceCards, ...response.data.data]);
          }
        } else {
          throw new Error('Failed to fetch service cards');
        }
      })
      .catch(error => {
        console.error('Error fetching service cards:', error);
      });
  }

  const openBookingForm = (type) => {
    setServiceType(type);
    setShowBookingModal(true);
  };

  const closeBookingForm = () => {
    setShowBookingModal(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      service_id: serviceType,
      [e.target.name]: e.target.value,
    });
  };

  const submitBookingForm = () => {
    console.log(formData);
    // here we call api:
    axios.post(`http://localhost:5001/order/place/${serviceType}`, formData, {
        headers: {
          'Authorization': `${userToken}`
        }
      })
      .then((response) => {
        console.log(response.data);
        // fetchUsers()
        // navigate("/")
      })
      .catch((e) => {
        console.error(e);
      });
    // now we are emptying values
    setFormData({
      deviceModel: '',
      yearOfBuying: '',
      bookingDate: '',
      collectionPreference: '',
      deliveryAddress: '',
      service_id: ''
    });
    alert("Service booked successfully!");
    closeBookingForm();
  };

  return (
    <div className="bg-blue-900">
      <section className="py-12 bg-gray-900 text-white sm:py-12 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              <span role="img" aria-label="Broken Screen">💔</span> Broken Screen, Broken Dreams?
            </h2>
            <p className="text-base sm:text-lg xl:text-xl mb-6">Your One-Stop Repair Shop</p>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            {serviceCards.map((card, index) => (
              <ServiceCard
                key={index}
                title={`${card.name}`}
                description={card.description}
                duration={card.duration}
                price={card.price}
                onClick={() => openBookingForm(card.id)}
                icon={card.icon ? card.icon : <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C3.45 2 3 2.45 3 3V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V3C21 2.45 20.55 2 20 2H4ZM6 20H4V18H6V20ZM6 16H4V4H6V16ZM8 20H6V18H8V20ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM12 20H10V18H12V20ZM12 16H10V14H12V16ZM12 12H10V10H12V12ZM16 20H14V18H16V20ZM16 16H14V14H16V16ZM16 12H14V10H16V12ZM20 20H18V18H20V20ZM20 16H18V14H20V16Z" fill="#111827"/></svg>}
              />
            ))}
          </div>
        </div>
      </section>

      {showBookingModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-gray-900 bg-opacity-75">
          <div className="relative w-auto h-auto max-w-3xl mx-auto my-6 rounded-lg shadow-lg outline-none focus:outline-none bg-white">
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-purple-200">
              <h3 className="text-2xl font-semibold">Book Service</h3>
              <button onClick={closeBookingForm} className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none">×</button>
            </div>
            <div className="relative flex-auto p-6">
              <form className="grid grid-cols-1 gap-6">
                <input type="hidden" name="serviceType" value={serviceType} />
                <div>
                  <label htmlFor="deviceModel" className="block text-sm font-medium text-blue-700">Device Model</label>
                  <input type="text" name="deviceModel" id="deviceModel" value={formData.deviceModel} onChange={handleInputChange} autoComplete="off" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label htmlFor="yearOfBuying" className="block text-sm font-medium text-blue-700">Year of Buying</label>
                  <input type="number" name="yearOfBuying" id="yearOfBuying" value={formData.yearOfBuying} onChange={handleInputChange} autoComplete="off" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label htmlFor="bookingDate" className="block text-sm font-medium text-blue-700">Booking Date</label>
                  <input type="date" name="bookingDate" id="bookingDate" value={formData.bookingDate} onChange={handleInputChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label htmlFor="collectionPreference" className="block text-sm font-medium text-blue-700">Collection Preference</label>
                  <select name="collectionPreference" id="collectionPreference" value={formData.collectionPreference} onChange={handleInputChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
                    <option value="">Select an option</option>
                    <option value="Home">Collect from home</option>
                    <option value="Service Center">Bring to service center</option>
                  </select>
                </div>
                {formData.collectionPreference === "Home" && (
                  <div>
                    <label htmlFor="deliveryAddress" className="block text-sm font-medium text-blue-700">Delivery Address</label>
                    <input type="text" name="deliveryAddress" id="deliveryAddress" value={formData.deliveryAddress} onChange={handleInputChange} autoComplete="off" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                  </div>
                )}
                <div className="flex justify-end mt-4">
                  <button type="button" onClick={closeBookingForm} className="mr-4 px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded focus:outline-none focus:shadow-outline">Cancel</button>
                  <button type="button" onClick={submitBookingForm} className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ServiceCard({ title, description, duration, price, onClick, icon }) {
  return (
    <div className="overflow-hidden bg-white shadow-md rounded-xl">
      <div className="p-9">
        <div className="flex justify-center mb-6">{icon}</div>
        <h3 className="mt-6 text-xl font-bold text-gray-900 sm:mt-10">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">Service Charge: <strong>{"₹" + price}</strong></p>
        <p className="mt-1 text-sm text-gray-500">Number of Days: <strong>{duration + " days"}</strong></p>
        <p className="mt-6 text-base text-gray-600">{description}</p>
        <button onClick={onClick} className="mt-6 bg-blue-400 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book Now</button>
      </div>
    </div>
  );
}

export default MobileRepairServices;
