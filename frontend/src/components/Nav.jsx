import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const navigate = useNavigate();

    const isUserLoggedIn = localStorage.getItem('token') ? true : false;

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-white flex items-center justify-around p-4">
            <img className='w-40' src="images/logo.png" alt="" />
            {
                !isUserLoggedIn ?
                    <div className="hidden lg:flex items-center justify-center gap-8">
                        <Link to={"/"}>Home</Link>
                        <Link onClick={() => window.location.replace("/#categories")}>Categories</Link>
                        <Link onClick={() => window.location.replace("/#features")}>Features</Link>
                    </div> :
                    <div className="w-fit">

                    </div>
            }
            <div className="hidden lg:flex items-center justify-center gap-8">
                {
                    isUserLoggedIn ?
                        <>
                            <BsCart3 className='text-xl cursor-pointer' />
                            <button className='bg-transparent text-gray-900 hover:text-red-600 border border-solid border-gray-900 hover:border-red-600 py-2 px-4' onClick={handleLogout}>
                                logout
                            </button>
                        </>
                        :
                        <button className='bg-gray-900 hover:bg-blue-gray-800 text-white py-2 px-4' onClick={() => navigate("/login")}>
                            login
                        </button>
                }
            </div>
            <div className="flex lg:hidden items-center justify-center gap-8">
                {
                    isUserLoggedIn ?
                        <>
                            <BsCart3 className='text-xl cursor-pointer' />
                        </> : ''
                }
                {
                    isUserLoggedIn ?
                        <button className='bg-transparent text-gray-900 hover:text-red-600 border border-solid border-gray-900 hover:border-red-600 py-2 px-4' onClick={handleLogout}>
                            logout
                        </button>
                        :
                        <button className='bg-gray-900 hover:bg-blue-gray-800 text-white py-2 px-4' onClick={() => navigate("/login")}>
                            login
                        </button>
                }
            </div>
            {/* <Drawer open={open} onClose={closeDrawer} className="flex flex-col items-start gap-8 p-4">
                <div className="mb-2 w-full flex items-center justify-between">
                    <div className='text-xl'>
                        Welcome,
                    </div>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <Link to={"/"}>Home</Link>
                    <Link onClick={() => window.location.replace("/#categories")}>Categories</Link>
                    <Link onClick={() => window.location.replace("/#features")}>Features</Link>
                </div>
                <div className="w-full flex items-center gap-2">
                    {
                        isUserLoggedIn ?
                            <button className='bg-transparent text-gray-900 hover:text-red-600 border border-solid border-gray-900 hover:border-red-600 py-2 px-4' onClick={handleLogout}>
                                logout
                            </button>
                            :
                            <button className='bg-gray-900 hover:bg-blue-gray-800 text-white py-2 px-4' onClick={() => navigate("/login")}>
                                login
                            </button>
                    }
                </div>
            </Drawer> */}
        </div>
    );
};

export default NavBar;
