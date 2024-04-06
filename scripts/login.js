const { askQuestion } = require("./utils");
const { validateCardNumber } = require("./validateCardNumber");
const { validatePin } = require("./validatePin");

async function login() {
  try {
    let cardNumber = await askQuestion("Masukkan nomor kartu: ");
    const account = validateCardNumber(cardNumber);

    let pin = await askQuestion("Masukkan PIN: ");
    validatePin(account, pin);

    console.log("=== Login Berhasil ===");
    console.log(`Selamat datang, ${account.name}`);
    return account;
  } catch (error) {
    throw error;
  }
}

module.exports = { login };
