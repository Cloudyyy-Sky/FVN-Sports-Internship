import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { auth, db } from "./config"

export interface UserProfile {
  uid: string
  email: string
  fullName: string
  createdAt: Date
  favoriteTeams: string[]
  favoriteLeagues: string[]
}

export const signUp = async (email: string, password: string, fullName: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Update the user's display name
    await updateProfile(user, {
      displayName: fullName,
    })

    // Create user profile in Firestore
    const userProfile: UserProfile = {
      uid: user.uid,
      email: user.email!,
      fullName,
      createdAt: new Date(),
      favoriteTeams: [],
      favoriteLeagues: [],
    }

    await setDoc(doc(db, "users", user.uid), userProfile)

    return { user, error: null }
  } catch (error: any) {
    return { user: null, error: error.message }
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { user: userCredential.user, error: null }
  } catch (error: any) {
    return { user: null, error: error.message }
  }
}

export const logOut = async () => {
  try {
    await signOut(auth)
    return { error: null }
  } catch (error: any) {
    return { error: error.message }
  }
}

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const docRef = doc(db, "users", uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data() as UserProfile
    } else {
      return null
    }
  } catch (error) {
    console.error("Error fetching user profile:", error)
    return null
  }
}
