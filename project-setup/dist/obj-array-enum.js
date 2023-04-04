"use strict";
const person = {
    name: "negar",
    age: 30,
};
console.log(person.name, person.age);
const product = {
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
for (const dat of product.tags) {
    console.log(dat.toLocaleUpperCase());
}
for (const num of product.numbers) {
    console.log(num + typeof num + " converted to " + num.toString() + typeof num.toString());
}
product.role.push("writer");
console.log(product.role);
console.log(product.role);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 6] = "ADMIN";
    Role[Role["READ_ONly"] = 100] = "READ_ONly";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
})(Role || (Role = {}));
const object = {
    name: "negar",
    age: 30,
    role: Role.ADMIN,
};
if (object.role === Role.ADMIN) {
    console.log("is admin");
}
