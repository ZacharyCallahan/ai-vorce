"use client";
import axios from "axios";
import ChatNavItem from "./ChatNavItem";
import { useState } from "react";
import { useRouter } from "next/navigation";

const validateForm = (title) => {
    const errors = {};
    if (title.length < 3) {
        errors.title = "Title must be longer than 3 characters";
    }

    return errors;
};

const ChatNav = () => {
    const [title, setTitle] = useState("");
    const [chats, setChats] = useState([]);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm(title);

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        await axios
            .post("/api/create/chat", title)
            .then((res) => {
                setChats([...chats, res.data]);
                console.log(res.data);
                setErrors({});
                setTitle("");
                router.push(`/AI-Chat/${res.data.id}`);
            })
            .catch((err) => console.log());
    };

    return (
        <div className="w-1/4 pl-6 space-y-6">
            <form onSubmit={handleSubmit} className="flex gap-3">
                <label htmlFor="title" placeholder="Chat title...">
                    Title:
                </label>
                <input
                    name="title"
                    type="text"
                    placeholder="Chat title..."
                    className="border-2 border-slate-300 rounded-md shadow-md px-2 w-72"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    type="submit"
                    className="rounded-md border-2 border-slate-300 px-2 ">
                    Create
                </button>
                {errors.title && (
                    <p className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                        {errors.title}
                    </p>
                )}
            </form>

            <ul className="space-y-6">
                <ChatNavItem chats={chats} setChats={setChats} />
            </ul>
        </div>
    );
};

export default ChatNav;
