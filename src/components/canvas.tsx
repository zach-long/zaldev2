import React, { useRef, useEffect, useState } from 'react';

class Particle {
    ctx: CanvasRenderingContext2D;
    xOrigin: number;
    yOrigin: number;
    color: string;
    boundBase: number;
    xPosBound: number;
    xNegBound: number;
    yPosBound: number;
    yNegBound: number;
    vBase: number;
    vx: number | undefined;
    vy: number | undefined;
    xCurr: number;
    yCurr: number;

    constructor(c: CanvasRenderingContext2D, x: number, y: number, color: string) {
        this.ctx = c;
        this.xOrigin = x;
        this.yOrigin = y;
        this.color = color;
        this.boundBase = 10;
        this.xPosBound = x + this.boundBase;
        this.xNegBound = x - this.boundBase;
        this.yPosBound = y + this.boundBase;
        this.yNegBound = y - this.boundBase;
        this.vBase = .06; // .025
        this.xCurr = x;
        this.yCurr = y;
    }

    drawParticle() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.xCurr, this.yCurr, 2, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();

        this.vx = this.vBase * calcRandomBinary();
        this.vy = this.vBase * calcRandomBinary();
        this.xCurr += this.vx;
        this.yCurr += this.vy;
    }
}

function calcRandomBinary() {
    return Math.random() < 0.5 ? -1 : 1;
}

function play(c: CanvasRenderingContext2D) {
    let particles: Array<Particle> = [];
    let particleTotal: number = 5;
    let particleColors: Array<string> = [
        '#D26104',
        '#4318B1',
        '#0074CC',
        '#18B143'
    ];

    // c.fillStyle = 'rgb(0,0,255)';
    // c.fillRect(0, 0, innerWidth, innerHeight);
    

    for (let i = 0; i < particleTotal; i++) {
        particles.push(new Particle(c, Math.floor(Math.random() * innerWidth + 1), Math.floor(Math.random() * innerHeight + 1), particleColors[Math.floor(Math.random() * particleColors.length)]));
    }
    
    anim();

    function anim() {
        requestAnimationFrame(anim);
        c.clearRect(0, 0, innerWidth, innerHeight);
        particles.forEach(particle => {
            particle.drawParticle();
        });
    }
}

export default function Canvas() {
    const canvasRef = useRef(null);
    const [canvasWidth, setCanvasWidth] = useState(innerWidth);
    const [canvasHeight, setCanvasHeight] = useState(innerHeight);

    useEffect(() => {
        if (canvasRef.current != null) {
            const canvas = canvasRef.current;

            // @ts-ignore
            const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
            play(ctx);
        }
    });

    return (
        <canvas className="absolute top-0 left-0" ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    );
}