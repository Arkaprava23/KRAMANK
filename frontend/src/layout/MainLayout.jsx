import React from 'react';
import NavBar from '../components/Nav';
import Footer from '../components/Footer';

const MainLayout = ({children}) => {
    return (
        <div className="w-full flex flex-col items-center justify-start">
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
