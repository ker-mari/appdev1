//Arrow functions men

// function greet(name) {
//   return "Hello, " + name;
// }

const greetArrow = name => "Hello, " + name;

const greetArrowExplicit = (name) => {
  return "Hello, " + name;
};

console.log(greetArrow("Mari"));
console.log(greetArrowExplicit("Ker"));

// function square(n) {
//   return n * n;
// }

const squareArrow = n => n * n;


const squareArrowExplicit = (n) => {
  return n * n;
};

console.log(squareArrow(5));
console.log(squareArrowExplicit(10));

//3rd given
// function sayHi() {
//   console.log("Hi!");
// }

const sayHiArrow = () => console.log("Hi!");


const sayHiArrowBlock = () => {
  console.log("Hi!");
};

sayHiArrow();
sayHiArrowBlock();