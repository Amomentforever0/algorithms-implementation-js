const selection_sort = (array) => {
    const findMin = (arr) => {
        let min = arr[0];
        let minIndex = 0;

        for(let i = 0; i<arr.length; i++) {
            if(arr[i] < min && arr[i]) {
                min = arr[i];
                minIndex = i;
            }
        }

        return minIndex;
    };

    const selectionSort = (arr) => {
        const sorted = [];
        const length = arr.length;

        for(let i = 0; i<length; i++) {
            let min = findMin(arr);
            sorted.push(arr.splice(min, 1)[0]);
        }

        return sorted;
    };

    return selectionSort(array);
};

const array = [3, 2, 4, 5, 7, 9, 1, 6];

console.log(selection_sort(array));