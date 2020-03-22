import React, { useState, useEffect } from "react";
import { MDBBtn } from 'mdbreact';
import Sketch from "react-p5";

interface treeStructure {
    value: string,
    left: treeStructure | null,
    right: treeStructure | null
}

interface Props {
    jsonTree: treeStructure | undefined
}

export default (props: Props) => {

    const [isSolving, setIsSolving] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);
    const [jsonTree, setJsonTree] = useState<treeStructure | undefined>(undefined);

    useEffect(() => {
        setJsonTree(props.jsonTree);
    }, [])

    const calcMethods: any = {
        '+': (left: number, right: number): number => (left + right),
        '-': (left: number, right: number): number => (left - right),
        '/': (left: number, right: number): number => (left / right),
        '*': (left: number, right: number): number => (left * right),
        '^': (left: number, right: number): number => (left ^ right)
    };

    async function recursiveTreeSolve(tree: any = jsonTree) {
        // #TODO: recursive tree solving visualization  
        // console.log(jsonTree);
        // await sleep(400);

        const leftC = tree?.left;
        const rightC = tree?.right;
        const dataC = tree?.value;

        if (leftC && rightC) {
            tree.value = calcMethods[dataC](recursiveTreeSolve(leftC), recursiveTreeSolve(rightC));
            console.log(`Execute calculate with operator: ${dataC}; values: ${leftC?.value} & ${rightC?.value}`);
            return Number(tree.value);
        } else {
            return Number(dataC);
        }
    }

    async function solveTreeClicked() {
        setIsSolving(true);
        await recursiveTreeSolve();
    }

    function sleep(ms: number): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    function drawTreeSolving(tree: treeStructure | undefined, p5: any, len: number) {
        if (tree?.left) {
            p5.push();
            p5.line(0, 0, -len, 100);
            p5.translate(-len, 100);
            drawTree(tree.left, p5, len * .5);
            p5.pop();
        }

        if (tree?.right) {
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
        p5.text(tree?.value, -12, 15);
    }

    async function drawTree(tree: treeStructure | undefined, p5: any, len: number) {
        setIsDrawing(true);
        await sleep(500);

        Promise.all([
            await (async () => {
                if (tree?.left) {
                    p5.push();
                    p5.line(0, 0, -len, 100);
                    p5.translate(-len, 100);
                    await drawTree(tree.left, p5, len * .5);
                    p5.pop();
                }
            })(),
            await (async () => {
                if (tree?.right) {
                    p5.push();
                    p5.line(0, 0, len, 100);
                    p5.translate(len, 100);
                    await drawTree(tree.right, p5, len * .5);
                    p5.pop();
                }
            })()
        ]);

        p5.strokeWeight(0);
        p5.ellipse(0, 0, 80, 80);
        p5.strokeWeight(2);
        p5.textSize(40);
        p5.text(tree?.value, -12, 15);

        setTimeout(() => setIsDrawing(false), 1000);

    }

    function setup(p5: any, canvasRef: any): void {
        p5.createCanvas(1800, 700).parent(canvasRef);
        p5.textFont('Georgia');
        p5.stroke(60);
    }

    function draw(p5: any): void {
        if (jsonTree) {
            p5.translate(900, 40);
            if (!isSolving) {
                p5.noLoop();
                drawTree(jsonTree, p5, 350);
            } else {
                p5.loop();
                drawTreeSolving(jsonTree, p5, 350);
            }
        }
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <MDBBtn
                    color="mdb-color"
                    disabled={!jsonTree || isDrawing || isSolving}
                    onClick={solveTreeClicked}
                >Reši binarno drevo</MDBBtn>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Sketch setup={setup} draw={draw} />
            </div>
        </>
    );

}