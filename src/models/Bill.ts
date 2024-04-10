import { Currency } from '~utils/types/Currency';
import { CategoryFull } from './Category';

export interface Bill {
    amount: number;
    currency: Currency;
    date: Date;
    comment: string;
    category: CategoryFull;
}

export interface IBill {
    id: number;
    amount: number;
    currency: Currency;
    date: Date;
    comment: string;
    category: CategoryFull;
}
