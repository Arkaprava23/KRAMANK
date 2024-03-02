import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [loggedUser, setLoggedUser] = useState(false);

    return (
        <AppContext.Provider value={{ loggedUser }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to consume context
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppContextProvider');
    }
    return context;
};


