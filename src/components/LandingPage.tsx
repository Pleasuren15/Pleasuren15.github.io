import React from 'react';
import AnimatedBorderAvatar from './AnimatedBorderAvatar';

const LandingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full h-screen">
      {/* Left side - Text */}
      <div className="items-center">
        <h3 className="text-2xl text-white">Hello, I Am Sbu</h3>
        <h1 className="text-7xl font-bold text-white leading-tight">
          SOFTWARE ENGINEER
        </h1>
      </div>

      {/* Right side - Avatar */}
      <div className="flex-1 flex justify-end items-center">
        <AnimatedBorderAvatar src="https://via.placeholder.com/400" />
      </div>
    </div>
  );
};

export default LandingPage;
