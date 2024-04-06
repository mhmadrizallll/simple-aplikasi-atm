function validateInput(input) {
  if (input.length != 6) {
    return false;
  }

  for (const char of input) {
    if (char < "0" || char > "9") {
      return false;
    }
  }

  return true;
}

function validatePin(account, pin) {
  // cobaPin = 0;
  // while (cobaPin < 3) {
  //   //   const input = await askQuestion("Masukkan PIN: ");
  //   if (validateInput(pin)) {
  //     if (account.pin == pin) {
  //       return true;
  //     }
  //   }
  //   console.log("PIN salah, silakan coba lagi");
  //   cobaPin += 1;

  //   if (cobaPin == 3) {
  //     throw new Error("Invalid PIN");
  //   }
  // }
  const errTxt = "Invalid PIN";

  if (!validateInput(pin)) {
    throw new Error(errTxt);
  }

  if (account.pin != pin) {
    throw new Error(errTxt);
  }
}

module.exports = { validatePin };
