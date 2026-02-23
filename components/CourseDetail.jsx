"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Users, Star, CheckCircle2, Award, Zap } from "lucide-react";
import { getCourseById } from "@/lib/api";
import CourseDetailSkeleton from "./CourseDetailSkeleton";

export default function CourseDetail({ courseId }) {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [wishlisted, setWishlisted] = useState(false);

    useEffect(() => {
        async function fetchCourse() {
            try {
                setLoading(true);
                const data = await getCourseById(courseId);
                if (!data) {
                    setError("Course not found");
                } else {
                    setCourse(data);
                }
            } catch (err) {
                setError("Failed to load course details");
            } finally {
                setLoading(false);
            }
        }

        fetchCourse();
    }, [courseId]);

    if (loading) return <CourseDetailSkeleton />;

    if (error || !course) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
                    <Link href="/" className="text-primary font-bold hover:underline">
                        Back to Courses
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50/30 min-h-screen">
            {/* Nav Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-bold">
                        <ArrowLeft size={16} />
                        <span>Back to Courses</span>
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-primary text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <div className="text-[11px] font-bold opacity-80 uppercase tracking-widest mb-6">
                                {course.category}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                                {course.title}
                            </h1>
                            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl font-normal leading-relaxed">
                                {course.description}
                            </p>

                            <div className="flex flex-wrap gap-8 text-[14px] font-semibold mb-8 items-center">
                                <div className="flex items-center gap-2">
                                    <Users size={18} className="opacity-80" />
                                    <span>Instructor: <span className="font-bold underline cursor-default">{course.instructor}</span></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} className="opacity-80" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users size={18} className="opacity-80" />
                                    <span>{course.students.toLocaleString()} enrolled</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star size={18} className="fill-yellow-400 text-yellow-400 border-none" />
                                    <span>{course.rating} rating</span>
                                </div>
                            </div>

                            <div className="inline-block bg-blue-100/20 text-blue-100 px-4 py-2 rounded-xl text-xs font-bold border border-blue-100/20">
                                {course.level} Level
                            </div>
                        </div>

                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white/10">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left Column */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* What You'll Learn */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm">
                            <h2 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                <Award size={24} className="text-primary" />
                                What You&apos;ll Learn
                            </h2>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                                {course.whatYouLearn?.map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                                        <span className="text-[14px] text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">Course Description</h2>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                                    {course.longDescription}
                                </p>
                            </div>
                        </div>

                        {/* Your Instructor */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm">
                            <h2 className="text-xl font-black text-gray-900 mb-8 uppercase tracking-tight">Your Instructor</h2>
                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary text-3xl font-black shrink-0 border border-primary/20">
                                    {course.instructor.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{course.instructor}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        {course.instructorBio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl">
                                <h2 className="text-2xl font-black text-gray-900 mb-2">Enroll Today</h2>
                                <p className="text-sm text-gray-500 font-medium mb-8">Join {course.students.toLocaleString()} students already enrolled</p>

                                <Link
                                    href="/signup"
                                    className="block w-full bg-primary text-white py-4 rounded-xl font-black hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 text-sm mb-4 text-center"
                                >
                                    Enroll Now
                                </Link>
                                <button
                                    onClick={() => {
                                        setWishlisted(true);
                                        setTimeout(() => setWishlisted(false), 3000);
                                    }}
                                    className={`w-full py-4 rounded-xl font-black transition-all text-sm text-center border-2 ${wishlisted
                                        ? "bg-green-50 border-green-500 text-green-600"
                                        : "bg-white border-primary/20 text-primary hover:bg-primary/5"
                                        }`}
                                >
                                    {wishlisted ? "Added to Wishlist!" : "Add to Wishlist"}
                                </button>

                                <div className="mt-10 pt-10 border-t border-gray-50">
                                    <h3 className="font-black text-gray-900 mb-6 uppercase tracking-[0.2em] text-[11px]">This course includes:</h3>
                                    <ul className="space-y-4">
                                        {[
                                            `${course.duration} of content`,
                                            "Lifetime access",
                                            "Certificate of completion",
                                            "Access on mobile and desktop",
                                            "Downloadable resources"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                                                <CheckCircle2 size={18} className="text-green-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
