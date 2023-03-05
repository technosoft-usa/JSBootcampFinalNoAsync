function twoDArray(arr) {
    // great job!
    const total = arr.flat().reduce((acc, num) => acc += num, 0);
    return total;
}

module.exports = { twoDArray };