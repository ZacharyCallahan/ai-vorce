"use client";
import axios from "axios";
import ChatNavItem from "./ChatNavItem";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

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
    const session = getSession();
    const user = session?.user;

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label
                    htmlFor="title"
                    className="text-lg font-semibold text-white">
                    Chat Title
                </label>
                <input
                    name="title"
                    type="text"
                    placeholder="Enter chat title..."
                    className="border border-gray-300 rounded-lg shadow-md py-2 px-3 focus:outline-none focus:border-blue-400"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {user ? (
                    errors.title && (
                        <p className="text-red-500">{errors.title}</p>
                    )
                ) : (
                    <p className="text-red-500">
                        You must be logged in to create a chat
                    </p>
                )}
                <button
                    type="submit"
                    className="bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                    Create
                </button>
            </form>
        </div>
    );
};

export default ChatNav;
