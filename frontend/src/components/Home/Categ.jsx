import React from 'react';

const CategoryCard = () => {
    return(
        <div className="w-fit">

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
                <div className="w-[90%] flex items-center flex-grow justify-start gap-4">
                    <CategoryCard />:
                </div>
            </div>
        </>
    );
};

export default Categories;
