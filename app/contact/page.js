import DividerTitle from "@components/Shared/Divider";
import React from "react";
import { SiMinutemailer } from "react-icons/si";
import { MdPhone } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

function Contact() {
    return (
        <div className="flex flex-col items-center gap-12">
            <section className="flex flex-col items-center ">
                <h1 className="font-bold text-posttitle">Contact Us</h1>
                <p className="text-gray p-2">
                    {" "}
                    Contact us to be an author. We usually get back to you
                    within 12-24 hours 😊😊😊.
                </p>
            </section>
            <section className="flex flex-col m-8 gap-8 sm:flex-row sm:justify-around">
                <div className=" ">
                    <DividerTitle title="Contact details" />
                    <p className="my-2">
                        <SiMinutemailer className="inline" color="green" />{" "}
                        minhphonghp2003@gmail.com
                    </p>
                    <p className="my-2">
                        <MdPhone className="inline" color="green" /> +84
                        377075126
                    </p>
                    <p className="my-2">
                        <CgWebsite className="inline" color="green" />{" "}
                        <a className="" href="https://nguyenminhphong.fun/">
                            More information click here 👋👋
                        </a>
                    </p>
                </div>
                <div className="">
                    <DividerTitle title="Get in touch" />
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full bg-[transparent] rounded-md border border-primary  py-[10px] px-5 text-dark-6 outline-none transition focus:border-secondary"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full bg-[transparent] rounded-md border border-primary  py-[10px] px-5 text-dark-6 outline-none transition focus:border-secondary"
                    />
                    <div className="relative">
                        <textarea
                            type="email"
                            rows="6"
                            placeholder="Type your message"
                            className="w-full bg-transparent rounded-md border border-primary  p-3 pl-12  outline-none transition focus:border-secondary"
                        />
                        <span className="absolute top-[18px] left-4">
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g opacity={0.8}>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.56622 3.23223C2.03506 2.76339 2.67094 2.5 3.33398 2.5H9.16732C9.62755 2.5 10.0006 2.8731 10.0006 3.33333C10.0006 3.79357 9.62755 4.16667 9.16732 4.16667H3.33398C3.11297 4.16667 2.90101 4.25446 2.74473 4.41074C2.58845 4.56702 2.50065 4.77899 2.50065 5V16.6667C2.50065 16.8877 2.58845 17.0996 2.74473 17.2559C2.90101 17.4122 3.11297 17.5 3.33398 17.5H15.0006C15.2217 17.5 15.4336 17.4122 15.5899 17.2559C15.7462 17.0996 15.834 16.8877 15.834 16.6667V10.8333C15.834 10.3731 16.2071 10 16.6673 10C17.1276 10 17.5006 10.3731 17.5006 10.8333V16.6667C17.5006 17.3297 17.2373 17.9656 16.7684 18.4344C16.2996 18.9033 15.6637 19.1667 15.0006 19.1667H3.33398C2.67094 19.1667 2.03506 18.9033 1.56622 18.4344C1.09738 17.9656 0.833984 17.3297 0.833984 16.6667V5C0.833984 4.33696 1.09738 3.70107 1.56622 3.23223Z"
                                        fill="#9CA3AF"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.6673 2.39909C16.4195 2.39909 16.1818 2.49754 16.0066 2.67278L8.25314 10.4262L7.81264 12.1882L9.57463 11.7477L17.3281 3.99427C17.5033 3.81903 17.6018 3.58135 17.6018 3.33352C17.6018 3.0857 17.5033 2.84802 17.3281 2.67278C17.1528 2.49754 16.9152 2.39909 16.6673 2.39909ZM14.8281 1.49427C15.3159 1.00647 15.9775 0.732422 16.6673 0.732422C17.3572 0.732422 18.0188 1.00647 18.5066 1.49427C18.9944 1.98207 19.2684 2.64367 19.2684 3.33352C19.2684 4.02338 18.9944 4.68498 18.5066 5.17278L10.5899 13.0894C10.4831 13.1962 10.3493 13.272 10.2028 13.3086L6.86945 14.142C6.58547 14.213 6.28506 14.1298 6.07808 13.9228C5.8711 13.7158 5.78789 13.4154 5.85888 13.1314L6.69222 9.79808C6.72885 9.65155 6.80461 9.51773 6.91141 9.41093L14.8281 1.49427Z"
                                        fill="#9CA3AF"
                                    />
                                </g>
                            </svg>
                        </span>
                    </div>
                    <button className="bg-green p-3 rounded-lg hover:px-6 duration-700 text-primary">
                        send message 💨
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Contact;
