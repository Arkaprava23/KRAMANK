import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";

const productDataApple = {
    productName: 'Apple',
    productImg: 'images/fruits/apple.jpg',
    productPrice: 100,
    pricePer: 'kg',
    minQuantity: 0,
    maxQuantity: 20,
    discount: [95, 20],
    discount1: [98, 10]
}

const productDataBanana = {
    productName: 'Banana',
    productImg: 'images/fruits/banana.jpg',
    productPrice: 8,
    pricePer: 'pc',
    minQuantity: 0,
    maxQuantity: 20,
    discount: [6, 20],
    discount1: [7, 10]
}

const ProductCard = ({ data }) => {

    const [quantity, setQuantity] = useState(Number(data.minQuantity));

    const [price, setPrice] = useState(data.productPrice);

    const addDiscount = () => {
        setPrice(data.discount[0]);
        setQuantity(data.discount[1]);
        setClicked(true);
        setClicked1(false);
    }

    const removeDiscount = () => {
        setPrice(data.productPrice);
        setQuantity(data.minQuantity);
    }

    const addDiscount1 = () => {
        setPrice(data.discount1[0]);
        setQuantity(data.discount1[1]);
    }

    const removeDiscount1 = () => {
        setPrice(data.productPrice);
        setQuantity(data.minQuantity);
    }

    const increaseHandler = () => {
        setPrice(data.productPrice);
        setQuantity(prev => prev + 1);
    }

    const decreaseHandler = () => {
        setPrice(data.productPrice);
        setQuantity(prev => prev - 1);
    }

    return (
        <div className="w-fit flex flex-col lg:flex-row items-center rounded-xl border border-solid border-gray-900">
            <img className='w-[18rem] lg:w-[12.5rem] aspect-auto object-cover rounded-t-xl lg:rounded-l-xl' src={data.productImg} alt="" />
            <div className="w-full lg:w-fit h-fit p-4 flex flex-col items-start justify-between rounded-r-xl border-l-0 lg:border-l border-solid border-gray-900">
                <div className="w-full flex flex-col items-start">
                    <div className="w-full flex items-center justify-between gap-4">
                        <div className='text-gray-900 text-xl font-semibold'>{data.productName}</div>
                        <div className='text-gray-900 font-medium text-base'>
                            ₹<span className='text-xl font-semibold'>
                                {
                                    quantity === data.discount[1] ?
                                    data.discount[0] * Number(quantity) : quantity === data.discount1[1] ? data.discount1[0] * Number(quantity) : price * Number(quantity)
                                }
                            </span>
                        </div>
                    </div>
                    <div className='w-full text-left text-gray-700 font-medium'>
                        ₹{data.productPrice}/{data.pricePer}
                    </div>

                    <div className="w-full flex flex-col items-start gap-1 py-4">
                        <div className="cursor-pointer w-full flex items-center justify-start gap-2">
                            {
                                quantity === data.discount[1] ?
                                    <div className='text-xs font-semibold text-green-600'>Added {data.discount[1]} {data.pricePer}s for ₹{data.discount[0]}/{data.pricePer}</div>
                                    :
                                    <div className='flex items-center justify-center gap-1' onClick={addDiscount}>
                                        <CiDiscount1 className='text-blue-600 text-lg' />
                                        <div className='text-xs font-semibold text-blue-600 whitespace-nowrap'>Add {data.discount[1]} {data.pricePer}s for ₹{data.discount[0]}/{data.pricePer}</div>
                                    </div>
                            }
                            {
                                quantity === data.discount[1] ?
                                    <MdOutlineCancel className='text-lg text-red-600' onClick={removeDiscount} /> : ''
                            }
                        </div>
                        <div className="cursor-pointer w-full flex items-center justify-start gap-2">
                            {
                                quantity === data.discount1[1] ?
                                    <div className='text-xs font-semibold text-green-600'>Added {data.discount1[1]} {data.pricePer}s for ₹{data.discount1[0]}/{data.pricePer}</div>
                                    :
                                    <div className='flex items-center justify-center gap-1' onClick={addDiscount1}>
                                        <CiDiscount1 className='text-blue-600 text-lg' />
                                        <div className='text-xs font-semibold text-blue-600 whitespace-nowrap'>Add {data.discount1[1]} {data.pricePer}s for ₹{data.discount1[0]}/{data.pricePer}</div>
                                    </div>
                            }
                            {
                                quantity === data.discount1[1] ?
                                    <MdOutlineCancel className='text-lg text-red-600' onClick={removeDiscount1} /> : ''
                            }
                        </div>
                    </div>

                </div>
                <button className='flex items-center justify-center gap-3 border-2 boreder-solid border-gray-900 text-gray-900 font-semibold py-2 px-3 rounded-md'>
                    <FiMinus className={`cursor-pointer text-lg ${quantity === 0 ? 'hidden' : 'block'}`} onClick={decreaseHandler} />
                    {
                        quantity === 0 ? <div>ADD</div> : <div>{quantity}</div>
                    }
                    <IoMdAdd className={`cursor-pointer text-lg ${quantity === data.maxQuantity ? 'hidden' : 'block'}`} onClick={increaseHandler} />
                </button>
            </div>
        </div>
    )
}


const Fruits = () => {
    return (
        <div id='fresh-fruits' className="w-[95%] flex flex-col items-center gap-4">
            <div className="w-full text-left p-4 bg-gray-900 text-2xl text-white font-semibold rounded-md">
                Fresh fruits
            </div>
            <div className="w-full flex items-center justify-center lg:justify-start flex-wrap gap-6">
                <ProductCard data={productDataApple} midQuantity="10" />
                <ProductCard data={productDataBanana} midQuantity="15" />
            </div>
        </div>
    );
};

export default Fruits;
