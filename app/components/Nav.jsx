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
        <div className="fixed w-full bg-background shadow-lg z-50">
            <nav className="flex justify-between items-center m-auto w-10/12 h-20 text-text-color">
                <div className="flex items-center">
                    <Logo width={40} height={40} />
                    
                </div>
                <ul className="flex items-center gap-5">
                    <li>
                        <Link
                            href={"/"}
                            className="text-primary hover:text-accent transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/AI-Chat"
                            className="text-primary hover:text-accent transition-colors">
                            AI-Chat
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-primary hover:text-accent transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/get/started"
                            className="text-primary hover:text-accent transition-colors">
                            Get Started
                        </Link>
                    </li>
                    <li>
                        {user ? (
                            <LogoutButton className="bg-accent text-background hover:bg-secondary transition-colors rounded-md px-4 py-2 font-medium" />
                        ) : (
                            <LoginButton className="bg-accent text-background hover:bg-secondary transition-colors rounded-md px-4 py-2 font-medium" />
                        )}
                    </li>
                    <li>
                        <Link
                            href="/profile"
                            className="text-primary hover:text-accent transition-colors">
                            <Image src="" alt="" /> Profile
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
