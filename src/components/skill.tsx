import React from 'react';

type SkillProps = {
    _id: Number,
    name: String,
    proficiency: String
}

export default function Skill(props: SkillProps) {
    const nameClassList = `p-1 mb-2.5 bg-pizazz dark:bg-darkpizazz text-white dark:text-gray-900 font-bold border-l-2 border-solid border-darkpizazz dark:border-xdarkpizazz`;
    const proficiencyClassList = `-m-1 fill-${props.proficiency} float-right h-8 bg-zinc-100 dark:bg-slate-800 border-r-2 border-solid border-zinc-200 dark:border-slate-600 `;
    return (
        <div className={nameClassList}>{props.name}
            <div className={proficiencyClassList}></div>
        </div>
    );
}