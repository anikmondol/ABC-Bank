/*
1. add event handler with the withdraw button
2. get the withdraw amount from withdraw input field
2-5: also make sure to convert the input into a number by using parsFloat
3. get previous withdraw total
4. calculate total amount
4-5. set total withdraw amount
5. get the previous balance total 
6. calculate the new balance total
6-5. set new balance total

7.clear the input field
*/ 

// step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
    const withdrawFiled = document.getElementById('withdraw-filed');
    const newWithdrawAmount = parseFloat(withdrawFiled.value);
    withdrawFiled.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number')
    }

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
     
    
    // step-5
    const ballanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(ballanceTotalElement.innerText);



    if( newWithdrawAmount > previousBalanceTotal){
        alert('tamer account ay to taka nai');
        return;
    }


    // step-4
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;



    // step-6
    const currentBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
    ballanceTotalElement.innerText = currentBalanceTotal;
});