import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import api from './../helpers/api';
import BinaryTree from './binarytree';
import sleep from './../helpers/sleep';
import treeStructure from './../interfaces/tree';

export default () => {
    const [expression, setExpression] = useState<string>('');
    const [treeForDisplay, setTreeForDisplay] = useState<treeStructure | undefined>(undefined);

    function validateExpression(str: string): boolean {
        return true;
    }

    const displayTree = async () : Promise<void> => {

        // force to re-render binary-tree component
        if (treeForDisplay) { 
            setTreeForDisplay(undefined);
            await sleep(500);
        }
        
        const response : any = await api.buildJsonTree(expression);
        await setTreeForDisplay(response.data.result);
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
            <hr />
            {treeForDisplay && <BinaryTree initExpression={expression} jsonTree={treeForDisplay} />}
        </>
    );
};
