const Heading = function ({ children }) {
  return (
    <>
      <div className="px-5 pt-10 mb-10 md:px-40 md:pt-20 md:mb-20 flex justify-center md:justify-start">
        <h1 className="w-full md:w-60 pb-2 text-4xl md:text-5xl text-orange-500 border-b-4 border-solid border-[#2197bd]">
          {children}
        </h1>
      </div>
    </>
  );
};

export default Heading;
