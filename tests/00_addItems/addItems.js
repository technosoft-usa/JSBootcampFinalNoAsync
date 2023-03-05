function addItems(cart, itemsToAdd) {
    // const finalArr = cart.concat(itemsToAdd);
    // return finalArr;
    // nice job! checnout spread syntax also for another way to solve this. 
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    return [...cart, ...itemsToAdd]

}

module.exports = { addItems };