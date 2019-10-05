const reverseInt = (n) => {
    return parseInt(String(n).split('').reverse().join(''))*Math.sign(n);
};

console.log(reverseInt(-6787));