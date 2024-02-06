import { ICard } from './Card';

export type CREDIT_CARD_TYPE = 'VISA' | 'MASTER';

export interface ICreditCard {
    id: string;
    name: string;
    type: CREDIT_CARD_TYPE;
    number: number;
    colors: string[];
    description?: string;
}

export interface ICreditCardResponse {
    id: string;
    name: string;
    number: number;
    card: ICard;
    email: string;
    colors: string[];
    description?: string;
}
