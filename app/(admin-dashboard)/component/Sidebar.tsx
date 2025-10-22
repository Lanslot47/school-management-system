"use client"

import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { PlusIcon } from "lucide-react";
import { SheetIcon } from "lucide-react";
import { PlusSquareIcon } from "lucide-react";
import { UserIcon } from "lucide-react";
import { useState } from "react";
const SideBar = ({ children }: { children?: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    const list = [
        { id: 1, title: 'Dashboard', url: '/admin', icon: <LayoutDashboard /> },
        { id: 2, title: 'Profile', url: 'admin/profile', icon: <UserIcon /> },
        { id: 3, title: 'Add Student', url: 'admin/addStudent', icon: <PlusIcon /> },
        { id: 4, title: 'Result', url: 'admin/result', icon: <SheetIcon /> },
        { id: 5, title: 'Add Staff', url: 'admin/addStaff', icon: <PlusSquareIcon /> }
    ]
    return (
        <div className="flex h-screen overflow-hidden">
            <aside
                className={`fixed lg:static top-0 left-0 h-full w-56 bg-gradient-to-b from-white via-white to-green-200 shadow-xl p-6 rounded-r-xl transform transition-transform duration-300 z-40
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
            >
                <h1 className="text-2xl font-extrabold text-green-600 text-center mb-6">
                    Zit
                </h1>

                <nav className="flex flex-col space-y-2">
                    {list.map((item) => (
                        <Link
                            key={item.id}
                            href={item.url}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-600 hover:text-white transition"
                            onClick={() => setOpen(false)}
                        >
                            {item.icon}
                            <span className="font-medium text-sm">{item.title}</span>
                        </Link>
                    ))}
                </nav>
            </aside>

            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
            <div className="flex-1 flex flex-col overflow-y-auto">
                <header className="lg:hidden p-4">
                    <button
                        onClick={() => setOpen(!open)}
                        className="p-2 rounded bg-green-600 text-white"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </header>

                <main className="p-4">{children}</main>
            </div>
        </div>

    )
}
export default SideBar;