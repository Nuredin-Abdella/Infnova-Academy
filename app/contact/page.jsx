import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact Us - INFNOVA Academy",
    description: "Get in touch with the INFNOVA Academy team for any inquiries or support.",
};

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Simple Hero */}
            <section className="bg-primary text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
                        Let&apos;s talk
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
                        We value your feedback and are here to support your learning journey.
                        Reach out to us anytime.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
