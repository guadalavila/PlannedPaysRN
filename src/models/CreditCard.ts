export type CREDIT_CARD_TYPE = 'VISA' | 'MASTER';

export interface ICreditCard {
    id: number;
    name: string;
    type: CREDIT_CARD_TYPE;
    description: string;
}
