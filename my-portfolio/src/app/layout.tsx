import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/components/header";
import React from "react";
import ActiveSectionContextProvider from "@/context/active-section-context";
import {Toaster} from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Karim | Portfolio',
    description: 'This is the portfolio for Karim Kanafani',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="!scroll-smooth">
        <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}>
        <div className="bg-[#264653] absolute top-[6rem] sm:top-[-6rem] -z-10 left-[1rem] h-[10.25rem] sm:h-[31.25rem] w-[20rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2A9D8F]"></div>
        <ThemeContextProvider>
            <ActiveSectionContextProvider>
                <Header />
                {children}
                <Toaster position="top-right"/>
                <Footer />
                <ThemeSwitch />
            </ActiveSectionContextProvider>
        </ThemeContextProvider>

        <div className="bg-[#f4a261] absolute bottom-[-1rem] -z-10 right-[-0.05rem] h-[11.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] dark:bg-[#E76F51]"></div>
        </body>
        </html>
    )
}
