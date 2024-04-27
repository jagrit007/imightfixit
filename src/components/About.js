import React from 'react';

const companyName = "iMayFixIt";
  const companyDescription = "We are dedicated to providing top-quality mobile repair services with a smile!";
  const missionStatement = "Our mission is to fix phones and bring joy to our customers by restoring their devices to optimal condition.";

  const teamMembers = [
    { name: "Jay Rathod", role: "Founder & CEO" },
    { name: "Sidhant Sharma", role: "Head Technician" },
    { name: "Shaon Ghosh", role: "Marketing Manager" },
    { name: "Mehul Verma", role: "Sales Representative" },
    { name: "Jagrit Thapar", role: "Customer Support Specialist" }
  ];

const AboutSection = () => {
  const customBackgroundColor = '153448'; // Hex color code without the '#'

  return (
    <section className={`bg-${customBackgroundColor} py-8 `}>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="about.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ABOUT
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            At iMayFixIt, we're more than just a mobile repair company. We're innovators on a
            mission to redefine the repair experience. From cracked screens to software woes, trust
            us to bring creativity and expertise to every fix.
          </p>
        </div>
      </a>
    </section>
  );
};

export default AboutSection;