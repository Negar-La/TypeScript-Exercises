// const person: {
//     name: string;
//     age: number
// } = {
const person = {
  name: "negar",
  age: 30,
};
console.log(person.name, person.age);

//-------------------------------------------------------------//

const product: {
  id: string;
  price: number;
  tags: string[];
  numbers: number[];
  data: (
    | string
    | number
    | (string | number)[]
    | {
        key: string;
      }
  )[];
  role: [number, string]; //its a tuple type!!!
  details: {
    title: string;
    description: string;
  };
} = {
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
for (const dat of product.tags) {
  console.log(dat.toLocaleUpperCase()); //we can use methods for strings
}
//a simple for loop in an array of numbers
for (const num of product.numbers) {
  console.log(
    num + typeof num + " converted to " + num.toString() + typeof num.toString()
  );
}

//-------------------------------------------------------------//

//working with Tuples
product.role.push("writer"); //push method works with tuple! strange!
console.log(product.role); //[2, 'author', 'writer']

// product.role = [-5, 10]; //error

// product.role[1] = 10;
console.log(product.role); //[2, 10, "writer"];
