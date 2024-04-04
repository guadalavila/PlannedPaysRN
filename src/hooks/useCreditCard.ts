import { ICreditCard, ICreditCardRqst } from '~models/CreditCard';
import firestore from '@react-native-firebase/firestore';
import useAuth from './useAuth';
import { StateContext } from '~contexts/StateContext';
import { useContext } from 'react';
import { getIdByDate } from '~utils/helpers';
import { ITransaction } from '~models/Transaction';

function useCreditCard() {
    const { user } = useAuth();
    const { setLoading } = useContext(StateContext);

    const getCreditCards = async () => {
        return new Promise(async (resolve, reject) => {
            await firestore()
                .collection(`cards_${user.email}`)
                // .collection('')
                // .where(firestore.Filter('email', '==', user.email))
                .get()
                .then((cards) => {
                    const cardsData = cards.docs.map((doc) => doc.data());
                    resolve(cardsData);
                });
        });
    };

    const addCreditCard = async (data: ICreditCardRqst) => {
        return new Promise(async (resolve, reject) => {
            try {
                setLoading(true);
                // const card = await firestore()
                //     .collection('cards')
                //     .add({
                //         ...data,
                //         email: user.email,
                //     });
                const id = getIdByDate();
                const card_ = await firestore()
                    .collection(`cards_${user.email}`)
                    .doc(id)
                    .set({
                        ...data,
                        email: user.email,
                        id: id,
                    });
                setLoading(false);
                resolve(card_);
            } catch (error) {
                setLoading(false);
                reject();
            }
        });
    };

    const updateCreditCard = async (card: ICreditCard) => {
        try {
            setLoading(true);
            await firestore().collection(`cards_${user.email}`).doc(card.id).update(card);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const deleteCreditCard = async (id: string) => {
        try {
            setLoading(true);
            const doc = firestore().collection(`cards_${user.email}`).doc(id);
            await doc.delete();
            setLoading(false);
            console.log('Documento eliminado correctamente.');
        } catch (error) {
            setLoading(false);
            console.error('Error al intentar eliminar el documento: ', error);
        }
    };

    const addTransaction = (data: ITransaction) => {
        return new Promise(async (resolve, reject) => {
            try {
                setLoading(true);
                const trx = await firestore()
                    .collection(`cards_${user.email}`)
                    .doc(data.cardId)
                    .collection('transactions')
                    .add(data);
                setLoading(false);
                resolve(trx);
            } catch (error) {
                setLoading(false);
            }
        });
    };

    const getTransactions = (cardId: string) => {
        return new Promise(async (resolve, reject) => {
            await firestore()
                .collection(`cards_${user.email}`)
                .doc(cardId)
                .collection('transactions')
                .get()
                .then((transactions) => {
                    const data = transactions.docs.map((doc) => doc.data());
                    resolve(data);
                });
        });
    };

    return { addCreditCard, getCreditCards, deleteCreditCard, addTransaction, getTransactions, updateCreditCard };
}
export default useCreditCard;
