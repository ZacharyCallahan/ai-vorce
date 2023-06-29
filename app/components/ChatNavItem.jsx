import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

const ChatNavItem = ({ chats, setChats }) => {
    useEffect(() => {
        axios
            .get("/api/get")
            .then((response) => {
                setChats(response.data.chat);
                console.log(response.data.chat);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {
        axios
            .delete(`/api/delete/${id}`)
            .then((res) => {
                setChats(chats.filter((chat) => chat.id != id));
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <li className="">
            {chats.map((chat, idx) => (
                <div
                    key={idx}
                    className="flex justify-evenly space-y-3 items-center">
                    <Link href={`/AI-Chat/${chat.id}`}>{chat.title}</Link>
                    <Link
                        href={`/edit/${chat.id}`}
                        className="rounded-md border-2 border-slate-300 px-2 ">
                        Edit
                    </Link>
                    <button
                        className="rounded-md border-2 border-slate-300 px-2 "
                        onClick={() => handleDelete(chat.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </li>
    );
};

export default ChatNavItem;
