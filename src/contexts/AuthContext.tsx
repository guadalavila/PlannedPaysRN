import React, { ReactNode, useState } from 'react';
import { IUser } from '~models/User';

export const AuthContext = React.createContext<{
    user: IUser;
    setUser: React.Dispatch<IUser>;
    isAuthenticated: boolean;
    updateUser: React.Dispatch<IUser>;
}>({
    user: {
        name: '',
        lastName: '',
        password: '',
        email: '',
        date: new Date(),
    },
    setUser: () => {},
    isAuthenticated: false,
    updateUser: () => {},
});

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        password: '',
        email: '',
        date: new Date(),
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setUserApp = (user_: IUser) => {
        setUser(user_);
        setIsAuthenticated(true);
    };

    const updateUserApp = (user_: IUser) => {
        setUser(user_);
    };

    return (
        <AuthContext.Provider
            value={{
                user: user,
                setUser: setUserApp,
                isAuthenticated: isAuthenticated,
                updateUser: updateUserApp,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
