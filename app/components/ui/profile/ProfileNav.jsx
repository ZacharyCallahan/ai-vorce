import Link from 'next/link';
import React from 'react';
import { getServerSession } from "next-auth";

const ProfileNav = async () => {
    const session = await getServerSession();
    const user = session?.user;
    return (
        <div className="flex flex-col items-start gap-4">
            <h1 className="text-primary font-bold text-2xl">{user?.name}'s Profile</h1>
            <ul className="flex flex-col gap-4">
                <li><Link href="/profile/info" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-accent transition-colors">User Information</Link></li>
                <li><Link href="/profile/account" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-accent transition-colors">Account Settings</Link></li>
                <li><Link href="/profile/notifications" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-accent transition-colors">Notification Settings</Link></li>
                <li><Link href="/profile/chatbot" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-accent transition-colors">ChatBot Settings</Link></li>
            </ul>
        </div>
    )
}

export default ProfileNav

