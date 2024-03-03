import React from 'react';
import MainLayout from '../layout/MainLayout';
import Hero from '../components/Home/Hero';
import WhyUs from '../components/Home/WhyUs';
import Working from '../components/Home/Working';
import Categories from '../components/Home/Categ';
import ContactUs from '../components/Home/ContactPage';

const Home = () => {
    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center gap-24">
                <Hero />
                <Categories linksHidden={true} labelName="Categories" />
                <WhyUs />
                <Working />
                <ContactUs />
            </div>
        </MainLayout>
    );
};

export default Home;
