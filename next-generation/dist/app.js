"use strict";
const userName = 'max';
// userName = 'dalle';
let number = 31;
number = 32;
//var only knows 2 scopes: global scope & function scope
// if (number > 50) {
//     let isOld = true;
// }
// console.log(isOld);
//let & const introduced a new concept called block scope. Block surrounded with {}
//-------------------------------------------//Array functions
const add = (n1, n2 = 55) => n1 + n2; // assign a default value for the "last parameter" and call func with one argument
// console.log(add(2, 5));
const printOut = res => console.log(res);
printOut(add(2));
const btn = document.querySelector('button');
if (btn)
    btn.addEventListener('click', event => console.log(event));
//-------------------------------------------//Spread Operator: to extract all values of an array.
const hobbies = ['sports', 'cooking', '111'];
const active = ['hiking', ...hobbies]; //a comma separated list of values
// active.push(hobbies[0], hobbies[1]);
active.push(...hobbies);
console.log(active);
//also works with objects
const person = { firstName: 'neg', age: 32 };
const person2 = person; //copying the pointer at this person object in memory
const person3 = Object.assign({}, person); //It creates a real copy of the original obj = a new object
console.log(person2, person3);
//-------------------------------------------//Rest Operator: 
const addition = (...items) => {
    return items.reduce((currResult, currValue) => {
        return currResult + currValue;
    }, 0);
};
const result = addition(2, 3, 4, 7);
console.log(result);
//-------------------------------------------//Destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies; //rest operator stores remaining in a new array
console.log(hobbies, hobby1, hobby2, remainingHobbies);
const { firstName: lastName, age } = person; //set a new name for firstName = overwrite firstName to be userName
console.log(lastName, age, person);
