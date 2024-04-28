import React, { useEffect, useState } from 'react';

const UserDetailSection = ({ userData }) => {
  return (
    <section className="mt-10 p-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-64 w-full object-cover md:h-full md:w-64"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
              {userData?.username}
            </div>
            <p className="mt-4 text-gray-700 text-xl">
              {userData?.description ? userData?.description : `Hi, I am ${userData?.name}!`}
            </p>
            <div className="mt-6">
              <a
                href={userData?.githubLink ? userData?.githubLink : 'https://github.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-200 rounded-full px-4 py-2 text-lg font-semibold text-gray-700 mr-4"
              >
                GitHub
              </a>
              <a
                href={userData?.twitterLink ? userData?.twitterLink : 'https://x.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-200 rounded-full px-4 py-2 text-lg font-semibold text-gray-700"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BillingDetailSection = ({ billingDetails }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate total amount from billing details
    const total = billingDetails.reduce((acc, item) => acc + item.total_price, 0);
    setTotalAmount(total);
  }, [billingDetails]);

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full mt-8">
      <h2 className="text-xl text-white font-bold mb-4">
        Order Details of User ID: {billingDetails.length > 0 && billingDetails[0]?.user_id}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left mb-8">
          <thead>
            <tr className="bg-gray-800 text-gray-300 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Service ID</th>
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Total Price</th>
            </tr>
          </thead>
          <tbody className="text-gray-300 text-sm font-normal">
            {billingDetails.map((detail, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'}>
                <td className="py-3 px-6">{detail.service_id}</td>
                <td className="py-3 px-6">{detail.id}</td>
                <td className="py-3 px-6">{detail.status}</td>
                <td className="py-3 px-6">₹{detail.total_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalAmount > 0 && <h2 className="text-white font-bold mt-4">Total Amount: ₹{parseInt(totalAmount, 10)}</h2>}
    </div>
  );
};

const UserDashboard = () => {
  const [userData, setUserData] = useState({});
  const [billingDetails, setBillingDetails] = useState([]);

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    // Fetch user data from the database
    // Example fetch request
    const fetchUserData = () => {
      let name = localStorage.getItem('name');
      let email = localStorage.getItem('email');
      setUserData({ name, email });
      // try {
      //   const response = await fetch('your_backend_api/user');
      //   const data = await response.json();
      //   setUserData(data);
      // } catch (error) {
      //   console.error('Error fetching user data:', error);
      // }
    };

    // Fetch billing details from the database
    // Example fetch request
    const fetchBillingDetails = async () => {
      try {
        const response = await fetch('http://localhost:5000/order', {
          headers: {
            Authorization: `${userToken}`,
          },
        });
        const data = await response.json();
        setBillingDetails(data.data);
        // if (data.status === 'success') {
        // setCurrentOrders(data.data.filter(order => order.status === 'pending' || order.status === 'in_progress'));
        // setOrderHistory(data.data.filter(order => order.status === 'completed' || order.status === 'cancelled'));
        // }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
    fetchBillingDetails();
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-8 px-4">
      <UserDetailSection userData={userData} />
      <BillingDetailSection billingDetails={billingDetails} />
    </div>
  );
};

export default UserDashboard;
