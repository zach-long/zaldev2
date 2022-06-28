import React from 'react';

import Canvas from '../canvas';

export default function Header() {
    return (
        <header id="top" className="h-screen pt-[15%]">
            <Canvas />
            <div className="text-center">
                <h1>Zachary Long</h1>
                <h5>Full Stack Developer</h5>
            </div>
        </header>
    );
}

