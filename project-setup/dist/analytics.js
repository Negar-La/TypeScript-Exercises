"use strict";
console.log('sending data...');
let loged;
const send = (data) => {
    console.log(data);
    loged = true;
    console.log(loged);
};
send("a msg");
