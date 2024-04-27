import React from 'react';

function App() {
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
        <div className="text-xl">Bappa Flour mill</div>
        <div className="flex md:hidden">
          <button id="hamburger">
            <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" alt="Menu" />
            <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" alt="Close" />
          </button>
        </div>
        <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
          <a href="#home" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Home</a>
          <a href="#services" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Services</a>
          <a href="#aboutus" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">About us</a>
          <a href="#gallery" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Gallery</a>
          <a href="#contactUs" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Visit Us</a>
        </div>

        <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
          <a href="tel:+123">
            <div className="flex justify-end">
              <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call now
              </div>
            </div>
          </a>
        </div>
      </nav>

      {/* hero section */}
      <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
          <img src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png" alt="Background Image" className="object-cover object-center w-full h-full" />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Bappa Flour mill</h1>
            <p className="font-regular text-xl mb-8 mt-4">One stop solution for flour grinding services</p>
            <a href="#contactUs" className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200">Contact Us</a>
          </div>
        </div>
      </div>

      {/* our services section */}
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="Service_Image_URL" alt="Service Image" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Service Title</h3>
                <p className="text-gray-700 text-base">Service Description</p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="Service_Image_URL" alt="Service Image" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Service Title</h3>
                <p className="text-gray-700 text-base">Service Description</p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="Service_Image_URL" alt="Service Image" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Service Title</h3>
                <p className="text-gray-700 text-base">Service Description</p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="Service_Image_URL" alt="Service Image" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Service Title</h3>
                <p className="text-gray-700 text-base">Service Description</p>
              </div>
            </div>
            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="Service_Image_URL" alt="Service Image" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Service Title</h3>
                <p className="text-gray-700 text-base">Service Description</p>
              </div>
            </div>
            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="Service_Image_URL" alt="Service Image" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Service Title</h3>
                <p className="text-gray-700 text-base">Service Description</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-10" id="aboutus">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Bappa Flour Mill is a family-owned business that has been providing high-quality flour grinding services for generations. With our state-of-the-art machinery and skilled craftsmen, we ensure that our customers get the finest quality flour for their needs. Our commitment to quality and customer satisfaction sets us apart in the industry.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10" id="gallery">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="https://via.placeholder.com/500" alt="Gallery Image" className="w-full h-auto rounded-lg shadow-md object-cover" />
            <img src="https://via.placeholder.com/500" alt="Gallery Image" className="w-full h-auto rounded-lg shadow-md object-cover" />
            <img src="https://via.placeholder.com/500" alt="Gallery Image" className="w-full h-auto rounded-lg shadow-md object-cover" />
            <img src="https://via.placeholder.com/500" alt="Gallery Image" className="w-full h-auto rounded-lg shadow-md object-cover" />
            <img src="https://via.placeholder.com/500" alt="Gallery Image" className="w-full h-auto rounded-lg shadow-md object-cover" />
            <img src="https://via.placeholder.com/500" alt="Gallery Image" className="w-full h-auto rounded-lg shadow-md object-cover" />
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-10" id="contactUs">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visit Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">Visit us at our location or contact us via phone or email.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Location</h3>
              <p className="text-gray-700 mb-2">123 Street Name,</p>
              <p className="text-gray-700 mb-2">City Name, Country</p>
              <p className="text-gray-700 mb-2">Postal Code</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Info</h3>
              <p className="text-gray-700 mb-2">Phone: +1234567890</p>
              <p className="text-gray-700 mb-2">Email: info@example.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8f9fa] py-5">
        <div className="container mx-auto px-4">
          <p className="text-gray-700 text-center">© 2024 Bappa Flour Mill. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
