/*
function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
*/


// alt+shift+a comment



/* 
function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //clear deposit input field
    depositInput.value = '';
    return depositAmount;
}

 */

// উপরের ফাংশনকে মডিফাই করলে ফাংশনটি হবে- 

function getInputValue(inputId) {
    const InputField = document.getElementById(inputId);
    const inputAmountText = InputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear deposit input field
    InputField.value = '';
    return amountValue;
}

/* 
function updateTotalField(totalFieldId, depositAmount) {
    const depositTotal = document.getElementById(totalFieldId);
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotalAmount = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotalAmount + depositAmount;
}

 */

// উপরের ফাংশনকে মডিফাই করলে ফাংশনটি হবে- 

function updateTotalField(totalFieldId, amount) {

    //Function এর ভিতরে debugger; দিলে সেটি ব্রাউজারে console করা যাবে বা debug করা যাবে। F10 দিয়ে কোডটিকে রান করা যাবে ধাপে ধাপে। 
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

/* 
function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;

    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;

    }
}
 */

// উপরের ফাংশনকে মডিফাই করলে ফাংশনটি হবে- 
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;

    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;

    }
}

//handler deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    /*     
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
     */

    // get and update deposit total
    /*  const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
     const previousDepositTotalAmount = parseFloat(depositTotalText);
 
     depositTotal.innerText = previousDepositTotalAmount + depositAmount; */

    //Update balance
    /*   const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);
      balanceTotal.innerText = previousBalanceTotal + depositAmount; */

    // clear deposit input 
    // depositInput.value = '';

    //function calling
    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);//যোগ করতে true পাঠাব।
})

//handler withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*     
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); 
    */

    //get and update withdraw total

    /*     const withdrawTotal = document.getElementById('withdraw-total');
          const previousWithdrawTotalText = withdrawTotal.innerText;
          const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    
          withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

    // Update balance
    /*     const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
    
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
     */

    // clear withdraw input 
    // withdrawInput.value = '';

    //function calling
    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);//বিয়োগ করতে false পাঠাব।
})