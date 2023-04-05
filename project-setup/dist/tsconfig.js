"use strict";
const btn = document.querySelector("button");
if (btn) {
    btn.addEventListener("click", () => {
        console.log("clicked");
    });
}
const add = (n1, n2) => {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
};
const sendRequest1 = (data, cb) => {
    return cb({ data: 'Hi there!' + data });
};
sendRequest1('Send this!', (response) => {
    console.log(response);
    return true;
});
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
const func = (msg, code) => {
    throw { message: msg, errorCode: code };
};
func("An error occured", 500);
