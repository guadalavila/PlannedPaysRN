import { ICreditCard } from '~models/CreditCard';
import firestore from '@react-native-firebase/firestore';
import useAuth from './useAuth';
import { StateContext } from '~contexts/StateContext';
import { useContext } from 'react';

function useCreditCard() {
    const { user } = useAuth();
    const { setLoading } = useContext(StateContext);

    const getCreditCards = async () => {
        return new Promise(async (resolve, reject) => {
            await firestore()
                .collection('cards')
                .where(firestore.Filter('email', '==', user.email))
                .get()
                .then((cards) => {
                    const cardsData = cards.docs.map((doc) => doc.data());
                    console.log(cardsData);
                    resolve(cardsData);
                });
        });
    };

    const addCreditCard = async (data: ICreditCard) => {
        return new Promise(async (resolve, reject) => {
            try {
                setLoading(true);
                const card = await firestore()
                    .collection('cards')
                    .add({
                        ...data,
                        email: user.email,
                    });
                setLoading(false);
                resolve(card.id);
            } catch (error) {
                setLoading(false);
                reject();
            }
        });
    };
    return { addCreditCard, getCreditCards };
}
export default useCreditCard;
