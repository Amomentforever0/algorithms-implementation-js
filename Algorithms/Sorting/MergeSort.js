const samples = require('../../utils/samples');

const mergeSort = (array) => {
    const length = array.length;

    if (length === 1) {
        return array;
    }

    const middle = Math.floor(length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    console.log('left: ', left);
    console.log('right: ', right);

    return mergeSort(mergeSort(left), mergeSort(right));  
};

console.log(mergeSort(samples.unsortedArray));