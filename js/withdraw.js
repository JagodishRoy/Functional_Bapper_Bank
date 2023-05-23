//-------event for withdraw button (withdraw.js)

document.getElementById("btn-withdraw").addEventListener("click", function(){
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
        if(isNaN(newWithdrawAmount)){
            alert("Please provide valid withdraw amount.");
            return;
        }
    const previousWithdrawAmount = getUpdateTotalById("withdraw-total");
    
    const previousBalanceAmount = getUpdateTotalById("balance-total");
        if(newWithdrawAmount>previousBalanceAmount){
            alert("Baper Bank e Ato Taka Nai");
            return;
        }
        const updateWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
        setTextElelmentValueById("withdraw-total", updateWithdrawTotal);

    const updateBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    setTextElelmentValueById("balance-total", updateBalanceTotal);
});