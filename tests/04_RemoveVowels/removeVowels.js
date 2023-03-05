// Nice work! Could use combo of split, filter, join to solve this and make a one liner but your way works great, too. Just giving another option. Only saying because I saw you used method chaining in the another problem and thought you might appreciate.
function removeVowels(str) {
    const vowels = 'AEIOUaeiou';
    return str.split('').filter(letter => !vowels.includes(letter)).join('')
    // const vowels = 'AEIOUaeiou';
    // let finalString = '';

    // for (let i = 0; i < str.length; i++) {
    //     if (!vowels.includes(str[i])) {
    //         finalString += str[i];
    //     }
    // }
    // return finalString;
}

module.exports = { removeVowels };
