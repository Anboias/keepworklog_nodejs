import {
    useState,
    useEffect,
    useContext,
    createContext,
    ReactNode,
} from 'react';

import { auth, db } from './firebaseNEW';

const authContext = createContext({ user: {} });

const { Provider } = authContext;

export function AuthProvider({ children }) {
    const auth = useAuthProvider();
    return <Provider value={auth}>{children}</Provider>;
}
export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that creates an auth object and handles it's state
const useAuthProvider = () => {
    const [user, setUser] = useState(null);
    const createUser = async (user) => {
        try {
            await db
                .collection('users')
                .doc(user.uid)
                .set(user);
            setUser(user);
            return user;
        } catch (error) {
            return { error };
        }
    };
    const signUp = async ({ name, email, password }) => {
        try {
            const response = await auth
                .createUserWithEmailAndPassword(email, password);
            auth.currentUser.sendEmailVerification();
            return createUser({ uid: response.user.uid, email, name });
        } catch (error) {
            return { error };
        }
    };

    const signIn = async ({ email, password }) => {
        try {
            const response = await auth
                .signInWithEmailAndPassword(email, password);
            setUser(response.user);
            getUserAdditionalData(user);
            return response.user;
        } catch (error) {
            return { error };
        }
    };
    const getUserAdditionalData = (user) => {
        return db
            .collection('users')
            .doc(user.uid)
            .get()
            .then((userData) => {
                if (userData.data()) {
                    setUser(userData.data());
                }
            });
    };

    const handleAuthStateChanged = (user) => {
        setUser(user);
        if (user) {
            getUserAdditionalData(user);
        }
    };

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(handleAuthStateChanged);

        return () => unsub();
    }, []);

    useEffect(() => {
        if (user?.uid) {
            // Subscribe to user document on mount
            const unsubscribe = db
                .collection('users')
                .doc(user.uid)
                .onSnapshot((doc) => setUser(doc.data()));
            return () => unsubscribe();
        }
    }, []);


    const signOut = async () => {
        await auth.signOut();
        return setUser(false);
    };

    const sendPasswordResetEmail = async (email) => {
        const response = await auth.sendPasswordResetEmail(email);
        return response;
    };

    return {
        user,
        signUp,
        signIn,
        getUserAdditionalData,
        signOut,
        sendPasswordResetEmail
    };
};