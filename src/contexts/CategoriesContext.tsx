import React, { ReactNode, useState } from 'react';
import { ICategory } from '~models/Category';

export const CategoriesContext = React.createContext<{
    categories: ICategory[];
    setCategories: React.Dispatch<ICategory[]>;
}>({
    categories: [],
    setCategories: () => {},
});

interface CategoriesContextProviderProps {
    children: ReactNode;
}

export const CategoriesContextProvider: React.FC<CategoriesContextProviderProps> = ({ children }) => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    const setCategoriesApp = (categories_: ICategory[]) => {
        setCategories(categories_);
    };

    return (
        <CategoriesContext.Provider
            value={{
                categories: categories,
                setCategories: setCategoriesApp,
            }}>
            {children}
        </CategoriesContext.Provider>
    );
};
