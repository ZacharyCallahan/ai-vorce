import Image from "next/image";

const Card = ({ header, content, image }) => {
    return (
        <div className="flex flex-col w-1/3 items-center bg-background rounded-md shadow-md px-4 pb-4">
            <Image className="rounded shadow-md " src={image} alt="" width={300} height={200} />
            <div>
            <h2 className="text-primary font-bold mt-4">{header}</h2>
                <p className="text-text-color opacity-80 mt-4">{content}</p>
            </div>
        </div>
    );
};

export default Card;
