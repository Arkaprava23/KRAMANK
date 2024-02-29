import  { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const LoginForm = () => {
	const navigate=useNavigate();
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});

	const validator = async () => {
		let isValid = true;
		const emailPattern = /^\S+@\S+\.\S+$/;
		if (!emailPattern.test(email)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				email: "Invalid email address.",
			}));
			isValid = false;
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				email: "",
			}));
		}

		// Password validation
		const passwordRegex =
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
		if (!passwordRegex.test(password)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				password:
					"Password must be at least 8 characters long and contain at least one special character, one digit, and one letter",
			}));
			isValid = false;
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				password: "",
			}));
		}

		return isValid;
	};
	const handleLogin = async (e) => {
		
		e.preventDefault();
		let isValid = validator();

		if (isValid) {
			try {
				setLoading(true);
				const userData = {
					email,
					password,
				};

				console.log(userData);
				const response = await axios.post(
					"http://localhost:5050/login",
					userData
				);

				if (response.status === 200) {
					const { token } =
						await response.data;
					console.log(token);
					localStorage.setItem("token", token);
					navigate("/products");
				} else if (response.status === 202) {
					toast.error("user not found");
				} else if (response.status === 203) {
					toast.error("Invalid password");
				}
			} catch (error) {
				toast.error("Check the credentials");
			} finally {
				setLoading(false);
			}
		}
	};
	return (
		<section className="flex items-center justify-center gradient-form h-screen bg-neutral-200 dark:bg-neutral-700">
			<div className="container h-full p-10">
				<div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
					<div className="w-full">
						<div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
							<div className="g-0 lg:flex lg:flex-wrap">
								<div className="px-4 md:px-0 lg:w-6/12">
									<div className="md:mx-6 md:p-12">
										<div className="text-center">
											<img
												className="mx-auto w-48"
												src="/images/logo.png"
												alt="logo"
											/>
											<h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
												Welcome back to Kramank
											</h4>
										</div>

										<form
											onSubmit={handleLogin}
											className="flex flex-col gap-8"
										>
											<p className="">Please login to your account</p>

											<div className="relative h-11 w-full min-w-[200px]">
												<input
													placeholder="Email"
													type="text"
													className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
													required
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													disabled={loading}
												/>
												<label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
													Email
												</label>
												{errors.email && (
													<p className="text-red-500 text-xs">{errors.email}</p>
												)}
											</div>
											<div className="relative h-11 w-full min-w-[200px]">
												<input
													placeholder="Password"
													type="password"
													className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
													required
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													disabled={loading}
												/>
												<label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
													Password
												</label>
												{errors.password && (
													<p className="text-red-500 text-xs">
														{errors.password}
													</p>
												)}
											</div>

											<div className="mt-4 mb-12 pb-1 pt-1 text-center">
												<button
													className="bg-gray-900 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
													type="submit"
													data-te-ripple-init
													data-te-ripple-color="light"
												>
													Log in
												</button>

												<a href="/forgot-password">Forgot password?</a>
											</div>

											<div className="flex items-center justify-between pb-6">
												<p className="mb-0 mr-2">{`Don't`} have an account?</p>
												<button
													type="button"
													className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
													data-te-ripple-init
													data-te-ripple-color="light"
												>
													<a href="/signup">Register</a>
												</button>
											</div>
										</form>
									</div>
								</div>

								<div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gray-900">
									<div className="px-4 py-6 text-white md:mx-6 md:p-12">
										<h4 className="mb-6 text-xl font-semibold">
											We are more than just a company
										</h4>
										<p className="text-sm">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginForm;
