
module.exports.sumError = (a, b) => {
    return a.error + b.error;
}

module.exports.sum = (a, b) => {
    return {
        value: a.value + b.value,
        error: this.sumError(a, b)
    };
}

module.exports.subError = (a, b) => {
    return a.error + b.error;
}

module.exports.sub = (a, b) => {
    return {
        value: a.value - b.value,
        error: this.subError(a, b)
    };
}

module.exports.multError = (a, b) => {
    return Math.abs(a.value) * b.error + Math.abs(b.value) * a.error;
}

module.exports.mult = (a, b) => {
    return {
        value: a.value * b.value,
        error: this.multError(a, b)
    };
}

module.exports.divError = (a, b) => {
    return (Math.abs(a.value) * b.error + Math.abs(b.value) * a.error) / Math.pow(a, 2);
}

module.exports.div = (a, b) => {
    return {
        value: a.value / b.value,
        error: this.multError(a, b)
    };
}

module.exports.floor = (value, rounding = 1000) => Math.floor(value * rounding) / rounding;

module.exports.print = (a) => {
    return a.value + " +- " + a.error;    
}

module.exports.pow = (x, y) => {
    if (y === 0) {
        return {
            value: 1,
            error: 0
        }
    } else if (y === 1) {
        return {...x};
    }
    let value = {...x};
    for (let i = 2; i <= y; i++) {
        value = this.mult(value, x);
    }
    return value;
}

module.exports.valueOfPolynom = (p, x) => {
    const maxPow = p.length - 1;

    let result = {...x};
    for (let i = 0; i < p.length; i++) {
        result = this.mult(result, this.pow(x, maxPow - i));
    }

    return result;
}