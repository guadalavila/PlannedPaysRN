import React, { ReactNode, useState } from 'react';

export const StateContext = React.createContext<{
    loading: boolean;
    setLoading: React.Dispatch<boolean>;
}>({
    loading: false,
    setLoading: () => {},
});

interface StateContextProviderProps {
    children: ReactNode;
}

export const StateContextProvider: React.FC<StateContextProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const setLoading = (value: boolean) => {
        setIsLoading(value);
    };

    return (
        <StateContext.Provider
            value={{
                loading: isLoading,
                setLoading: setLoading,
            }}>
            {children}
        </StateContext.Provider>
    );
};
