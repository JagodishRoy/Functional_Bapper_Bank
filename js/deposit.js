

//-------event for deposit button (deposit.js)
document.getElementById("btn-deposit").addEventListener("click", function(){
    const newDepositAmount = getInputFieldValueById("deposit-field");
        if(isNaN(newDepositAmount)){
            alert("Please provide valid deposit amount.");
            return;
        }
    const previousDepositAmount = getUpdateTotalById("deposit-total");

    const updateDepositAmount = previousDepositAmount + newDepositAmount;
    setTextElelmentValueById("deposit-total", updateDepositAmount);

    const previousBalanceAmount = getUpdateTotalById("balance-total");
    const updateBalanceTotal = previousBalanceAmount + newDepositAmount;
    setTextElelmentValueById("balance-total", updateBalanceTotal);
});