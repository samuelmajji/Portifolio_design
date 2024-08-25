const Header = function () {
  return (
    <>
      <header className="bg-white-600 text-white shadow-lg mx-4 sm:mx-10 md:mx-20 px-4 sm:px-8 md:px-20 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold mb-4 sm:mb-0">
              <a href="#">
                <img
                  className="h-20 w-20 sm:h-32 sm:w-32"
                  src="logo.jpg"
                  alt="logo"
                />
              </a>
            </div>

            <div className="space-y-2 sm:space-y-0 sm:flex sm:space-x-4">
              <a
                href="#"
                className="bg-[#2197bd] hover:bg-[#2197bd] text-xl px-6 py-2 sm:px-10 sm:py-3 rounded-3xl"
              >
                Home
              </a>
              <a
                href="#projects"
                className="bg-gray-500 hover:bg-[#2197bd] text-xl px-6 py-2 sm:px-10 sm:py-3 rounded-3xl"
              >
                Projects
              </a>
              <a
                href="/more"
                className="bg-gray-500 hover:bg-[#2197bd] text-xl px-6 py-2 sm:px-10 sm:py-3 rounded-3xl"
              >
                more
              </a>
              <a
                href="#contact"
                className="bg-gray-500 hover:bg-[#2197bd] text-xl px-6 py-2 sm:px-10 sm:py-3 rounded-3xl"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
