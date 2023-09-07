// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    depositField.value = '';

    // step-3: get the current deposit total 
    // for non-input (element other input, textarea) use innerText to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    // step-4: add number to set the total deposit
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;


    // step-5: get ballance current total
    const ballanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(ballanceTotalElement.innerText);
    
    // step-6: calculate current total balance
    const currentBalanceTotal = currentDepositTotal + previousBalanceTotal ;
    ballanceTotalElement.innerText = currentBalanceTotal

});