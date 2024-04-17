function makeSandwich(...items: string[]){
    console.log("Making a sandwich with the following ingredients:");

items.forEach(singleItems => console.log("-" + singleItems));
    
    console.log("Enjoy your sandwich!\n");
}

makeSandwich("bread","butter","mayo","egg","cheese","chicken","lettuce","tomato")
