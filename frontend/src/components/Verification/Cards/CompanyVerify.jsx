import CompanyModal from '../Modals/CompanyModal'

const CompanyVerify = () => {
  return (
    <div className="w-[23rem] bg-white border  border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
				<div className="flex flex-col items-center pb-10 pt-10">
					<img
						className="w-24 h-24 mb-3 rounded-full shadow-lg"
						src="/images/building.jpg"
						alt="Bonnie image"
					/>
					<h5 className="mb-1 text-2xl font-semibold font-sans text-gray-600 dark:text-white">
						Company details
					</h5>

					<div className="flex mt-4 md:mt-6 w-[70%]">
						<CompanyModal/>
					</div>
				</div>
			</div>
  )
}

export default CompanyVerify