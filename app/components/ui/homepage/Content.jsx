import logo from "../../../../public/logo.png";
import Card from "./Card";

const Content = () => {
    return (
        <div className="flex justify-between gap-48">
            <Card
                header={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt ut quae quos asperiores, nisi labore saepe quibusdam. Aperiam porro, enim provident fuga beatae consectetur nemo."
                }
                content={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt ut quae quos asperiores, nisi labore saepe quibusdam. Aperiam porro, enim provident fuga beatae consectetur nemo."
                }
                image={logo}
            />
            <Card
                header={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt ut quae quos asperiores, nisi labore saepe quibusdam. Aperiam porro, enim provident fuga beatae consectetur nemo."
                }
                content={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt ut quae quos asperiores, nisi labore saepe quibusdam. Aperiam porro, enim provident fuga beatae consectetur nemo."
                }
                image={logo}
            />
            <Card
                header={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt ut quae quos asperiores, nisi labore saepe quibusdam. Aperiam porro, enim provident fuga beatae consectetur nemo."
                }
                content={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt ut quae quos asperiores, nisi labore saepe quibusdam. Aperiam porro, enim provident fuga beatae consectetur nemo."
                }
                image={logo}
            />
        </div>
    );
};

export default Content;
