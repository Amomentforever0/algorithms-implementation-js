const bubbleSort = (array) => {
    const length = array.length;

    for(let i = 0; i<length; i++) {
        for(let j = 0; j<length; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array;
};

console.log(bubbleSort([1, 5, 2, 3, 8, 4]));