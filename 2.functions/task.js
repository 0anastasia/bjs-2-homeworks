function getArrayParams(...arr) {
    let min = 5;
    let max = 6;
    let sum = 0;

    max = Math.max(...arr);
    min = Math.min(...arr);

    // sum = getArrayParams(...arr).reduce((acc, cur) => acc + cur, 0);
    for (let i = 0; i < arguments.length; i++){
        if (arguments.length === 0) {
            return 0;
        }
        sum += arguments[i];
    }

    let avg = sum / arguments.length;
    return { min: min, max: max, avg: Number(Math.round(avg)) };
  }
  getArrayParams(5, 6, 47, 54, 32, 71, 28, 82, 176);
 
//   ...................................

  function summElementsWorker(...arr) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        if (arguments.length === 0) {
            return 0;
        }
        sum += arguments[i];
    }
    return sum;
  }
  console.log(summElementsWorker(4, 2, 3, 1));
 
//   .............................

  function differenceMaxMinWorker(...arr) {
    let min = 0;
    let max = 0;

    if (arguments.length === 0) {
            return 0;
    }

    max = Math.max(...arr);
    min = Math.min(...arr);
    difference = max - min; 
    return difference;
  }
  console.log(differenceMaxMinWorker(4, 2, 3, 1));
 
//   ......................................

  function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arguments.length; i++){
        if (arguments.length === 0) {
            return 0;
        }
        if (i % 2 === 0) {
            sumEvenElement++;
        } else {
            sumOddElement++;
        }
    }
    return sumEvenElement - sumOddElement;
  }
  console.log(differenceEvenOddWorker(4, 2, 3, 1));
  
// ...............................................

  function averageEvenElementsWorker(...arr) {
    let sumEvenElement  = 0;
    let countEvenElement = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        if (arguments.length === 0) {
            return 0;
        }
        if (i % 2 === 0) {
            sumEvenElement += i;
            countEvenElement++;
        }
    }
    return sumEvenElement / countEvenElement;
  }
  console.log(averageEvenElementsWorker(4, 2, 3, 1));
  
// .........................................
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
  
function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    let arr2 = [...arr];
    for (let i = 0; i < arrOfArr.length; i++) {
        const result = func(...i);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    return maxWorkerResult;
}
console.log(makeWork(arr, summElementsWorker));
