'use client';

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import Link from "next/link";

const DesktopNav = () => {
    const [token, setToken] = useState(null);
    const [open, setOpen] = useState(false);
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
        <div className="w-full ">

            {/* Top Bar */}
            <div className="flex justify-between items-center px-4 py-3">

                {/* Logo */}
                <div className="flex items-center gap-2 text-3xl font-bold">
                    <span className="bg-black text-white px-3 py-2 rounded-lg">A</span>
                    <span>Antbytes Labs</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-5">
                    <li><a className="bg-gray-100 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-lg" href="/dashboard">Dashboard</a></li>
                    <li><a className="bg-gray-100 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-lg" href="#services">Services</a></li>
                    <li><a className="bg-gray-100 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-lg" href="#portfolios">Portfolios</a></li>
                    <li><a className="bg-gray-100 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-lg" href="#partners">Partners</a></li>
                    <li><a className="bg-gray-100 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-lg" href="#about">About</a></li>
                    <li><a className="bg-gray-100 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-lg" href="#footer">Contact</a></li>
                </ul>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <button
                        onClick={handleAuth}
                        className="px-5 py-3 bg-black text-white rounded-lg"
                    >
                        {token === null ? "" : token ? "Sign out" : "Sign in"}
                    </button>
                </div>

                {/* Hamburger (Mobile) */}
                <button
                    className="md:hidden text-4xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 px-4 pb-4">
                    <a href="/dashboard" className="py-2 border-b">Dashboard</a>
                    <a href="#services" className="py-2 border-b">Services</a>
                    <a href="#portfolios" className="py-2 border-b">Portfolios</a>
                    <a href="#partners" className="py-2 border-b">Partners</a>
                    <a href="#about" className="py-2 border-b">About</a>
                    <a href="#footer" className="py-2 border-b">Contact</a>

                    <button
                        onClick={handleAuth}
                        className="mt-2 px-4 py-2 bg-black text-white rounded-lg"
                    >
                        {token ? "Sign out" : "Sign in"}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DesktopNav;