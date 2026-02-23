"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Courses", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24">
                    <Link href="/" className="flex items-center group">
                        <Logo className="scale-90 group-hover:scale-100 transition-transform duration-300" />
                    </Link>

                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[17px] font-medium text-gray-600 hover:text-primary transition-all tracking-tight"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-10">
                        <Link
                            href="/signin"
                            className="text-[17px] font-semibold text-[#FF6B00] hover:opacity-80 transition-all"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="bg-[#FF6B00] text-white px-8 py-3.5 rounded-[14px] text-[17px] font-semibold hover:bg-opacity-95 transition-all shadow-md shadow-primary/10"
                        >
                            Enroll Now
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            className="p-2 text-gray-900 bg-gray-50 rounded-lg"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-50 animate-in slide-in-from-top duration-300">
                    <div className="px-6 py-10 space-y-8 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-sm font-black text-gray-900 hover:text-primary transition-all uppercase tracking-[0.2em]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-8 flex flex-col gap-4">
                            <Link
                                href="/signin"
                                className="w-full py-4 text-xs font-black text-gray-900 border border-gray-100 rounded-xl uppercase tracking-[0.2em]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                className="w-full bg-primary text-white py-5 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
