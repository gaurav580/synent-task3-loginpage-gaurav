function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email==="" || password===""){
        alert("Please enter Email and Password!");
    }
    else if(password.length < 6){
        alert("Password must be at least 6 characters.");
    }
    else{
        alert("Login Successful!");
    }

}