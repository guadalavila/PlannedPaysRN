import { useContext } from 'react';
import { StateContext } from '~contexts/StateContext';
import { IUser } from '~models/User';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '~contexts/AuthContext';
import { encrypt } from '~utils/encrypt';

function useAuth() {
    const { setLoading } = useContext(StateContext);
    const { isAuthenticated, setUser, user, updateUser } = useContext(AuthContext);

    const signUp = async (data: IUser) => {
        try {
            setLoading(true);
            const user = await firestore().collection('users').doc(data.email).set(data);
            console.log(user);
            // const user = await firestore().collection('users').add(data);
            // await firestore()
            //     .collection('users')
            //     .doc(user.id)
            //     .onSnapshot((created) => {
            //         console.log(created.data());
            //     });
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            setLoading(true);
            const querySnapshot = await firestore()
                .collection('users')
                .where(firestore.Filter('email', '==', email))
                .where('password', '==', encrypt(password))
                .get();
            const userDocuments = querySnapshot.docs.map((doc) => doc.data());
            setLoading(false);
            console.log(userDocuments[0]);
            if (userDocuments.length === 1) {
                console.log('first');
                setUser(userDocuments[0] as IUser);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const update = async (name: string, lastName: string) => {
        try {
            setLoading(true);
            await firestore()
                .collection('users')
                .doc(user.email)
                .update({ ...user, name: name, lastName: lastName });
            updateUser({ ...user, name: name, lastName: lastName });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return { signUp, login, isAuthenticated, user, update };
}
export default useAuth;
