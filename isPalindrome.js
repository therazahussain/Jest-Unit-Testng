const reverseWord = require("./reverseString")

const palindrome = (word) => {
    var reverseString = reverseWord(word)
    return word.toLowerCase() === reverseString.toLowerCase();
}

module.exports = palindrome
