"use client";

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
        <div className="bg-purple-950 w-full justify-center flex flex-col items-center">
            <Image src="/hamburger.png"
                alt='Navigation Menu'
                width={40}
                height={40}
                className='md:hidden m-2 hover:opacity-80 cursor-pointer top-2 left-2 absolute z-30'
                onClick={() => toggleMenu()}
            />
            {showNav && (
                <> 
                    <SmallNavigationMenu urls={urls} /> 
                    <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0 z-10" onClick={() => toggleMenu()}/>
                </>
            )}

            <div className="hidden md:flex w-1/2 flex-row justify-around">
                <a href="" className="text-lg font-anon opacity-80 hover:opacity-100">About</a>
                <a href="projects" className="text-lg font-anon opacity-80 hover:opacity-100">Projects</a>
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