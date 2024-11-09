// components/Portfolio.tsx
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="./Public/images/Project 1.png" alt="Project 1" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold">Project 1</h2>
          <p>A brief description of project 1.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="./Public/images/Project 2.png" alt="Project 2" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold">Project 2</h2>
          <p>A brief description of project 2.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="./Public/images/Project 3.png" alt="Project 3" className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold">Project 3</h2>
          <p>A brief description of project 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
