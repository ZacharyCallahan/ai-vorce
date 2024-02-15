"use client";
//TODO: change this to more components and make it a server component
import { useState } from "react";
import LoginButton from "../components/buttons/LoginButton";
import { signIn } from "next-auth/react";

const page = () => {
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFormValues({ name: "", email: "", password: "" });

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setLoading(false);
            if (!res.ok) {
                setError((await res.json()).message);
                return;
            }

            signIn(undefined, { callbackUrl: "/" });
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <form onSubmit={onSubmit} className="pt-20">
            {error && (
                <div className="text-center bg-red-300 py-4 mb-6  rounded">
                    {error.message}
                </div>
            )}
            <div className="flex flex-col space-y-4">
                <div>
                    <input
                        required
                        type="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full px-4 py-2 rounded-lg bg-background text-text-color focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    />
                </div>
                <div>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className="w-full px-4 py-2 rounded-lg bg-background text-text-color focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    />
                </div>
                <div>
                    <input
                        required
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full px-4 py-2 rounded-lg bg-background text-text-color focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        
                        disabled={loading}
                        className="w-full px-4 py-2 rounded-lg bg-primary text-background font-semibold hover:bg-secondary focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    >
                        {loading ? "loading..." : "Sign Up"}
                    </button>
                </div>
            </div>
            <div className="text-center pt-4">
                <span>
                    Already have an account? <LoginButton />
                </span>
            </div>
        </form>
    );
};

export default page;
