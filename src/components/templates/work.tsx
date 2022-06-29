import React from 'react';

import Project from '../project';

const projectsList = [
    { _id: 1, imageUrl: 'to-do_list.png', name: 'To-Do List', stack: 'React, Sass, Heroku', projectUrl: 'https://floating-harbor-80134.herokuapp.com/', githubUrl: 'https://github.com/zach-long/react-to-do-list' },
    { _id: 2, imageUrl: 'searchable_database.png', name: 'DegenesisReference.com', stack: 'React, Typescript, Express, Sass, Webpack, PM2', projectUrl: 'https://degenesisreference.com', githubUrl: '' },
    { _id: 3, imageUrl: 'rocks_playing_guitar.png', name: 'spacebetween.band', stack: 'React, Express, Sass, Gulp, PM2', projectUrl: 'https://spacebetween.band', githubUrl: '' },
    { _id: 4, imageUrl: 'chatroom.png', name: 'the wall', stack: 'Typescript, sockets.io, Express, MongoDB, Sass, Gulp, Heroku', projectUrl: 'https://still-inlet-57542.herokuapp.com/', githubUrl: 'https://github.com/zach-long/TheWall' },
    { _id: 5, imageUrl: 'democracybot.png', name: 'DemocracyBot', stack: 'Javascript, Discord.js', projectUrl: '', githubUrl: 'https://github.com/zach-long/Democracy-Bot' }
];

export default function Work() {
    let projects = projectsList.map((project) => <Project key={project._id.toString()} _id={project._id} imageUrl={project.imageUrl} name={project.name} stack={project.stack} projectUrl={project.projectUrl} githubUrl={project.githubUrl} />);

    return (
        <section id="work" className="flex flex-col lg:flex-row flex-nowrap min-h-[66vh] bg-zinc-100 dark:bg-slate-800">
            <div className="lg:w-2/12 pt-12 lg:pt-0 relative">
                <h2 className="lg:text-8xl lg:-rotate-90 lg:-translate-y-2/4 lg:-translate-x-2/4 lg:top-2/4 lg:left-2/4 lg:absolute text-center text-4xl">Work</h2>
                <div className="lg:-rotate-90 lg:-translate-y-2/4 lg:-translate-x-2/4 lg:top-2/4 lg:left-full lg:absolute bg-zinc-400 w-32 lg:w-48 h-1 lg:h-2 mx-auto mt-8 lg:mt-0"></div>
            </div>
            <div className="lg:w-10/12 px-4 lg:px-0 pt-12 pb-32">
                {/* On hover list stack, on click go to github */}
                <div className="relative inline-block text-center left-2/4 -translate-x-2/4 pt-10">
                    <p className="font-bold text-boldblue hover:text-darkboldblue transition duration-150 cursor-pointer">What did I use for this site?</p>
                    <div className="tool-tip top text-center px-4 py-2 border rounded-md border-zinc-300 border-solid bg-white">React, Redux, Typescript, TailwindCSS, Next, MongoDB<br /><br /><a className="border-b-2 border-pizazz border-solid underline-sm" href="https://github.com/zach-long/zaldev2" target="_blank">Click to view on GitHub</a></div>
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center pt-8">
                    {projects}
                </div>
            </div>
        </section>
    );
}

