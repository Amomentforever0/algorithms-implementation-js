let counter = 0;

const inception = () => {
    if (counter > 3) {
        return { done: 'true', counter };
    }

    counter++;
    return inception();
};

console.log(inception());