export default function CourseCardSkeleton() {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full flex flex-col animate-pulse">
            <div className="h-48 bg-gray-200" />

            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3">
                    <div className="h-6 w-20 bg-gray-200 rounded" />
                </div>

                <div className="space-y-2 mb-4">
                    <div className="h-5 bg-gray-200 rounded w-full" />
                    <div className="h-5 bg-gray-200 rounded w-3/4" />
                </div>

                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />

                <div className="flex gap-4 mb-4">
                    <div className="h-4 bg-gray-200 rounded w-16" />
                    <div className="h-4 bg-gray-200 rounded w-16" />
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-100">
                    <div className="h-5 bg-gray-200 rounded w-12" />
                    <div className="h-6 bg-gray-200 rounded w-16" />
                </div>
            </div>
        </div>
    );
}
