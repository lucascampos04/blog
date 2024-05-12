import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { AppConfigFirebase } from "../../Services/firebase";
import { Navigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

export const authContextGoogle = createContext();

export const AuthGoogleProvider = ({ children }) => {
    const auth = getAuth(AppConfigFirebase);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
            const sessionUser = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"));
    
            if (sessionToken && sessionUser) {
                setUser(sessionUser);
                console.log("Logged in");
            }
        };
        loadStoreAuth();
    }, []);    

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user);
                sessionStorage.setItem("@AuthFirebase:token", token);
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    function signOut() {
        sessionStorage.clear();
        setUser(null);
        return <Navigate to={"/login"} />;
    }

    return (
        <authContextGoogle.Provider
            value={{
                signInGoogle,
                signed: !!user,
                user,
                signOut
            }}
        >
            {children}
        </authContextGoogle.Provider>
    );
};
