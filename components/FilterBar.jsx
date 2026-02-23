"use client";

import { Search, ChevronDown } from "lucide-react";

export default function FilterBar({
    selectedCategory,
    selectedLevel,
    onCategoryChange,
    onLevelChange,
    categories = [],
    levels = []
}) {
    const allCategories = ["All", ...categories];
    const allLevels = ["All Levels", ...levels];

    return (
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input
                    type="text"
                    placeholder="Search courses, instructors..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-transparent rounded-2xl focus:bg-white focus:border-primary/20 outline-none transition-all text-sm font-medium text-gray-600 placeholder:text-gray-400"
                />
            </div>

            <div className="flex gap-4 w-full md:w-auto">
                <div className="relative min-w-[120px] flex-grow md:flex-grow-0">
                    <select
                        value={selectedCategory}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="w-full appearance-none bg-white border border-gray-200 px-6 py-4 pr-12 rounded-2xl text-[10px] font-bold text-gray-700 focus:outline-none transition-all cursor-pointer uppercase tracking-widest"
                    >
                        {allCategories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat === "All" ? "CATEGORIES" : cat.toUpperCase()}
                            </option>
                        ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative min-w-[120px] flex-grow md:flex-grow-0">
                    <select
                        value={selectedLevel}
                        onChange={(e) => onLevelChange(e.target.value)}
                        className="w-full appearance-none bg-white border border-gray-200 px-6 py-4 pr-12 rounded-2xl text-[10px] font-bold text-gray-700 focus:outline-none transition-all cursor-pointer uppercase tracking-widest"
                    >
                        {allLevels.map((level) => (
                            <option key={level} value={level}>
                                {level === "All Levels" ? "SKILL LEVEL" : level.toUpperCase()}
                            </option>
                        ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
