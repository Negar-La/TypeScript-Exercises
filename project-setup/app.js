"use strict";
//unKnown Type (its better than 'any')
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") { //extra type check here
    userName = userInput;
}
//-------------------------------------------------------------//
//never type
//this func never produces a value. It crashes the script. It never returns anything.
const func = (msg, code) => {
    throw { message: msg, errorCode: code };
    // while(true) { }  //an infinite loop that never returns!
};
func("An error occured", 500);