const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return "ERROR";
    if (firstNum < 0 || secondNum < 0) {return "ERROR"}

    else if (firstNum > secondNum) {
        const temp = firstNum;
        firstNum = secondNum;
        secondNum = temp;
    }

        while (firstNum < secondNum)
        {
            firstNum++;

            sum += firstNum;
        }

        return sum + 1;
};

// Do not edit below this line
module.exports = sumAll;
