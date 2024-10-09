import { createContext, useEffect, useState } from "react"
import useAxiosPublic from "../hooks/useAxiosPublic"
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth"
import { app } from "../firebase/firebase.config"

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setloading] = useState(true)
  const googleProvider = new GoogleAuthProvider()
  const axiosPublic = useAxiosPublic()

  //create user
  const createUser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //user login or signin
  const signIn = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //google signin
  const googleSignIn = () => {
    setloading(true)
    return signInWithPopup(auth, googleProvider)
  }

  //signout or logout
  const logOut = () => {
    setloading(true)
    return signOut(auth)
  }

  //update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  //current user watching and following who is in the website or who is out of the website
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email }
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token)
            setloading(false)
          }
        })
      } else {
        // do something
        localStorage.removeItem("access-token")
        setloading(false)
      }
    })
    return () => {
      return unsubscribe()
    }
  }, [axiosPublic])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
