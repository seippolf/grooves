'use client'

import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function NavBar() {

    const [open, setOpen] = useState(false);

    return (
        <header className="border-b border-slate-300 py-2">
            <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[4%] flex-wrap w-full">
                <div className="flex flex-col items-center">
                    <img src="/new-logo.svg" alt="Logo" width={64} height={64}/>
                    <h1 className="underline text-slate-300">Grooves</h1>
                </div>
                <FiMenu 
                    className={`lg:hidden block h-6 w-6 cursor-pointer ${open ? "bg-pink-600 text-black" : ""}`} 
                    onClick={() => setOpen(!open)} 
                />
                <nav 
                    className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}
                >
                    <ul className="text-base text-slate-300 lg:flex lg:justify-between lg:space-x-2">
                        <li>
                            <a className="lg:px-4 px-2 py-2 block hover:text-pink-600 font-semibold" href="/">Home</a>
                        </li>
                        <li>
                            <a className="lg:px-4 px-2 py-2 block hover:text-pink-600 font-semibold" href="/about">About</a>
                        </li>
                        <li>
                            <a className="lg:px-4 px-2 py-2 block bg-pink-600 font-semibold text-black" href="#">Rate</a>
                        </li>
                        <li>
                            <a className="lg:px-4 px-2 py-2 block bg-pink-600 font-semibold text-black" href="#">Add New</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}