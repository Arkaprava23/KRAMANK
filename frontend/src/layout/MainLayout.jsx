import React from 'react';
import NavBar from '../components/Nav';
import Footer from '../components/Footer';
import VerifyAlert from '../components/VerifyAlert';

const MainLayout = ({children}) => {
    const isUserLoggedIn = localStorage.getItem('token') ? true : false;

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow">{children}</div>
            <Footer />
            {
                isUserLoggedIn ? <VerifyAlert /> : ''
            }
        </div>
    );
};

export default MainLayout;