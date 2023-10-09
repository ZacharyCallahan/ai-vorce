import Link from "next/link";
import Logo from "./Logo";
import LoginButton from "./buttons/LoginButton";
import LogoutButton from "./buttons/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";
import Image from "next/image";

const Nav = async () => {
    const session = await getServerSession();
    const user = session?.user ?? null;
    return (
        <div className="pb-32">
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
                        <li> <Link href="/profile" ><Image src="" alt="" /> Profile</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
