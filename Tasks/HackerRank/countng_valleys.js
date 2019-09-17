const countingValleys = (n, s) => {
    const array = [...s];
    const length = n;
    let position = 0;
    let attitude = 0;

    for(let char of array) {
        if (char === 'U') {
            attitude++;
            if(attitude === 0) {
                position++;
            }
        } else {
            attitude--;
        }
    }

    return position;
};

const string = 'UDDDUDUU';
const length = string.length;

console.log(countingValleys(length, string));
