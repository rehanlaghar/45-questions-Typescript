let guestlist=["rehan","ali","amir","mir"];
let dontcome=guestlist["3"];
console.log(dontcome,"nhi ahh skta");
guestlist.splice(3,4,"ahmed");
guestlist.forEach(guest =>console.log(`salam ${guest} would you like to dinner with me?`));

