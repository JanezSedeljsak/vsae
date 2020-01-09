"use strict";

const VSAE = require('./../index');

let vsae = new VSAE();
console.log(vsae.getSolvingProcess("(5+1)*(5-(1*2)+(1-2)*9)"));