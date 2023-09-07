// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = "";


    // step-3: get tne password address inside the password input field
    // 3.a: set id on the html element 
    // 3.b: get the element 
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = '';


    //DANGER: do not verify email password on the client side 
    // step-4: verify email and password and check whether valid user or not 
    if(email === "abc" && password === '123'){
        window.location.href = '../page/bank.html'
    }
    else{
        alert("invalid user!!!dfsdasdsa")
    }


});