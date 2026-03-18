'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    LayoutDashboard,
    Settings,
    Briefcase,
    Users,
    MessageSquare,
    Share2,
    Info,
    Image as ImageIcon
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }) {
    const [activeTab, setActiveTab] = useState('services');
    const router = useRouter();

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
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-blue-600">Agency Admin</h1>
                </div>
                <nav className="mt-6 px-4 space-y-2">
                    {navigation.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => {
                                setActiveTab(item.id);
                                router.push(item.href);
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
            <main className="flex-1 overflow-y-auto">
                <header className="bg-white border-b border-gray-200 py-4 px-8 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800 capitalize">{activeTab} Management</h2>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">Admin User</span>
                        <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}