
const task = require("./task");

const n = "ПлотниковСергейИванович".length;


const a0 = {
    value: 1.234,
    error: 0.001
};

const a5 = {
    value: -2.345,
    error: n * 0.0001
};

const x = {
    value: 0.234 * n,
    error: 0.003
}

const c = {
    value: 0.987,
    error: n * 0.0001
}

const p = [
    a0, 
    { value: 0.387, error: 0 },
    { value: 1.4789, error: 0 },
    { value: 1.0098, error: 0 },
    { value: 1.222, error: 0 },  
    a5
];

let prevP = p[0];

const result = [];

result.push(prevP);

for (let i = 1; i < p.length; i++) {
    const currentP = task.sum(task.mult(prevP, c), p[i]);

    prevP = currentP;
    result.push(currentP);
}

console.log("Значение многочлена: ");

console.log(task.print(task.valueOfPolynom(p, x)));

console.log("Коэффициенты многочлена: ");

result.forEach(element => {
    console.log(task.print(element));
})
