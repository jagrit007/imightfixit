import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper'; // Import ScrollAnimationWrapper component
import ButtonPrimary from '../misc/ButtonPrimary'; // Import ButtonPrimary component

const Home = () => {
  // Sample data for list items
  // const listUser = [
  //   { icon: '../assets/icon1.png', number: '1000', name: 'Happy Customers' },
  //   { icon: '../assets/icon2.png', number: '500', name: '5-Star Reviews' },
  //   { icon: '../assets/icon3.png', number: '200', name: 'Devices Repaired' },
  // ];

  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16" variants={scrollAnimation}>
          {/* Left Content (Text and Button) */}
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black leading-normal">
              Want anything to be easy with <strong>LaslesVPN</strong>.
            </h1>
            <p className="text-black mt-4 mb-6">
              Provide a network for all your needs with ease and fun using LaslesVPN. Discover interesting features from us.
            </p>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>

          {/* Right Content (Image) */}
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <img
                src="/assets/Illustration1.png"
                alt="VPN Illustration"
                width={612}
                height={383}
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* List Items */}
      <div className="relative w-full flex">
        {/* <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" alt="Icon" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black font-bold">{listUsers.number}+</p>
                  <p className="text-lg text-black">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* Background Overlay */}
        <div className="absolute bg-black opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0" style={{ filter: "blur(114px)" }}></div>
      </div>
    </div>
  );
}

export default Home;
