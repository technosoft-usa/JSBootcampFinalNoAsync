function addItems(cart, itemsToAdd) {
    const finalArr = cart.concat(itemsToAdd);
    return finalArr;

}

module.exports = { addItems };