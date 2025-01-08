import React from "react";
import Image from 'next/image';
import NavigationItem from "./navigation-item";

interface Urls {
    github: string;
    linkedin: string;
}

export function SmallNavigationMenu({ urls }: { urls: Urls }) {
    return (
        <div className="bg-purple-950 w-full flex flex-col items-center absolute top-0 left-0 z-20">
            <NavigationItem url="">
                About
            </NavigationItem>
            <NavigationItem url="projects">
                Projects
            </NavigationItem>
            <NavigationItem url={urls.github}>
                <Image 
                    src="/GitHub_Lockup_Light.png"
                    alt="GitHub Logo"
                    width={72}
                    height={72}
                />
            </NavigationItem>
            <NavigationItem url={urls.linkedin}>
                <Image 
                    src="/LI-Logo.png"
                    alt="LinkedIn Logo"
                    width={72}
                    height={72}
                />
            </NavigationItem>
        </div>
    );
}
export default SmallNavigationMenu;