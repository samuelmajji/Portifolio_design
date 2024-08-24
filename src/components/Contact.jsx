import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form Data Submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg"
      id="contact"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-orange-500 bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            style={{
              borderRadius: "15px 40px 20px 35px",
              borderWidth: "3px",
              borderStyle: "solid",
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-orange-500 bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            style={{
              borderRadius: "15px 40px 20px 35px",
              borderWidth: "3px",
              borderStyle: "solid",
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 bg-orange-500 bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            style={{
              borderRadius: "15px 40px 20px 35px",
              borderWidth: "3px",
              borderStyle: "solid",
            }}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-[#2197bd] hover:bg-orange-600 rounded-full text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#2197bd] focus:ring-opacity-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
