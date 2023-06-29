"use client";
import React, { useState } from "react";
import getChatResponse from "../../utils/chatGPTApi";
import axios from "axios";

const ChatComponent = ({ id, chat }) => {
    const [chatHistory, setChatHistory] = useState(chat.messages);

    const handleUserMessage = async (message) => {
        const response = await getChatResponse(message);

        setChatHistory([...chatHistory, { userMessage: message, botMessage: response }]);
        await axios
            .post(`/api/create/message/${id}`, { user: message, bot: response })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="">
            <div className="space-y-6 pb-6">
                {/* Render chat history */}
                {chatHistory.map((entry, index) => (
                    <div
                        key={index}
                        className="w-2/3 bg-gray-300 rounded-md p-3 space-y-2 shadow-md">
                        <p>User: {entry.userMessage}</p>
                        <p>Bot: {entry.botMessage}</p>
                    </div>
                ))}
            </div>
            {/* User input form */}
            <form
                className="space-x-3"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleUserMessage(e.target.message.value);
                    e.target.message.value = "";
                }}>
                <input
                    type="text"
                    name="message"
                    placeholder="Send a therapy related message..."
                    className="border-2 border-slate-300 rounded-md shadow-md px-2 w-72"
                />
                <button
                    type="submit"
                    className="border-2 rounded-md shadow-md px-4 border-slate-300">
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatComponent;
