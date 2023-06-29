"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const validateForm = (title) => {
    const errors = {};
    if (title.length < 3) {
        errors.title = "Title must be longer than 3 characters";
    }

    return errors;
};
const page = ({ params }) => {
    const id = params.id;
    const [title, setTitle] = useState("");
    const router = useRouter();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
            .get(`/api/get/${id}`)
            .then((res) => {
                setTitle(res.data.title);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm(title);

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        axios
            .put(`/api/edit/${id}`, title)
            .then((res) => {
                router.push("/AI-Chat");
                setErrors({});
                setTitle("");
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
                className="border-2 border-slate-300 rounded-md shadow-md px-2 w-72"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                type="submit"
                className="border-2 rounded-md shadow-md px-4 border-slate-300">
                Edit
            </button>
            {errors.title && (
                <p className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                    {errors.title}
                </p>
            )}
        </form>
    );
};

export default page;
