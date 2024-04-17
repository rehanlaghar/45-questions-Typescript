function show_magicians(magicians: string[]){
    magicians.forEach(name=> console.log(name));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

let magician_names = ["David Copperfield", "Penn Jillette", "Teller"];

//making a copy of original arry through .slice();

let copy_magician_names = magician_names.slice();

//modify the copied arry to unclude "The Great" with their names
let copy_great_magicians= make_great(copy_magician_names);

//original
console.log("Original array\n");
show_magicians(magician_names);

//copied
console.log("\nCopied array\n");
show_magicians(copy_great_magicians);