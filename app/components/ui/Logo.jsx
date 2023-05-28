import Image from "next/image";
import logo from "../../../public/logo.png"
const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <Image src={logo} alt="AI-vorce Logo" width={40} height={40} />
            <h1 className="font-bold">AI-vorce</h1>
        </div>
    );
}

export default Logo;