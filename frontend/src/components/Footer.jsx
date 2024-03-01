import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaInstagram, FaReddit } from "react-icons/fa";

const Product = [
    {
        title: 'Overview',
        link: ''
    },
    {
        title: 'Features',
        link: ''
    }
];
const Company = [
    {
        title: 'About Us',
        link: ''
    },
    {
        title: 'Contact Us',
        link: ''
    }
];

const Footer = () => {

    const isUserLoggedIn = localStorage.getItem('token') ? true : false;

    return (
        <div className="w-full h-fit bg-gray-900 text-white flex flex-col items-center justify-center gap-16 py-6 mt-8">
            {
                !isUserLoggedIn ?
                    <div className="w-full flex items-start justify-around">
                        <img className='w-36' src="images/logo-white.png" alt="" />
                        <div className='w-fit flex items-center justify-center gap-8 lg:gap-16'>
                            <div className="flex flex-col items-start gap-4">
                                <div className='text-xl'>
                                    Product
                                </div>
                                <div className="flex flex-col items-start gap-1">
                                    {
                                        Product.map((list) => {
                                            return (
                                                <Link to={list.link}>
                                                    <div className='text-base text-gray-500'>{list.title}</div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <div className='text-xl'>
                                    Company
                                </div>
                                <div className="flex flex-col items-start gap-1">
                                    {
                                        Company.map((list) => {
                                            return (
                                                <Link to={list.link}>
                                                    <div className='text-base text-gray-500'>{list.title}</div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div> : ""
            }
            <div className="w-full flex items-center justify-around">
                <div className='text-sm font-extralight'>
                    &copy; 2024 All rights reserved
                </div>
                {
                    !isUserLoggedIn ?
                        <div className='text-2xl flex items-center justify-center gap-4 lg:gap-8'>
                            <Link><FaFacebook /></Link>
                            <Link><FaWhatsapp /></Link>
                            <Link><FaInstagram /></Link>
                            <Link><FaReddit /></Link>
                        </div> : ''
                }
            </div>
        </div>
    );
};

export default Footer;
