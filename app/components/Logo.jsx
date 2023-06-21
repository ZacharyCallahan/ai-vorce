import Image from "next/image";
import logo from "../../public/logo.png"
const Logo = ({width, height}) => {
    return (
        <div className="flex items-center gap-2">
            <Image src={logo} alt="AI-vorce Logo" width={width} height={height} />
            <h1 className="font-bold">AI-vorce</h1>
        </div>
    );
}

export default Logo;