// const person: {
//     name: string;
//     age: number
// } = {
const person = {
  name: "negar",
  age: 30,
};

const product = {
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
for (const dat of product.tags) {
  console.log(dat.toLocaleUpperCase());
}

for (const num of product.numbers) {
  console.log(num.toString());
}
