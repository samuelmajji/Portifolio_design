import React, { useState } from "react";
import { sports, webdev, Journey, others } from "./Data";

function MyJourney() {
  const [Timeline, setTimeline] = useState(webdev);

  const handleType = (type) => {
    setTimeline(type);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 mx-auto">
      <div className="flex flex-wrap space-x-20 mb-4 text-gray-600 border-b-2 border-gray-200">
        <button
          onClick={() => handleType(webdev)}
          className={
            Timeline === webdev
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          Web dev
        </button>
        <button
          onClick={() => handleType(sports)}
          className={
            Timeline === sports
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          Sports
        </button>
        <button
          onClick={() => handleType(Journey)}
          className={
            Timeline === Journey
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          Travel
        </button>
        <button
          onClick={() => handleType(others)}
          className={
            Timeline === others
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          Others
        </button>
      </div>

      {/* Timeline */}
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        {Timeline.map((item, index) => (
          <div className="relative" key={index}>
            <div
              className="absolute top-4 md:top-5 left-2 md:left-1.5 w-1 h-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <div className="flex flex-col sm:flex-row items-start mb-4">
              <div
                className="h-3 w-3 sm:h-4 sm:w-4 rounded-full mt-1 sm:mt-0.5"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-500">{item.date}</p>
                <p className="text-base sm:text-lg font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
            <button className="mt-2 ml-0 sm:ml-8 text-xs sm:text-sm text-white bg-[#2197bd] py-1 px-2 sm:py-1.5 sm:px-3 rounded-full">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyJourney;
