import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div className='text-center ml-4 mr-4'>
            <h3 className="text-3xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-tight whitespace-nowrap overflow-hidden font-bold"> 
                About Me
            </h3>
            <div className="w-[25%] h-1 bg-red-500 mb-3 mx-auto"></div>
            <p className='text-center'>
                I am a software engineer with a passion for building scalable and efficient applications. With experience in various programming languages and frameworks, I enjoy tackling complex problems and delivering high-quality solutions. I am always eager to learn new technologies and stay updated with industry trends to continuously improve my skills and contribute to impactful projects.
            </p>
        </div>
    )
}

export default AboutMe;
