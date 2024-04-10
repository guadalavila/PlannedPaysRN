import { Bill } from '~models/Bill';
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
                // const card = await firestore()
                //     .collection('cards')
                //     .add({
                //         ...data,
                //         email: user.email,
                //     });
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

    return { addBill, isLoading, getBillsByMonth };
}
export default useBill;
