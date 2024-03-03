import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [cart, setCart] = useState([
    ]);


    const addToCart = (name, quantity, totalPrice) => {
        if (quantity === 0 || totalPrice === 0) {
            const existingItemIndex = cart.findIndex((item) => item.name === name);
            if (existingItemIndex !== -1) {
                const updatedCart = [...cart];
                updatedCart.splice(existingItemIndex, 1);
                setCart(updatedCart);
            }
            return;
        }

        const newItem = {
            name: name,
            quantity: quantity,
            price: totalPrice
        };
        const existingItemIndex = cart.findIndex((item) => item.name === name);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex] = {
                ...updatedCart[existingItemIndex],
                quantity: quantity,
                price: totalPrice
            };
            setCart(updatedCart);
        } else {
            setCart([...cart, newItem]);
        }
    };




    return (
        <AppContext.Provider value={{ cart, addToCart }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppContextProvider');
    }
    return context;
};


