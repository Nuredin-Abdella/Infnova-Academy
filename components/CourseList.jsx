"use client";

import { useEffect, useState, useMemo } from "react";
import { getCourses } from "@/lib/api";
import CourseCard from "./CourseCard";
import CourseCardSkeleton from "./CourseCardSkeleton";
import FilterBar from "./FilterBar";

export default function CourseList() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedLevel, setSelectedLevel] = useState("All Levels");

    useEffect(() => {
        async function fetchCourses() {
            try {
                setLoading(true);
                const data = await getCourses();
                setCourses(data);
            } catch (err) {
                setError("Failed to load courses. Please try again later.");
            } finally {
                setLoading(false);
            }
        }

        fetchCourses();
    }, []);

    const categories = useMemo(() => {
        return [...new Set(courses.map(course => course.category))];
    }, [courses]);

    const levels = ["Beginner", "Intermediate", "Advanced"];

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => {
            const categoryMatch = selectedCategory === "All" || course.category === selectedCategory;
            const levelMatch = selectedLevel === "All Levels" || course.level === selectedLevel;
            return categoryMatch && levelMatch;
        });
    }, [courses, selectedCategory, selectedLevel]);

    if (error) {
        return (
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-3xl mb-8">
                        <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Oops! Something went wrong</h3>
                    <p className="text-gray-500 font-medium mb-10">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-primary text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-primary-dark transition-all"
                    >
                        Try Again
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 bg-gray-50/30" id="courses">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-12 shadow-sm">
                    <FilterBar
                        categories={categories}
                        levels={levels}
                        selectedCategory={selectedCategory}
                        selectedLevel={selectedLevel}
                        onCategoryChange={setSelectedCategory}
                        onLevelChange={setSelectedLevel}
                    />
                </div>

                <div className="mb-8">
                    <p className="text-xs font-medium text-gray-500">
                        Showing <span className="font-bold text-gray-900">{filteredCourses.length}</span> of <span className="font-bold text-gray-900">{courses.length}</span> courses
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading
                        ? Array.from({ length: 6 }).map((_, i) => (
                            <CourseCardSkeleton key={i} />
                        ))
                        : filteredCourses.length > 0
                            ? filteredCourses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))
                            : (
                                <div className="col-span-full text-center py-20 bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
                                    <p className="text-gray-400 text-lg font-bold uppercase tracking-widest">No matching courses found</p>
                                    <button
                                        onClick={() => {
                                            setSelectedCategory("All");
                                            setSelectedLevel("All Levels");
                                        }}
                                        className="mt-6 text-primary font-black uppercase tracking-widest text-xs hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                </div>
            </div>
        </section>
    );
}
