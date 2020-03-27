import React, { useState, useEffect } from "react";
import { MDBBtn, MDBModal, MDBModalHeader, MDBListGroup, MDBModalBody, MDBListGroupItem, MDBIcon } from 'mdbreact';
import Sketch from "react-p5";
import sleep from './../helpers/sleep';
import treeStructure from './../interfaces/tree';

interface Props {
    jsonTree: treeStructure | undefined,
}

export default (props: Props) => {
    const [jsonTree,] = useState<treeStructure | undefined>(props.jsonTree)

    function drawTree(tree: any, p5: any, len: number): void {
        if (tree?.left && tree?.right) {
            p5.push();
            p5.line(0, 0, -len, 100);
            p5.translate(-len, 100);
            drawTree(tree.left, p5, len * .5);
            p5.pop();
            p5.push();
            p5.line(0, 0, len, 100);
            p5.translate(len, 100);
            drawTree(tree.right, p5, len * .5);
            p5.pop();
        }

        p5.strokeWeight(0);
        p5.ellipse(0, 0, 60, 60);
        p5.strokeWeight(2);
        p5.textSize(30);
        if (tree?.value.length <= 2) {
            p5.text(tree?.value, -10, 15);
        } else {
            let printOut = tree?.value.length == 3 ? tree?.value : tree?.value.substr(0,3) + '...'
            p5.text(printOut, -20, 15);
        }
 
    }

    function setup(p5: any, canvasRef: any): void {
        p5.createCanvas(1800, 700).parent(canvasRef);
        p5.textFont('Georgia');
        p5.stroke(60);
    }

    function draw(p5: any) {
        p5.translate(900, 40);
        drawTree(jsonTree, p5, 300);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}