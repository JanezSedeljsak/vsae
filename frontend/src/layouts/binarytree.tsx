import React, { useState, useEffect } from "react";
import { MDBBtn, MDBModal, MDBModalHeader, MDBListGroup, MDBModalBody, MDBListGroupItem, MDBIcon } from 'mdbreact';
import Sketch from "react-p5";
import sleep from './../helpers/sleep';
import treeStructure from './../interfaces/tree';

interface Props {
    jsonTree: treeStructure | undefined,
    initExpression: string | undefined
}

interface Step {
    id: number,
    step: string
}

var jsonTree: treeStructure | undefined; // global variable for tree printing
var solvingSteps: Array<Step> = new Array(); // global variable for solving steps

export default (props: Props) => {

    const [isSolving, setIsSolving] = useState<boolean | number>(false);
    const [isDrawing, setIsDrawing] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);


    function getModalContent() {
        if (solvingSteps) {
            return (
                <MDBListGroup style={{ width: "100%" }}>
                    <MDBListGroupItem active href="#">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">
                                <MDBIcon icon="info-circle" />
                                {" Začetni račun: "}
                                <b>{props.initExpression}</b>
                                <p className="mb-1">
                                    {" Končna vrednost: "}
                                    <b>{jsonTree?.value}</b>
                                </p>
                            </h5>
                        </div>
                    </MDBListGroupItem>
                    {solvingSteps.map((step, index) => (
                        <MDBListGroupItem active href="#" key={index}>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1"><MDBIcon icon="info-circle" />{" Korak: "}{step.id + 1}</h5>
                            </div>
                            <p className="mb-1">{step.step}</p>
                            <small>Vmesni račun: {"/"}</small>
                        </MDBListGroupItem>
                    ))}
                </MDBListGroup>
            );
        } else {
            return <p>Izvršena ni bila nobena operacija...</p>
        }
    }

    useEffect(() => {
        jsonTree = props.jsonTree;
    }, []);

    const calcMethods: any = {
        '+': (left: string, right: string): number => (Number(left) + Number(right)),
        '-': (left: string, right: string): number => (Number(left) - Number(right)),
        '/': (left: string, right: string): number => (Number(left) / Number(right)),
        '*': (left: string, right: string): number => (Number(left) * Number(right)),
        '^': (left: string, right: string): number => Math.pow(Number(left), Number(right)),
        'f': (left: string, right: string): number => {
            console.log(right);
            const num = Number(left);
            switch(right) {
                case 'abs':
                    return Math.abs(num);
                case 'cos':
                    return Math.cos(num);
                case 'sin':
                    return Math.sin(num);
                case 'tan':
                    return Math.tan(num);
                case 'ln':
                    return Math.exp(num);
                case 'log':
                    return Math.log10(num);
                default:
                    return num;
            }
        }
    };

    async function recursiveTreeSolve(tree: treeStructure | undefined): Promise<number | string> {
        if (tree?.left && tree?.right) {
            const operation = tree?.value;
            tree.value = calcMethods[operation](await recursiveTreeSolve(tree?.left), await recursiveTreeSolve(tree?.right));
            const step = (operation !== 'f') ? (
                `Izvrščimo operacijo: ${operation} nad vrednostima: 
                ${tree.left.value} & ${tree.right.value} (${tree.left.value} ${operation} ${tree.right.value})`
            ) : (
                `Izvršimo funkcijo: ${tree.right.value} nad vrednostjo: 
                ${tree.left.value} → ${tree.right.value}(${tree.left.value})`
            );
            solvingSteps.push({ id: solvingSteps.length, step });
            tree.left = null;
            tree.right = null;
            await sleep(400);
            return String(tree.value);
        } else {
            return String(tree?.value);
        }
    }

    async function solveTreeClicked() {
        setIsSolving(true);
        await sleep(400);
        await recursiveTreeSolve(jsonTree);
        setModal(true);
        setIsSolving(0);
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

    function renderActionButtons() {
        return (typeof isSolving === typeof 0) ? (
            <MDBBtn
                color="mdb-color"
                disabled={modal}
                onClick={() => setModal(true)}
            >Prikaži korake reševanja</MDBBtn>
        ) : (
            <MDBBtn
                color="mdb-color"
                disabled={!jsonTree || isDrawing || !!isSolving}
                onClick={solveTreeClicked}
            >Reši binarno drevo</MDBBtn>
        );
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>

                {renderActionButtons()}
                <MDBModal isOpen={modal} toggle={() => setModal(!modal)} size="lg">
                    <MDBModalHeader toggle={() => setModal(!modal)}>
                        <MDBIcon icon="list-ol" />{" Postopek reševanja"}
                    </MDBModalHeader>
                    <MDBModalBody>
                        {getModalContent()}
                    </MDBModalBody>
                </MDBModal>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Sketch setup={setup} draw={draw} />
            </div>
        </>
    );

}