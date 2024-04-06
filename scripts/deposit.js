const { askQuestion } = require("./utils");

async function deposit(account) {
  try {
    const amount = parseFloat(await askQuestion("Masukkan nominal deposit: "));
    if (amount <= 0) {
      throw new Error("Jumlah deposit harus lebih dari 0");
      return;
    }

    account.balance += amount;
    account.transactions.push({ type: "Deposit", amount: amount });
    console.log("Sedang menyimpan transaksi deposit");
    console.log("Deposit Berhasil, saldo Anda sekarang:", account.balance);
    return true;
  } catch (error) {
    console.log("Deposit gagal:", error.message);
    return false;
  }
}

module.exports = { deposit };
