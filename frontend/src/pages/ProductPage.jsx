import React, { useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import Categories from '../components/Home/Categ';
import Fruits from '../components/Products/Fruits';
import Juices from '../components/Products/Juices';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductPage = () => {

    const location = useLocation();
    const currLocation = location.hash;

    const navigate = useNavigate();

    

    return (
        <MainLayout>
            <div className="w-full flex flex-col items-center gap-8">
                <Categories linksHidden={false} labelName="Choose what you need" />
                {
                    currLocation === "#fresh-fruits" ?
                        <Fruits /> :
                        currLocation === "#fresh-juices" ?
                            <Juices /> :
                            <>
                                <Fruits />
                                <Juices />
                            </>
                }
            </div>
        </MainLayout>
    );
};

export default ProductPage;
