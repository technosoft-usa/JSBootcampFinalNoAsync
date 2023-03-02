function twoDArray(arr) {
    const total = arr.flat().reduce((acc, num) => acc += num, 0);
    return total;
}

module.exports = { twoDArray };