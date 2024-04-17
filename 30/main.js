var userName = ["Rehan", "Ali", "Zeeshan", "Ahmed", "Usman"];
userName.forEach(function (oneUser) {
    if (oneUser === 'admin') {
        console.log("hello ".concat(oneUser, ",would you like to see a status reports?"));
    }
    else {
        console.log("hello ".concat(oneUser, ",thanks you for logging in aagain."));
    }
});
