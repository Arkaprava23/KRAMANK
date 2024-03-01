import React from 'react';
import MainLayout from '../layout/MainLayout';
import Categories from '../components/Home/Categ';
import Fruits from '../components/Products/Fruits';

const ProductPage = () => {
    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center gap-4">
                <Categories linksHidden={false} labelName="Choose what you need" />
                <Fruits />
            </div>
        </MainLayout>
    );
};

export default ProductPage;
