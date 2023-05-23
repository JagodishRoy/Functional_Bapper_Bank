

document.getElementById("btn-submit").addEventListener("click", function(){
    const email = document.getElementById("email-field").value;
    const password = document.getElementById("password-field").value;
    if(email==="joy@gmail.com" && password==="joy"){
        window.location.href="http://127.0.0.1:5500/Functional-Bank.html";
    }else{
       alert("You have to enter correct email or password")
    }
});






















// document.getElementById("btn-submit").addEventListener("click", function(){
//     const email = document.getElementById("email-field").value;
//     const password = document.getElementById("password-field").value;
//     if (email=== "joy@gmail.com" && password==="joy"){
//         window.location.href = "http://127.0.0.1:5500/Baper_Bank/main.html"
//     }else{
//         document.write("<h1>Beta Palao! Noile Khabor Ace</h1>")
//     }
// });