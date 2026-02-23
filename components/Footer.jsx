import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    {/* Brand */}
                    <div className="md:col-span-6">
                        <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-tighter">INFNOVA Academy</h3>
                        <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                            Empowering learners worldwide with cutting-edge technology courses.
                            Start your journey to success with expert-led training.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h3 className="font-bold text-sm mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/instructors" className="text-gray-400 hover:text-white transition-colors">
                                    Instructors
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="md:col-span-3">
                        <h3 className="font-bold text-sm mb-6">Support</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-20 pt-10 text-center">
                    <p className="text-gray-500 text-xs">
                        © 2026 INFNOVA Technologies. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
