//JS uses dynamic types (resolved at runtime) TS uses static types (set during development)
var add = function (n1, n2, print, phrase) {
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //   throw new Error("Incorrect input!!!");
    // }
    var math = n1 + n2;
    if (print) {
        console.log(phrase + math);
    }
    return math;
};
var number1 = 5;
var number2 = 2.7;
var showResult = true;
var resultPhrase = 'Result is ';
add(number1, number2, showResult, resultPhrase);
