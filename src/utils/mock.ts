import { ICoin } from '~models/Coin';
import { Currency } from './types/Currency';

export const CATEGORIES = [
    { _id: 1, label: 'Comida', icon: 'fast-food', color: '#49BBA2' },
    { _id: 2, label: 'Transporte', icon: 'car', color: '#EF7261' },
    { _id: 3, label: 'Casa', icon: 'home', color: '#3A5E83' },
    { _id: 4, label: 'Salud', icon: 'medkit', color: '#9c4fff' },
    { _id: 5, label: 'Restaurante', icon: 'restaurant', color: '#496A4C' },
    { _id: 6, label: 'Ropa', icon: 'shirt', color: '#0E5963' },
    { _id: 7, label: 'Facturas', icon: 'receipt', color: '#2C3A50' },
];

export const CURRENCY_LIST: Currency[] = [
    { id: 1, label: 'EURO', currency: 'EUR' },
    { id: 2, label: 'Dólar estadounidense', currency: 'USD' },
    { id: 3, label: 'Peso Argentino', currency: 'ARS' },
    { id: 4, label: 'Peso Mexicano', currency: 'MXN' },
];

export const LIST_COLORS = [
    '#FCAB10',
    '#2E86AB',
    '#F39237',
    '#8FD694',
    '#D63230',
    '#D4A5A5',
    '#434A42',
    '#20B2AA',
    '#6A0572',
    '#AB83A1',
    '#8E5572',
    '#7B7167',
    '#2D3B41',
    '#D7263D',
    '#8AABD2',
    '#0D324D',
    '#F15BB5',
    '#A63257',
    '#8F4D56',
    '#507DBC',
    '#356859',
    '#F4ACB7',
    '#60798E',
    '#D9BF77',
    '#A5A58D',
    '#231651',
    '#9932CC',
    '#FE4A49',
    '#c5f277',
    '#20B2AA',
    '#5B616A',
    '#609F8B',
    '#FA7921',
    '#4A6C6F',
    '#695958',
    '#B7A196',
    '#99ABD5',
    '#4F6272',
    '#FF4C29',
    '#4B7447',
    '#F4743B',
    '#7A5C61',
    '#CA4A75',
    '#00A398',
    '#5C5D67',
    '#7C7C7C',
    '#74A9A9',
    '#FB9C88',
    '#B993D6',
    '#BDB2FF',
];

export const GRADIENT_COLORS = [
    ['#00543E', '#007956', '#008F5E', '#00A668', '#00BD71'],
    ['#FFAAD3', '#FF88C3', '#FF66B2', '#FF4491', '#FF0066'],
    ['#ADD8E6', '#87CEEB', '#6BB8E3', '#4F94CD', '#336699'],
    ['#F8B696', '#F78474', '#F55C5B', '#F33E4E', '#F32945'],
    ['#FFD180', '#FFBB66', '#FFA64C', '#FF9333', '#FF8000'],
    ['#8A2BE2', '#9932CC', '#A020F0', '#800080', '#9400D3'],
    ['#333333', '#555555', '#777777', '#999999', '#BBBBBB'],
    ['#000000', '#111111', '#222222', '#333333', '#444444'],
    ['#A2FFB8', '#7DF098', '#5FC27E', '#3D8E60', '#2D6E4D'],
    ['#FF4500', '#FF6347', '#FF7F50', '#FF8C00', '#FFA07A'],
    ['#001f3f', '#003366', '#004080', '#00509e', '#0066cc', '#0077b6'],
    ['#990000', '#B22222', '#CC0000', '#DC143C', '#FF0000'],
];

export const CUOTAS = [
    {
        code: '001',
        label: '1 cuota',
        value: 1,
    },
    {
        code: '002',
        label: '2 cuotas',
        value: 2,
    },
    {
        code: '003',
        label: '3 cuotas',
        value: 3,
    },
    {
        code: '006',
        label: '6 cuotas',
        value: 6,
    },
    {
        code: '012',
        label: '12 cuotas',
        value: 12,
    },
    {
        code: '018',
        label: '18 cuotas',
        value: 18,
    },
    {
        code: '000',
        label: 'Mensual',
        value: 0,
    },
];

export const MOCK_COINS: ICoin[] = [
    { id: '001', label: 'Peso argentino', codeISO: 'ARS', symbol: '$' },
    { id: '002', label: 'Euro', codeISO: 'EUR', symbol: '€' },
    { id: '003', label: 'Dolar', codeISO: 'USD', symbol: 'USD' },
    { id: '004', label: 'Real', codeISO: 'BRL', symbol: 'BRL' },
    { id: '005', label: 'Peso mexicano', codeISO: 'MXN', symbol: 'MXN' },
    { id: '006', label: 'Boliviano', codeISO: 'BOB', symbol: 'BOB' },
];
