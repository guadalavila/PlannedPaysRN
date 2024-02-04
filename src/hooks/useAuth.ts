import { useContext } from 'react';
import { StateContext } from '~contexts/StateContext';
import { IUser } from '~models/User';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '~contexts/AuthContext';

function useAuth() {
    const { setLoading } = useContext(StateContext);
    const { isAuthenticated, setUser } = useContext(AuthContext);

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
                .where('password', '==', password)
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
    return { signUp, login, isAuthenticated };
}
export default useAuth;
