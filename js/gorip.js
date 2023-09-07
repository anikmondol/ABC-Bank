document.getElementById('submit-btn').addEventListener('click',function(){
    const inputFiled = document.getElementById('text-area');
    const value = inputFiled.value;
    inputFiled.value = '';

    const p = document.createElement('p')
    p.innerText = value;
    
    const review = document.getElementById('review');

    review.appendChild(p);


})

document.getElementById('btn-login').addEventListener('click',function(){
    if(2 > 1){
        window.location.href = '../page/login.html'
    }
    else{
        alert("invalid user!!!")
    }
})