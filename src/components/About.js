import React from 'react';

const companyName = "iMayFixIt";
  const companyDescription = "We are dedicated to providing top-quality mobile repair services with a smile!";
  const missionStatement = "Our mission is to fix phones and bring joy to our customers by restoring their devices to optimal condition.";


const TeamMember = ({ name, title, imageSrc }) => {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
      <div className="flex flex-col">
        <a href="#" className="mx-auto">
          <img
            className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
            src={imageSrc}
            alt={name}
          />
        </a>
        <div className="text-center mt-6">
          <h1 className="text-gray-900 text-xl font-bold mb-1">{name}</h1>
          <div className="text-gray-700 font-light mb-2">{title}</div>
          <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
            <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
              <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
            </a>
            <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
              <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
            </a>
            <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
              <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
  
const AboutSection = () => {
  const teamMembers = [
    {
      name: 'Jay Rathod',
      title: 'Founder & CEO',
      imageSrc: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?fit=clamp&w=400&h=400&q=80'
    },
    {
      name: 'Sidhant Sharma',
      title: 'Head Technician',
      imageSrc: 'https://images.unsplash.com/photo-1636892657080-f6b9ee0733bb?fit=clamp&w=400&h=400&q=80'
    },
    {
      name: 'Shaon Ghosh',
      title: 'Marketing Manager',
      imageSrc: 'https://images.unsplash.com/photo-1580923368248-877f237696cd?fit=clamp&w=400&h=400&q=80'
    },
    {
      name: 'Mehul Verma',
      title: 'Sales Representative',
      imageSrc: 'https://images.unsplash.com/photo-1521985179118-6008b8cef2c2?fit=clamp&w=400&h=400&q=80'
    },
    {
      name: 'Jagrit Thapar',
      title: 'Customer Support Specialist',
      imageSrc: 'https://images.unsplash.com/photo-1649077585967-b5decf6e032a?fit=clamp&w=400&h=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-gray-900 text-4xl font-bold mb-4">About</h1>
          <p className="text-gray-700 text-lg font-light mb-8">
            At iMayFixIt, we're more than just a mobile repair company. We're innovators on a
            mission to redefine the repair experience. From cracked screens to software woes, trust
            us to bring creativity and expertise to every fix.
          </p>
          <h1 className="text-gray-900 text-4xl font-bold mb-4">Meet the Team</h1>
          <p className="text-gray-700 text-lg font-light">
            With over 100 years of combined experience, we've got a well-seasoned team at the helm.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} title={member.title} imageSrc={member.imageSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;