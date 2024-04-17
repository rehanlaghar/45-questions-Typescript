let userName =["Rehan","Ali","Zeeshan","Ahmed","Usman"]
if(userName.length ===0){
    console.log("your array is empty we need to find some users!")
}else{
userName.forEach(oneUser =>{
    if(oneUser === "Ahmed"){
        console.log(`hello ${oneUser},would you like to see a status reports?`)
    }else{
        console.log(`hello ${oneUser},thanks you for logging in aagain.`)
    }
})
}
        
        