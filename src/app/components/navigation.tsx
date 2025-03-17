"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import SmallNavigationMenu from './small-navigation-menu';


const urls = {
    github: "https://github.com/Mrjulss",
    linkedin: "https://www.linkedin.com/in/julian-sibbing-837363224/"
};

export default function Navigation() {
    const [showNav, setShowNav] = useState(false);

    const toggleMenu = () => {
        setShowNav(prevShowNav => !prevShowNav);
    }

    return (
        <div className="bg-purple-950 w-full justify-center flex flex-col items-center fixed md:relative top-0 z-20">
            <svg className='md:hidden m-2 hover:opacity-80 cursor-pointer top-2 left-2 absolute z-30' onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="white" fill="none">
                <path d="M4 5L20 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 19L20 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {showNav && (
                <>
                    <SmallNavigationMenu urls={urls} />
                    <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0 z-10" onClick={() => toggleMenu()} />
                </>
            )}

            <div className="hidden md:flex w-1/2 flex-row justify-around">
                <Link href="/" className="text-lg font-anon opacity-80 hover:opacity-100">About</Link>
                <Link href="/projects" className="text-lg font-anon opacity-80 hover:opacity-100">Projects</Link>
                <a href={urls.github} className="text-lg font-anon opacity-80 hover:opacity-100 content-center" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/GitHub_Lockup_Light.png"
                        alt="GitHub Logo"
                        width={72}
                        height={72}
                    />
                </a>
                <a href={urls.linkedin} className="text-lg font-anon opacity-80 hover:opacity-100 content-center" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/LI-Logo.png"
                        alt="LinkedIn Logo"
                        width={72}
                        height={72}
                    />
                </a>
            </div>
        </div>
    );
}