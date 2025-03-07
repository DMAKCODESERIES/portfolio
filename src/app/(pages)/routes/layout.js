"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Layout({ children }) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
