function isOperator(value) {
    return (['+', '-', '*', '%', '/'].some(item => (item === value)))
}

console.log(isOperator('+'))
console.log(!!'+')