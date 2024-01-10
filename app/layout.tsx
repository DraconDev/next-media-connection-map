import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MedConMap",
    description: "MedConMap",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="relative"
        >
            <body
                className={`min-h-screen ${inter.className}  text-font bg-secondary `}
            >
                <Navbar />
                <div className="w-full h-full pt-[50px]">{children}</div>
            </body>
        </html>
    );
}
