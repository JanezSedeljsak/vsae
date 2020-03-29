import React, { useState, useEffect } from "react";
import Sketch from "react-p5";
import sleep from './../helpers/sleep';
import treeStructure from './../interfaces/tree';

interface Props { treeForBuild: treeStructure | undefined }

export default ({ treeForBuild }: Props) => {

    const [jsonTree, setJsonTree] = useState<treeStructure | undefined>(treeForBuild);
    useEffect(() => setJsonTree(treeForBuild), [treeForBuild])

    function hexagon(s:any, p5:any) {
        p5.noStroke();
        p5.fill('#45526e');
        p5.push();
        p5.scale(s);
        p5.beginShape();
        p5.vertex(-75, -130);
        p5.vertex(75, -130);
        p5.vertex(150, 0);
        p5.vertex(75, 130);
        p5.vertex(-75, 130);
        p5.vertex(-150, 0);
        p5.endShape(p5.close);
        p5.pop();
    }

    function drawTree(tree: any, p5: any, len: number): void {
        if (tree?.left && tree?.right) {
            p5.stroke(60);
            p5.push();
            p5.line(0, 0, -len, 100);
            p5.translate(-len, 100);
            drawTree(tree.left, p5, len * .51);
            p5.pop();
            p5.push();
            p5.line(0, 0, len, 100);
            p5.translate(len, 100);
            drawTree(tree.right, p5, len * .51);
            p5.pop();
            p5.noStroke();
        }

        hexagon(.22,p5);
        p5.fill('#eee');
        const treeVal = String(tree?.value);
        if (treeVal.length <= 2) {
            p5.text(treeVal, -10, 10);
        } else {
            let printOut = treeVal.length === 3 ? treeVal : treeVal.substr(0,3) + '...'
            p5.text(printOut, -16, 10);
        }
    }

    function setup(p5: any, canvasRef: any): void {
        p5.createCanvas(1800, 700).parent(canvasRef);
        p5.textSize(20);
        p5.textFont('Roboto Mono');
        p5.stroke(60);
    }

    function draw(p5: any) {
        p5.clear();
        p5.translate(900, 40);
        drawTree(jsonTree, p5, 350);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}