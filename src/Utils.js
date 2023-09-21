export function PANCountValidation(input) {
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

export function CVVCountValidation(input, isCVVLonger) {
  if (input.length < 1) {
    return {
      cvv: input,
      cvvError: "",
    };
  }
  let clearInput = input.replace(/[^0-9]/g, "");

  const maxLength = (isCVVLonger)? 4 : 3;

  if (clearInput.length > maxLength) {
    clearInput = clearInput.slice(0, maxLength);
  }

  if (clearInput.length <= maxLength) {
    return { cvv: clearInput, cvvError: "" };
  } else {
    return {
      cvv: clearInput,
      cvvError: "CVV/CVC must be " + maxLength + " numbers long.",
    };
  }
}

export function CardNetworkCheck(input){
  const firstSixDigits = input.slice(0, 6);

  if (/^3[47]/.test(firstSixDigits)) { //American Express cards start with 34 or 37
    return true;
  } else {
    return false;
  }
}

export function LuhnsAlgorithmLastDigitCheck(input){
  const trimmedInput = input.slice(0, input.length - 1);
  const reversedCardNumber = trimmedInput.split('').reverse().join('');
  let sum = 0;

  for (let i = 0; i < reversedCardNumber.length; i++){
    let digit = parseInt(reversedCardNumber[i], 10);

    if (i % 2 === 0){
      digit *= 2;
    }

    if (digit >= 10) {
      digit -= 9;
    }

    sum += digit;
  }
   const lastDigit = (sum * 9) % 10;

   return (lastDigit === input.slice(input.length - 4, input.length) % 10) //sliced input, since JS cannot handle mod on large numbers
}