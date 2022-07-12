import React, { useEffect } from 'react';

interface Coord {
    x: Number,
    y: Number
}

function drawParticles(c: CanvasRenderingContext2D, n: Number) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let coords: Array<Coord> = [];
    for (let i = 0; i < 10; i++) {

    }
}

function play(c: CanvasRenderingContext2D) {
    drawParticles(c, 10);
}

export default function Canvas() {
    const canvasRef = React.useRef(null);

    useEffect(() => {
        if (canvasRef.current != null) {
            const canvas = canvasRef.current;
            // @ts-ignore
            const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
            play(ctx);
        }
    });

    return (
        <canvas className="w-full h-full absolute top-0 left-0" ref={canvasRef} />
    );
}