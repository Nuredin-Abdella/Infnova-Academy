"use client";

import Link from "next/link";
import { Users, ArrowLeft } from "lucide-react";

export default function InstructorsPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-primary text-white py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-8 backdrop-blur-sm border border-white/30">
                        <Users size={40} className="text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
                        Our Instructors
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
                        We are currently onboarding world-class experts to guide you.
                        This page is coming soon with detailed profiles and mentorship opportunities.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-all shadow-xl shadow-black/10"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}
