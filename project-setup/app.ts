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
//this func never produces a value. It crashes the script. It never returns anything.

const func = (msg: string, code: number) => {
    throw {message: msg, errorCode: code}
    // while(true) { }  //an infinite loop that never returns!
}

func("An error occured", 500)