let current_user =["usman","ali","areeba","zain","osama"]

let new_users = ["hamza","ayesha","ali","mahad","areeba"]

new_users.forEach(new_one_user =>{
    let our_condition = current_user.some(current_one_user=> current_one_user.toLowerCase()=== new_one_user.toLowerCase())
if(our_condition){
    console.log(`sorry ${new_one_user}:is already taken!`)
}else{
    console.log(`this username ${new_one_user}:is available`)
}
})