const capitalize = (str) => {
    return str.split(' ').map(str=>str[0].toUpperCase() + str.slice(1));
};

console.log(capitalize('hello my name is Shakhrat'));