import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { useAppContext } from '../../../ContextReducer/AppContext';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data }) => {

    const navigate = useNavigate();

    const { cart, addToCart, isOpen, onOpen, onClose } = useAppContext();

    const [quantity, setQuantity] = useState(Number(data.minQuantity));

    const [price, setPrice] = useState(data.productPrice);

    const addDiscount = () => {
        setPrice(data.discount[0]);
        setQuantity(data.discount[1]);
        addToCart(data.productName, data.productPrice, Number(data.discount[1]), Number(data.discount[0]) * Number(data.discount[1]));
    }

    const removeDiscount = () => {
        setPrice(data.productPrice);
        setQuantity(data.minQuantity);
        addToCart(data.productName, data.productPrice, 0, 0);
    }

    const addDiscount1 = () => {
        setPrice(data.discount1[0]);
        setQuantity(data.discount1[1]);
        addToCart(data.productName, data.productPrice, Number(data.discount1[1]), Number(data.discount1[0]) * Number(data.discount1[1]));
    }

    const removeDiscount1 = () => {
        setPrice(data.productPrice);
        setQuantity(data.minQuantity);
        addToCart(data.productName, data.productPrice, 0, 0);
    }

    const increaseHandler = () => {
        setPrice(data.productPrice);
        setQuantity(prev => prev + 1);
        addToCart(data.productName, data.productPrice, Number(quantity + 1), Number(data.productPrice) * Number(quantity + 1));
    }

    const decreaseHandler = () => {
        setPrice(data.productPrice);
        setQuantity(prev => prev - 1);
        addToCart(data.productName, data.productPrice, Number(quantity - 1), Number(data.productPrice) * Number(quantity - 1));
    }

    console.log(cart);

    return (
        <>
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

            {/* Cart */}
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent className='p-4'>
                    <div className='text-gray-900 text-xl font-semibold'>Your Cart</div>
                    <ModalCloseButton />
                    <ModalBody>
                        {
                            cart.length > 0
                                ?
                                <div className="w-full h-[20rem] flex flex-col items-center gap-2 overflow-y-auto">
                                    {cart.map((item) => {
                                        return (
                                            <div className="w-[90%] p-4 border border-solid border-gray-600 rounded-lg flex items-start justify-between">
                                                <div className="flex flex-col items-start gap-1">
                                                    <div className='text-gray-900 text-lg font-semibold'>{item.name}</div>
                                                    <div className='text-gray-700 text-base'>₹{item.amount}</div>
                                                </div>
                                                <div className="flex flex-col items-end gap-1">
                                                    <div className='text-gray-900 text-xl font-semibold'>₹{item.price}</div>
                                                    <button className='flex items-center justify-center gap-3 border-2 boreder-solid border-gray-900 text-gray-900 font-semibold py-2 px-3 rounded-md'>
                                                        <FiMinus className={`cursor-pointer text-lg ${item.quantity === 0 ? 'hidden' : 'block'}`} onClick={decreaseHandler} />
                                                        {
                                                            item.quantity === 0 ? <div>ADD</div> : <div>{item.quantity}</div>
                                                        }
                                                        <IoMdAdd className={`cursor-pointer text-lg ${item.quantity === data.maxQuantity ? 'hidden' : 'block'}`} onClick={increaseHandler} />
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                :
                                <div className='w-full h-[15rem] flex flex-col items-center justify-center gap-4'>
                                    <div className="w-full text-center text-gray-700 font-medium text-xl">
                                        Oops! Your cart is empty!
                                    </div>
                                    <button onClick={onClose}
                                        className='py-2 px-5 whitespace-nowrap text-white bg-gray-900 hover:bg-gray-800 rounded-md'>
                                        Order now
                                    </button>
                                </div>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProductCard;