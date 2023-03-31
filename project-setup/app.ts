//union types

const combine = (input1: number | string, input2: number | string) => {
  let result;

  //runtime type check
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedNumbers = combine(22, 44);
console.log(combinedNumbers);

const combinedNames = combine("abc", "def");
console.log(combinedNames);
