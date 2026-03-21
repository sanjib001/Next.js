'use client';

import { useState, useEffect } from "react";        
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

const DesktopNav = () => {


    const [token, setToken] = useState(null);       

    const router = useRouter();

    useEffect(() => {
        const t = Cookies.get("token");
        setToken(t || "");
    }, []);

    const handleAuth = () => {
        if (token) {
            Cookies.remove("token");
            setToken("");
        } else {
            router.push('/signin');
        }
    };

    return (
        <div className="flex justify-between items-center py-2 px-2">
            <div className="flex items-center text-3xl font-bold gap-3">
                <span className="bg-black text-white px-2 py-1 rounded-lg">A</span>
                <div className="logo-text">Antbytes Labs</div>
            </div>
            <nav>
                <ul className="flex gap-5 list-none">
                    <li><a className="bg-gray-100 hover:bg-gray-500 hover:text-white rounded-lg text-base px-3 py-3" href="#">Services</a></li>
                    <li><a className="bg-gray-100 hover:bg-gray-500 hover:text-white rounded-lg text-base px-3 py-3" href="#">Products</a></li>
                    <li><a className="bg-gray-100 hover:bg-gray-500 hover:text-white rounded-lg text-base px-3 py-3" href="#">Projects</a></li>
                    <li><a className="bg-gray-100 hover:bg-gray-500 hover:text-white rounded-lg text-base px-3 py-3" href="#">About</a></li>
                    <li><a className="bg-gray-100 hover:bg-gray-500 hover:text-white rounded-lg text-base px-3 py-3" href="#">Contact</a></li>
                </ul>
            </nav>

            <div>
                <button
                    className="px-6 py-3 rounded-lg text-lg bg-black text-white border border-brand-dark capitalize cursor-pointer"  // 🟡 CHANGED BG COLOR
                    onClick={handleAuth}
                >
                    {token === null ? "" : token ? "Sign out" : "Sign in"}
                </button>
            </div>
        </div>
    );
};

export default DesktopNav;