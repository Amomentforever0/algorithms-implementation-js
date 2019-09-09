const FibonacciRecursive = (n) => {
    debugger;
    if (n === 2 || n === 1) {
        return 1;
    } else {
        return FibonacciRecursive(n-1) + FibonacciRecursive(n-2);
    }
};

const FibonacciIterative = (n) => {
    let arr = [0, 1];

    for(let i = 2; i<n+1; i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }

    return arr[n];
};

console.log(FibonacciRecursive(8))
console.log(FibonacciIterative(8));