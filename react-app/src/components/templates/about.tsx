import React, { useEffect } from 'react';

export default function About() {
    return (
        <section id="about" className="flex flex-col lg:flex-row flex-nowrap bg-zinc-100">
            <div className="lg:w-2/12 pt-12 lg:pt-0 relative">
                <h2 className="font-title font-light lg:text-8xl lg:-rotate-90 lg:-translate-y-2/4 lg:-translate-x-2/4 lg:top-2/4 lg:left-2/4 lg:absolute text-center text-4xl opacity-0 animate-fade-in-section">About</h2>
                <div className="lg:-rotate-90 lg:-translate-y-2/4 lg:-translate-x-2/4 lg:top-2/4 lg:left-full lg:absolute bg-zinc-400 w-32 lg:w-48 h-1 lg:h-2 mx-auto mt-8 lg:mt-0"></div>
            </div>
            <div className="lg:w-10/12 pt-12 pb-32 flex flex-col justify-center items-center">
                <div className="flex flex-row flex-wrap-reverse justify-center items-end">
                    <div className="flex-1 w-1/2 px-16 py-10 2xl:px-40 opacity-0 animate-fade-in-content">
                        <p className="pb-4 pt-12 text-center">Hello! I'm Zach, and welcome to my portfolio.</p>
                        <p className="pb-4 pt-4 text-center">I'm a frontend developer. Ultimately, this means I'm a problem solver. Each day I wake up I'm driven by a desire to learn new things, to expand the bounds of my understanding, and to tackle ever-greater challenges. Rather than reinforce my current understanding of the world, I seek to have my views challenged and to be proven wrong - I embrace flexibilty and growth.</p>
                        <p className="pb-4 pt-4 text-center">In my free time, I'm an enthusiastic musician, tinkerer, and runner among other pursuits - I do not like to sit still.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

