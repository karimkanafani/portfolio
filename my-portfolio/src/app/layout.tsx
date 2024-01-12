import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/components/header";
import React from "react";
import ActiveSectionContextProvider from "@/context/active-section-context";
import {Toaster} from "react-hot-toast";
import Footer from "@/components/footer";

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
        <body className={`${inter.className} bg-gray-50 text-gray-950 h-[3600px] relative pt-28 sm:pt-36`}>
        <div className="bg-[#f4a261] absolute bottom-[-60rem] -z-10 right-[-11rem] h-[11.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]"></div>
        <div className="bg-[#264653] absolute top-[-6rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right"/>
            <Footer />
        </ActiveSectionContextProvider>
        </body>
        </html>
    )
}
