import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "INFNOVA Academy - Master New Skills",
    description: "Start your learning journey today with INFNOVA Academy",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main className="min-h-screen">{children}</main>
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}
