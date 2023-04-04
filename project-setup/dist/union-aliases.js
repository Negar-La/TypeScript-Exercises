"use strict";
const combine = (input1, input2, resultConversion) => {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "to-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
const combinedNumbers = combine(22, 44, "to-number");
console.log(combinedNumbers, typeof combinedNumbers);
const combinedStringNumbers = combine("22", "44", "to-number");
console.log(combinedStringNumbers, typeof combinedStringNumbers);
const combinedNames = combine("abc", "def", "to-text");
console.log(combinedNames);
