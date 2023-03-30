const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const btn = document.getElementById("btn")! as HTMLButtonElement;

const add = (num1: number, num2: number) => {
  return num1 + num2;
};

btn.addEventListener("click", () => {
  console.log(add(+num1.value, +num2.value));
});
