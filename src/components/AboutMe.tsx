import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div className='text-center ml-4 mr-4 w-[90%]'>
            <h3 className="text-3xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-tight whitespace-nowrap overflow-hidden font-bold"> 
                About Me
            </h3>
            <div className="w-[25%] h-1 bg-red-500 mb-3 mx-auto"></div>
            <p className='text-center mx-auto text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium leading-relaxed'>
                I have over 4 years of experience developing globally used software, with hands-on experience in the iGaming industry. I’m a strong advocate for test automation and build performance-driven, scalable systems designed for reliability and growth.
            </p>
        </div>
    )
}

export default AboutMe;
