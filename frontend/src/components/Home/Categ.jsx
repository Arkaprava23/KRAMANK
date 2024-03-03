import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const CategoryCard = ({ image, name, link, linksHidden, dark }) => {

    const navigate = useNavigate();

    return (
        <div className={`min-w-[16rem] flex flex-col items-center p-4 border border-solid border-gray-900 rounded-lg gap-3 mb-2 ${dark ? 'bg-gray-900' : ''}`} >
            {
                linksHidden ?
                    <img className='w-full' src={`images/${image}`} alt="" />
                    : <HashLink to={link} smooth>
                        <img className='w-full rounded-[50%]' src={`../images/${image}`} alt="" />
                    </HashLink>
            }
            <div className={`w-full flex flex-col items-start gap-2 ${dark ? 'bg-white' : 'bg-gray-900'} ${dark ? 'text-gray-900' : 'text-white'} p-3 rounded-md`}>
                <div className="w-full text-xl font-semibold">
                    {name}
                </div>
                {/* <button className='w-full border border-solid border-white py-2 px-4 whitespace-nowrap hover:bg-white hover:text-gray-900 font-medium hover:font-semibold'>
                    Check out
                </button> */}
            </div>
        </div>
    )
}

const Categories = ({ linksHidden, labelName }) => {
    const flexContainerRef = useRef(null);
    const [scrolling, setScrolling] = useState(true);

    useEffect(() => {
        const flexContainer = flexContainerRef.current;
        let scrollInterval;

        const startScrolling = () => {
            scrollInterval = setInterval(() => {
                if (scrolling) {
                    if (flexContainer.scrollLeft < flexContainer.scrollWidth - flexContainer.clientWidth) {
                        flexContainer.scrollLeft += 1;
                    } else {
                        flexContainer.scrollLeft = 0;
                    }
                }
            }, 10);
        };
        startScrolling();
        return () => clearInterval(scrollInterval);
    }, [scrolling]);

    return (
        <>
            <div id='categories'>&emsp;</div>
            <div className="w-full h-fit flex flex-col items-center gap-6 m-16">
                <div className="w-full text-center text-3xl lg:text-4xl font-bold">
                    {labelName}
                </div>
                <div className="w-[90%] lg:w-[95%] flex items-center justify-start gap-6 overflow-auto scrollDiv" ref={flexContainerRef} >
                    <CategoryCard image='allCat.png' name="All products" link=".#all-products" linksHidden={linksHidden} dark={true} />
                    <CategoryCard image='catFruit.png' name="Fresh fruits" link=".#fresh-fruits" linksHidden={linksHidden} />
                    <CategoryCard image='catJuice.png' name="Fresh juice" link="#fresh-juices" linksHidden={linksHidden} />
                    <CategoryCard image='catSnacks.png' name="Delicious snacks" link="" linksHidden={linksHidden} />
                    <CategoryCard image='catSweets.png' name="Sweets & Desserts" link="" linksHidden={linksHidden} />
                    <CategoryCard image='catRest.png' name="Daily essentials" link="" linksHidden={linksHidden} />
                    <CategoryCard image='catGift.png' name="Exciting gifts" link="" linksHidden={linksHidden} />
                    <CategoryCard image='catFruit.png' name="Fresh fruits" link="" linksHidden={linksHidden} />
                </div>
            </div>
        </>
    );
};

export default Categories;
