import logo from "../../../../public/logo.png";
import Card from "./Card";
import ContentImage1 from "../../../../public/divorce_appPhotos/contentImage1.jpg";
import ContentImage2 from "../../../../public/divorce_appPhotos/contentImage2.jpg";
import ContentImage4 from "../../../../public/divorce_appPhotos/contentImage4.jpg";

const Content = () => {
    return (
        <div className="flex justify-between gap-48">
            <Card
                header={
                    "The Benefits of Divorce Therapy"
                }
                content={
                    "Divorce can be a difficult and emotional process, but therapy can help you navigate it more effectively. Some benefits of divorce therapy include: learning coping skills, improving communication with your ex-partner, reducing stress and anxiety, and gaining a better understanding of yourself and your needs."
                }
                image={ContentImage1}
            />
            <Card
               header={
                    "How ChatGPT and AI Can Help You Through Divorce"
                }
                content={
                    "ChatGPT and AI can be powerful tools for helping you navigate the divorce process. By using natural language processing and machine learning, these technologies can provide personalized support and guidance. Some ways that ChatGPT and AI can help include: providing emotional support, helping you find resources and information, and assisting with legal and financial matters."
                }
                image={ContentImage2}
            />
            <Card
                header={
                    "How to Find a Divorce Therapist"
                }
                content={
                    "Finding the right therapist can be a challenge, but there are many resources available to help you. You can start by asking for recommendations from friends or family members, or by searching online for therapists in your area. It's important to find a therapist who specializes in divorce and has experience working with clients in similar situations."
                }
                image={ContentImage4}
            />
            
        </div>
            
    );
};

export default Content;
