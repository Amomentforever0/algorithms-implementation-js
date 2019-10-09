const longest_substring_without_repeating = (string) => {
    let maxLength = 0;
    let length = string.length;
    let maxSubstring = [];

    for(let j = 0; j<length; j++) {
        let k = j;
        while(k < length) {
            if (!maxSubstring.includes(string[k])) {
                maxSubstring.push(string[k]);
                maxLength = Math.max(maxLength, maxSubstring.length);
                k++;
            } else {
                maxSubstring = [];
                break;
            }
        }
    }

    return maxLength;
};

const minimal_meet_char_in_string = (string) => {
    let hashMap = {};

    for(let i = 0; i<string.length; i++) {
        if (!hashMap[string[i]]) {
            hashMap[string[i]] = 1;
        } else {
            hashMap[string[i]] = hashMap[string[i]] + 1;
        }
    }

    const valuesArray = Array.from(Object.values(hashMap));
    const keysArray = Array.from(Object.keys(hashMap));
    const entries = Array.from(Object.entries(hashMap));
    let max = Number.MIN_SAFE_INTEGER;
    let char = '';

    for(let i = 0; i<entries.length; i++) {
        if(entries[i][1] > max) {
            max = entries[i][1];
            char = entries[i][0];
        }
    }

    return [char, max];
};

function* flatify(array) {
    for(let i of array) {
        if(Array.isArray(i)) {
            yield* flatify(i);
        } else {
            yield i;
        }
    }
}


const sort_array_of_objects = (array, sortBy) => {
    const comparator = (a, b) =>  a[sortBy] > b[sortBy];
    const possibleKeys = array.map((i) => Object.keys(i));
    const keysFlatten = [...flatify(possibleKeys)];

    if (!keysFlatten.includes(sortBy)) {
        return array.sort();
    }

    return array.sort(comparator);
};

const clean = (args) => {
    return args.filter(i => !isNaN(Number(i)));
}

const sum = (...args) => {
    return clean(args).reduce((prev, next) => {
        if (!isNaN(Number(prev)) && !isNaN(Number(next))) return Number(prev)+Number(next);
    }, 0);
};

console.log(sum('s1', 3, 4, 6, '4s'));

console.log(longest_substring_without_repeating('abcabacade'));

console.log(minimal_meet_char_in_string('abcabacade'));

// longest substring without repeating - bruteforce
// char that meet minimal / maximal times in string

console.log(sort_array_of_objects([{age: 10}, {age: 5}], 'age'));