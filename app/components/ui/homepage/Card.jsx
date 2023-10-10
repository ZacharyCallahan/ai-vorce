import Image from "next/image";

const Card = ({ header, content, image }) => {
    return (
        <div className="flex flex-col justify-between w-1/3  items-center bg-background rounded-md shadow-md p-4">
            <Image src={image} alt="" width={300} height={200} />
            <h2 className="text-primary font-bold mt-4">{header}</h2>
            <p className="text-text-color opacity-80 mt-4">{content}</p>
        </div>
    );
};

export default Card;
