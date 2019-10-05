// extending String.prototype by adding reverse functionality
if (!String.prototype.reverse) {
    Object.defineProperty(String.prototype, 'reverse', {
        value: function() {
            return this.split('').reverse().join('');
        }
    })
}

const reverseString = (str) => {
    return str.reverse();
}

const reverseStringNaturally = (str) => {
    return str.split('').reverse().join('');
}

const reverseStringLoop = (str) => {
    let reversed = '';

    for(let i = str.length-1; i>=0; i--) {
        reversed+=String(str[i]);
    }

    return reversed;
}

const reverseStringForOf = (str) => {
    let reversed = '';

    for (let i of str) {
        reversed = i+reversed;
    }

    return reversed;
}

const reverseStringReduce = (str) => {
    return str.split('').reduce((reversed, i) => {
        return i+reversed;
    }, '');
}


console.log(reverseString('string'));
console.log(reverseStringNaturally('string'));
console.log(reverseStringLoop('string'));
console.log(reverseStringForOf('string'));
console.log(reverseStringReduce('string'));
