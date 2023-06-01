import Slogan from "./components/ui/homepage/Slogan";
import Content from "./components/ui/homepage/Content";
import TherapistForm from "./components/ui/homepage/therapistform/TherapistForm";
import RightContent from "./components/ui/homepage/RightContent";
import LeftContent from "./components/ui/homepage/LeftContent";

export default function Home() {
    return (
        <main className="m-auto w-10/12  ">
            <div className=" flex  items-center justify-between gap-24 h-screen">
                <Slogan />
                <TherapistForm />
            </div>
            <div className="space-y-48">
                <div className=" flex gap-20 ">
                    <LeftContent />
                    <RightContent />
                </div>
                <Content />
            </div>
        </main>
    );
}
