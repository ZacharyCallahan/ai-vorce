"use client";
import React, { useState } from "react";
import getChatResponse from "../../utils/chatGPTApi";

const ChatComponent = () => {
    const [chatHistory, setChatHistory] = useState([]);

    const handleUserMessage = async (message) => {
        const response = await getChatResponse(message);

        setChatHistory([...chatHistory, { user: message, bot: response }]);
    };

    return (
        <div className=" space-y-6 w-1/2 m-auto">
            <div className="space-y-6 ">
                {/* Render chat history */}
                {chatHistory.map((entry, index) => (
                    <div
                        key={index}
                        className="w-fit bg-gray-400 rounded-md p-3 space-y-2">
                        <p>User: {entry.user}</p>
                        <p>Bot: {entry.bot}</p>
                    </div>
                ))}
            </div>
            {/* User input form */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleUserMessage(e.target.message.value);
                    e.target.message.value = "";
                }}>
                <input type="text" name="message" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatComponent;
