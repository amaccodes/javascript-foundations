import { BankAccount } from "./private-elements.js";

let acc = new BankAccount(10000)
acc.deposit(100)
console.log(acc.balance)

acc.withdraw(3402)

console.log(acc.balance)