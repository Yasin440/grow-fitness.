import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

;

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    //Load fake json data
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    //-------------------// 


    // get email and password
    const handleGetEmail = even => {
        setEmail(even.target.value)
    }

    const handleGetPassword = even => {
        setPassword(even.target.value)
    }
    //--------register
    const handleRegistration=(even)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user);
        })
        .finally(() => setIsLoading(false));
    }
    //------------------//


    // sign in with google popup
    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        // return for redirect user after login
        return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    //---------------------//


    // subscribe for user state change on browser
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        services,
        isLoading,
        email,
        password,
        handleGetEmail,
        handleGetPassword,
        handleRegistration,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;