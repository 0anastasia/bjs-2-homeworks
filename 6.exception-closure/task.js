let newError = new Error('Невалидное значение');

function parseCount(parseNumber) {
    if (Number.isNaN(Number.parseFloat(parseNumber))) {
        throw newError;
    } else {
    return Number.parseFloat(parseNumber); 
    }
}

function validateCount(parse) {
    try {
        return parseCount(parse);
    } catch {
        return newError;
    }
}
parseCount(6);
validateCount('hj');

// .....................

newError = new Error('Треугольник не существует');
let a = 13;
let b = 14;
let c = 15;
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw newError;
        }
    }

    get perimeter () {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }
    get area() {
        let p = perimeter / 2;
        return Number(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3));
    }

}


function getTriangle(a, b, c){
    try { 
        new Triangle(a, b, c);
    }
    catch {
       return { 
            get perimeter () {
                return newError;
            },
            get area() {
                return newError;
            }
        }
    }
}
