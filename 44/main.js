function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following ingredients:");
    items.forEach(function (singleItems) { return console.log("-" + singleItems); });
    console.log("Enjoy your sandwich!\n");
}
makeSandwich("bread", "butter", "mayo", "egg", "cheese", "chicken", "lettuce", "tomato");
