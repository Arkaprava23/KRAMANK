import React from 'react';

const Hero = () => {
    return (
        <div className='mt-8 w-full h-screen p-8 flex flex-col items-center justify-center bg-gradient-to-b from-gray-300 to-stone-50 gap-8'>
            <div className="w-[100%] lg:w-[70%] text-center text-2xl lg:text-3xl font-semibold">2000+ Products • 10 Categories</div>
            <div className="w-[100%] lg:w-[70%] text-center text-4xl lg:text-6xl font-bold leading-[1.3]">
                All your corporate needs delivered next day.
            </div>
            <button className='bg-gray-900 hover:bg-blue-gray-800 text-white text-xl lg:text-2xl py-4 px-6'>
                Order now
            </button>
        </div>
    );
};

export default Hero;
