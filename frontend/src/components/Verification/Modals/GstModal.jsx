import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaLock } from "react-icons/fa";

const GstModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [gstNo, setGstNo] = useState("");
	const [verificationStatus, setVerificationStatus] = useState("");
	const [verificationResult, setVerificationResult] = useState(null);

	const handleSubmit = async () => {
		try {
			setVerificationStatus("Verifying...");
			const response = await fetch(
				`https://api.gst.gov.in/services/taxpayer/searchByGSTIN?gstin=${gstNo}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer YOUR_AUTH_TOKEN", // Replace YOUR_AUTH_TOKEN with your actual token
					},
				}
			);
			const data = await response.json();
			if (data.error) {
				throw new Error(data.error.message);
			}
			setVerificationResult(data);
			setVerificationStatus("Verified");
		} catch (error) {
			toast.error("GST verification failed");
			setVerificationStatus("Failed to verify");
		}
	};

	return (
		<>
			<button
				onClick={onOpen}
				className="w-full flex items-center justify-center px-4 py-2 text-lg font-medium text-white bg-gray-200 rounded-lg hover:bg-gray-100"
			>
				<FaLock className="text-gray-400 text-2xl" />
			</button>

			<Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
				<ModalOverlay />
				<ModalContent borderRadius="xl" bgColor="white" boxShadow="lg">
					<ModalHeader fontSize="2xl" fontWeight="bold" color="gray.900">
						Verify GST Number
					</ModalHeader>
					<ModalCloseButton color="gray.500" />
					<ModalBody>
						<form className="flex flex-col gap-6 w-full items-center justify-center mx-auto">
							<div className="relative w-full min-w-[200px] h-11">
								<input
									className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
									type="text"
									required
									onChange={(e) => setGstNo(e.target.value)}
									placeholder=" "
								/>
								<label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
									Enter GST No
								</label>
							</div>
						</form>
					</ModalBody>

					<ModalFooter>
						<button
							onClick={handleSubmit}
							className="px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-800"
							disabled={!gstNo}
						>
							{verificationStatus || "Verify"}
						</button>
					</ModalFooter>

					{verificationResult && (
						<ModalBody>
							<p>GST Number: {verificationResult.gstin}</p>
							<p>Legal Name: {verificationResult.lgnm}</p>
							<p>State Jurisdiction: {verificationResult.pradr.addr.st}</p>
							{/* Add more details as needed */}
						</ModalBody>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default GstModal;
