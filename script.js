function showMessage(){

    let userName = prompt("Enter your name:");

    if(userName === "" || userName === null){
        alert("Welcome to my website!");
    }else{
        alert("Hello " + userName + "! Thank you for visiting my portfolio.");
    }

    console.log("Visitor interacted with Hire Me button");

}