import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const isUserLoggedIn = localStorage.getItem('token') ? true : false;

    return (
        <div id='home' className='w-full h-screen p-8 flex flex-col items-center justify-center bg-gradient-to-b from-gray-300 to-stone-50 gap-8 bg-cover bg-no-repeat' style={{backgroundImage: "url(images/homeBG.png"}}>
            <div className="w-[100%] text-white lg:w-[70%] text-center text-2xl lg:text-3xl font-semibold">2000+ Products • 6+ Categories</div>
            <div className="w-[100%] text-white lg:w-[70%] text-center text-4xl lg:text-6xl font-bold leading-[1.3]">
                All your corporate needs delivered next day.
            </div>
            <button className='bg-white hover:bg-blue-gray-800 text-gray-900 hover:text-white text-xl lg:text-2xl py-4 px-8 font-semibold rounded-[2rem]' onClick={() => navigate(isUserLoggedIn ? "/products" : "/login")}>
                Order Now
            </button>
        </div>
    );
};

export default Hero;
