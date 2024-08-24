import React, { useState } from "react";
import { sports, webdev, Journey, others } from "./Data";

function MyJourney() {
  const [Timeline, setTimeline] = useState(webdev);

  const handleType = (type) => {
    setTimeline(type);
  };

  return (
    <div className="p-8 ml-20 pl-20 mx-auto">
      <div className="flex space-x-20 mb-4 text-gray-600 border-b-2">
        <button
          onClick={() => handleType(webdev)}
          className={
            Timeline == webdev
              ? "text-orange-500 border-b-2 border-orange-500"
              : ""
          }
        >
          Web dev
        </button>
        <button
          onClick={() => handleType(sports)}
          className={
            Timeline === sports
              ? "text-orange-500 border-b-2 border-orange-500"
              : ""
          }
        >
          Sports
        </button>
        <button
          onClick={() => {
            handleType(Journey);
          }}
          className={
            Timeline === Journey
              ? "text-orange-500 border-b-2 border-orange-500"
              : ""
          }
        >
          Travel
        </button>
        <button
          onClick={() => {
            handleType(others);
          }}
          className={
            Timeline === others
              ? "text-orange-500 border-b-2 border-orange-500"
              : ""
          }
        >
          Others
        </button>
      </div>

      {/* Timeline */}
      <div className="space-y-6 pl-20 pt-10">
        {Timeline.map((item, index) => (
          <div className="relative" key={index}>
            <div
              className={`absolute top-5 left-1.5 w-1 bg-${item.color} h-full`}
            ></div>
            <div className="flex items-start mb-4">
              <div
                className={`h-4 w-4 rounded-full bg-${item.color} mt-0.5`}
              ></div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="text-lg font-semibold">{item.description}</p>
              </div>
            </div>
            <button className="ml-8 text-sm text-white bg-[#2197bd] py-1 px-3 rounded-full">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyJourney;
