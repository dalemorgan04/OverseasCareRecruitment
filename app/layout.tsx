"use client";

import React from "react";
import NavBar from "./components/navbar";
import "./globals.css";

import { Baskervville, Noto_Sans } from "next/font/google";
import Footer from "./components/footer";
import { CSPostHogProvider } from "./components/postHog";


// If loading a variable font, you don't need to specify the font weight
const baskerville = Baskervville({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-baskerville",
});

const notoSans = Noto_Sans({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-noto-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${baskerville.variable} ${notoSans.variable}`}>
            <head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Free Web tutorials" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doe" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/ocr_128.svg" sizes="any" />
            </head>
            <CSPostHogProvider>
                <body>
                    <NavBar />
                    <main>{children}</main>
                    <Footer />
                </body>
            </CSPostHogProvider>
        </html>
    );
}
