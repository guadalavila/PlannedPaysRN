import { ICategory } from './Category';
import { ICuota } from './Cuota';

export interface ITransaction {
    date: Date;
    amount: number;
    reference: string;
    description: string;
    cuota: ICuota;
    category: ICategory;
    card: any;
}
