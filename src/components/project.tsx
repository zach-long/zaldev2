import React from 'react';

type ProjectProps = {
    imageUrl: String,
    name: String,
    stack: String
}

export default function Project(props: ProjectProps) {
    const cardClassList = `w-64 h-64 bg-center bg-cover bg-no-repeat bg-[url('${props.imageUrl}')] group-hover:opacity-0 transition duration-300`;
    const textClassList = `absolute top-0 group-hover:top-1/4 left-0 w-full text-center transition-all opacity-0 group-hover:opacity-100 duration-300`;
    return (
        <div className="group relative">
            <div className={cardClassList}></div>
            <div className={textClassList}><h3>{props.name}</h3><h5>{props.stack}</h5></div>
        </div>
    );
}

