const btn = document.querySelector("button")!; //either 1-using ! mark. "strictNullChecks": false, need no !
if (btn) {  //or 2-check if btn is truthy # null
  btn.addEventListener("click", () => {
    // let user = 'max';   //  "noUnusedLocals": true,    'user' is declared in the func but it's value is never read cuz there is no other place u need it.
    console.log("clicked");
  });
}


const add = (n1:number, n2: number) => { //  "noImplicitReturns": true, Not all code paths return a value.
  if(n1 + n2 > 0) {
    return n1 + n2;
  }
  return; //add this return to solve

}

const sendRequest1 = (data: string, cb: (response: any) => void) => {
  // ... sending a request with "data"
  return cb({data: 'Hi there!' + data});
}
 
sendRequest1('Send this!', (response) => { 
  console.log(response);
  return true;
 });

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
