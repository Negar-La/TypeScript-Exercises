"use strict";
const add2 = (num1, num2) => {
    return num1 + num2;
};
const phrase = (num) => {
    console.log("Result is " + num);
};
const phrase2 = (num) => {
    console.log("Result is " + num);
    return;
};
const phrase3 = (num) => {
    console.log("Result is " + num);
    return;
};
let x;
x = add2;
console.log(x(1, 1));
const addAndCall = (n1, n2, cb) => {
    const res = n1 + n2;
    cb(res);
};
addAndCall(22, 22, (number) => {
    console.log(number);
});
const sendRequest = (data, cb) => {
    return cb({ data: 'Hi there!' });
};
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
