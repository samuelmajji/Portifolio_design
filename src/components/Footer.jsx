import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-6">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-orange-500 mb-2">
            Let's Connect
          </h3>
          <p className="text-lg text-orange-500">
            Follow us on social media and stay updated with our latest news.
          </p>
        </div>

        {/* Footer Right Section */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="w-10 h-10 text-black flex justify-center items-center rounded-full hover:bg-orange-600 transition"
          >
            {/* Home Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9.5V21h5.5V13h7v8H21V9.5L12 3z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 text-black flex justify-center items-center rounded-full hover:bg-orange-600 transition"
          >
            {/* Instagram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7.75 2h8.5A5.25 5.25 0 0121.5 7.25v8.5A5.25 5.25 0 0116.25 21h-8.5A5.25 5.25 0 012.5 15.75v-8.5A5.25 5.25 0 017.75 2zm0 0v2.5m9.25-2.5v2.5m-6.5 5.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 text-black flex justify-center items-center rounded-full hover:bg-orange-600 transition"
          >
            {/* X (formerly Twitter) Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4l16 16M20 4L4 20"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-sm text-black">© Samuel Majji</div>
    </footer>
  );
};

export default Footer;
