"use strict";

module.exports = class VSAE {
    /*validateSubExpression(_expression) {
        const vRegex = /\d+(\+|\-|\*|\/)\d+/;
        return vRegex.test(_expression);
    }*/

    validateNumber(_num) {
        const vRegex = /^(-?\d+\.\d+)$|^(-?\d+)$/;
        return vRegex.test(_num);
    }

    precedence(_operator) {
        if (['+', '-'].includes(_operator)) return 1;
        else if (['*', '/'].includes(_operator)) return 2;
        else return 0;
    }

    applyOpperand(_num1, _num2, _operator) {
        let num1 = this.validateNumber(_num1) ? Number(_num1) : undefined;
        let num2 = this.validateNumber(_num2) ? Number(_num2) : undefined;
        let operator = this.precedence(_operator);
        if(!num1 || !num2 || operator == 0) 
            return undefined;
        switch(_operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default: 
                return undefined;
        }
    }

    getResult(_expression) {
        let values = [];
        let ops = [];
        let i = 0;

        while(i < _expression.length) {
            if(_expression[i] == ' ') {
                i += 1;
                continue;
            } else if(_expression[i] == '(') {
                ops.push(_expression[i])
            } else if (this.validateNumber(_expression[i])) {
                let val = 0;
                while(i < _expression.length && this.validateNumber(_expression[i])) {
                    val = (val * 10) + Number(_expression[i]);
                    i += 1;
                }
                values.push(val);
            } else if (_expression[i] == ')') {
                while(ops.length != 0 && ops[ops.length - 1] != '(') {
                    let val2 = values.pop();
                    let val1 = valuues.pop();
                    let op = ops.pop();

                    values.push(this.applyOpperand(val1, val2, op));
                }
                ops.pop();
            } else {
                while(
                    _expression.length != 0 
                    && this.precedence(ops[ops.length-1] >= this.precedence(_expression.length))
                ) {
                   let val2 = values.pop();
                   let val1 = values.pop();
                   op = ops.pop();
                   
                   values.push(this.applyOpperand(val1, val2, op));
                }

                i += 1;

            }
        }

        while(ops.length != 0) {
            let val2 = value.pop();
            let val1 = values.pop();
            op = ops.pop();

            values.push(this.applyOpperand(val1, val2, op));
        }

        return values[values.length - 1];
    }

    getSolvingProcess(_expression) {
    }
}