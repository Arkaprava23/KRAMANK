import React from 'react';
import ProductCard from './ProductCard';

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
