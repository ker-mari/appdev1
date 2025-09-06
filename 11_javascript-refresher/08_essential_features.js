//Array of 3 hobbies -> use .map() -> then print (ok na here)

//

const hobbies = ["walking", "running", "jumping"];


const myHobbies = hobbies.map(hobby => hobby);

// destructure -> extract values from object student 
const student = {
    name: "Kermari",
    age: 20,
};
   const {name, age} = student;
console.log(name, age);

//spread operator to copy an array
const Array = [1,2,3];