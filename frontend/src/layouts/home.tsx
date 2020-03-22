import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import api from './../helpers/api';
import BinaryTree from './binarytree';

export default () => {
    const [expression, setExpression] = useState('');
    const [treeForDisplay, setTreeForDisplay] = useState(undefined);

    function validateExpression(str: string): boolean {
        return true
    }

    const displayTree = async () => {
        const response : any = await api.buildJsonTree(expression);
        setTreeForDisplay(response.data.result);
    }

    return (
        <>
            <MDBInput
                value={expression}
                label="Vnesi izraz"
                onChange={(e: React.FormEvent<HTMLInputElement>) => setExpression(e.currentTarget.value)}
            />
            <MDBBtn 
                disabled={!validateExpression(expression)}
                onClick={displayTree}
            >
                Prikaži binarno drevo
            </MDBBtn>
            <MDBBtn color="primary" disabled={!validateExpression(expression)}>Shunting-yard algoritem</MDBBtn>
            <hr />
            {treeForDisplay && <BinaryTree jsonTree={treeForDisplay} />}
        </>
    );
};
