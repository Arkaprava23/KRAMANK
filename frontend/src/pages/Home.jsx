import React from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Home/Hero';
import WhyUs from '../components/Home/WhyUs';

const Home = () => {
    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center">
                <Hero />
                <WhyUs />
            </div>
        </MainLayout>
    );
};

export default Home;
