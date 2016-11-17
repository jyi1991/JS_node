var mylib = require("./mathlib.js");
var math = new mylib();
    num1 = 2,
    num2 = 200,
    num = 30;

  console.log(`num1 + num2 is ${math.add(num1,num2)}.`)
  console.log(`num1 * num2 is ${math.multiply(num1,num2)}.`)
  console.log(`num ^ 2 is ${math.square(num)}.`)
  console.log(`random number between num1 and num2 is ${math.random(num1,num2)}`)
