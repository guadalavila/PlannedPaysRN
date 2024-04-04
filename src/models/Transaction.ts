import { ICategory } from './Category';
import { ICreditCard } from './CreditCard';
import { ICuota } from './Cuota';

export interface ITransaction {
    date: Date;
    amount: number;
    reference: string;
    description?: string;
    cuota: ICuota;
    category: ICategory;
    cardId: string;
}
