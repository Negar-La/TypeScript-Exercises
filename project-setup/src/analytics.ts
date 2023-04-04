console.log('sending data...');
let loged;

const send = (data: string) =>{ // "noImplicitAny": false, doesn't need :string
 console.log(data);
 loged = true;
 console.log(loged);
 
}
//the func is defined before u call it, so no chance of knowing what u pass in there, can be used inside of the func.

send("a msg")

