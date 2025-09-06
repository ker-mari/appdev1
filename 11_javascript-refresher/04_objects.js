//Number Pooorrr

const aboutMe = {
    name: "Kermari",
    age: 20,
    course: "Bachelor of Science in Information Systems",
    introduce() {
        console.log(`Hello, my name is ${this.name},and I am ${this.age} years old.`);
    }
};

aboutMe.introduce();

aboutMe.hobby = "Lying down perpendicular to the ground.";

console.log(aboutMe.hobby);

//primitive type and reference type value (different in storing types)
