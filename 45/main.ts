function createCar(manufacturer,model,...options){
    let car ={
    manufacturer:manufacturer,
    model:model,
    };

    options.forEach(options => {
        let [key,value]=options.split(":");
        car[key.trim()]= value.trim();
    });
    return car;
} 
let my_car = createCar("Toyota","Corrolla","color:black");
console.log(my_car);
