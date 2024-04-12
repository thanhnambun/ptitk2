class Account {
  protected accountNumber: number;
  protected balance: number;
  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(value: number) {
    this.balance += value;
  }
  withdraw(value: number) {
    if (value > this.balance) {
      console.log("tiền trong tài khoản không đủ để rút");
    } else {
      this.balance -= value;
      console.log(`Withdrawn ${value} from account ${this.accountNumber}.`);
    }
  }
}
class SavingsAccount extends Account {
  private interestRate: number;
  constructor(accountNumber: number, balance: number, interestRate: number) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }
  calculateInterest() {
    const tienlai = this.balance * (this.interestRate / 100);
    return tienlai;
  }
}
const savingsAcc = new SavingsAccount(123456, 1000, 0.05);
const tienlai = savingsAcc.calculateInterest();
savingsAcc.deposit(500);
const newMonthlyInterest = savingsAcc.calculateInterest();
console.log(newMonthlyInterest);
console.log(tienlai);
