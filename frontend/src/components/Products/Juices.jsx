import React from 'react';
import ProductCard from './ProductCard';

const productDataApple = {
    productName: 'Orange juice',
    productImg: 'images/juices/orangejuice.jpg',
    productPrice: 50,
    pricePer: 'bottle',
    minQuantity: 0,
    maxQuantity: 20,
    discount: [45, 20],
    discount1: [47, 10]
}

const productDataBanana = {
    productName: 'Strawberry juice',
    productImg: 'images/juices/strawjuice.jpg',
    productPrice: 40,
    pricePer: 'bottle',
    minQuantity: 0,
    maxQuantity: 20,
    discount: [35, 20],
    discount1: [37, 10]
}

const Juices = () => {
    return (
        <div id='fresh-juices' className="w-[95%] flex flex-col items-center gap-4">
            <div className="w-full text-left p-4 bg-gray-900 text-2xl text-white font-semibold rounded-md">
                Fresh juices
            </div>
            <div className="w-full flex items-center justify-center lg:justify-start flex-wrap gap-6">
                <ProductCard data={productDataApple} midQuantity="10" />
                <ProductCard data={productDataBanana} midQuantity="15" />
            </div>
        </div>
    );
};

export default Juices;
