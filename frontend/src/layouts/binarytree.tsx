import React, { Component } from "react";
import Sketch from "react-p5";

const jsonTree : Object = {
    value: '+',
    left: {
        value: '5',
        left: null,
        right: null
    },
    right: {
        value: '5',
        left: null,
        right: null
    }
}

export default () => {

    function drawTree(tree : any, p5 : any) : void {
        const leftExists : boolean = !!tree.left;
        const rightExists : boolean = !!tree.right;
        p5.ellipse(0,0,60,60);
        p5.text(tree.value, -12, 15);

        if (leftExists) {
            p5.line(0,0,-100,50);
            p5.translate(-100,50);
            drawTree(tree.left, p5);
        }

        if (rightExists) {
            if (leftExists) {
                p5.translate(+100,-50); 
            }
            p5.line(0,0, 100,50);
            p5.translate(100,50);
            drawTree(tree.right, p5);
        }
    }

    function setup(p5 : any, canvasRef : any) : void {
        p5.createCanvas(window.outerWidth*.7, window.outerWidth*.3).parent(canvasRef);
        p5.background(70);
        p5.stroke(255);
        p5.textSize(40);
    }

    function draw(p5 : any) : void {
        p5.translate(window.outerWidth*.7/2, 40);
        drawTree(jsonTree, p5);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}