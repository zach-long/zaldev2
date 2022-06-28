import React, { useEffect } from 'react';

function drawRect(c: CanvasRenderingContext2D) {
    c.fillRect(25, 25, 100, 100);
    c.clearRect(45, 45, 60, 60);
    c.strokeRect(50, 50, 50, 50);
}

function play(c: CanvasRenderingContext2D) {
    drawRect(c);
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