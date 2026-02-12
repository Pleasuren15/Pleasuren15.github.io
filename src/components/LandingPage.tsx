import React from 'react';
// import AnimatedBorderAvatar from './AnimatedBorderAvatar';
import DecryptedText from './DecryptedText';
import RotatingText from './RotatingText';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[80vh] pt-16 px-4 sm:px-6 md:px-8 lg:px-0 font-bold text-center">
      <div className="flex flex-col items-center justify-center w-full space-y-4 md:space-y-6">
        <h3 className="sm:text-6xl md:text-9xl lg:text-[11rem]">
          <DecryptedText
            text="PLEASURE NDHLOVU"
            animateOn="view"
            revealDirection="start"
            sequential
            speed={10}
            useOriginalCharsOnly={false}
          />
        </h3>
        <h3 className="flex flex-col md:flex-col lg:flex-row items-center text-4xl sm:text-5xl md:text-4xl lg:text-9xl font-bold text-gray-300">
          <DecryptedText
            text="SOFTWARE"
            animateOn="view"
            revealDirection="start"
            useOriginalCharsOnly={false}
          />
          <RotatingText
            texts={['ENGINEER', 'DEVELOPER', 'AUTOMATER', 'CI/CD LOVER', 'DESIGNER']}
            mainClassName="mt-2 lg:mt-0 lg:ml-3 px-2 sm:px-3 md:px-4 lg:px-5 bg-red-600 text-white overflow-hidden sm:py-1.5 md:py-2 lg:py-3 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.05}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
          />
        </h3>
        <p className="text-base sm:text-lg md:text-base lg:text-lg leading-relaxed text-gray-400">
          <DecryptedText
            text="Delivering Software With Precision, Tested For Reliability And Built To Scale."
            animateOn="view"
            revealDirection="start"
            sequential
            speed={10}
            useOriginalCharsOnly={false}
          />
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
