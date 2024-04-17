var guestlist = ["rehan", "ali", "amir", "mir"];
var dontcome = guestlist["3"];
console.log(dontcome, "nhi ahh skta");
guestlist.splice(3, 4, "ahmed");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, " would you like to dinner with me?")); });
