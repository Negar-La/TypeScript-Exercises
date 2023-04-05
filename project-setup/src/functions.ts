const add2 = (num1: number, num2: number) => {
  return num1 + num2;
};

// const result = add(5, 5);
// console.log(result);

//void really just means this function doesn't have a return statement.It doesn't return anything.
//technically this func returns UNDEFINED! which is a real value.
const phrase = (num: number): void => {
  console.log("Result is " + num);
};


const phrase2 = (num: number): undefined => {
    console.log("Result is " + num);
    return; //you have a return statement where you just don't return a value.
  };


  const phrase3 = (num: number): void => {
    console.log("Result is " + num);
    return;     //you can use void with this return statement as well!
  };

// console.log(phrase(add(4, 2))); //undefined (in JS)
// console.log(phrase2(add(4, 2)));


let x: (a: number, b: number) => number;
x = add2;
// x = 6;
// x = phrase; //misMatch
console.log(x(1,1));

//-------------------------------------------------------------//

//Function types and callbacks: define the parameters and return type of a function.

const addAndCall = (n1: number, n2: number, cb: (x: number) => void) => {
    const res = n1 + n2;
    cb(res)
}

 addAndCall(22, 22, (number) => { 
    console.log(number);
    
});

//callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
const sendRequest = (data: string, cb: (response: any) => void) => {
    // ... sending a request with "data"
    return cb({data: 'Hi there!' + data});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });