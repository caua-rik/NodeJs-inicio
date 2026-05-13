function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function calculoM(a, b) {
    return (a + b) * a + (a - b) / b;
}

module.exports = {
    soma,
    subtracao,
    multi,
    divisao,
    calculoM
}