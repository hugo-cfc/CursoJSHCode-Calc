var fatorial = function fac(n) {
    console.log(n)
    return n < 2 ? 1 : n * fac(n-1)
};

console.log(fatorial(3));