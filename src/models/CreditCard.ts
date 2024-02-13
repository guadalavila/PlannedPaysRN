import { ICard } from './Card';

export interface ICreditCardRqst {
    name: string;
    number: number;
    card: ICard;
    email: string;
    colors: string[];
    description?: string;
}

export interface ICreditCard {
    id: string;
    name: string;
    number: number;
    card: ICard;
    email: string;
    colors: string[];
    description?: string;
}
