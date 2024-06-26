import React, { ReactNode, useState } from 'react';
import { ICard } from '~models/Card';
import { ICategory, ISubCategory } from '~models/Category';

export const RemoteConfigContext = React.createContext<{
    categories: ICategory[];
    setCategories: React.Dispatch<ICategory[]>;
    cards: ICard[];
    setCards: React.Dispatch<ICard[]>;
    tokenLogin: string;
    setTokenLogin: React.Dispatch<string>;
    subCategories: any;
    setSubCategories: React.Dispatch<any>;
}>({
    categories: [],
    setCategories: () => {},
    cards: [],
    setCards: () => {},
    tokenLogin: '',
    setTokenLogin: () => {},
    subCategories: [],
    setSubCategories: () => {},
});

interface RemoteConfigContextProviderProps {
    children: ReactNode;
}

export const RemoteConfigContextProvider: React.FC<RemoteConfigContextProviderProps> = ({ children }) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [subCategories, setSubCategories] = useState<any>([]);
    const [cards, setCards] = useState<ICard[]>([]);
    const [token, setToken] = useState('');

    const setCategoriesApp = (categories_: ICategory[]) => {
        setCategories(categories_);
    };

    const setSubCategoriesApp = (categories_: ISubCategory[]) => {
        setSubCategories(categories_);
    };
    const setCards_ = (cards_: ICard[]) => {
        setCards(cards_);
    };

    const setTokenLogin = (value: string) => {
        setToken(value);
    };

    return (
        <RemoteConfigContext.Provider
            value={{
                categories: categories,
                setCategories: setCategoriesApp,
                cards: cards,
                setCards: setCards_,
                tokenLogin: token,
                setTokenLogin: setTokenLogin,
                subCategories: subCategories,
                setSubCategories: setSubCategoriesApp,
            }}>
            {children}
        </RemoteConfigContext.Provider>
    );
};
