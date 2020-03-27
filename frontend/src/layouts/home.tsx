import React, { useState } from "react";
import { MDBInput, MDBBtn, MDBIcon, MDBBtnGroup, MDBModal, MDBModalBody, MDBModalHeader, MDBListGroupItem, MDBListGroup } from "mdbreact";
import api from './../helpers/api';
import BinaryTree from './binarytree';
import sleep from './../helpers/sleep';
import treeStructure from './../interfaces/tree';

export default () => {
    const [expression, setExpression] = useState<string>('');
    const [treeForDisplay, setTreeForDisplay] = useState<treeStructure | undefined>(undefined);
    const [modal, setModal] = useState<boolean>(false);

    function validateExpression(str: string): boolean {
        return true;
    }

    const displayTree = async (): Promise<void> => {

        // force to re-render binary-tree component
        if (treeForDisplay) {
            setTreeForDisplay(undefined);
            await sleep(500);
        }

        const response: any = await api.buildJsonTree(expression);
        await setTreeForDisplay(response.data.result);
    }


    interface HeaderProps {
        label: string,
        val: string,
        mathFont?: boolean
    }


    function stepsModal() {
        return (
            <MDBModal isOpen={false} toggle={() => {}} size="lg">
                <MDBModalHeader toggle={() => {}}>
                    <MDBIcon icon="list-ol" />{" Postopek reševanja"}
                </MDBModalHeader>
                <MDBModalBody>
                    <div>neki</div>
                </MDBModalBody>
            </MDBModal>
        )
    }


    function getModalContent() {
        return (
            <MDBListGroup style={{ width: "100%" }}>
                <MDBListGroupItem active href="#">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">
                            <MDBIcon icon="th" />
                            {" Začetni račun: "}
                            <b>{}</b>
                            <p className="mb-1">
                                <MDBIcon icon="stop" />
                                {" Končna vrednost: "}
                                <b>{}</b>
                            </p>
                        </h5>
                    </div>
                </MDBListGroupItem>
            </MDBListGroup>
        );
    }


    function LabeledHeader({ label, val, mathFont }: HeaderProps) {
        return <div style={{ display: 'flex', marginLeft: 10 }}>
            <h5 style={{ marginRight: 10, color: '#777', padding: 2, fontStyle: 'italic' }}>{label}</h5>
            <h5 className={!mathFont ? 'math' : ''} style={{ color: '#444', padding: 0 }}>{val}</h5>
        </div>;
    }

    function TopPanelRow() {
        return (
            <div style={{ display: "flex", flexDirection: 'row', width: '100%' }}>
                <div style={{ display: "flex", flexDirection: 'column', width: '50%' }}>
                    <LabeledHeader {...{ label: 'Vnešen izraz:', val: 'log(17-4)' }} />
                    <LabeledHeader {...{ label: 'VSAE format:', val: '( 17 - 4 ) f log' }} />
                </div>
                <div style={{ display: "flex", flexDirection: "row-reverse", width: '50%', padding: 5 }}>
                    <MDBBtnGroup className="mr-2">
                        <MDBBtn color="mdb-color" onClick={displayTree}>Prikaži binarno drevo</MDBBtn>
                        <MDBBtn color="mdb-color"><MDBIcon icon="list-ol" /></MDBBtn>
                    </MDBBtnGroup>
                </div>
                <hr style={{ borderTop: '1px solid black' }} />
            </div>
        )
    }

    function SecondPanelRow() {
        return (
            <div style={{ display: "flex", flexDirection: 'row', width: '100%' }}>
                <div style={{ display: "flex", flexDirection: 'column', width: '50%' }}>
                    <LabeledHeader {...{ label: 'Vmesni korak:', val: '5+5', mathFont: true }} />
                    <LabeledHeader {...{ label: 'Izračun:', val: '5+5' }} />
                    <LabeledHeader {...{ label: 'Stanje izraza:', val: '5+5' }} />
                </div>
                <div style={{ display: "flex", flexDirection: "row-reverse", width: '50%', padding: 5, paddingBottom: 40 }}>
                    <MDBBtnGroup className="mr-2">
                        <MDBBtn color="mdb-color"><MDBIcon icon="angle-double-left" /></MDBBtn>
                        <MDBBtn color="mdb-color"><MDBIcon icon="calculator" /></MDBBtn>
                        <MDBBtn color="mdb-color"><MDBIcon icon="angle-double-right" /></MDBBtn>
                    </MDBBtnGroup>
                </div>
                <hr style={{ borderTop: '1px solid black' }} />
            </div>
        )
    }


    return (
        <>
            <MDBInput
                value={expression}
                label="Vnesi izraz"
                onChange={(e: React.FormEvent<HTMLInputElement>) => setExpression(e.currentTarget.value)}
            />
            <div>
                <div style={{ display: "flex", flexDirection: 'column', width: '100%', background: '#ffffff55', padding: '10px' }}>
                    <TopPanelRow />
                    <div style={{ width: 'calc(100%-20px)', height: 1, background: '#aaa', margin: 10 }} />
                    <SecondPanelRow />
                </div>
                <hr />
            </div>
            {treeForDisplay && <BinaryTree jsonTree={treeForDisplay} />}
        </>
    );
};
