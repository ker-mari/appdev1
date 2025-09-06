console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (strict comparison)

let a;
let b = null;
console.log(a); // undefined
console.log(b); // null

const obj = {
  regularFunc: function() {
    console.log(this); // refers to obj
  },
  arrowFunc: () => {
    console.log(this); // refers to outer scope (not obj)
  }
};

obj.regularFunc();
obj.arrowFunc();

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] — both changed

let arr3 = [1, 2, 3];
let arr4 = [...arr3];
arr4.push(4);
console.log(arr3); // [1, 2, 3] — original untouched
console.log(arr4); // [1, 2, 3, 4]
