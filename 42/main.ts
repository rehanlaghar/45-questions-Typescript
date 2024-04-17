function show_magicians(magicians: string[]){
    magicians.forEach(name=> console.log(name));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

let magician_names = ["David Copperfield", "Penn Jillette", "Teller"];

let great_magicians = make_great(magician_names);

show_magicians(great_magicians);