import { ICreditCard } from '~models/CreditCard';
import firestore from '@react-native-firebase/firestore';
import useAuth from './useAuth';
import { StateContext } from '~contexts/StateContext';
import { useContext } from 'react';
import { getIdByDate } from '~utils/helpers';

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
                    resolve(cardsData);
                });
        });
    };

    const addCreditCard = async (data: ICreditCard) => {
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
                    .collection('cards')
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

    const deleteCreditCard = async (id: string) => {
        try {
            setLoading(true);
            const doc = firestore().collection('cards').doc(id);
            await doc.delete();
            setLoading(false);
            console.log('Documento eliminado correctamente.');
        } catch (error) {
            setLoading(false);
            console.error('Error al intentar eliminar el documento: ', error);
        }
    };

    return { addCreditCard, getCreditCards, deleteCreditCard };
}
export default useCreditCard;
