function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magician_names = ["David Copperfield", "Penn Jillette", "Teller"];
//making a copy of original arry through .slice();
var copy_magician_names = magician_names.slice();
//modify the copied arry to unclude "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
//original
console.log("Original array\n");
show_magicians(magician_names);
//copied
console.log("\nCopied array\n");
show_magicians(copy_great_magicians);
