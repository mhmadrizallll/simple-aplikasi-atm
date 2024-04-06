const { accounts } = require("./accounts");

function valideInput(input) {
  if (input.length != 16) {
    return false;
  }

  for (const char of input) {
    if (char < "0" || char > "9") {
      return false;
    }
  }

  return true;
}

function validateCardNumber(cardNumber) {
  const input = cardNumber.split(" ").join("");
  const account = !valideInput(input)
    ? null
    : accounts.find(
        (account) => account.cardNumber.split(" ").join("") === input
      );

  if (!account) {
    throw new Error("Invalid card number");
  }

  return account;
}

module.exports = { validateCardNumber };

// validateCardNumber("1234 5678 1234 5678");
