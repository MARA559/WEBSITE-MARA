import React from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">I am a passionate developer ready to take on new challenges.</p>
        <a href="#portfolio" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;