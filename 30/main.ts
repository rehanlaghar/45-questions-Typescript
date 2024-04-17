let userName =["Rehan","Ali","Zeeshan","Ahmed","Usman"];

userName.forEach(oneUser =>{
    if(oneUser === 'admin'){
        console.log(`hello ${oneUser},would you like to see a status reports?`)
    }else{
        console.log(`hello ${oneUser},thanks you for logging in aagain.`)
    }
})
        
        