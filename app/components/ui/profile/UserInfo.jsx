'use client'
import { useState } from "react";
import { useSession } from "next-auth/react";


const UserInfo = () => {
    const session = useSession();
    const user = session?.data?.user;
    const [newUser, setNewUser] = useState({
        name: user?.name,
        email: user?.email ?? "",
        phone: user?.phone ?? "",
        address: user?.address ?? "",
        city: user?.city ?? "",
        state: user?.state ?? "",
        zip: user?.zip ?? "",
        country: user?.country ?? ""
    });

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic here
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto text-black">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-text-color text-xs font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="appearance-none block w-full bg-background text-text-color border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" value={newUser.name} onChange={handleChange} name="name" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-text-color text-xs font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="appearance-none block w-full bg-background text-text-color border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" value={newUser.email} onChange={handleChange} name="email" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-text-color text-xs font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input className="appearance-none block w-full bg-background text-text-color border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="tel" value={newUser.phone} onChange={handleChange} name="phone" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-text-color text-xs font-bold mb-2" htmlFor="address">
                        Address
                    </label>
                    <input className="appearance-none block w-full bg-background text-text-color border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="address" type="text" value={newUser.address} onChange={handleChange} name="address" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-text-color text-xs font-bold mb-2" htmlFor="city">
                        City
                    </label>
                    <input className="appearance-none block w-full bg-background text-text-color border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="city" type="text" value={newUser.city} onChange={handleChange} name="city" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-text-color text-xs font-bold mb-2" htmlFor="state">
                        State
                    </label>
                    <input className="appearance-none block w-full bg-background text-text-color border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="state" type="text" value={newUser.state} onChange={handleChange} name="state" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-text-color text-xs font-bold mb-2" htmlFor="zip">
                        Zip
                    </label>
                    <input className="appearance-none block w-full bg-background text-text-color border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="zip" type="text" value={newUser.zip} onChange={handleChange} name="zip" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-text-color text-xs font-bold mb-2" htmlFor="country">
                        Country
                    </label>
                    <input className="appearance-none block w-full bg-background text-text-color border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="country" type="text" value={newUser.country} onChange={handleChange} name="country" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <button className="bg-primary hover:bg-secondary text-text-color font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Save Changes
                    </button>
                </div>
            </div>
        </form>
    );
}

export default UserInfo;