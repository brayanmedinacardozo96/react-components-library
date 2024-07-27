import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextProps {
    isOpen: { [key: string]: boolean };
    openModal: (modalName: string) => void;
    closeModal: (modalName: string) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

    const openModal = (modalName: string) => setIsOpen(prev => ({ ...prev, [modalName]: true }));
    const closeModal = (modalName: string) => setIsOpen(prev => ({ ...prev, [modalName]: false }));

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
