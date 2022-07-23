import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col lg:flex-row flex-nowrap lg:min-h-[30rem] bg-zinc-700 dark:bg-blue-600">
            <div className="lg:w-2/12 pt-12 lg:pt-0 relative text-darkpizazz">
                <h2 className="font-title font-light lg:text-8xl lg:-rotate-90 lg:-translate-y-2/4 lg:-translate-x-2/4 lg:top-2/4 lg:left-2/4 lg:absolute text-center text-4xl">Contact</h2>
                <div className="lg:-rotate-90 lg:-translate-y-2/4 lg:-translate-x-2/4 lg:top-2/4 lg:left-full lg:absolute bg-zinc-400 w-32 lg:w-48 h-1 lg:h-2 mx-auto mt-8 lg:mt-0"></div>
            </div>
            <div className="lg:w-10/12 pt-12 pb-32 text-white flex flex-col flex-nowrap justify-center items-center">
                <div className="pb-4 px-16 pt-10 text-center">Please do get in touch.</div>
                <div className="px-16 text-center">Direct all messages or inquires to <a href="mailto:contact@zalong.dev"><span className="border-b-2 border-darkpizazz border-solid underline-sm">contact@zalong.dev</span></a></div>
            </div>
        </section>
    );
}
