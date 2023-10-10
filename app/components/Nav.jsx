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
<div className="fixed w-full bg-opacity-90 backdrop-blur-sm bg-nav shadow-lg z-50">
            <nav className="flex justify-between items-center m-auto w-10/12 h-20 text-text-color">
                <div className="flex items-center">
                    <Logo width={60} height={60} />
                    
                </div>
                <ul className="flex items-center gap-5">
                    <li>
                        <Link
                            href={"/"}
                            className="text-text-color hover:text-accent transition-colors font-bold text-lg">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/AI-Chat"
                            className="text-text-color hover:text-accent transition-colors font-bold text-lg">
                            AI-Chat
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-text-color hover:text-accent transition-colors font-bold text-lg">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/get/started"
                            className="text-text-color hover:text-accent transition-colors font-bold text-lg">
                            Get Started
                        </Link>
                    </li>
                                        <li>
                        <Link
                            href="/profile"
                            className="text-text-color hover:text-accent transition-colors font-bold text-lg">
                            <Image src="" alt="" /> Profile
                        </Link>
                    </li>
                    <li>
                        {user ? (
                            <LogoutButton className="bg-accent text-background hover:bg-secondary transition-colors rounded-md px-4 py-2 font-medium text-lg" />
                        ) : (
                            <LoginButton className="bg-accent text-background hover:bg-secondary transition-colors rounded-md px-4 py-2 font-medium text-lg" />
                        )}
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Nav;
