import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <div className="text-center p-6 rounded-lg shadow-lg bg-opacity-75 backdrop-blur-md bg-gray-900">
        {/* Profile Image */}
        <img src="./Public/images/Profile Picture.png" alt="Image not found" 
        className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
        />
          
        <h1 className="text-4xl font-extrabold mb-2">Hello, I'm SHAHNEELA SHAHBAZ</h1>
        <p className="text-lg mb-6">
          A passionate developer skilled in React and web development. I create beautiful, responsive websites and applications.
        </p>
        <div className="space-x-4">
          <a href="./about" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow">
            About Me
          </a>
          <a href="./contact" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
