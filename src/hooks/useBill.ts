import { Bill, IBill } from '~models/Bill';
import firestore from '@react-native-firebase/firestore';
import useAuth from './useAuth';
import { getIdByDate } from '~utils/helpers';
import { useState } from 'react';

function useBill() {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const addBill = (bill: Bill) => {
        return new Promise(async (resolve, reject) => {
            try {
                setIsLoading(true);
                const id = getIdByDate();
                const bill_ = await firestore()
                    .collection(`bills_${user.email}`)
                    .doc(id)
                    .set({
                        ...bill,
                        email: user.email,
                        id: id,
                    });
                setIsLoading(false);
                resolve(bill_);
            } catch (error) {
                setIsLoading(false);
                reject();
            }
        });
    };

    const editBill = async (bill: IBill) => {
        try {
            setIsLoading(true);
            await firestore().collection(`bills_${user.email}`).doc(bill.id).update(bill);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    const deleteBill = async (id: string) => {
        try {
            setIsLoading(true);
            const doc = firestore().collection(`bills_${user.email}`).doc(id);
            await doc.delete();
            setIsLoading(false);
            console.log('Documento eliminado correctamente.');
        } catch (error) {
            setIsLoading(false);
            console.error('Error al intentar eliminar el documento: ', error);
        }
    };

    const getBillsByMonth = async () => {
        return new Promise(async (resolve, reject) => {
            await firestore()
                .collection(`bills_${user.email}`)
                .where('date', '<=', new Date())
                // .collection('')
                // .where(firestore.Filter('email', '==', user.email))
                .get()
                .then((bills) => {
                    const billsData = bills.docs.map((doc) => doc.data());
                    resolve(billsData);
                });
        });
    };

    return { addBill, isLoading, getBillsByMonth, editBill, deleteBill };
}
export default useBill;
