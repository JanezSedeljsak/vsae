import React, { Component } from "react";
import Sketch from "react-p5";
 
export default () => {

    function setup(p5 : any, canvasRef : any) : void {
        p5.createCanvas(1000, 500).parent(canvasRef);
    }

    function draw(p5 : any) : void {
        p5.background(70);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}