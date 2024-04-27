import React, { useEffect, useState } from 'react';

const UserDetailSection = ({ userData }) => {
  return (
    <section className="mt-10 p-4">
      <div className="w-full md:w-1/2 md:mx-auto flex flex-col md:flex-row items-center justify-center text-center">
        <img
          className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-indigo-50 h-24 w-24 !h-32 !w-32 mb-4 md:mb-0 ml-0 md:mr-5"
          src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"} 
          alt=""
        />
        <div className="flex flex-col">
          <div className="md:text-justify mb-3">
            <div className="flex flex-col mb-5">
              <p className="text-indigo-900 font-bold text-xl">{userData.name}</p>
              {/* Assuming userData contains name field */}
              <ul className="mt-2 flex flex-row items-center justify-center md:justify-start ">
                <li className="mr-5">
                  <a href={userData.githubLink} target="_blank" aria-label="GitHub">
                    <svg
                      className="h-6 text-indigo-700 hover:text-indigo-300"
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href={userData.twitterLink} target="_blank" aria-label="Twitter">
                    <svg
                      className="h-6 text-indigo-700 hover:text-indigo-300"
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Twitter</title>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-indigo-300 font-semibold text-center md:text-left">
              {userData.description}
            </p>
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
      <h2 className="text-xl text-white font-bold mb-4">Billing Details of {billingDetails.length > 0 && billingDetails[0].user_name}</h2>
      <table className="w-full text-left mb-8">
        <thead>
          <tr>
            <th className="text-gray-300 font-bold uppercase py-2">Service ID</th>
            <th className="text-gray-300 font-bold uppercase py-2">Provider ID</th>
            <th className="text-gray-300 font-bold uppercase py-2">Status</th>
            <th className="text-gray-300 font-bold uppercase py-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {billingDetails.map((detail, index) => (
            <tr key={index}>
              <td className="py-4 text-gray-300">{detail.service_id}</td>
              <td className="py-4 text-gray-300">{detail.provider_id}</td>
              <td className="py-4 text-gray-300">{detail.status}</td>
              <td className="py-4 text-gray-300">{detail.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {totalAmount > 0 && <div className="text-white mt-4">Total Amount: ${totalAmount}</div>}
    </div>
  );
};

const UserDashboard = () => {
  const [userData, setUserData] = useState({});
  const [billingDetails, setBillingDetails] = useState([]);

  useEffect(() => {
    // Fetch user data from the database
    // Example fetch request
    fetchUserData().then((data) => setUserData(data));
    
    // Fetch billing details from the database
    // Example fetch request
    fetchBillingDetails().then((data) => setBillingDetails(data));
  }, []);

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await fetch('your_backend_api/user');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Function to fetch billing details
  const fetchBillingDetails = async () => {
    try {
      const response = await fetch('your_backend_api/billingDetails');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching billing details:', error);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-8 px-4">
      <UserDetailSection userData={userData} />
      <BillingDetailSection billingDetails={billingDetails} />
    </div>
  );
};

export default UserDashboard;
