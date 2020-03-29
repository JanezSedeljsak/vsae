import React, { useState, useEffect } from "react";
import { MDBInput, MDBBtn, MDBIcon, MDBBtnGroup, MDBModal, MDBModalBody, MDBModalHeader, MDBAnimation, MDBListGroupItem, MDBListGroup } from "mdbreact";
import api from './../helpers/api';
import BinaryTree from './binarytree';
import { default as Spinner } from './../layouts/loading';
import sleep from './../helpers/sleep';
import { useUpload } from './../helpers/upload';


export default () => {
    const [expression, setExpression] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);
    const [apiBlockOfCode, setApiBlockOfCode] = useState<any>({});
    const [displayIndex, setDisplayIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [fileupload, setFileUpload] = useState<number>(0);
    const { data, fileIsUplading } = useUpload(fileupload);

    useEffect(() => setLoading(!!fileIsUplading), [fileIsUplading]);
    useEffect(() => data?.responseEquation && setExpression(data?.responseEquation), [data])

    const displayTree = async (): Promise<void> => {
        if (!expression) return;
        setLoading(true);
        const response: any = await api.buildJsonTree(expression);
        setApiBlockOfCode(response.data.base);
        setDisplayIndex(0);
        await sleep(1000);
        setLoading(false);
    }

    function changeStepIndex(index: number) {
        if (index >= 0 && index < apiBlockOfCode?.steps?.length) {
            setDisplayIndex(index);
        }
    }

    async function runSolve(index: number) {
        if (index >= 0 && index < apiBlockOfCode?.steps?.length) {
            setDisplayIndex(index);
            await sleep(1000);
            runSolve(index + 1)
        }
    }

    function _nF(num: any) {
        if (!num) return '';
        if (Number.parseFloat(num) % 1 !== 0) {
            return Number.parseFloat(num.toString()).toFixed(4);
        } else {
            return Number.parseInt(num);
        }
    }


    interface HeaderProps {
        label: string,
        val: string | number,
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
            <span style={{ marginRight: 10, color: '#777', padding: 2, fontStyle: 'italic' }}>{label}</span>
            <span className={!mathFont ? 'math' : 'step-desc'} style={{ color: '#444', padding: 0 }}>{val}</span>
        </div>;
    }

    function TopPanelRow() {
        const { equation, VSAEExpression, result } = apiBlockOfCode;
        return (
            <div style={{ display: "flex", flexDirection: 'row', width: '100%' }}>
                <div style={{ display: "flex", flexDirection: 'column', width: '50%' }}>
                    <LabeledHeader {...{ label: 'Vnešen izraz:', val: equation }} />
                    <LabeledHeader {...{ label: 'VSAE format:', val: VSAEExpression }} />
                    <LabeledHeader {...{ label: 'Končni rezultat:', val: result }} />
                </div>
                <div style={{ display: "flex", flexDirection: "row-reverse", width: '50%', padding: 5, paddingBottom: 40 }}>
                    <MDBBtnGroup className="mr-2">
                        <MDBBtn color="mdb-color" onClick={() => setModal(true)}><MDBIcon icon="list-ol" /></MDBBtn>
                    </MDBBtnGroup>
                </div>
                <hr style={{ borderTop: '1px solid black' }} />
            </div>
        )
    }

    function SecondPanelRow() {
        const { left, right, result, operation, isFunction } = apiBlockOfCode.steps[displayIndex+1] || {};
        let description;
        let equation;

        if (displayIndex+1 !== apiBlockOfCode.steps.length) {
            if (isFunction) {
                description = `Za naslednjo vrednost ${_nF(left)} izvedemo funkcijo: ${right}`;
                equation = ((right !== 'fac') ? `${right}(${_nF(left)})` : `${_nF(left)}!`) + ` = ${_nF(result)}`;
            } 
            else {
                description = `Za naslednje vrednosti ${_nF(left)}, ${_nF(right)} izvedemo operacijo: ${operation}`;
                equation = `${_nF(left)} ${operation} ${_nF(right)} = ${_nF(result)}`;
            }
        }
        
        return (
            <>
                <div style={{ width: 'calc(100%-20px)', height: 1, background: '#aaa', margin: 10 }} />
                <div style={{ display: "flex", flexDirection: 'row', width: '100%' }}>
                    <div style={{ display: "flex", flexDirection: 'column', width: '50%' }}>
                        <LabeledHeader {...{ label: 'Korak:', val: (displayIndex + 1) || '' }} />
                        <LabeledHeader {...{ label: 'Vmesni korak:', val: description || 'Konec', mathFont: true }} />
                        <LabeledHeader {...{ label: 'Izračun:', val: equation|| '/' }} />
                        <LabeledHeader {...{ label: 'Stanje izraza:', val: equation|| '/' }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse", width: '50%', padding: 5, paddingBottom: 40 }}>
                        <MDBBtnGroup className="mr-2">
                            <MDBBtn color="mdb-color" onClick={() => changeStepIndex(displayIndex - 1)}><MDBIcon icon="angle-double-left" /></MDBBtn>
                            <MDBBtn color="mdb-color" onClick={() => runSolve(displayIndex + 1)}><MDBIcon icon="calculator" /></MDBBtn>
                            <MDBBtn color="mdb-color" onClick={() => changeStepIndex(displayIndex + 1)}><MDBIcon icon="angle-double-right" /></MDBBtn>
                        </MDBBtnGroup>
                    </div>
                    <hr style={{ borderTop: '1px solid black' }} />
                </div>
            </>
        );
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: "80px" }}>
                <MDBInput
                    value={expression}
                    label="Vnesi izraz"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setExpression(e.currentTarget.value)}
                />
                <MDBBtn gradient="aqua" onClick={() => setFileUpload(fileupload + 1)} style={{ borderRadius: '50%', width: '80px'}}>
                    <MDBIcon icon="upload" />
                </MDBBtn>
                <MDBBtn gradient="blue" onClick={displayTree} style={{ borderRadius: '50%', width: '80px'}}>
                    <MDBIcon icon="equals" />
                </MDBBtn>
            </div>
            <div>
                {(apiBlockOfCode?.steps?.length && !loading)  ? (
                    <MDBAnimation type="bounce" className='panel'>
                        <div style={{ display: "flex", flexDirection: 'column', width: '100%', background: '#ffffff55', padding: '10px' }}>
                            <TopPanelRow/>
                            <SecondPanelRow />
                        </div>
                    </MDBAnimation>
                ) : loading && <Spinner/>}
                <hr />
            </div>
            {(apiBlockOfCode?.steps?.length && !loading) ? <BinaryTree jsonTree={apiBlockOfCode?.steps[displayIndex].tree} />: null}
        </>
    );

};
