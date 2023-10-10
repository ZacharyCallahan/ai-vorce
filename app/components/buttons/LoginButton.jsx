'use client'
import {signIn} from 'next-auth/react'
const LoginButton = ({className}) => {
    return (
        <button className={`${className}`} onClick={()=> signIn()}>Login</button>
    );
}

export default LoginButton;