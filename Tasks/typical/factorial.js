const factorial = (n) => {
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    }

    return n*factorial(n-1);
};

console.log(factorial(5));


const recursive = (n) => {
    console.log(n);
    if (n === 1) {
        return null;
    }
    n--;
    return recursive(n);
};

console.log(recursive(5));


const arraySum = (array) => {
    if (array.length <= 0) {
        return 0;
    }
    const ar = array.splice(1);
    return array[0] + arraySum(ar);
};

console.log(arraySum([1, 2, 3]))