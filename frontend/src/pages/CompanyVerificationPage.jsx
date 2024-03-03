import React from "react";
import NavBar from "../components/Nav";
import PersonalVerify from "../components/Verification/Cards/PersonalVerify";
import CompanyVerify from "../components/Verification/Cards/CompanyVerify";
import GstVerify from "../components/Verification/Cards/GstVerify";

const CompanyVerificationPage = () => {
	return (
		<>
			<NavBar bgwhite={true} />
			<div
				style={{
					backgroundImage: `url('/images/verifyImage.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
				className="h-screen bg-white"
			>
				<div>
					<p className="lg:pt-32 lg:py-20 lg:mt-8 lg:px-48 py-36 pl-6 pr-16 text-white">
						<span className="text-4xl font-semibold">Complete 
            <br />company setup</span>
            <br />

						<span className="text-2xl text-gray-300">to place orders and get full experience</span>
					</p>
				</div>

        <div className="flex lg:flex-row md:flex-row flex-col gap-10 justify-center items-center mt-6">
          <PersonalVerify/>
          <CompanyVerify/>
          <GstVerify/>
        </div>
			</div>
		</>
	);
};

export default CompanyVerificationPage;
