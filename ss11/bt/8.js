"use strict";
class CheckingAccount extends Account {
    constructor(overdraftLimit, accountNumber, balance) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(value) {
        if (value < this.overdraftLimit) {
            console.log("");
        }
        else {
            this.overdraftLimit -= value;
        }
    }
}
const cheking = new CheckingAccount(10000, 1000, 0.05);
cheking.withdraw(1000);
