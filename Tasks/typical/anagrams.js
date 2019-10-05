const isAnagram = (str1, str2) => {
    return str1.toLocaleLowerCase().split('').sort().join() === str2.toLocaleLowerCase().split('').sort().join();
};

const isAnagramHashMap = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    const charsMapGenerator = (string) => {
        let charMap = {};

        for(let char of string) {
            if (!charMap[char]) {
                charMap[char] = charMap[char] + 1 | 1;
            }
        }

        return charMap;
    };

    const charMapA = charsMapGenerator(str1);
    const charMapB = charsMapGenerator(str2);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    for(let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram('string', 'gnirts'));
console.log(isAnagramHashMap('string', 'gnirts'));