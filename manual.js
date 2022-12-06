function convertion(a, b) {
    return a / b;
}

function testConvertion() {
    const result  = convertion(155, 100);
    const expected = 1.55


console.assert(
    result === expected, `The result ${result} doesn't match the expected value ${expected}.`
)
}

testConvertion();