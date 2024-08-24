const Heading = function ({ children }) {
  return (
    <>
      <div className="px-40 pt-20 mb-20">
        <h1 className="w-60 pb-2 text-5xl text-orange-500 border-b-4 border-solid border-x-5 border-[#2197bd]">
          {children}
        </h1>
      </div>
    </>
  );
};
export default Heading;
