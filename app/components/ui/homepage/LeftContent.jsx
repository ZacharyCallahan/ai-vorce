import logo from "../../../../public/logo.png";
import Image from "next/image";

const LeftContent = () => {
    return (
        <div className="w-1/2">
            <Image src={logo} alt="" width={300} height={200} />{" "}
        </div>
    );
};

export default LeftContent;
