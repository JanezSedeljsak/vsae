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
        let num1 = this.validateNumber(_num1);
        let num2 = this.validateNumber(_num2);
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
        i = 0;

        while(i < _expression.length) {
            if(_expression[i] == ' ') {
                i += 1;
                continue;
            }
        }
    }

    getSolvingProcess(_expression) {
    }
}