import Link from "next/link";
import Logo from "./Logo";
import LoginButton from "./buttons/LoginButton";
import LogoutButton from "./buttons/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";

const Nav = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    return (
        <div className="fixed w-full bg-transparent backdrop-blur-sm">
            <nav className="flex justify-between items-center m-auto w-10/12 h-20">
                <Logo width={40} height={40} />
                <ul className="flex gap-5">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/AI-Chat">AI-Chat</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/get/started">Get Started</Link>
                    </li>
                    <li>{user ? <LogoutButton /> : <LoginButton />}</li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
