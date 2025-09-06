//Numero Singko

const favoriteFoods = [];
favoriteFoods.push("Pizza", "Bread", "Cheese");
favoriteFoods.push("Noodles");
favoriteFoods.shift();

console.log(favoriteFoods);

for (const food of favoriteFoods){
    console.log(food);
}

const likedFood = favoriteFoods.map(food => `I like ${food}`);
console.log(likedFood);