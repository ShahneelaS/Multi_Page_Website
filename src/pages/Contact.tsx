import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact bg-gray-100 py-10 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg mb-6">I'd love to hear from you! Please fill out the form below to get in touch.</p>
      <form className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-4">
        <div>
          <label className="block font-semibold mb-1">Name:</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" placeholder="Your name" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email:</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" placeholder="Your email" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Message:</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-bold">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
