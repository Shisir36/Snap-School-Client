import  { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';
export const Authcontext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      // setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const updateUserProfile = (name, photoURL) => {
     return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      })
    };
    const signIn = (email, password) => {
      // setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logout = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    const googleAuthProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
      // setLoading(true)
      return signInWithPopup(auth, googleAuthProvider);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        if(user){
          axios.post('http://localhost:5000/jwt', {email: user.email})
          .then(data =>{
              console.log(data)
              localStorage.setItem('access-token', data.data.token)
              setLoading(false);
          })
      }
      else{
          localStorage.removeItem('access-token');
        
      }
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