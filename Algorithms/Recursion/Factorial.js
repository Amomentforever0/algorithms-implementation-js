const FactorialRecursive = (n) => {
    debugger;
    if (n === 1) {
        return 1;
    } else {
        return n * FactorialRecursive(n-1);
    }
};

const FactorialIterative = (n) => {
    let result = 1;

    if (n === 1) {
        return result;
    } else {
        while(n>1) {
            result*=n--;
        }
    }

    return result;
};

console.log(FactorialRecursive(5));
console.log(FactorialIterative(5));
