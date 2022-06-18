import React from 'react';

type SkillProps = {
    name: String,
    proficiency: String
}

export default function Skill(props: SkillProps) {
    const nameClassList = `bg-gradient-to-r from-purple-500 to-pink-500`;
    const proficiencyClassList = `fill-${props.proficiency} float-right bg-white h-6`;
    return (
        <div className={nameClassList}>{props.name}<div className={proficiencyClassList}></div></div>
    );
}