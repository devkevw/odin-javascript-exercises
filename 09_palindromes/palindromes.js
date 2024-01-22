const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;


const palindromes = function (word) {
    let words = word.split(punctuationRegex);
    let cleaned = words.join('').toLowerCase();
    console.log(cleaned)
    let reverse = cleaned.split('').reverse().join("");
    return reverse == cleaned;
};

// Do not edit below this line
module.exports = palindromes;
