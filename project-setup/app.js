var combine = function (input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedNumbers = combine(22, 44);
console.log(combinedNumbers);
var combinedNames = combine("abc", "def");
console.log(combinedNames);
