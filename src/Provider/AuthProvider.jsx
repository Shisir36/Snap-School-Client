import  { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const Authcontext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const updateUserProfile = (name, photoURL) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          console.log("Profile updated successfully.");
        })
        .catch((error) => {
          console.log("Error updating profile: ", error);
        });
    };
    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logout = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    const googleAuthProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleAuthProvider);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
      });
  
      return () => {
        return unsubscribe();
      };
    }, []);
  
    const authData = {
      currentUser,
      createUser,
      updateUserProfile,
      signIn,
      logout,
      signInWithGoogle,
      loading,
      setLoading
    };
  
    return (
      <Authcontext.Provider value={authData}>
        {children}
      </Authcontext.Provider>
    );
  };
  

export default AuthProvider;