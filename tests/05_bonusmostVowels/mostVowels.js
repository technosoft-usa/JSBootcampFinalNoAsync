/* eslint-disable no-param-reassign */
// I left two solutions to this problem. The first way I think is simpler to understand but the second way is 
// more eloquent. Most would probably solve the second way.

function mostVowels(str) {
    str = str.toLowerCase();
    const vowels = 'aeiou';
    let currentWord = '';
    let numVowels = 0;
    let mostVowelsNum = 0;
    let wordToReturn = '';
    for (let i = 0; i < str.length; i++) {
      const letter = str[i].toLowerCase();
      currentWord += letter;
      if (vowels.includes(letter)) {
        // if you find a vowel increment numVowels
        numVowels++;
      } else if (letter === ' ' || i === str.length - 1) {
        // if you find a space or you are a the last letter in the string that signifies the end of a word
        // we need to reset numVowels and currentWord back to empty in prep for the new word
        // and also check if our numVowels is greater that our current mostVowelsNum.
        // if it is then set wordToReturn to currentWord
        if (numVowels > mostVowelsNum) {
          mostVowelsNum = numVowels;
          wordToReturn = currentWord;
        }
        numVowels = 0;
        currentWord = '';
      }
    }
    // after loop is over we should have the word with mostVowels and sometimes a space was added to the word so trim gets rid of that extra space for us.
    return wordToReturn.trim();
  }

// function mostVowels(str) {
//     const arrOfWords = str.split(' ')
//     const wordMap = {}
//     const vowels = 'aeiouAEIOU'
//     for (let i = 0; i < arrOfWords.length; i ++) {
//         // loop through each word in the array
//         const word = arrOfWords[i]
//         for (let j = 0; j < word.length; j ++) {{
//             // loop through each letter in the word
//             const letter = word[j]
//             if (vowels.includes(letter)) {
//                 // if you find a vowel add the word to the wordMap
//                 // the wordMap is an object that stores the word as a key and the number of vowels as the value
//                 // this is usually known as a map. It's a popular way to solve problems like this.
//                 if (!wordMap[word]) {
//                     wordMap[word] = 1
//                 } else {
//                     // if the word is already in the map, then just increment the value that is storing the number of vowels.
//                     wordMap[word] ++
//                 }
//             }
//         }}
       
//     }
    
//     const keys = Object.keys(wordMap)
//     let mostVowels = keys[0]
//     for(let i  = 1;  i < keys.length; i ++) {
//         // loop through your map and find the word with with most vowels.
//         // set the currentWord to the mostVowels if it has more vowels the current mostVowels
//         const currentWord = keys[i]
//         if (wordMap[currentWord] > wordMap[mostVowels]) {
//             mostVowels = currentWord
//         }
//     }
//     // return the word with mostVowels
//     return mostVowels.toLowerCase()
// }

module.exports = { mostVowels };
