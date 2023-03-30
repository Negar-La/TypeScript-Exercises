var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btn = document.getElementById("btn");
var add = function (num1, num2) {
  return num1 + num2;
};
btn.addEventListener("click", function () {
  console.log(add(+num1.value, +num2.value));
});
