import { ICoin } from './Coin';

export interface IGoal {
    date: Date;
    title: string;
    description?: string;
    amountTotal: number;
    saved: number;
    coin: ICoin;
    icon: string;
    color: string;
}
