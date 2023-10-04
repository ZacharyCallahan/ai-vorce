import Slogan from "./components/ui/homepage/Slogan";
import Content from "./components/ui/homepage/Content";
import TherapistForm from "./components/ui/homepage/therapistform/TherapistForm";
import Slider from "./components/ui/homepage/Slider";


export default function Home() {
    return (
        <main className="">
            <div className=" flex m-auto w-10/12 items-center justify-between gap-24 h-screen">
                <Slogan />
                <TherapistForm />
            </div>
            <div className="space-y-48">
                <div className=" flex gap-20 ">
                    <Slider />
                </div>
                <div className="m-auto w-10/12">
                <Content />
                </div>
            </div>
        </main>
    );
}
