"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;
    if (discriminant < 0) {
    } else if (discriminant === 0) {
        let rootFirst = -b / (2 * a);
            arr.push(rootFirst);
    } else if (discriminant > 0) {
        let rootFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
            arr.push(rootFirst);
        let rootSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
            arr.push(rootSecond);
  return arr;
}
console.log(solveEquation(1, -4, -5));

  // .............................
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  Number.isNaN(calculateTotalMortgage);
    let monthlyPercent = percent / 100 / 12;
    let loanBody = amount - contribution;
    let payment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths) - 1)));
    let totalAmount = payment * 16;
    totalAmount.toFixed(2);
}
console.log(calculateTotalMortgage (10, 0, 50000, 12));
