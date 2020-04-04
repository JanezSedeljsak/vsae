import React, { useState, useEffect } from "react";
import { MDBInput, MDBBtn, MDBIcon, MDBBtnGroup, MDBModal, MDBModalBody, MDBModalHeader, MDBAnimation, MDBListGroupItem, MDBListGroup } from "mdbreact";
import { useToasts } from 'react-toast-notifications';
import api from './../helpers/api';
import BinaryTree from './binarytree';
import { default as Spinner } from './../layouts/loading';
import sleep from './../helpers/sleep';
import { useUpload } from './../helpers/upload';
import { LabeledHeader } from './../components/label';

export default () => {
    const [expression, setExpression] = useState<string>('');
    const [disableControlls, setDisableControlls] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [{ equation, VSAEExpression, result, steps }, setTreeData] = useState<any>({});
    const [displayIndex, setDisplayIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [fileupload, setFileUpload] = useState<number>(0);
    const { data, fileIsUplading } = useUpload(fileupload);
    const { addToast } = useToasts();

    useEffect(() => setLoading(!!fileIsUplading), [fileIsUplading]);
    useEffect(() => data?.responseEquation && setExpression(data?.responseEquation), [data]);

    const changeStepIndex = (index: number) => (index >= 0 && index < steps?.length) && setDisplayIndex(index);

    const displayTree = async (): Promise<void> => {
        if (!expression) {
            addToast("Prosimo vnesite izraz!", getToastSettings('error'));
            return;
        }
        setLoading(true);
        const response: any = await api.buildJsonTree(expression);
        if (response.data.error) addToast(response.data.error, getToastSettings('error'));
        else {
            setTreeData(response.data.base);
            setDisplayIndex(0);
            await sleep(1000);
        }
        setLoading(false);
    }

    const getToastSettings = (type: string): any => ({
        appearance: type,
        autoDismiss: true
    });

    async function runSolve(index: number,  isFirstRun: boolean = true) {
        if (isFirstRun) {
            setDisableControlls(true);
            addToast("Reševanje v teku!", getToastSettings('success'));
        }
        if (index >= 0 && index < steps?.length) {
            setDisplayIndex(index);
            await sleep(1000);
            runSolve(index + 1, false)
        } else {
            setDisableControlls(false);
            addToast(`Izraz je bil uspešno rešen; rezultat: ${result.toFixed(2)}`, getToastSettings('success'));
        }
    }

    function getStepLabelsAtIndex(index: number) {
        const { equation, description, stepEquation } = steps[index] || {};
        const stepNum = index + 1 <= steps?.length - 1 ? `${index + 1}/${steps?.length - 1}` : 'Konec'

        return (
            <>
                <LabeledHeader {...{ icon: 'info-circle', label: 'Korak:', val: stepNum }} />
                <LabeledHeader {...{ icon: 'caret-right', label: 'Vmesni korak:', val: description, mathFont: true }} />
                <LabeledHeader {...{ icon: 'caret-right', label: 'Izračun:', val: equation }} />
                <LabeledHeader {...{ icon: 'caret-right', label: 'Stanje izraza:', val: stepEquation }} />
            </>
        );
    }

    const StepModal = () => (
        <MDBModal isOpen={modal} toggle={() => setModal(!modal)} size="lg">
            <MDBModalHeader toggle={() => setModal(!modal)}>
                <MDBIcon icon="list-ol" />{" Postopek reševanja"}
            </MDBModalHeader>
            <MDBModalBody>
                <MDBListGroup style={{ width: "100%" }}>
                    <MDBListGroupItem active href="#">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">
                                <MDBIcon icon="th" />
                                {" Začetni račun: "}
                                <b>{equation}</b>
                                <p className="mb-1">
                                    <MDBIcon icon="stop" />
                                    {" Končna vrednost: "}
                                    <b>{result}</b>
                                </p>
                            </h5>
                        </div>
                    </MDBListGroupItem>
                    {steps && Array.from(Array(steps.length - 1), (_: undefined, index: number) => (
                        <MDBListGroupItem key={index}>
                            {getStepLabelsAtIndex(index)}
                        </MDBListGroupItem>
                    ))}
                </MDBListGroup>
            </MDBModalBody>
        </MDBModal>
    )

    const TopPanelRow = () =>  (
        <div style={{ display: "flex", flexDirection: 'row', width: '100%', padding: 10 }}>
            <div style={{ display: "flex", flexDirection: 'column', width: '80%' }}>
                <LabeledHeader {...{ icon: 'angle-right', label: 'Vnešen izraz:', val: equation }} />
                <LabeledHeader {...{ icon: 'angle-right', label: 'VSAE format:', val: VSAEExpression }} />
                <LabeledHeader {...{ icon: 'angle-right', label: 'Končni rezultat:', val: result }} />
            </div>
            <div style={{ display: "flex", flexDirection: "row-reverse", width: '20%' }}>
                <MDBBtnGroup className="mr-2">
                    <MDBBtn disabled={disableControlls} color="mdb-color" onClick={() => setModal(true)}><MDBIcon icon="list-ol" /></MDBBtn>
                </MDBBtnGroup>
            </div>
            <hr style={{ borderTop: '1px solid black' }} />
        </div>
    )

    const SecondPanelRow = () => (
        <>
            <div style={{ width: 'calc(100%-20px)', height: 1, background: '#aaa' }} />
            <div style={{ display: "flex", flexDirection: 'row', width: '100%', padding: 10 }}>
                <div style={{ display: "flex", flexDirection: 'column', width: '70%' }}>
                    {getStepLabelsAtIndex(displayIndex)}
                </div>
                <div style={{ display: "flex", flexDirection: "row-reverse", width: '30%' }}>
                    <MDBBtnGroup className="mr-2">
                        <MDBBtn disabled={disableControlls} color="mdb-color" onClick={() => changeStepIndex(displayIndex - 1)}><MDBIcon icon="angle-double-left" /></MDBBtn>
                        <MDBBtn disabled={disableControlls}  color="mdb-color" onClick={() => runSolve(displayIndex + 1)}><MDBIcon icon="calculator" /></MDBBtn>
                        <MDBBtn disabled={disableControlls} color="mdb-color" onClick={() => changeStepIndex(displayIndex + 1)}><MDBIcon icon="angle-double-right" /></MDBBtn>
                    </MDBBtnGroup>
                </div>
                <hr style={{ borderTop: '1px solid black' }} />
            </div>
        </>
    );

    return (
        <>
            <StepModal />
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: "80px" }}>
                <MDBInput
                    value={expression}
                    label="Vnesi izraz"
                    disabled={disableControlls}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setExpression(e.currentTarget.value)}
                />
                <MDBBtn disabled={disableControlls} gradient="aqua" onClick={() => setFileUpload(fileupload + 1)}>
                    <MDBIcon icon="upload" />
                </MDBBtn>
                <MDBBtn  disabled={disableControlls} gradient="blue" onClick={displayTree}>
                    <MDBIcon icon="equals" />
                </MDBBtn>
            </div>
            <div>
                {(steps?.length && !loading) ? (
                    <MDBAnimation type="bounce" className='panel'>
                        <div style={{ display: "flex", flexDirection: 'column', width: '100%', background: '#ffffff55', padding: '10px' }}>
                            <TopPanelRow />
                            <SecondPanelRow />
                        </div>
                    </MDBAnimation>
                ) : loading && <Spinner />}
                <hr />
            </div>
            {(steps?.length && !loading) ? <BinaryTree treeForBuild={steps[displayIndex].tree} /> : null}
        </>
    );
};