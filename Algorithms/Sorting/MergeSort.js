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

    return merge(mergeSort(left), mergeSort(right));  
};

const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
};

console.log(mergeSort(samples.unsortedArray));