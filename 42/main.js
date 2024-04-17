function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magician_names = ["David Copperfield", "Penn Jillette", "Teller"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
