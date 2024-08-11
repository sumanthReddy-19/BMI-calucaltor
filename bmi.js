let billAmountElement = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");
let errorMessage = "Please enter valid Input.";

function calculateTip() {
    if (billAmountElement.value === "") {
        errorMessageElement.textContent = errorMessage;

    } else if (percentageTipElement.textContent === "") {

        errorMessageElement.textContent = errorMessage;
    } else {
        errorMessageElement.textContent = " ";
        tipAmountElement.value = parseInt(((percentageTipElement) / 100) * billAmountElement);
        totalAmountElement.value = parseInt((tipAmountElement) + (billAmountElement));
    }
}
