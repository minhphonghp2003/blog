import Menu from "@components/Home/Menu";
import "./globals.css";
import { SlArrowUp } from "react-icons/sl";
import MenuNavBar from "@components/Home/Menu";
import Search from "@components/Home/Search";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata = {
    title: "Nguyen Minh Phong",
    description: "nguyen minh phong blog",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className="bg-primary text-secondary font-sans antialiased transition-all">
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-707V43X5L5"
                />
                <Script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-707V43X5L5');
                    `}
                </Script>
                <a
                    href="#"
                    className="hidden sm:flex items-center gap-2  fixed right-[20px] bottom-[100px] text-[15px] text-secondary hover:text-[#D71313] rotate-90 uppercase"
                >
                    <FaArrowLeft className="inline " />
                    <span className="[writing-mode: vertical-rl] inline ">
                        top
                    </span>
                </a>
                <header
                    id="header"
                    className="max-w-[90vw]  sm:max-w-[80vw]  m-auto "
                >
                    <div className="flex justify-between pt-4">
                        <div className="font-dm text-[2em] font-semibold">
                            <a href="/">MPhong</a>
                        </div>
                        <div className="hidden sm:flex z-20  items-center gap-3">
                            <Search />
                            <Link
                                href="/contact"
                                className="text-gray border-[1px]  font-medium rounded-lg text-sm py-[0.3rem] px-[0.7rem]"
                            >
                                ℹ️ Contact
                            </Link>
                        </div>
                        <div className="sm:hidden block">
                            <MenuNavBar />
                        </div>
                    </div>
                </header>
                <nav className="sm:block hidden sm:sticky sm:top-0   max-w-[100vw] bg-primary z-10 px-40 py-4 shadow-[0_1px_0px_0px_rgba(0, 0, 0, 0.05)] ">
                    <ul className="flex justify-between text-gray text-[0.97em] uppercase items-center ">
                        <Link href="/">Home</Link>
                        <Link href="/#topic">Topics</Link>
                        <Link href="/#rlist">Reading Lists</Link>
                        <Link href="/contact">✍️Write a post</Link>
                    </ul>
                </nav>
                <div className="mt-3 ">{children}</div>
                <SpeedInsights />
                <Analytics />

                <footer className="mt-4">
                    <div className="w-full max-w-screen-xl mx-auto p-3 md:py-4">
                        <hr className="my-5 border-[#dee2e6] sm:mx-auto  " />
                        <span className="block text-sm text-gray sm:text-center ">
                            © 2023{" "}
                            <a href="#" className="hover:underline">
                                Minh phong
                            </a>
                            . All Rights Reserved.
                        </span>
                    </div>
                </footer>
            </body>
        </html>
    );
}
