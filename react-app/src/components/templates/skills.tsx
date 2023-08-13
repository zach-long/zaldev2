import React, { useEffect } from 'react';

import Skill from '../skill';

// temp data, eventually will be in the backend
const skillsList = [
    { _id: 1, name: 'Javascript', proficiency: '98' },
    { _id: 2, name: 'DevOps / CI/CD', proficiency: '69' },
    { _id: 3, name: 'Agile Web Development', proficiency: '85' }
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
                        <div>
                            {/* <img src={ProfilePicture} /> */}
                        </div>
                        <div className="opacity-0 animate-fade-in-content">
                            {skills}
                        </div>
                    </div>
                    <div className="flex-1 px-16 py-10 2xl:px-40 opacity-0 animate-fade-in-content">
                        <p className="pb-4 pt-12 text-center">Ipsum dolor sit amet consectetur adipiscing elit duis tristique.</p>
                        <p className="pb-4 pt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum. Aliquam eleifend mi in nulla. Eget felis eget nunc lobortis mattis aliquam faucibus. Nulla malesuada pellentesque elit eget. Tempor orci dapibus ultrices in iaculis nunc. Eget egestas purus viverra accumsan in nisl nisi. A iaculis at erat pellentesque adipiscing commodo.</p>
                        <p className="pb-4 pt-4 text-center">Et ultrices neque ornare aenean euismod. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. A pellentesque sit amet porttitor eget dolor morbi non.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

