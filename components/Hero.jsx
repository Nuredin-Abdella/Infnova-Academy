import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative bg-primary pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Explore Our Courses
                </h1>
                <p className="text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-white/90">
                    Master new skills with expert-led courses designed for the modern learner. Start your learning journey today with INFNOVA Academy.
                </p>
            </div>
        </section>
    );
}
