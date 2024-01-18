import Navbar from "@/components/Navbar/Navbar";
import QueryProvider from "@/components/ReactQuery/QueryProvider";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

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
                className={`min-h-screen ${kanit.className}  text-font bg-secondary text-xl relative w-full flex justify-center `}
            >
                <QueryProvider>
                    <Navbar />
                    <div className=" h-full pt-[124px] text-lg p-1 max-w-[1280px]   w-full">
                        {children}
                    </div>
                </QueryProvider>
            </body>
        </html>
    );
}
