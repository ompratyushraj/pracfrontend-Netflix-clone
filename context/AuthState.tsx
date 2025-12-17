import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import Router from 'next/router';
import React, { useEffect, useMemo, useState } from 'react'
import { auth } from '../firebase';
import { AuthContext } from './AuthContext'

interface AuthProps {
    children: React.ReactNode;
}

function AuthState({ children }: AuthProps) {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
                Router.push('/login')
            }
        })
    }, [auth])

    const signUp = async (email: string, password: string) => {

        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUser(userCredential.user)
            Router.push('/')
        }).catch((error)=>alert(error.message));
        
    }

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password).then((userDetail) => {
            setUser(userDetail.user)
            Router.push('/')
        }).catch((error)=>alert(error.message));

    }
    const logout = async () => {
        await signOut(auth).then(() => {
            setUser(null)
        }).catch((error)=> alert(error.message))
    }

    const allValue = useMemo(
        () => ({ user, signUp,signIn,logout }),
        [user]
    )


    return (
        <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
    )
}

export default AuthState
