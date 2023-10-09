import Link from 'next/link';
import React from 'react';
import { getServerSession } from "next-auth";

const ProfileNav = async () => {
    const session = await getServerSession();
    const user = session?.user;
    return (
        <div >
            <ul className="flex items-end gap-10 flex-col">
            <h1>{user?.name}'s Profile</h1>
                <li><Link href="/profile/info" className="px-4 py-2 bg-blue-500 text-white rounded">User Information</Link></li>
                <li><Link href="/profile/account" className="px-4 py-2 bg-blue-500 text-white rounded">Account Settings</Link></li>
                <li><Link href="/profile/notifications" className="px-4 py-2 bg-blue-500 text-white rounded">Notification Settings</Link></li>
                <li> <Link href="/profile/chatbot" className="px-4 py-2 bg-blue-500 text-white rounded">ChatBot Settings</Link></li>
            </ul>
        </div>
    )
}

export default ProfileNav

