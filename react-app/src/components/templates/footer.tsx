import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';

export default function Footer() {
    return (
        <footer className="h-48 px-4 lg:px-16 bg-zinc-800 text-white flex flex-row justify-between items-center">
            <div className="flex-1">&copy; Zachary Long 2023</div>
            <div className="flex-1">
                <ul className="text-center">
                    <li><a className="underline-sm border-b-2 border-slate-400 border-solid" href="#top">Top</a></li>
                    <li><a className="underline-sm border-b-2 border-slate-400 border-solid" href="#about">About</a></li>
                    <li><a className="underline-sm border-b-2 border-slate-400 border-solid" href="#work">Work</a></li>
                    <li><a className="underline-sm border-b-2 border-slate-400 border-solid" href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="flex-1">
                <ul className="text-right">
                    <li><a className="underline-sm" href="https://github.com/zach-long" target="_blank">GitHub <ExternalLinkIcon className="w-6 -mt-1 inline-block" /></a></li>
                    <li><a className="underline-sm" href="https://www.linkedin.com/in/zachary-long-72570390/" target="_blank">LinkedIn <ExternalLinkIcon className="w-6 -mt-1 inline-block" /></a></li>
                </ul>
            </div>
        </footer>
    );
}