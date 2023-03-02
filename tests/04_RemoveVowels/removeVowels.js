function removeVowels(str) {
    const vowels = 'AEIOUaeiou';
    let finalString = '';

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            finalString += str[i];
        }
    }
    return finalString;
}

module.exports = { removeVowels };
