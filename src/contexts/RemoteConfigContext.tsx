import React, { ReactNode, useState } from 'react';
import { ICard } from '~models/Card';
import { ICategory } from '~models/Category';

export const RemoteConfigContext = React.createContext<{
    categories: ICategory[];
    setCategories: React.Dispatch<ICategory[]>;
    cards: ICard[];
    setCards: React.Dispatch<ICard[]>;
}>({
    categories: [],
    setCategories: () => {},
    cards: [],
    setCards: () => {},
});

interface RemoteConfigContextProviderProps {
    children: ReactNode;
}

export const RemoteConfigContextProvider: React.FC<RemoteConfigContextProviderProps> = ({ children }) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [cards, setCards] = useState<ICard[]>([]);

    const setCategoriesApp = (categories_: ICategory[]) => {
        setCategories(categories_);
    };

    const setCards_ = (cards_: ICard[]) => {
        setCards(cards_);
    };

    return (
        <RemoteConfigContext.Provider
            value={{
                categories: categories,
                setCategories: setCategoriesApp,
                cards: cards,
                setCards: setCards_,
            }}>
            {children}
        </RemoteConfigContext.Provider>
    );
};
