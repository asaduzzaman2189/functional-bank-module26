/*
function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
*/
// shift+alt+a comment

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
// uporer function modify korle hoy- 

function getInputValue(inputId) {
    const InputField = document.getElementById(inputId);
    const inputAmountText = InputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear deposit input field
    InputField.value = '';
    return amountValue;
}

//handler deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    /*     
    const depositInput = document.getElementById('deposit-input');
        const depositAmountText = depositInput.value;
        const depositAmount = parseFloat(depositAmountText);
     */
    const depositAmount = getInputValue('deposit-input');

    // get current deposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotalAmount = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotalAmount + depositAmount;

    //Update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;



})

//handler withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*     const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = getInputValue('withdraw-input')

    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    const newWithdrawTotalBalance = previousWithdrawTotal + withdrawAmount;
    withdrawTotal.innerText = newWithdrawTotalBalance;

    // Update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // // clear withdraw input 
    // withdrawInput.value = '';
})