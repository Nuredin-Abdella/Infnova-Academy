import Link from "next/link";
import Image from "next/image";
import { Star, Clock, Users } from "lucide-react";

export default function CourseCard({ course }) {
    return (
        <Link href={`/courses/${course.id}`} className="group block h-full">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold">
                            {course.level}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">
                        {course.category}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                        {course.title}
                    </h3>

                    <div className="text-xs text-gray-500 font-medium mb-6">
                        Instructor: <span className="text-gray-900 font-bold">{course.instructor}</span>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-gray-500">
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} />
                            <span className="text-[10px] font-bold">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Users size={14} />
                            <span className="text-[10px] font-bold">{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            <span className="text-[10px] font-bold text-gray-700">{course.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
