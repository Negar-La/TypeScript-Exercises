"use strict";
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    console.log('clicked');
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
