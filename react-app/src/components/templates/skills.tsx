import React, { useEffect } from 'react';

import Skill from '../skill';

// temp data, eventually will be in the backend
const skillsList = [
    { _id: 1, name: 'HTML', proficiency: '95' },
    { _id: 2, name: 'CSS', proficiency: '95' },
    { _id: 3, name: 'JavaScript', proficiency: '98' },
    { _id: 4, name: 'React', proficiency: '92' },
    { _id: 5, name: 'TypeScript', proficiency: '90' },
    { _id: 6, name: 'DevOps, CI/CD', proficiency: '69' },
    { _id: 7, name: 'Agile Web Development', proficiency: '85' },
    { _id: 8, name: 'Performance Optimization', proficiency: '88' },
];

export default function Skills() {
    let skills = skillsList.map((skill) => <Skill key={skill._id.toString()} _id={skill._id} name={skill.name} proficiency={skill.proficiency} />);

    return (
        <section id="about" className="flex flex-col lg:flex-row flex-nowrap">
            <div className="lg:w-2/12 pt-12 lg:pt-0 relative">
                <h2 className="font-title font-light lg:text-8xl lg:-rotate-90 lg:-translate-y-2/4 lg:-translate-x-2/4 lg:top-2/4 lg:left-2/4 lg:absolute text-center text-4xl opacity-0 animate-fade-in-section">Skills</h2>
                <div className="lg:-rotate-90 lg:-translate-y-2/4 lg:-translate-x-2/4 lg:top-2/4 lg:left-full lg:absolute bg-zinc-400 w-32 lg:w-48 h-1 lg:h-2 mx-auto mt-8 lg:mt-0"></div>
            </div>
            <div className="lg:w-10/12 pt-12 pb-32 flex flex-col justify-center items-center">
                <div className="flex flex-row flex-wrap-reverse justify-center items-end">
                    <div className="flex-1 px-16 py-10 2xl:px-40">
                        <div className="opacity-0 animate-fade-in-content">
                            {skills}
                        </div>
                    </div>
                    <div className="flex-1 px-16 py-10 2xl:px-40 opacity-0 animate-fade-in-content">
                        <p className="pb-4 pt-12 text-center">Every developer has a toolbox, here's mine.</p>
                        <p className="pb-4 pt-4 text-center">I've spent years working with, and garnering a deep understanding of, JavaScript, and that time and experience has also granted me a certain expertise over the whole frontend ecosystem.</p>
                        <p className="pb-4 pt-4 text-center">Et ultrices neque ornare aenean euismod. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. A pellentesque sit amet porttitor eget dolor morbi non.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

