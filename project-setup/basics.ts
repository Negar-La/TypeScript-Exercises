//JS uses dynamic types (resolved at runtime) TS uses static types (set during development)
const add1 = (n1: number, n2: number, print: boolean, phrase: string) => {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input!!!");
  // }

const math = n1 + n2
  if (print) {
    console.log(phrase + math);
  }

    return math;
};

const number1 = 5;
const number2 = 2.7;
const showResult = true;
const resultPhrase = 'Result is '

 add1(number1, number2, showResult, resultPhrase);

