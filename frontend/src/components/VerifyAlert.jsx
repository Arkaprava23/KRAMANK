import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const VerifyAlert = () => {
    const navigate = useNavigate();

    const handleVerify = () => {
        navigate("/verify");
    }
    return (
        <div
            id="alert-additional-content-1"
            className=" fixed bottom-0 w-full p-4  text-white border bg-gray-900 dark:bg-gray-800 dark:text-white "
            role="alert"
        >
            <div className="flex gap-2 items-center">

                <FaCircleInfo className="text-lg text-gray-300" />
                <span className="sr-only">Info</span>
                <h3 className="text-lg font-medium">Verify your profile</h3>



            </div>
            <div className="mt-2 mb-4 text-sm">
                Enhance your credibility by verifying your profile. Verified profiles
                gain trust from others, enjoy increased visibility, and often access
                exclusive features.
            </div>
            <div className="flex">
                <button
                    type="button"
                    className=" text-gray-900 bg-white hover:bg-gray-900 hover:text-white border focus:ring-4 focus:outline-none  font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex gap-0.5 items-center "
                    onClick={handleVerify}
                >
                    <RiVerifiedBadgeFill />
                    Verify
                </button>
                <button
                    type="button"
                    className="text-white bg-transparent border  hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none  font-medium rounded-lg text-xs px-3 py-1.5 text-center "
                    data-dismiss-target="#alert-additional-content-1"
                    aria-label="Close"
                >
                    Dismiss
                </button>
            </div>
        </div>
    );
};

export default VerifyAlert;
