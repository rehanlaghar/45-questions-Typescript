//creating array
var pizza = ["chicken", "Tika", "Malai Chesse", "Fajita"];
//using for-loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("I Like ".concat(onePizza, " pizza"));
}
//print a Message outside of the for-loop
console.log("Pizza is Love");
console.log("I eat pizza");
