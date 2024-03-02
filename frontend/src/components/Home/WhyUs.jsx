import React from 'react';
import { MdSentimentVerySatisfied } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const WhyUs = () => {
    return (
        <>
            <div id='features'>&emsp;</div>
            <div className="w-full h-fit flex flex-col items-center gap-6 m-16">
                <div className="w-full text-center text-3xl lg:text-4xl font-bold">
                    Why choose Kramank?
                </div>
                <div className='flex flex-wrap items-center justify-center gap-6 lg:gap-16 py-10'>
                    <div className="w-[85%] lg:w-fit py-12 px-28 flex flex-col items-center gap-1 rounded-xl shadow-[#FFD700_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <MdSentimentVerySatisfied className='text-8xl mb-4' />
                        <div className='text-2xl font-semibold'>Quality</div>
                        <div className='text-xl font-medium'>Consistency</div>
                    </div>
                    <div className="w-[85%] lg:w-fit py-12 px-28 flex flex-col items-center gap-1 rounded-xl shadow-[#FFD700_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <FaUser className='text-8xl mb-4' />
                        <div className='text-2xl font-semibold whitespace-nowrap'>Single Vendor</div>
                        <div className='text-xl font-medium'>Marketplace</div>
                    </div>
                    <div className="w-[85%] lg:w-fit py-12 px-28 flex flex-col items-center gap-1 rounded-xl shadow-[#FFD700_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <MdDeliveryDining className='text-8xl mb-4' />
                        <div className='text-2xl font-semibold'>Next Day</div>
                        <div className='text-xl font-medium'>Delivery</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyUs;
