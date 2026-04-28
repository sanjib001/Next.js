'use client';

import React, { useState } from 'react';
import {
    Settings,
    Briefcase,
    Users,
    MessageSquare,
    Share2,
    Info,
    Image as ImageIcon,
    Menu,
    X
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';

export default function DashboardLayout({ children }) {
    const [activeTab, setActiveTab] = useState('services');
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleSignOut = () => {
        Cookies.remove("token");
        router.push("/signin");
    };

    const navigation = [
        { name: 'Hero Sections', href: '/dashboard/hero', icon: ImageIcon, id: 'hero' },
        { name: 'Services', href: '/dashboard/services', icon: Settings, id: 'services' },
        { name: 'Portfolio', href: '/dashboard/portfolio', icon: Briefcase, id: 'portfolio' },
        { name: 'Partners', href: '/dashboard/partners', icon: Users, id: 'partners' },
        { name: 'Contacts', href: '/dashboard/contacts', icon: MessageSquare, id: 'contacts' },
        { name: 'Socials', href: '/dashboard/socials', icon: Share2, id: 'socials' },
        { name: 'About Us', href: '/dashboard/about', icon: Info, id: 'about' },
    ];

    return (
        <div className="flex h-screen bg-gray-100">

            {/* Overlay (mobile only) */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed md:static z-50 top-0 left-0 h-full w-64 bg-white border-r border-gray-200
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0
            `}>
                <div className="p-6 flex justify-between items-center md:block">
                    <h1 className="text-2xl font-bold text-blue-600">Agency Admin</h1>

                    {/* Close button (mobile only) */}
                    <button className="md:hidden" onClick={() => setOpen(false)}>
                        <X />
                    </button>
                </div>

                <nav className="mt-6 px-4 space-y-2">
                    {navigation.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => {
                                setActiveTab(item.id);
                                router.push(item.href);
                                setOpen(false);
                            }}
                            className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === item.id
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <item.icon className="mr-3 h-5 w-5" />
                            {item.name}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto w-full">

                {/* Header */}
                <header className="bg-white border-b border-gray-200 py-4 px-6 md:px-8 flex justify-between items-center">

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(true)}
                    >
                        <Menu />
                    </button>

                    <h2 className="text-sm md:text-xl font-semibold text-gray-800 capitalize">
                        {activeTab} Management
                    </h2>

                    <div className="flex items-center space-x-4">
                        <Link href="/" className="font-medium text-blue-600 hover:text-blue-500">
                           GO TO HOME
                        </Link>
                        <span className="text-sm text-gray-500 hidden md:block">Admin User</span>
                        <div
                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-500"
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </div>
                    </div>
                </header>

                <div className="p-4 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}