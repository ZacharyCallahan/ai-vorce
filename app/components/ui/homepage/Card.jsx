import Image from "next/image";

const Card = ({ header, content, image }) => {
    return (
        <div className="flex flex-col justify-between w-1/3  items-center">
            <Image src={image} alt="" width={300} height={200} />
            <h2>{header}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Card;
