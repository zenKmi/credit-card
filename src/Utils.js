export function digitCountValidation(input) {
  if (input.length < 1){
    return {
      cardNumber: input,
      errorText: '',
    };
  }
  let clearInput = input.replace(/[^0-9]/g, "");

  if (clearInput.length > 19) {
    clearInput = clearInput.slice(0, 19);
  }

  if (clearInput.length >= 16 && clearInput.length <= 19) {
    return { cardNumber: clearInput, errorText: "" };
  } else {
    return {
      cardNumber: clearInput,
      errorText:
        "Primary Account Number (PAN) / Credit card number must be between 16 to 19 numbers long.",
    };
  }
}

export function cvvCountValidation(input) {
  if (input.length < 1) {
    return {
      cardNumber: input,
      errorText: "",
    };
  }
  let clearInput = input.replace(/[^0-9]/g, "");

  if (clearInput.length > 4) {
    clearInput = clearInput.slice(0, 4);
  }

  if (clearInput.length >= 3 && clearInput.length <= 4) {
    return { cardNumber: clearInput, errorText: "" };
  } else {
    return {
      cardNumber: clearInput,
      errorText:
        "CVV/CVC must be between 3 to 4 numbers long.",
    };
  }
}

export function checkCardNetwork(){

}