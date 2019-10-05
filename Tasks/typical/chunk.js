const chunky = (array, chunkSize) => {
    const chunk = [];

    for(let i = 0; i<array.length; i++) {
        let last = chunk[chunk.length-1];

        if (!last || last.length === chunkSize) {
            chunk.push([array[i]]);
        } else {
            last.push(array[i]);
        }
    }

    return chunk;
};

const chunky2 = (array, chunkSize) => {
    const length = array.length;
    if (!array.length) return [];
    const chunk = [];
    
    for(let i = 0; i<length; i+=chunkSize) {
        chunk.push(array.slice(i, i+chunkSize));
    }

    return chunk;
};

console.log(chunky([1, 2, 3, 4, 5, 6], 5));
console.log(chunky2([1, 2, 3, 4, 5, 6], 5));
