const num = [1,2,3];
const user = {
    name: "Ker",
    age: 20
};

function sum(a,b){
    return a + b;
}

console.log("User:", user);
console.log(sum(5,3));

//spread
const copyOfNum = [...num];
console.log("copy array:", copyOfNum);
copyOfNum.push(6);

console.log("updated copy array:", copyOfNum);

const extendedNum = [...num, 4, 5, 6];
console.log(extendedNum);

//rest
const [first, ...restNumbers] = num;
console.log("Rest of numbers:", restNumbers);

const { name, ...restUserInfo } = user;
console.log("Name:", name);
console.log("Rest of user info:", restUserInfo);
