import React from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Home/Hero';
import WhyUs from '../components/Home/WhyUs';
import Working from '../components/Home/Working';

const Home = () => {
    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center">
                <Hero />
                <WhyUs />
                <Working />
            </div>
        </MainLayout>
    );
};

export default Home;
