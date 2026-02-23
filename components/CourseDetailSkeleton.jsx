export default function CourseDetailSkeleton() {
    return (
        <div className="bg-gray-50 animate-pulse">
            {/* Hero Section Skeleton */}
            <section className="bg-gradient-to-r from-primary to-primary-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="h-6 w-32 bg-white/20 rounded mb-6" />

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                            <div className="h-8 w-24 bg-white/20 rounded-full" />
                            <div className="h-12 bg-white/20 rounded w-3/4" />
                            <div className="h-6 bg-white/20 rounded w-full" />
                            <div className="flex gap-6">
                                <div className="h-5 w-32 bg-white/20 rounded" />
                                <div className="h-5 w-32 bg-white/20 rounded" />
                                <div className="h-5 w-32 bg-white/20 rounded" />
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <div className="h-64 bg-white/20 rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Skeleton */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="h-8 bg-gray-200 rounded w-48 mb-4" />
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-full" />
                                <div className="h-4 bg-gray-200 rounded w-full" />
                                <div className="h-4 bg-gray-200 rounded w-3/4" />
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <div className="h-12 bg-gray-200 rounded w-32 mx-auto mb-6" />
                            <div className="h-12 bg-gray-200 rounded w-full mb-4" />
                            <div className="h-12 bg-gray-200 rounded w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
