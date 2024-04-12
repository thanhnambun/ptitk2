class CheckingAccount extends Account{
    private overdraftLimit:number;
    constructor(overdraftLimit:number,accountNumber: number, balance: number) {
        super(accountNumber, balance)
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(value: number) {
        if (value < this.overdraftLimit) {
          console.log("");
        } else {
          this.overdraftLimit -= value;
        }
      }
}
const cheking = new CheckingAccount(10000, 1000, 0.05)
cheking.withdraw(1000)