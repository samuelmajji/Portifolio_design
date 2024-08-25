import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";
const ProfileCard = function () {
  return (
    <>
      <div className="m-4 sm:m-8 lg:m-20 flex flex-col sm:flex-row">
        <div className="flex-1 flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
          <img
            className="h-40 w-40 sm:h-[400px] sm:w-[400px] object-cover"
            src="profile.png"
            alt="profile pic"
          />
        </div>
        <div className="flex-1 pl-4 sm:pl-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-6xl font-bold mb-4">
              Samuel Majji
            </h1>
            <p className="text-base sm:text-2xl mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="flex justify-start mt-4 sm:mt-10 space-x-4 sm:space-x-8">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-16 w-16 sm:h-20 sm:w-20 text-pink-500" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-16 w-16 sm:h-20 sm:w-20 text-blue-700" />
            </a>
            <a href="/projects">
              <HiOutlineBriefcase className="h-16 w-16 sm:h-20 sm:w-20 text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileCard;
