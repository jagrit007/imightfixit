import React, { useState, useEffect } from 'react';

function MobileRepairServices() {
  const [serviceType, setServiceType] = useState('');
  const [formData, setFormData] = useState({
    deviceModel: '',
    yearOfBuying: '',
    bookingDate: '',
    collectionPreference: '',
    deliveryAddress: '', // New state for delivery address
  });
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [serviceCards, setServiceCards] = useState([
    // Pre-existing six cards
    {
      title: "Screen Replacement",
      description: "Get your broken screen replaced with a new one by our experts.",
      priceRange: "₹ 2000-5000",
      daysRequired: "4-5 days", // Number of days required for the service
      onClick: () => openBookingForm('Screen Replacement'),
      icon: <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 4H3C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4Z" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 20V12H15V20" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12V6H15V12" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    },
    // Add other pre-existing cards similarly
    {
      title: "Battery Replacement",
      description: "Replace your old battery with a new one and restore your phone's battery life.",
      priceRange: "₹ 1000-3000",
      daysRequired: "1-6 days", // Number of days required for the service
      onClick: () => openBookingForm('Battery Replacement'),
      icon: <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6C8.24 6 5 9.24 5 13H2L6.5 17.5L11 13H8C8 10.24 9.88 8 12 8C14.21 8 16 9.79 16 12C16 12.72 15.9 13.39 15.71 14H18V15H15.91C15.97 15.32 16 15.66 16 16C16 18.21 14.21 20 12 20C9.79 20 8 18.21 8 16C8 15.66 8.03 15.32 8.09 15H6V14H8.29C8.1 13.39 8 12.72 8 12C8 9.79 9.79 8 12 8ZM12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18Z" fill="#111827"/></svg>,
    },
    // Add other pre-existing cards similarly
    {
      title: "Water Damage Repair",
      description: "Repair your phone if it's been damaged by water or any other liquid.",
      priceRange: "₹ 1500-4000",
      daysRequired: "3 days", // Number of days required for the service
      onClick: () => openBookingForm('Water Damage Repair'),
      icon: <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.54 6.37C16.87 5.56 17.5 5 18.29 5C19.09 5 19.72 5.56 20.05 6.37L22 12C22.34 12.9 21.69 14 20.75 14H17V16C17 17.1 16.1 18 15 18H11V16C11 14.9 10.1 14 9 14H5.25C4.31 14 3.66 12.9 4 12L5.95 6.37C6.28 5.56 6.91 5 7.71 5C8.5 5 9.13 5.56 9.46 6.37L11 10H13L14.54 6.37C14.87 5.56 15.5 5 16.29 5C17.09 5 17.72 5.56 18.05 6.37L18.54 7.33L17.06 8.81L16.54 6.37ZM10 16H14V18H10V16ZM10 14H14V12H10V14ZM10 12H14V10H10V12ZM10 8H14V6H10V8ZM20 20H4V22H20V20Z" fill="#111827"/></svg>,
    },
    // Add other pre-existing cards similarly
    {
      title: "Charging Port Repair",
      description: "Fix issues related to your phone's charging port and ensure proper charging.",
      priceRange: "₹ 800-2500",
      daysRequired: "6-7 days", // Number of days required for the service
      onClick: () => openBookingForm('Charging Port Repair'),
      icon: <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H9C7.34 2 6 3.34 6 5V15C6 16.66 7.34 18 9 18H15C16.66 18 18 16.66 18 15V5C18 3.34 16.66 2 15 2ZM14 10H10V9H14V10ZM14 8H10V7H14V8ZM14 6H10V5H14V6ZM17 20H7V19H17V20Z" fill="#111827"/></svg>,
    },
    // Add other pre-existing cards similarly
    {
      title: "Software Update/Repair",
      description: "Update or repair your phone's software to improve performance and fix issues.",
      priceRange: "₹ 500-1500",
       daysRequired: "10 days", // Number of days required for the service
      onClick: () => openBookingForm('Software Update/Repair'),
      icon: <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C3.45 2 3 2.45 3 3V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V3C21 2.45 20.55 2 20 2H4ZM6 20H4V18H6V20ZM6 16H4V4H6V16ZM8 20H6V18H8V20ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM12 20H10V18H12V20ZM12 16H10V14H12V16ZM12 12H10V10H12V12ZM16 20H14V18H16V20ZM16 16H14V14H16V16ZM16 12H14V10H16V12ZM20 20H18V18H20V20ZM20 16H18V14H20V16Z" fill="#111827"/></svg>,
    },
    // Add other pre-existing cards similarly
    {
      title: "Camera Repair",
      description: "Repair or replace your phone's camera to capture perfect moments again.",
      priceRange: "₹ 1200-3500",
      daysRequired: "5-6 days", // Number of days required for the service
      onClick: () => openBookingForm('Camera Repair'),
      icon: <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#111827"/><path d="M12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9C14 7.9 13.1 7 12 7Z" fill="#111827"/><path d="M18.88 7.56C18.72 7.22 18.36 7 18 7H17.75C17.33 5.67 16.33 4.67 15 4.25V3C15 2.45 14.55 2 14 2H10C9.45 2 9 2.45 9 3V4.25C7.67 4.67 6.67 5.67 6.25 7H6C5.64 7 5.28 7.22 5.12 7.56C5.04 7.72 5 7.9 5 8.08V10.38C5 10.55 5.05 10.72 5.15 10.87C5.3 11.07 5.5 11.23 5.75 11.28L9 12V19C9 19.55 9.45 20 10 20H14C14.55 20 15 19.55 15 19V12L18.25 11.28C18.5 11.23 18.7 11.07 18.85 10.87C18.95 10.72 19 10.55 19 10.38V8.08C19 7.91 18.96 7.74 18.88 7.56Z" fill="#111827"/></svg>,
    },
  ]);

  useEffect(() => {
    // Fetch additional service cards from the database
    fetchAdditionalServices();
  }, []);

  const fetchAdditionalServices = () => {
    // Simulate fetching additional services from the database
    const additionalServices = [
      // Additional service cards
      // Add new service cards here
    ];

    // Append additional services to the existing service cards
    setServiceCards(prevCards => [...prevCards, ...additionalServices]);
  };

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
      [e.target.name]: e.target.value,
    });
  };

  const submitBookingForm = () => {
    console.log(formData);
    setFormData({
      deviceModel: '',
      yearOfBuying: '',
      bookingDate: '',
      collectionPreference: '',
      deliveryAddress: '', // Reset delivery address after submission
    });
    closeBookingForm();
  };

  return (
    <div className="bg-blue-900">
      {/* Existing code for section and service cards */}
      {/* Service cards fetched from the database */}
      <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
        {serviceCards.map((card, index) => (
          <ServiceCard
            key={index}
            title={card.title}
            description={card.description}
            priceRange={card.priceRange}
            daysRequired={card.daysRequired} 
            onClick={card.onClick}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default MobileRepairServices;
