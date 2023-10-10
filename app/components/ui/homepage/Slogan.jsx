import Image from "next/image";
import logo from"../../../../public/logo.png";


const Slogan = () => {
    return (
        <div className="space-y-6 w-2/3 bg-background p-12 rounded shadow-lg">
            <h1 className="font-bold text-5xl text-text-color">
                Convenient and Afforable Therapy with Ai-Vorce.
            </h1>
            <p className="opacity-75 text-xl text-text-color">
                Welcome Top10 Reviews visitors! Get started today and enjoy 20%
                off your first month. Code “Top10Reviews" will be automatically
                applied.
            </p>
            <Image src={logo} alt="AI-vorce Logo" width={500} height={500} className="rounded-lg" />
        </div>
    );
}

export default Slogan;