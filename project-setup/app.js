//unKnown Type (its better than 'any')
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") { //extra type check here
    userName = userInput;
}
//-------------------------------------------------------------//
//never type
//this func never produces a value. It crashes the script. It never returns anything.
var func = function (msg, code) {
    throw { message: msg, errorCode: code };
    // while(true) { }
};
func("An error occured", 500);
