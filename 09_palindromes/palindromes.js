const palindromes = function (string) {
    // making the procesed string lowercase and removing unwanted numbers/special characters
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    // returning the backwards versio of the processed version of orignal string
    return (processedString.split("").reverse().join("") == processedString);
};

palindromes("Hello");

// Do not edit below this line
module.exports = palindromes;
