"use client";
import axios from "axios";
import ChatNavItem from "./ChatNavItem";
import { useState } from "react";
const ChatNav = () => {
    const [title, setTitle] = useState("");
    const [chats, setChats] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post("/api/create/chat", title)
            .then((res) => {
                setChats([...chats, res.data]);
                console.log(res);
            })
            .catch((err) => console.log());
    };

    return (
        <div className="w-1/4 pl-6 space-y-6">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="rounded-md border-2 border-slate-300 px-2 ">
                    Create
                </button>
            </form>

            <ul className="space-y-6">
                <ChatNavItem chats={chats} setChats={setChats} />
            </ul>
        </div>
    );
};

export default ChatNav;
