//unKnown Type (its better than 'any')
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") { //extra type check here
  userName = userInput;
}


//-------------------------------------------------------------//

//never type

const func = (msg: string, code: number) => {
    throw {message: msg, errorCode: code}
}

func("An error occured", 500)