import Image from "next/image";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-[#0f0715] ">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-10 border-b border-gray-500/30">

                <div className="max-w-96">
                    <Image src="/images/logo.png" alt="Logo" width={200} height={150} />
                    <p className="mt-6 text-sm text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
                    <div className="flex items-center gap-4 mt-5">
                        <a href="" className="text-white"><FaTwitter className="size-6"/></a>
                        <a href="" className="text-white"><FaInstagram className="size-6" /></a>
                        <a href="" className="text-white"><FaGithub className="size-6" /></a>
                    </div>
                </div>

                <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
                    <div>
                        <h2 className="font-semibold text-white mb-5">RESOURCES</h2>
                        <ul className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-white mb-5">COMPANY</h2>
                        <div className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                        </div>
                    </div>
                </div>

            </div>
            <p className="py-4 text-center text-xs md:text-sm text-white">
                Copyright 2025 © <a href="https://prebuiltui.com">Persian Store</a>. All Right Reserved.
            </p>
        </footer>
    );
};