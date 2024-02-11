import CryptoJS from 'react-native-crypto-js';
import { ENCRYPT_SECRET_KEY } from '../../config.json';

export function encrypt(value: string): string {
    const secret_key = CryptoJS.enc.Utf8.parse(ENCRYPT_SECRET_KEY);
    const iv = CryptoJS.enc.Utf8.parse('');
    const encrypted = CryptoJS.AES.encrypt(value, secret_key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
    });
    return encrypted.toString();
}

export function decrypt(value: string): string {
    const secret_key = CryptoJS.enc.Utf8.parse(ENCRYPT_SECRET_KEY);
    const iv = CryptoJS.enc.Utf8.parse('');
    const decrypted = CryptoJS.AES.decrypt(value, secret_key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
