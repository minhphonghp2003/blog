import Menu from "@components/Home/Menu";
import "./globals.css";
import { SlArrowUp } from "react-icons/sl";
import MenuNavBar from "@components/Home/Menu";
import Search from "@components/Home/Search";
import Link from "next/link";

export const metadata = {
    title: "Nguyen Minh Phong",
    description: "nguyen minh phong blog",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className="bg-primary text-secondary font-sans antialiased transition-all">
                <a
                    href="#"
                    className="hidden sm:block rounded-full w-[50px] h-[50px] text-center leading-[45px] bg-primary fixed right-[40px] bottom-[100px] text-[25px] text-[#999] "
                >
                    <i>
                        <SlArrowUp />
                    </i>
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
                            <button
                                type="button"
                                className="text-gray border-[1px]  font-medium rounded-lg text-sm py-[0.3rem] px-[0.7rem]"
                            >
                                Contact
                            </button>
                        </div>
                        <div className="sm:hidden block">
                            <MenuNavBar />
                        </div>
                    </div>
                </header>
                <nav className="sm:block hidden sm:sticky sm:top-0   max-w-[100vw] bg-primary z-10 px-40 py-4 shadow-[0_1px_0px_0px_rgba(0, 0, 0, 0.05)] ">
                    <ul className="flex justify-between text-gray text-[0.97em] uppercase items-center ">
                        <a href="/">Home</a>
                        <a href="/#topic">Topics</a>
                        <a href="/#rlist">Reading Lists</a>
                        <li>Write a post</li>
                    </ul>
                </nav>
                <div className="mt-3 ">{children}</div>

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
