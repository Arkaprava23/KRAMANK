import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { IoHeartOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlineMail, AiOutlineWallet } from "react-icons/ai";
import { VscNewFile } from "react-icons/vsc";
import { IoCallOutline } from "react-icons/io5";
import {
    Drawer,
} from "@material-tailwind/react";

const NavBar = () => {

    const [openRight, setOpenRight] = React.useState(false);

    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    const navigate = useNavigate();

    const isUserLoggedIn = localStorage.getItem('token') ? true : false;

    const name = localStorage.getItem('name') ? localStorage.getItem('name') : 'Guest';

    const handleLogout = () => {
        localStorage.clear();
        setOpenRight(false);
        navigate("/");
        window.location.reload();
    }

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between p-4 transition duration-30 ${scrolling ? 'bg-white' : 'bg-transparent'}`}>
            {
                !isUserLoggedIn ?
                    <div className="w-full flex flex-col items-center">
                        {
                            scrolling ?
                                <div className="w-full flex items-center justify-between">
                                    <img className='w-48' src="images/logo.png" alt="" />
                                    <button className={`py-2 px-6 rounded-[2rem] font-semibold text-xl bg-gray-900 hover:bg-gray-800 text-white`} onClick={() => navigate("/login")}>
                                        login / signup
                                    </button>
                                </div>
                                : <img className='w-56' src="images/logo-white.png" alt="" />
                        }
                    </div>
                    :
                    <>
                        <img className='w-56' src="images/logo.png" alt="" />
                        <div className="hidden lg:flex items-center justify-center gap-6">
                            {
                                isUserLoggedIn ?
                                    <>
                                        <BsCart3 className='text-xl cursor-pointer' />
                                        <IoHeartOutline className='text-2xl cursor-pointer' />
                                        <BsBell className='text-xl cursor-pointer' />
                                        <GrMenu className='text-xl cursor-pointer' onClick={openDrawerRight} />

                                    </>
                                    :
                                    <button className={`py-3 px-6 rounded-[2rem] font-semibold text-xl ${scrolling ? 'bg-gray-900 hover:bg-gray-800 text-white' : 'bg-white hover:bg-blue-gray-100 text-gray-900'}`} onClick={() => navigate("/login")}>
                                        login / signup
                                    </button>
                            }
                        </div>
                        <div className="flex lg:hidden items-center justify-center gap-4">
                            {
                                isUserLoggedIn ?
                                    <>
                                        <BsCart3 className='text-xl cursor-pointer' />
                                        <IoHeartOutline className='text-2xl cursor-pointer' />
                                        <BsBell className='text-xl cursor-pointer' />
                                        <GrMenu className='text-xl cursor-pointer' onClick={openDrawerRight} />

                                    </>
                                    :
                                    ''
                            }
                        </div>
                        <Drawer
                            placement="right"
                            open={openRight}
                            onClose={closeDrawerRight}
                            className="p-4"
                        >
                            <div className="w-full flex flex-col items-start justify-evenly gap-8">
                                <div className="w-full flex items-center justify-between">
                                    <div className='text-gray-900 text-lg font-semibold'>Welcome {name},</div>
                                    <AiOutlineClose className='text-xl cursor-pointer' onClick={closeDrawerRight} />
                                </div>

                                <div className="w-full border-b-2 border-gray-800 -my-4"></div>

                                <div className="w-full flex flex-col items-start gap-3">
                                    <div className="w-full text-left text-gray-700 text-base font-medium">ORDERS & STATEMENTS</div>
                                    <div className="w-full flex flex-col items-start gap-2 border border-solid border-gray-500 p-2 rounded-md">
                                        <button className='w-full border-none flex items-center justify-start gap-2 p-1.5 bg-blue-gray-50 rounded-md'>
                                            <RiShoppingBag3Line className='text-xl' />
                                            <div className='text-gray-900 text-base whitespace-nowrap'>Your Orders</div>
                                        </button>
                                        <button className='w-full border-none flex items-center justify-start gap-2 p-1.5 bg-blue-gray-50 rounded-md'>
                                            <AiOutlineMail className='text-xl' />
                                            <div className='text-gray-900 text-base whitespace-nowrap'>Email Statement</div>
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-col items-start gap-3">
                                    <div className="w-full text-left text-gray-700 text-base font-medium">WALLET & PAYMENT</div>
                                    <div className="w-full flex flex-col items-start gap-2 border border-solid border-gray-500 p-2 rounded-md">
                                        <button className='w-full border-none flex items-center justify-start gap-2 p-1.5 bg-blue-gray-50 rounded-md'>
                                            <AiOutlineWallet className='text-xl' />
                                            <div className='text-gray-900 text-base whitespace-nowrap'>kramank Wallet</div>
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-col items-start gap-3">
                                    <div className="w-full text-left text-gray-700 text-base font-medium">MORE</div>
                                    <div className="w-full flex flex-col items-start gap-2 border border-solid border-gray-500 p-2 rounded-md">
                                        <button className='w-full border-none flex items-center justify-start gap-2 p-1.5 bg-blue-gray-50 rounded-md'>
                                            <VscNewFile className='text-xl' />
                                            <div className='text-gray-900 text-base whitespace-nowrap'>Request New Product</div>
                                        </button>
                                        <button className='w-full border-none flex items-center justify-start gap-2 p-1.5 bg-blue-gray-50 rounded-md'>
                                            <IoCallOutline className='text-xl' />
                                            <div className='text-gray-900 text-base whitespace-nowrap'>Contact Us & FAQs</div>
                                        </button>
                                    </div>
                                </div>

                                <button className='bg-transparent text-red-600 border border-solid border-red-600 py-2 px-6 rounded-[2rem]' onClick={handleLogout}>
                                    logout
                                </button>
                            </div>
                        </Drawer>
                    </>
            }
        </div>
    );
};

export default NavBar;
