/*
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
*/

function detectWord(str) {
    return [...str].filter(c => c.toLowerCase() === c).join('');
}


const word = detectWord("UcUNFYGaFYFYGtNUH");
console.log(word);