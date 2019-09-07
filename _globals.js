module.exports.logger = function logger(message, value) {
    console.log(message, ': ', value);
};

module.exports.endLine = function() {
    console.log('\n', '-------------------', '\n');
};