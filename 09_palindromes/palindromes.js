const palindromes = function (word) {
const cleanStr = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
return cleanStr === cleanStr.split('').reverse().join('');
};
palindromes("radar");


// Do not edit below this line
module.exports = palindromes;
