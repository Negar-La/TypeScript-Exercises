"use strict";
const combine = (input1, // input1: umber | string,  union type
input2, //   input2: umber | string,  union type
resultConversion //a Literal type combined with union type
) => {
    let result;
    if (
    //runtime type check
    (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "to-number") {
        result = +input1 + +input2; //add + to convert string to number so u can add "22" and "44" = 66
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'to-number') {
    //     return +result;
    // } else {
    //   return result.toString();
    // }
};
const combinedNumbers = combine(22, 44, "to-number");
console.log(combinedNumbers, typeof combinedNumbers);
const combinedStringNumbers = combine("22", "44", "to-number");
console.log(combinedStringNumbers, typeof combinedStringNumbers);
const combinedNames = combine("abc", "def", "to-text");
console.log(combinedNames);
