import React, { useState } from "react";
import { MDBBtn } from 'mdbreact';
import Sketch from "react-p5";

interface treeStructure {
    value: string | null,
    left: treeStructure | null,
    right: treeStructure | null
}

interface Props {
    jsonTree: treeStructure | undefined
}

export default (props: Props) => {

    function drawTree(tree: any, p5: any, len: number): void {
        if (tree.left) {
            p5.push();
            p5.line(0, 0, -len, 100);
            p5.translate(-len, 100);
            drawTree(tree.left, p5, len * .5);
            p5.pop();
        }

        if (tree.right) {
            p5.push();
            p5.line(0, 0, len, 100);
            p5.translate(len, 100);
            drawTree(tree.right, p5, len * .5);
            p5.pop();
        }

        p5.strokeWeight(0);
        p5.ellipse(0, 0, 80, 80);
        p5.strokeWeight(2);
        p5.textSize(40);
        p5.text(tree.value, -12, 15);
    }

    function setup(p5: any, canvasRef: any): void {
        p5.createCanvas(1800, 700).parent(canvasRef);
        p5.textFont('Georgia');
        p5.stroke(60);
        p5.noLoop();
    }

    function draw(p5: any): void {
        p5.translate(900, 40);
        drawTree(props.jsonTree, p5, 350);
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <MDBBtn color="mdb-color">Naslednji korak</MDBBtn>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Sketch setup={setup} draw={draw} />
            </div>
        </>
    );

}