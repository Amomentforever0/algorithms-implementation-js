const firstOccuring = (array) => {

    if (!array) {
        return null;
    }

    const len = array.length;
    let answer = null;

    for(let i = 0; i<len; i++) {
        const current = array[i];

        for(let j = ++i; j<len; j++) {
            if(current === array[j]) {
                return [array[j], j];             
            }        
        }
    }

    return answer;
};

console.log(firstOccuring([1, 2, 3, 3, 4, 5, 2, 3]));

const firstOccuringForEach = (array) => {
    const len = array.length;

    let result = null;

    const BreakException = {};

    array.forEach((i, idx) => {
        array.forEach((j, innerIdx) => {
            if (i === j && idx !== innerIdx) {
                BreakException[result] = j;
                throw BreakException[result];
            }
        });
    });

    return result;
};

const HashTable = require('../myAlgorithms/HashTable');

const firstOccuringUsingHashTable = (array) => {
    const len = array.length;
    const hashtable = {};

    for(let i = 0; i<len; i++) {
        if(hashtable[array[i]]) {
            return array[i];
        } else {
            hashtable[array[i]] = array[i];
        }
    }

    return null;
}

console.log(firstOccuringUsingHashTable([2, 3, 3, 4, 5, 2, 3]));
