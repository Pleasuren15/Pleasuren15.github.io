import React from 'react';
import AnimatedBorderAvatar from './AnimatedBorderAvatar';

const LandingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full mt-25">
      {/* Left side - Text */}
      <div className="items-center">
        <h5 className="text-2xl text-white">Hello, I Am SBU</h5>
        <h3 className="text-8xl font-bold mt-2 mb-4">
          SOFTWARE ENGINEER
        </h3>
        <p>Delivering Software With Precision, Tested For Reliability, And Built To Scale.</p>
      </div>

      {/* Right side - Avatar */}
      <div className="flex-1 flex justify-end items-center">
        <AnimatedBorderAvatar src="https://via.placeholder.com/400" />
      </div>
    </div>
  );
};

export default LandingPage;
