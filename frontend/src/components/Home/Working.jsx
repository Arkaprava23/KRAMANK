import React from 'react';

const Working = () => {
    return (
        <>
            <div id=''>&emsp;</div>
            <div className="w-full h-fit flex flex-col items-center gap-6 m-16 mb-32">
                <div className="w-full text-center text-3xl lg:text-4xl font-bold">
                    How it works?
                </div>
                <div className="w-[80%] lg:w-[40%] flex flex-col items-center gap-4">
                    <div className="w-full flex items-center justify-start gap-2">
                        <div className='text-xl py-2 px-4 rounded-[50%] text-white font-semibold bg-gray-900'>1</div>
                        <div className='text-xl font-semibold text-gray-900'>
                            Create an account and complete company setup
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2">
                        <div className='text-xl py-2 px-4 rounded-[50%] text-white font-semibold bg-gray-900'>2</div>
                        <div className='text-xl font-semibold text-gray-900'>
                            Shop from variety of option
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2">
                        <div className='text-xl py-2 px-4 rounded-[50%] text-white font-semibold bg-gray-900'>3</div>
                        <div className='text-xl font-semibold text-gray-900'>
                            Choose your preferred slot for next day delivery
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2">
                        <div className='text-xl py-2 px-4 rounded-[50%] text-white font-semibold bg-gray-900'>4</div>
                        <div className='w-full text-xl font-semibold text-gray-900'>
                            Pay using Credit card, Debit card, NetBanking or UPI.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Working;
