import React from "react";
import ReactDOM from "react-dom";

import '/scss/main.scss';

import Section from './components/section';
import Skill from './components/skill';
import Project from './components/project';

// might not use this
const sectionsList = [

];

const skillsList = [
    {name: 'Typescript', proficiency: '90'},
    {name: 'React', proficiency: '87'},
    {name: 'Javascript', proficiency: '90'},
    {name: 'ColdFusion', proficiency: '82'},
    {name: 'Python', proficiency: '77'},
    {name: 'Express', proficiency: '82'},
    {name: 'SQL', proficiency: '92'},
    {name: 'MongoDB', proficiency: '65'},
    {name: 'WordPress', proficiency: '75'},
    {name: 'Git', proficiency: '89'}
];

const projectsList = [
    {imageUrl: 'sample.jpg', name: 'Loop Test', stack: 'Typescript, Webpack, React'}
];

const App = () => (
    <main>
        <header className="h-screen">
            <div className="h-screen pt-[40%] text-center">
                <h1>Zachary Long</h1>
                <h5>Full Stack Developer</h5>
            </div>

        </header>
        <section className="flex flex-row flex-nowrap">
            <div className="w-2/12 relative">
                <h2 className="text-8xl -rotate-90 -translate-y-2/4 -translate-x-2/4 top-2/4 left-2/4 absolute">About</h2>
            </div>
            <div className="w-10/12 flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex-1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dapibus erat. Mauris tempus urna ac augue ornare blandit. Quisque vel magna ante. Nulla lacus felis, tincidunt a neque a, congue fermentum lectus. Phasellus tincidunt mauris et efficitur volutpat. Quisque tempor purus lobortis sapien sodales, in mollis arcu ultrices. Nunc pretium blandit urna. Vivamus id enim in ex varius molestie. Pellentesque non laoreet tellus. Suspendisse justo ipsum, efficitur et ante a, ornare elementum tellus. Duis tempus lacus nibh, ut dignissim nunc tincidunt eget. Sed pharetra bibendum fermentum.</p>
                        <p>In eu auctor leo. Nam suscipit aliquam magna egestas congue. In tempus gravida luctus. Donec bibendum quam a tortor dapibus, quis blandit leo scelerisque. Vivamus fermentum volutpat erat a consequat. Donec vestibulum leo sed neque molestie volutpat. Nullam rutrum est eget elit tincidunt accumsan. Cras placerat lacus quis posuere pharetra. In hac habitasse platea dictumst. In commodo, quam ac vestibulum varius, urna libero condimentum lacus, et suscipit nunc est sit amet nulla. Praesent sagittis dolor non ex ultrices blandit. Sed elementum risus enim, et interdum orci vulputate ac. Duis ultricies euismod diam, in ornare turpis ullamcorper vel. Phasellus id tempor quam. Fusce eu metus eu elit vestibulum porta.</p>
                    </div>
                    <div className="flex-1">
                        {skillsList.map((skill) => <Skill name={skill.name} proficiency={skill.proficiency} />)}
                    </div>
                </div>
                <div>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dapibus erat. Mauris tempus urna ac augue ornare blandit. Quisque vel magna ante. Nulla lacus felis, tincidunt a neque a, congue fermentum lectus. Phasellus tincidunt mauris et efficitur volutpat. Quisque tempor purus lobortis sapien sodales, in mollis arcu ultrices. Nunc pretium blandit urna. Vivamus id enim in ex varius molestie. Pellentesque non laoreet tellus. Suspendisse justo ipsum, efficitur et ante a, ornare elementum tellus. Duis tempus lacus nibh, ut dignissim nunc tincidunt eget. Sed pharetra bibendum fermentum.</h4>
                    {/* <code>
                        const input = 'Hello, world!';

                        function print(s) {
                            console.log(s);
                        }

                        print(input);
                    </code> */}
                </div>
            </div>
        </section>
        <section className="w-9/12 m-auto flex flex-col justify-center items-center">
            <div>
                <h2>My Work</h2>
            </div>
            <div className="w-10/12 flex flex-row flex-wrap container">
                {projectsList.map((project) => <Project imageUrl={project.imageUrl} name={project.name} stack={project.stack} />)}
            </div>
        </section>
        <section className="w-9/12 m-auto flex flex-col justify-center items-center">
            <div>
                <h2>Get in touch</h2>
            </div>
            <div>
                Some way to contact me.
            </div>
        </section>
        <footer>
            Relevant social links and github code link.
        </footer>
    </main>
);

ReactDOM.render(
    <App />,
    document.getElementById("app")
);