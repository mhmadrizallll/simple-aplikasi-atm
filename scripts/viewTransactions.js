function viewTransactions(account) {
  const transactions = account.transactions;
  console.log("Riwayat Transaksi:");

  if (transactions.length === 0) {
    console.log("Tidak ada riwayat transaksi.");
  } else {
    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      console.log(`${i + 1}. ${transaction.type} - ${transaction.amount}`);
    }
  }
}

module.exports = { viewTransactions };
