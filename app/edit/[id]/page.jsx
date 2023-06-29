"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = ({ params }) => {
    const id = params.id;
    const [title, setTitle] = useState("");
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`/api/edit/${id}`, title)
            .then((res) => {
                router.push("/AI-Chat");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <form onSubmit={handleSubmit} className="pt-20 space-x-3 pl-6">
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                placeholder="Chat title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                type="submit"
                className="border-2 rounded-md shadow-md px-4 border-slate-300">
                Edit
            </button>
        </form>
    );
};

export default page;
