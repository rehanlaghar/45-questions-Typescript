let guestlist = ["hamza","ali","usman","areeba"];
let dontCome = guestlist [0];
console.log(dontCome, "nahi ah sakty");
guestlist.splice(0,1 ,"amir");
console.log("Good News! we are found a bigger table for dinner");
guestlist.unshift("ali");
guestlist.push("zain");

let middleindex:number =Math.floor(guestlist.length / 2); 
guestlist.splice(middleindex, 0,"Rehan");

console.log("updated list of ou guests");
guestlist.forEach(oneguest=> console.log(`salam ${oneguest},would oyu like to dinner with me`));

console.log("unfortunalety, the new dinner table won't arrive on time,so i can only two guests to dinner with me");
while(guestlist.length>2){
    let removeguest = guestlist.pop();
    console.log(`sorry ,${removeguest}: i can't invite you ti dinner`);

}
console.log("invatations to the last guests");
guestlist.forEach(lastTwo => console.log(`Luckly ${lastTwo},you are still invited to dinner`));

guestlist.pop();
guestlist.pop();
console.log("Empty List:",guestlist);


