// const person: {
//     name: string;
//     age: number
// } = {
var person = {
    name: "negar",
    age: 30,
};
var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    numbers: [1, 2, 3],
    data: [1, 2, "new", [3, "expensive"], { key: "On Sale" }],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!",
    },
};
console.log(person.name, person.age);
console.log(product.details.title);
console.log(product.data[1]);
//a simple for loop in an array of strings
for (var _i = 0, _a = product.tags; _i < _a.length; _i++) {
    var dat = _a[_i];
    console.log(dat.toLocaleUpperCase());
}
for (var _b = 0, _c = product.numbers; _b < _c.length; _b++) {
    var num = _c[_b];
    console.log(num.toString());
}
