'use client'
import { signOut } from "next-auth/react";
const LogoutButton = ({className}) => {
    return (
        <button className={`${className}`} onClick={() => signOut()}>Logout</button>
    );
}

export default LogoutButton;