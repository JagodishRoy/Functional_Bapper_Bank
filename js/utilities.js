//--------------------------Baper Bank advance---------------------


//---------function for get input field (utilities.js)
function getInputFieldValueById(inputFielId){
    const inputField = document.getElementById(inputFielId);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    inputField.value = " ";
    return inputFieldNumber;
}

//--------function for get total balance field (utilities.js)
function getUpdateTotalById(totalId){
    const total = document.getElementById(totalId);
    const totalString = total.innerText;
    const totalNumber = parseFloat(totalString);
    return totalNumber;
}

//-------function for replace update total balance field (utilities.js)
function setTextElelmentValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}