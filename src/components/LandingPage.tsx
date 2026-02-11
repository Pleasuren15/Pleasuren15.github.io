import React from 'react';
import AnimatedBorderAvatar from './AnimatedBorderAvatar';
import DecryptedText from './DecryptedText';

const LandingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full mt-25">
      {/* Left side - Text */}
      <div className="items-center">
        {/* <h5 className="text-2xl text-white">Hello, I Am SBU</h5> */}
        <h3 className="text-2xl font-bold mt-2 mb-4">
          <DecryptedText
            text="HI, I AM PLEASURE NDHLOVU"
            animateOn="view"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
          />
        </h3>
        <p>
          <DecryptedText
            text="Delivering Software With Precision, Tested For Reliability, And Built To Scale."
            animateOn="view"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
          />

        </p>
        <h3 className="text-5xl font-bold mt-2 mb-4">
          <DecryptedText
            text="A SOFTWARE ENGINEER"
            animateOn="view"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
          />
        </h3>
      </div>

      {/* Right side - Avatar */}
      <div className="flex-1 flex justify-end items-center">
        <AnimatedBorderAvatar src="https://via.placeholder.com/400" />
      </div>
    </div>
  );
};

export default LandingPage;
