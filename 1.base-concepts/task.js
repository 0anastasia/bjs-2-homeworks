"use strict";
function solveEquation (a, b, c) {
    let arr = [];
    let discriminant = b**2 - 4 * a * c;
    if (discriminant === 0) {
        let rootFirst = -b / (2 * a);
            arr.push(rootFirst);
    } else if (discriminant > 0) {
        let rootFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
            arr.push(rootFirst);
        let rootSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
            arr.push(rootSecond);
    } 
    return arr;
}

solveEquation(1, -4, -5);


// .............................

function calculateTotalMortgage (percent, contribution, amount, countMonths) {
    if (isNaN(percent)) {
        return false;
    }
    if(isNaN(contribution)) {
        return false;
    }
    if(isNaN(amount)) {
        return false;
    }
    if(isNaN(countMonths)) {
        return false;
    }


    let P = percent / 100 / 12;
    let S = amount - contribution;
    let M = S * (P + (P / (((1 + P)**countMonths) - 1)));
    let totalAmount = M * countMonths;
    
    return Number(totalAmount.toFixed(2));
}

console.log(calculateTotalMortgage (10, 0, 50000, 12));
