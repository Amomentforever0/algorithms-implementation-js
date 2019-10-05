const maxChar = (str) => {
    let hashmap = {};
    let max = 0;
    let strI = '';

    for(let i = 0; i<str.length; i++) {
        if (!hashmap[str[i]]) {
            hashmap[str[i]] = 1;
        } else {
            hashmap[str[i]] = hashmap[str[i]]+1;
        }

        if(hashmap[str[i]] > max) {
            max = hashmap[str[i]];
            strI = str[i];
        }
    }

    return strI;
};

const maxCharMapOf = (str) => {
    let hashmap = {};
    let max = 0;
    let strI = '';

    for(let char of str) {
        if (!hashmap[char]) {
            hashmap[char] = 1;
        } else {
            hashmap[char] = hashmap[char]+1;
        }

        if(hashmap[char] > max) {
            max = hashmap[char];
            strI = char;
        }
    }

    return strI;
};

console.log(maxChar('strstrsss'));
console.log(maxCharMapOf('strstrsss'));