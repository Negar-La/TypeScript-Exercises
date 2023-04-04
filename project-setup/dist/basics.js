"use strict";
const add1 = (n1, n2, print, phrase) => {
    const math = n1 + n2;
    if (print) {
        console.log(phrase + math);
    }
    return math;
};
const number1 = 5;
const number2 = 2.7;
const showResult = true;
const resultPhrase = 'Result is ';
add1(number1, number2, showResult, resultPhrase);
