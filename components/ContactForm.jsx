"use client";

import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus(null), 5000);
        }, 1500);
    };

    return (
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-orange-red">Get in Touch</h2>
                    <p className="text-gray-500 font-medium leading-relaxed">
                        Have questions about our courses or corporate training? Our team is here to help you.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                            <p className="font-bold text-gray-900">support@infnova.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                            <p className="font-bold text-gray-900">+251 911 234 567</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Location</p>
                            <p className="font-bold text-gray-900">Addis Ababa, Ethiopia</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2">
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium"
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium"
                                    placeholder="jane@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">Subject</label>
                            <input
                                required
                                type="text"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium"
                                placeholder="How can we help?"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">Message</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-medium resize-none"
                                placeholder="Tell us more about your request..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            disabled={status === 'sending'}
                            type="submit"
                            className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 disabled:opacity-50"
                        >
                            {status === 'sending' ? 'Sending...' : (
                                <>
                                    <span>Send Message</span>
                                    <Send size={20} />
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="p-4 bg-green-50 text-green-700 rounded-lg font-bold text-sm text-center animate-in fade-in slide-in-from-top-4">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
