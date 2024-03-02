import React from "react";
import NavBar from "../components/Nav";
import PersonalVerify from "../components/Verification/PersonalVerify";

const CompanyVerificationPage = () => {
  return (
    <div className="">
      <NavBar />

      <div className="flex flex-col md:flex-row gap-6 items-center justify-center my-48  mx-auto">
        <PersonalVerify />
        <PersonalVerify />
        <PersonalVerify />
      </div>
    </div>
  );
};

export default CompanyVerificationPage;
