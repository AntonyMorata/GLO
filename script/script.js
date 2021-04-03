'use strict';

let num = 266219,
    arrNum = String(num).split(''),
    summ = arrNum[0];

for (let i=1; i<=arrNum.length-1; i++) {
    summ *= Number(arrNum[i]);
}

console.log(summ);
summ = summ**3;
console.log(String(summ).substr(0, 2));
