import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import { toastError, toastSuccess } from "../helpers/Toastify";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const AuthPage = createContext();
const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const navigate=useNavigate()

  useEffect(()=>{
    userTrack()
  },[])

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccess("Register is successfully done");
      navigate("/");
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
    } catch (error) {
      toastError("Something went wrong");
    }
  };
  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccess("Login is successfully done");
      navigate("/");
    } catch (error) {
      toastError("Something went wrong");
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      toastSuccess("Logout is successfully done");
      navigate("/");
    } catch (error) {
      toastError("Something went wrong");
    }
  };
  
  const googleWith = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess("Login is successfully done");
        navigate("/");
      })
      .catch((error) => {
        toastError("Something went wrong");
      });
  };
  const userTrack = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;

        setCurrentUser({
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        });
      } else {
        setCurrentUser(false);
      }
    });
  };

  return <AuthPage.Provider value={{currentUser, createUser, userTrack, loginUser, googleWith, logout}}>{children}</AuthPage.Provider>;
};

export default AuthContext;
