// In this example you can only access the private balance variable where you see #balance in the property value or getter function

class BankAccount {
    #balance

    constructor(balance) {
        this.#balance = balance
    }

    deposit(amount) {
        if (amount < 5) console.log('Your deposit needs to be greater than or equal to $5.00')
        else this.#balance += amount
    }

    withdraw(amount) {
        if (amount > this.#balance) console.log('You have insufficient funds to make this withdrawal.')
        else if (amount <= 0) console.log('Your withdrawal needs to be greater than $0.00.') 
        else this.#balance -= amount
    }

    get balance() {
        return this.#balance
    }
}

let account = new BankAccount(30000)

console.log(account.balance)