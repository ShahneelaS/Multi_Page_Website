import React from 'react';

const About: React.FC = () => {
  return (
    <div
      className="about py-10 px-6 flex flex-col items-center space-y-4"
      style={{
        backgroundImage: "url('/images/about-background.jpg')", // Path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
      <div className="max-w-lg">
        <p className="text-lg mb-4 text-white">
          Hi! I'm SHAHNEELA SHAHBAZ, a developer with experience in building responsive and interactive web applications. I have a passion for coding and love to solve complex problems with elegant solutions.
        </p>
        <p className="text-lg mb-4 text-white">
          My skills include HTML, CSS, JavaScript, React, TypeScript, and Tailwind CSS. I am constantly learning new technologies to improve my skills and deliver better solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
