import React from 'react';
import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/solid';

type ProjectProps = {
    _id: Number,
    imageUrl: string,
    name: string,
    stack: string,
    projectUrl: string,
    githubUrl: string
}

export default function Project(props: ProjectProps) {
    const cardClassList = `w-64 h-64 bg-center bg-cover bg-no-repeat group-hover:opacity-0 transition duration-300`;
    const cardStyle = {
        backgroundImage: `url('${props.imageUrl}')`
    };
    const textClassList = `absolute top-0 group-hover:top-8 left-0 w-full text-center transition-all opacity-0 group-hover:opacity-100 duration-300`;
    const linkClassList = `flex flex-row flex-nowrap justify-center items-center absolute top-[70%] group-hover:top-2/4 left-0 w-full text-center tile`;
    return (
        <div className="group relative">
            <div className={cardClassList} style={cardStyle}></div>
            <div className={textClassList}>
                <h3 className="text-xl pb-2 font-bold">{props.name}</h3>
                <h5 className="w-10/12 inline-block margin-auto px-2 border-x-2 border-solid border-pizazz text-md">{props.stack}</h5>
            </div>
            <div className={linkClassList}>
                {props.projectUrl !== '' ?
                    <a className="grow shrink-0 basis-0 scale-[.40]" href={props.projectUrl} target="_blank"><ExternalLinkIcon className="fill-boldblue hover:fill-darkboldblue transition-all duration-150" /></a> :
                    <a className="grow shrink-0 basis-0 scale-[.40]"><ExternalLinkIcon className="fill-gray-400" /></a>
                }
                {props.githubUrl !== '' ?
                    <a className="grow shrink-0 basis-0 scale-[.40]" href={props.githubUrl} target="_blank"><CodeIcon className="fill-boldblue hover:fill-darkboldblue transition-all duration-150" /></a> :
                    <a className="grow shrink-0 basis-0 scale-[.40]"><CodeIcon className="fill-gray-400" /></a>
                }
                
            </div>
        </div>
    );
}

