var userName = ["Rehan", "Ali", "Zeeshan", "Ahmed", "Usman"];
if (userName.length === 0) {
    console.log("your array is empty we need to find some users!");
}
else {
    userName.forEach(function (oneUser) {
        if (oneUser === "Ahmed") {
            console.log("hello ".concat(oneUser, ",would you like to see a status reports?"));
        }
        else {
            console.log("hello ".concat(oneUser, ",thanks you for logging in aagain."));
        }
    });
}
