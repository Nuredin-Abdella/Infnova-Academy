"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Logo from '@/components/Logo';

export default function SignUpPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            alert('Account created successfully!');
            setIsLoading(false);
            window.location.href = '/';
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link href="/" className="flex justify-center mb-8">
                    <Logo />
                </Link>
                <h2 className="text-center text-3xl font-black text-gray-900 uppercase tracking-tighter">
                    Create Account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 font-medium">
                    Already have an account?{' '}
                    <Link href="/signin" className="font-bold text-primary hover:text-primary-dark transition-colors">
                        Sign in instead
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl shadow-black/5 sm:rounded-2xl sm:px-10 border border-gray-100">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                                Full Name
                            </label>
                            <input
                                required
                                type="text"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary outline-none transition-all font-medium"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                                Email address
                            </label>
                            <input
                                required
                                type="email"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary outline-none transition-all font-medium"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                                Password
                            </label>
                            <input
                                required
                                type="password"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary outline-none transition-all font-medium"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <div>
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/20 text-sm font-bold uppercase tracking-widest text-white bg-primary hover:bg-primary-dark transition-all disabled:opacity-50"
                            >
                                {isLoading ? 'Wait...' : 'Join Now'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8">
                        <Link href="/" className="flex items-center justify-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors">
                            <ArrowLeft size={16} />
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
