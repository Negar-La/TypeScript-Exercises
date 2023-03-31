// const person: {
//     name: string;
//     age: number
// } = {
var person = {
    name: "negar",
    age: 30,
};
console.log(person.name, person.age);
//-------------------------------------------------------------//
var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    numbers: [1, 2, 3],
    data: [1, 2, "new", [3, "expensive"], { key: "On Sale" }],
    role: [2, "author"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!",
    },
};
console.log(product.details.title);
console.log(product.data[2]);
//a simple for loop in an array of strings
for (var _i = 0, _a = product.tags; _i < _a.length; _i++) {
    var dat = _a[_i];
    console.log(dat.toLocaleUpperCase()); //we can use methods for strings
}
//a simple for loop in an array of numbers
for (var _b = 0, _c = product.numbers; _b < _c.length; _b++) {
    var num = _c[_b];
    console.log(num + typeof num + " converted to " + num.toString() + typeof num.toString());
}
//-------------------------------------------------------------//
//working with Tuples
product.role.push("writer"); //push method works with tuple! strange!
console.log(product.role); //[2, 'author', 'writer']
// product.role = [-5, 10]; //error
// product.role[1] = 10;
console.log(product.role); //[2, 10, "writer"];
