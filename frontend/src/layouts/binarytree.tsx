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
    const [isDrawing, setIsDrawing] = useState(true);
    const [jsonTree, setJsonTree] = useState<treeStructure | any>(undefined);

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

    async function recursiveTreeSolve(tree: treeStructure): Promise<treeStructure | number> {
        await sleep(500);

        const leftC = tree?.left;
        const rightC = tree?.right;
        const dataC = (tree?.value);

        if (leftC && rightC) {
            return calcMethods[dataC](await recursiveTreeSolve(leftC), await recursiveTreeSolve(rightC));
        } else {
            return Number(dataC);
        }
    }

    async function solveTreeClicked() {
        setIsSolving(true);
        console.log(recursiveTreeSolve(jsonTree));
        setJsonTree({ value: String(await recursiveTreeSolve(jsonTree)), left: null, right: null });
    }

    function sleep(ms: number): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    function drawTreeSync(tree: treeStructure | undefined, p5: any, len: number): void {
        if (tree?.left) {
            p5.push();
            p5.line(0, 0, -len, 100);
            p5.translate(-len, 100);
            drawTreeSync(tree.left, p5, len * .5);
            p5.pop();
        }

        if (tree?.right) {
            p5.push();
            p5.line(0, 0, len, 100);
            p5.translate(len, 100);
            drawTreeSync(tree.right, p5, len * .5);
            p5.pop();
        }

        p5.strokeWeight(0);
        p5.ellipse(0, 0, 80, 80);
        p5.strokeWeight(2);
        p5.textSize(40);
        p5.text(tree?.value, -12, 15);
    }

    async function drawTree(tree: treeStructure | undefined, p5: any, len: number) {
        p5.noLoop();
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
    }

    function setup(p5: any, canvasRef: any): void {
        p5.createCanvas(1800, 700).parent(canvasRef);
        p5.textFont('Georgia');
        p5.stroke(60);
    }

    async function draw(p5: any) {
        if (isDrawing) {
            p5.translate(900, 40);
            await drawTree(jsonTree, p5, 350);
            await sleep(500);
            setIsDrawing(false);
            p5.loop();
        } else {
            p5.translate(900, 40);
            p5.clear();
            p5.loop();
            drawTreeSync(jsonTree, p5, 350);
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