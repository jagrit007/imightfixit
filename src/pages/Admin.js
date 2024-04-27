import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios library
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  const userToken = localStorage.getItem('token');
  const [serviceType, setServiceType] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [serviceTitle, setServiceTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [duration, setDuration] = useState('');
  const [serviceCards, setServiceCards] = useState([
    {
      name: "Software Update/Repair",
      description: "Update or repair your phone's software to improve performance and fix issues.",
      price: "500",
      duration: 30,
      onClick: () => openBookingForm('Software Update/Repair'),
      icon: <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C3.45 2 3 2.45 3 3V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V3C21 2.45 20.55 2 20 2H4ZM6 20H4V18H6V20ZM6 16H4V4H6V16ZM8 20H6V18H8V20ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM12 20H10V18H12V20ZM12 16H10V14H12V16ZM12 12H10V10H12V12ZM16 20H14V18H16V20ZM16 16H14V14H16V16ZM16 12H14V10H16V12ZM20 20H18V18H20V20ZM20 16H18V14H20V16Z" fill="#111827"/></svg>,
    },
  ]);
  const [services, setServices] = useState([]); // State to hold services
  const [savedService, setSavedService] = useState(null);

  const [status, setStatus] = useState('');
  
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

  useEffect(() => {
    // Fetch additional service cards from the database
    fetchServiceCards();
  }, []);

  const [currentOrders, setCurrentOrders] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/order', {
          headers: {
            'Authorization': `${userToken}`
          }
        });
        const data = await response.json();
        if (data.status === 'success') {
          setCurrentOrders(data.data.filter(order => order.status === 'pending' || order.status === 'in_progress'));
          setOrderHistory(data.data.filter(order => order.status === 'completed' || order.status === 'cancelled'));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  function fetchServiceCards() {
    axios.get('http://localhost:5000/service/getAll')
      .then(response => {
        console.log(response.data.data);
        if (response.data.status === 'success') {
          if (response.data.data.length > 0){
            setServices([...services, ...response.data.data]);
          }
        } else {
          throw new Error('Failed to fetch service cards');
        }
      })
      .catch(error => {
        console.error('Error fetching service cards:', error);
      });
  }

  useEffect(() => {
    if (savedService) {
      setServices([...services, savedService]);
      setSavedService(null);
    }
  }, [savedService, services]);
  
  const completeOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:5000/order/finish/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `${userToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_status: 'completed'
        })
      });
      const data = await response.json();
      console.log(data); // Logging the response for verification
      // Update currentOrders state to reflect the updated status
      setCurrentOrders(prevOrders =>
        prevOrders.filter(order => order.id !== orderId)
      );
      // Move the completed order to orderHistory
      setOrderHistory(prevOrders => [...prevOrders, ...currentOrders.filter(order => order.id === orderId)]);
    } catch (error) {
      console.error('Error completing order:', error);
    }
  };
  
  const cancelOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:5000/order/finish/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `${userToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_status: 'cancelled'
        })
      });
      const data = await response.json();
      console.log(data); // Logging the response for verification
      // Update currentOrders state to remove the cancelled order
      setCurrentOrders(prevOrders =>
        prevOrders.filter(order => order.id !== orderId)
      );
      // Move the cancelled order to orderHistory
      setOrderHistory(prevOrders => [...prevOrders, ...currentOrders.filter(order => order.id === orderId)]);
    } catch (error) {
      console.error('Error cancelling order:', error);
    }
  };
  
  const acceptOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:5000/order/accept/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `${userToken}`,
          "total_price": prompt("Enter total_price for this service:")
        },
      });
      const data = await response.json();
      alert(`Order with ID: ${orderId} accepted successfully!`)
      console.log(data); // Logging the response for verification
      // Update currentOrders state to reflect the updated status
      setCurrentOrders(prevOrders =>
        prevOrders.map(order =>
          order.id === orderId
            ? { ...order, status: 'in_progress' }
            : order
        )
      );
      navigate('/admin');
    } catch (error) {
      console.error('Error accepting order:', error);
    }
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
    axios.post('http://localhost:5000/service/add', {
      name: serviceTitle,
      price: priceRange,
      description: description,
      duration: duration
    }, {
      headers: {
        'Authorization': `${userToken}`
      }
    })
    .then(response => {
      console.log(response.data);
      console.log('Service details saved successfully:', response.data);
      setShowBookingModal(false);
      // Clear input fields after saving
      setServiceTitle('');
      setDescription('');
      setPriceRange('');
    })
    .catch(error => {
      console.error(error);
      // Handle error
    });
  };

  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Fetch total revenue from backend API
    axios.get('http://127.0.0.1:5000/order/total-revenue', {
      headers: {
        'Authorization': `${userToken}`
      }
    })
      .then(response => {
        setTotalRevenue(response.data.total_revenue?response.data.total_revenue:0);
      })
      .catch(error => {
        console.error('Error fetching total revenue:', error);
      });
  }, []); // Empty dependency array means this effect runs once after the component mounts

  const renderAcceptOrCompleteButton = (status, orderId) => {
    if (status === 'in_progress') {
      return (
        <button onClick={() => completeOrder(orderId)} className="relative inline-flex text-sm sm:text-base bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg z-50">Complete</button>
      );
    } else if (status === 'pending') {
      return (
        <button onClick={() => acceptOrder(orderId)} className="relative inline-flex text-sm sm:text-base bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg z-50">Accept</button>
      );
    } else if (status === 'completed') {
      return (
        <button className="relative inline-flex text-sm sm:text-base bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg z-50" disabled>Completed</button>
      );
    }
  };

  const renderCancelOrCancelButton = (status, orderId) => {
    if (status === 'in_progress' || status === 'pending') {
      return (
        <button onClick={() => cancelOrder(orderId)} className="relative inline-flex text-sm sm:text-base bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg z-50">Cancel</button>
      );
    } else {
      return (
        <button className="relative inline-flex text-sm sm:text-base bg-gray-500 text-white font-bold py-2 px-4 rounded-lg z-50" disabled>Cancelled</button>
      );
    }
  };

  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    timeZone: 'UTC' 
  };

  return (
    <div>
      {/* TODO: change absolute buttons */}
      <button onClick={handleAddService} className="float-right mt-20 mr-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg z-50">
        Add Service
      </button>
      <div className="float-left mt-20 ml-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg z-50">
        Total Revenue: ₹{totalRevenue}
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
            title={service.name}
            icon={<svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C3.45 2 3 2.45 3 3V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V3C21 2.45 20.55 2 20 2H4ZM6 20H4V18H6V20ZM6 16H4V4H6V16ZM8 20H6V18H8V20ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM12 20H10V18H12V20ZM12 16H10V14H12V16ZM12 12H10V10H12V12ZM16 20H14V18H16V20ZM16 16H14V14H16V16ZM16 12H14V10H16V12ZM20 20H18V18H20V20ZM20 16H18V14H20V16Z" fill="#111827"/></svg>}
            description={service.description}
            priceRange={"₹" + service.price}
            duration={"Number of Days: " + service.duration}
          />
        ))}
      </div>
        </div>
      </section>
      <div>
      <div className="mt-32">
        <div className="px-4 sm:px-8 max-w-5xl m-auto">
          <h1 className="text-center font-semibold text-sm">Current Orders</h1>
          <p className="mt-2 text-center text-xs mb-4 text-gray-500">Last 10 Orders</p>
          <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
            {currentOrders.map(order => (
              <li key={order.id} className="flex justify-between px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                <span>Service Order: <strong>{new Date(order.created_at).toLocaleDateString('en-US', options)}</strong></span>
                <span>Order ID: <strong>{(order.id)}</strong></span>
                <div className="flex space-x-4">
                  {renderAcceptOrCompleteButton(order.status, order.id)}
                  {renderCancelOrCancelButton(order.status, order.id)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-32 mb-8">
        <div className="px-4 sm:px-8 max-w-5xl m-auto">
          <h1 className="text-center font-semibold text-sm">Order History</h1>
          <p className="mt-2 text-center text-xs mb-4 text-gray-500">Last 10 Orders</p>
          <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
            {orderHistory.map(order => (
              <li key={order.id} className="flex justify-between px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
              <span>Service Order: <strong>{new Date(order.created_at).toLocaleDateString('en-US', options)}</strong></span>
              <span>Order ID: <strong>{(order.id)}</strong></span>
              <span>Order Status: <strong>{(order.status)}</strong></span>
              </li>
            ))}
          </ul>
        </div>
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
                  <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} autoComplete="off" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label htmlFor="priceRange" className="block text-sm font-medium text-blue-700">Price Range</label>
                  <input type="number" id="priceRange" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} autoComplete="off" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-blue-700">Duration (in Days)</label>
                  <input type="number" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} autoComplete="off" required className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div className="pt-4">
                  <button onClick={handleSaveService} type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">Save Service</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ServiceCard = ({ title, icon, description, priceRange, duration }) => (
  <div className="flex items-center flex-col p-8 bg-white rounded-lg shadow-md hover:shadow-lg">
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
      <p className="mt-2 text-base leading-6 text-gray-500">{description}</p>
      <p className="mt-2 text-base leading-6 text-gray-500">{priceRange}</p>
      <p className="mt-2 text-base leading-6 text-gray-500">{duration}</p>
    </div>
  </div>
);

export default AdminPage;
