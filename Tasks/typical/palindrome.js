const palindrome = (str) => {
    for(let i = 0; i<str.length/2; i++) {
        if (str[i] !== str[str.length-i-1]) {
            return false;
        }
    }

    return true;
};

const palindromeWithReverse = (str) => {
    return str.split('').reverse().join('') === str;
};

console.log(palindrome('alala'));
console.log(palindromeWithReverse('alala'));