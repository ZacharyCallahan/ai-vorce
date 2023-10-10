"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ChatNavItem from "./ChatNavItem";

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
    const session = useSession();
    session;
    const user = session?.data?.user ?? null;
    user;
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
                res.data;
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
                    className="text-lg font-semibold text-text-color">
                    Chat Title
                </label>
                <input
                    name="title"
                    type="text"
                    placeholder="Enter chat title..."
                    className="border border-gray-300 rounded-lg shadow-md py-2 px-3 focus:outline-none focus:border-accent"
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
                    className="bg-primary hover:bg-secondary text-text-color py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-accent">
                    Create
                </button>
            </form>
        </div>
    );
};

export default ChatNav;
