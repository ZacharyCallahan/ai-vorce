"use client";
//TODO: change this to more components and make it a server component
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import RegisterButton from "../components/buttons/RegisterButton";
import { signIn } from "next-auth/react";

const page = () => {
    const router = useRouter();
    // const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const callbackUrl = "/";

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const res = await signIn("credentials", {
                redirect: false,

                email: formValues.email,
                password: formValues.password,
                callbackUrl,
            });

            if (!res?.error) {
                //TODO: change this
                // await axios
                //     .get(`/placeholder`, {
                //         params: {
                //             email: formValues.email,
                //         },
                //     })
                //     .then((res) => {
                //         // const guards = res.data;
                //         // dispatch(setGuards(guards));
                //     });
                router.push(callbackUrl);
            } else {
                setError("invalid email or password");
            }
            setFormValues({ email: "", password: "" });
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
                <p className="text-center bg-red-300 py-4 mb-6 rounded">
                    {error.name}
                </p>
            )}
            <div className="flex flex-col space-y-4">
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
                    <button type="submit" disabled={loading} className="w-full px-4 py-2 rounded-lg bg-primary text-background font-semibold hover:bg-secondary focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
                        {loading ? "loading..." : "Sign In"}
                    </button>
                </div>
            </div>
            <div className="flex flex-col space-y-4 pt-4">
                <div className="text-center font-semibold mx-4 mb-0">OR</div>
                <div>
                    <a onClick={() => signIn("google", { callbackUrl })} role="button" className="w-full px-4 py-2 rounded-lg bg-primary text-background font-semibold hover:bg-secondary focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
                        Continue with Google
                    </a>
                </div>
                <div>
                    <a onClick={() => signIn("github", { callbackUrl })} role="button" className="w-full px-4 py-2 rounded-lg bg-primary text-background font-semibold hover:bg-secondary focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
                        Continue with GitHub
                    </a>
                </div>
            </div>
            <div className="text-center pt-4">
                <span>
                    Don{"'"}t have an account? <RegisterButton />
                </span>
            </div>
        </form>
    );
};

export default page;
