import React, { useEffect } from 'react';

import Skill from '../skill';

const skillsList = [
    { _id: 1, name: 'Typescript', proficiency: '90' },
    { _id: 2, name: 'React', proficiency: '87' },
    { _id: 3, name: 'Javascript', proficiency: '90' },
    { _id: 4, name: 'ColdFusion', proficiency: '82' },
    { _id: 5, name: 'Python', proficiency: '77' },
    { _id: 6, name: 'Express', proficiency: '82' },
    { _id: 7, name: 'SQL', proficiency: '92' },
    { _id: 8, name: 'MongoDB', proficiency: '65' },
    { _id: 9, name: 'WordPress', proficiency: '75' },
    { _id: 10, name: 'Git', proficiency: '89' }
];

export default function About() {
    // useEffect(() => {
    //     const url = './../../data/skills.json';

    //     const getData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             const json = await response.json();
    //             console.log('success');
    //         } catch (error) {
    //             console.log('error');
    //         }
    //     }

    //     getData();
    // });

    let skills = skillsList.map((skill) => <Skill key={skill._id.toString()} _id={skill._id} name={skill.name} proficiency={skill.proficiency} />);

    return (
        <section id="about" className="flex flex-col lg:flex-row flex-nowrap">
            <div className="lg:w-2/12 pt-12 lg:pt-0 relative">
                <h2 className="lg:text-8xl lg:-rotate-90 lg:-translate-y-2/4 lg:-translate-x-2/4 lg:top-2/4 lg:left-2/4 lg:absolute text-center text-4xl">About</h2>
                <div className="lg:-rotate-90 lg:-translate-y-2/4 lg:-translate-x-2/4 lg:top-2/4 lg:left-full lg:absolute bg-zinc-400 w-32 lg:w-48 h-1 lg:h-2 mx-auto mt-8 lg:mt-0"></div>
            </div>
            <div className="lg:w-10/12 pt-12 pb-32 flex flex-col justify-center items-center">
                <div className="flex flex-row flex-wrap-reverse justify-center items-end">
                    <div className="flex-1 px-16 py-10">
                        <div>
                            {/* <img src={ProfilePicture} /> */}
                        </div>
                        <div>
                            {skills}
                        </div>
                    </div>
                    <div className="flex-1 px-16 py-10">
                        <p className="pb-4 text-center">Curiosity-guided full-stack developer. I am driven by a desire to learn new things, expand the bounds of my understanding, and tackle ever-greater challenges. In my free time, I am an enthusiastic musician, home brewer, and runner - I do not like to sit still.</p>
                    </div>
                </div>
                {/* <div className="px-16 py-10 text-center">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dapibus erat. Mauris tempus urna ac augue ornare blandit. Quisque vel magna ante. Nulla lacus felis, tincidunt a neque a, congue fermentum lectus. Phasellus tincidunt mauris et efficitur volutpat. Quisque tempor purus lobortis sapien sodales, in mollis arcu ultrices. Nunc pretium blandit urna. Vivamus id enim in ex varius molestie. Pellentesque non laoreet tellus. Suspendisse justo ipsum, efficitur et ante a, ornare elementum tellus. Duis tempus lacus nibh, ut dignissim nunc tincidunt eget. Sed pharetra bibendum fermentum.</h4>
                </div> */}
            </div>
        </section>
    );
}

