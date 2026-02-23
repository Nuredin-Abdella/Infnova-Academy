import { Suspense } from "react";
import CourseDetail from "@/components/CourseDetail";
import CourseDetailSkeleton from "@/components/CourseDetailSkeleton";

export default function CoursePage({ params }) {
    return (
        <Suspense fallback={<CourseDetailSkeleton />}>
            <CourseDetail courseId={params.id} />
        </Suspense>
    );
}
