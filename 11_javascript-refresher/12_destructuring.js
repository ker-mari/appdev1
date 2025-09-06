const person = {
  name: "Ker", 
  age: 20
};

const hobbies = ["photography","painting"];

function printName(person) {
  console.log(person.name);
}

printName(person);

//destructuting
const { name, age } = person;
console.log("Extracted name:", name);
console.log("Extracted age:", age);

const [firstHobby, secondHobby] = hobbies;
console.log("First hobby:", firstHobby);
console.log("Second hobby:", secondHobby);

//function with destructuring
function printNameDestructured({ name }) {
  console.log("Destructured function:", name);
}

printNameDestructured(person)