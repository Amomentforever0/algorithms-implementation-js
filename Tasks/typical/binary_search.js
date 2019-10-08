const binary_search = (array, item) => {
    let left = 0;
    let right = array.length-1;

    while(left<=right) {
        let mid = Math.floor((left+right)/2);

        if(item === array[mid]) {
            return mid;
        }

        if(item > array[mid]) {
            left = mid+1;
        }

        if (item < array[mid]) {
            right = mid-1;
        }
    }

    return null;
};

const array = [3, 2, 4, 5, 7, 9, 1, 6];

console.log(binary_search(array.sort(), 7));


[1, 2, 3, 4, 5, 6, 7, 8]