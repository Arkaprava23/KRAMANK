import React from 'react';

const CategoryCard = ({image, name}) => {
    return(
        <div className="min-w-[16rem] flex flex-col items-center p-4 border border-solid border-gray-900 rounded-lg gap-3 mb-2">
            <img className='w-full' src={`images/${image}`} alt="" />
            <div className="w-full flex flex-col items-start gap-2 bg-gray-900 text-white p-3 rounded-md">
                <div className="w-full text-xl font-semibold">
                    {name}
                </div>
                <button className='w-full border border-solid border-white py-2 px-4 whitespace-nowrap hover:bg-white hover:text-gray-900 font-medium hover:font-semibold'>
                    Check out
                </button>
            </div>
        </div>
    )
}

const Categories = () => {
    return (
        <>
            <div id='categories'>&emsp;</div>
            <div className="w-full h-fit flex flex-col items-center gap-6 m-16">
                <div className="w-full text-center text-3xl lg:text-4xl font-bold">
                    6+ Categories
                </div>
                <div className="w-[90%] lg:w-[95%] flex items-center justify-start gap-6 overflow-x-scroll">
                    <CategoryCard image='catFruit.png' name="Fresh fruits" />
                    <CategoryCard image='catJuice.png' name="Fresh juice" />
                    <CategoryCard image='catSnacks.png' name="Delicious snacks" />
                    <CategoryCard image='catSweets.png' name="Sweets & Desserts" />
                    <CategoryCard image='catRest.png' name="Daily essentials" />
                    <CategoryCard image='catGift.png' name="Exciting gifts" />
                    <CategoryCard image='catFruit.png' name="Fresh fruits" />
                </div>
            </div>
        </>
    );
};

export default Categories;
