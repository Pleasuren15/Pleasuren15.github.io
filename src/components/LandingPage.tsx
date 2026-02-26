import React from 'react';
// import AnimatedBorderAvatar from './AnimatedBorderAvatar';
import DecryptedText from './DecryptedText';
import RotatingText from './RotatingText';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[40vh] sm:min-h-[55vh] pt-12 sm:pt-16 px-4 sm:px-6 md:px-8 lg:px-0 font-bold">
      <div className="flex flex-col justify-center w-full max-w-7xl space-y-3 sm:space-y-4 md:space-y-6">
        <h3 className="text-center text-3xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-tight whitespace-nowrap overflow-hidden">
          <DecryptedText
            text="PLEASURE NDHLOVU"
            animateOn="view"
            revealDirection="start"
            sequential
            speed={10}
            useOriginalCharsOnly={false}
          />
        </h3>
        <h3 className="flex flex-row flex-nowrap items-center justify-center text-center text-2xl sm:text-4xl md:text-5xl lg:text-9xl font-bold leading-tight">
          <DecryptedText
            text="SOFTWARE"
            animateOn="view"
            revealDirection="start"
            useOriginalCharsOnly={false}
          />
          <RotatingText
            texts={['ENGINEER', 'DEVELOPER', 'AUTOMATER', 'DESIGNER']}
            mainClassName="ml-1 sm:ml-2 lg:ml-3 px-1 sm:px-3 md:px-4 lg:px-5 bg-red-600 text-white overflow-hidden text-sm sm:text-base md:text-lg lg:text-inherit py-0.5 sm:py-1.5 md:py-2 lg:py-3 justify-center whitespace-nowrap flex-shrink-0"
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
        <h3 className="text-center text-sm sm:text-xl md:text-2xl lg:text-4xl font-medium leading-relaxed max-w-4xl px-2">
          <DecryptedText
            text="Delivering Software With Precision, Tested For Reliability And Built To Scale."
            animateOn="view"
            revealDirection="start"
            sequential
            speed={10}
            useOriginalCharsOnly={false}
          />
        </h3>
        <div className='flex flex-row gap-2 sm:gap-4 justify-center mt-4 sm:mt-6'>
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs sm:text-sm font-medium text-heading group bg-gradient-to-r from-blue-500 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 w-30 sm:w-auto">
            <span className="relative px-3 sm:px-6 py-2 sm:py-3 transition-all ease-in duration-75 bg-neutral-primary-soft group-hover:bg-transparent group-hover:dark:bg-transparent leading-5 text-center">
              Resume
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs sm:text-sm font-medium text-heading group bg-gradient-to-r from-red-500 to-red-500 group-hover:from-red-500 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 w-30 sm:w-auto">
            <span className="relative px-3 sm:px-6 py-2 sm:py-3 transition-all ease-in duration-75 bg-neutral-primary-soft group-hover:bg-transparent group-hover:dark:bg-transparent leading-5 text-center">
              Contact Me
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
