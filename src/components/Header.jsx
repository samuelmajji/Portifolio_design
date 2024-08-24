const Header = function () {
  return (
    <>
      <header className="bg-white-600 text-white shadow-lg mx-20 px-20 top-0">
        <div className="max-w-7xl mx-auto px-20 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <a href="#">
                <img className="h-40 w-40" src="logo.jpg" alt="logo" />
              </a>
            </div>

            <div>
              <a
                href="#"
                className="bg-[#2197bd] hover:bg-[#2197bd] text-xl px-10 py-3 rounded-3xl"
              >
                Home
              </a>
            </div>
            <div>
              <a
                href="#projects"
                className="bg-gray-500 hover:bg-[#2197bd] text-xl px-10 py-3 rounded-3xl"
              >
                Projects
              </a>
            </div>
            <div>
              <a
                href="/more"
                className="bg-gray-500 hover:bg-[#2197bd] text-xl px-10 py-3 rounded-3xl"
              >
                more
              </a>
            </div>
            <div>
              <a
                href="#contact"
                className="bg-gray-500 hover:bg-[#2197bd] text-xl px-10 py-3 rounded-3xl"
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
