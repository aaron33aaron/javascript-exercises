const palindromes = function (string) {
    
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (processedString.split("").reverse().join("") == processedString);
};

palindromes("Hello");

// Do not edit below this line
module.exports = palindromes;
