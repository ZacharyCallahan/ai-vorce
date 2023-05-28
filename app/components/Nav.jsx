import Link from "next/link";
import Logo from "./ui/Logo";
const Nav = () => {
    return (
        <nav className="flex justify-between items-center m-auto w-10/12 h-20 bg-transparent ">
            <Logo />
            <ul className="flex gap-5">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/get/started">Get Started</Link>
                </li>
                <li>
                    <Link href="/Login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
