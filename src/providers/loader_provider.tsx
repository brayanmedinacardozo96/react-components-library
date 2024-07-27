import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LoaderContextProps {
    isLoading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}

const LoaderContext = createContext<LoaderContextProps | undefined>(undefined);

export const LoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    return (
        <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};


export const useLoader = (): LoaderContextProps => {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
};
