import React, { useState, useEffect } from 'react';

export default function Header() {
    const backgroundClasslist = 'absolute bottom-[-100vh] left-[-100vw] w-[200vw] h-[200vh] bg-gradient-to-tr from-zinc-100 via-zinc-300 to-slate-600 transition-transform duration-[2000ms] ease-in';
    const backgroundTransition = 'translate-x-2/4 -translate-y-2/4';
    const [animated, setAnimated] = useState(false);
    const [bgClass, setBgClass] = useState(backgroundClasslist);

    useEffect(() => {
        if(!animated) {
            console.log(`first if`)
            setAnimated(true);
            setBgClass(`${backgroundClasslist} ${backgroundTransition}`);
        }
    });

    return (
        <header id="top" className="h-screen relative bg-zinc-100 overflow-hidden overscroll-contain">
            <div id="header-bg" className={bgClass}></div>
            <div className="text-center absolute top-1/3 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <h1 className="font-header font-medium text-4xl lg:text-6xl opacity-0 animate-fade-in-name">Zachary Long</h1>
                <h5 className="font-header text-xl lg:text-2xl mt-8 opacity-0 animate-fade-in-title">Frontend Developer</h5>
            </div>
            <div className="-translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 absolute bg-pizazz w-24 lg:w-36 h-1 lg:h-2 mx-auto mt-8 lg:mt-0 opacity-0 animate-fade-in-bar"></div>
        </header>
    );
}

