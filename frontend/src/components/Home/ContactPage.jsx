const faqs = [
	{
		question: "Why is KRAMANK good for my company's operations?",
		answer: [
			"We provide access to a large catalogue of products that you can search / order quickly.",
			"A single vendor for all the products companies need, we can fulfill them all.",
			"Our prices are competitive and our deliveries are on time.",
		],
	},
	{
		question: "I run a Company. Can I purchase from Kramank?",
		answer: [
			"Absolutely. Kramank is open to anyone that runs a Company, regardless of whether you operate from a single branch or a 100’s of branches(or something in between).",
		],
	},
	{
		question: "What modes of payment are accepted on Kramank?",
		answer: [
			"We accept online payments through netbanking, credit cards, debit cards, and UPI.",
		],
	},
	{
		question:
			"What do I do in the event that there are issues with incorrect billing or delivery?",
		answer: [
			"In the event of faulty delivery or any billing related issues, please get in touch with our support team via help@kramank.com and we'll help you resolve the problem at earliest.",
		],
	},
	{
		question: "Can I return an item once it has been purchased?",
		answer: [
			"Any items you want to return (due to quality concerns or anything else) need to be returned at the time of delivery. We do not accept returns once the item has been claimed by the restaurant.",
		],
	},
];

const ContactUs = () => {
	return (
		<div className="w-[90%] lg:w-full h-fit flex flex-col items-center gap-6">
			<h1 className="w-full text-center text-2xl lg:text-3xl font-bold">
				Frequently Asked Questions
			</h1>

			<ul className="max-w-2xl mx-auto divide-y shadow bg-white rounded-xl">
				{faqs.map((faq, index) => (
					<li key={index} className="mb-4">
						<details className="group">
							<summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
								<svg
									className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
									></path>
								</svg>
								<span className="text-lg text-gray-900 font-semibold">{faq.question}</span>
							</summary>
							<article className="px-4 pb-4">
								<ul className="list-disc list-inside">
									{faq.answer.map((item, index) => (
										<li key={index} className="mb-2 text-gray-600">
											{item}
										</li>
									))}
								</ul>
							</article>
						</details>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContactUs;
