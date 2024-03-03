import { MdVerifiedUser } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const VerifyAlert = () => {
	const navigate = useNavigate();

	const handleVerify = () => {
		navigate("/verify");
	};

	return (
		<div
			id="alert-additional-content-1"
			className=" fixed bottom-0 left-0 right-0 mx-auto w-full lg:w-2/6 md:w-2/4  p-4 bg-white border border-gray-500 rounded-full shadow-xl mb-4"
			role="alert"
		>
			<div className="flex items-center gap-2 justify-center w-full">
				<div className="flex items-center justify-center">
					<MdVerifiedUser className="text-4xl" />
				</div>
				<div className="text-sm text-gray-700">
					Complete your company setup to continue exploring
				</div>
				<div className="flex justify-center">
					<button
						type="button"
						onClick={() => navigate("/verify")}
						className="inline-flex items-center justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
					>
						Start
					</button>
				</div>
			</div>
		</div>
	);
};

export default VerifyAlert;
