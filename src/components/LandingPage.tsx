import React, { useState } from 'react';
// import AnimatedBorderAvatar from './AnimatedBorderAvatar';
import DecryptedText from './DecryptedText';
import RotatingText from './RotatingText';
import ContactModal from './ContactModal';

const LandingPage: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/src/files/sample.pdf';
    link.download = 'Pleasure_Ndhlovu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="flex flex-col items-center justify-between w-full px-4 sm:px-6 md:px-8 font-bold"
      style={{ height: "calc(100vh - var(--navbar-height))" }}
    >
      {/* Spacer to push content to center */}
      <div></div>
      
      <div className="flex flex-col items-center w-[90%] max-w-full space-y-3 sm:space-y-4 md:space-y-6">
        <h3 className="text-center text-[min(8vw,60px)] sm:text-[min(10vw,100px)] md:text-[min(8vw,140px)] lg:text-[min(6vw,160px)] leading-tight whitespace-nowrap w-full min-w-max">
          <span className="whitespace-nowrap"><DecryptedText
            text="PLEASURE NDHLOVU"
            animateOn="view"
            revealDirection="start"
            sequential
            speed={10}
            useOriginalCharsOnly={false}
          /></span>
        </h3>
        <h3 className="flex flex-row flex-nowrap items-center justify-center text-center text-[3vw] sm:text-[4vw] md:text-[3.5vw] font-bold leading-tight">
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
        <h3 className="text-center text-[3vw] sm:text-[2.5vw] md:text-[2vw] font-medium leading-relaxed max-w-4xl px-2">
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
          <button 
            onClick={handleDownloadResume}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs sm:text-sm font-medium text-heading group bg-gradient-to-r from-blue-500 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 w-30 sm:w-auto cursor-pointer"
          >
            <span className="relative px-3 sm:px-6 py-2 sm:py-3 transition-all ease-in duration-75 bg-neutral-primary-soft group-hover:bg-transparent group-hover:dark:bg-transparent leading-5 text-center">
              Resume
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs sm:text-sm font-medium text-heading group bg-gradient-to-r from-red-500 to-red-500 group-hover:from-red-500 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 w-30 sm:w-auto" onClick={() => setContactOpen(true)}>
            <span className="relative px-3 sm:px-6 py-2 sm:py-3 transition-all ease-in duration-75 bg-neutral-primary-soft group-hover:bg-transparent group-hover:dark:bg-transparent leading-5 text-center">
              Contact Me
            </span>
          </button>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      
      {/* Mouse Scroll Indicator */}
      <div
        className="flex flex-col items-center space-y-2 mb-20"
        style={{ animation: "bounce 2s infinite" }}
      >
        <svg 
          className="w-6 h-8 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 3v0a4 4 0 014 4v10a4 4 0 01-8 0V7a4 4 0 014-4v0z"
          />
          <circle cx="12" cy="7" r="1" fill="currentColor" className="animate-pulse"/>
        </svg>
        <div className="text-xs text-white">Scroll For More</div>
      </div>
    </div>
  );
};

export default LandingPage;
