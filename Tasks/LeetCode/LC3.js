const longestSubstringWithoutRepeatingCharacters = (string) => {
    const length = string.length;
    let windowStart = 0;
    let maximum = 0;
    let hash = {};

    for(let i = 0; i<length; i++) {
        if (hash[string[i]] >= windowStart) {
            windowStart = hash[string[i]] + 1;
        }

        hash[string[i]] = i;
        maximum = Math.max(maximum, i - windowStart + 1);
    }

    return maximum;
};

console.log(longestSubstringWithoutRepeatingCharacters('abcabc'));
