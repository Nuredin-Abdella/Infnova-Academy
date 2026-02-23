"use client";

import { Award, Target, Eye, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-primary text-white py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">
                            Empowering <span className="italic">Tomorrow&apos;s</span> Tech Leaders
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-medium leading-relaxed">
                            INFNOVA Academy is more than just an online learning platform. We are a community dedicated to bridging the gap between education and the tech industry.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16">
                            <div className="space-y-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary">
                                    <Target size={32} />
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Our Mission</h2>
                                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                    To provide accessible, high-quality technology education that empowers individuals to transform their lives and contribute to the global digital economy. We believe that everyone deserves a chance to learn and grow in tech.
                                </p>
                            </div>
                            <div className="space-y-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary">
                                    <Eye size={32} />
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Our Vision</h2>
                                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                    To be the world&apos;s leading academy for practical technology skills, recognized for our innovative teaching methods, expert mentorship, and the success of our global community of alumni.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-24 bg-gray-50/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4">Why Choose Us</h2>
                            <p className="text-gray-500 font-medium italic">Built by experts, for the modern learner.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    icon: <Award className="text-primary" />,
                                    title: "Industry Experts",
                                    desc: "Learn from professionals with years of experience in top tech companies."
                                },
                                {
                                    icon: <Users className="text-primary" />,
                                    title: "Global Community",
                                    desc: "Join thousands of students and mentors from all around the world."
                                },
                                {
                                    icon: <Award className="text-primary" />,
                                    title: "Practical Skills",
                                    desc: "Focus on real-world projects that prepare you for the current job market."
                                }
                            ].map((value, i) => (
                                <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center">
                                    <div className="inline-block p-4 bg-gray-50 rounded-2xl mb-6">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
