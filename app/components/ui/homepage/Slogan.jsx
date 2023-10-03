import Image from "next/image";
import logo from"../../../../public/logo.png";


const Slogan = () => {
    return (
        <div className="space-y-6 w-1/2">
            <h1 className="font-bold text-5xl">
                Convenient and Afforable Therapy with Ai-Vorce.
            </h1>
            <p className="opacity-75 text-xl">
                Welcome Top10 Reviews visitors! Get started today and enjoy 20%
                off your first month. Code “Top10Reviews" will be automatically
                applied.
            </p>
            <Image src={logo} alt="AI-vorce Logo" width={500} height={500} />
        </div>
    );
}

export default Slogan;