import React from "react";

function NavigationItem({ url, children }: { url: string, children: React.ReactNode }) {
    return (
        <a href={url} className="text-lg font-anon opacity-80 hover:opacity-100 m-4 hover:font-bold">
            {children}
        </a>
    );
}

export default NavigationItem;