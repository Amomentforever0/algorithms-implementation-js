const quick_sort = (array) => {
    if (array.length < 2) { return array; }

    const pivot = array[Math.floor(Math.random() * array.length)];
    const less = array.filter(i => i<pivot);
    const more = array.filter(i => i>pivot);

    return [...quick_sort(less), pivot, ...quick_sort(more)];
};


const array = [3, 2, 4, 5, 7, 9, 1, 6];

console.log(quick_sort(array));


