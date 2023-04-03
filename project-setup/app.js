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
var func = function (msg, code) {
    throw { message: msg, errorCode: code };
};
func("An error occured", 500);
