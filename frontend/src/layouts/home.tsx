import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdbreact";

export default () => {
    const [expression, setExpression] = useState('');

    function validateExpression(str: string): boolean {
        return /^\w(?:\s[+*]\s\w)+$/.test(str);
    }

    return (
        <>
            <MDBInput
                value={expression}
                label="Vnesi izraz"
                onChange={(e: React.FormEvent<HTMLInputElement>) => setExpression(e.currentTarget.value)}
            />
            <MDBBtn disabled={!validateExpression(expression)}>Prikaži binarno drevo</MDBBtn>
            <MDBBtn color="primary" disabled={!validateExpression(expression)}>Shunting-yard algoritem</MDBBtn>
        </>
    );
};
