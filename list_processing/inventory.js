function transactionsFor(itemID, listOfTransactions) {
  return listOfTransactions.filter(transaction => transaction.id === itemID);
}
function isItemAvailable(itemID, listOfTransactions) {
  return transactionsFor(itemID, listOfTransactions)
  .reduce((acc, transaction) => 
      transaction.movement === 'in' ? acc + transaction.quantity : acc - transaction.quantity, 0) > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(105, transactions));