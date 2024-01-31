export type BRAND_CARD = 'Visa' | 'MasterCard' | 'American Express' | 'Discover' | 'Diners Club' | 'Otra';

export interface ICard {
    id: number;
    brand: BRAND_CARD;
    img: string;
}
