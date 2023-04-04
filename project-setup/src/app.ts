const btn = document.querySelector("button")!; //either 1-using ! mark. "strictNullChecks": false, need no !
if (btn) {  //or 2-check if btn is truthy # null
  btn.addEventListener("click", () => {
    console.log("clicked");
  });
}

//unKnown Type (its better than 'any')
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  //extra type check here
  userName = userInput;
}

//-------------------------------------------------------------//

//never type
//this func never produces a value. It crashes the script. It never returns anything.

const func = (msg: string, code: number) => {
  throw { message: msg, errorCode: code };
  // while(true) { }  //an infinite loop that never returns!
};

func("An error occured", 500);

//in tsconfig.json, changing target from es5 to es6 so JS will support let and const (instead of let and var)
