function Account(agency, accountNumber, balance) {
    this.agency = agency;
    this.accountNumber = accountNumber;
    this.balance = balance;
}

Account.prototype.withdraw = function(value) {
    if (this.balance < value) {
        console.log(`Balance insufficient: R$${this.balance.toFixed(2)}`);
        return;
    }
    this.balance -= value;
    this.seeBalance();
};

Account.prototype.deposit = function(value) {
    this.balance += value;
    this.seeBalance();
};

Account.prototype.seeBalance = function() {
    console.log(`Ag/c: ${this.agency}/${this.accountNumber} | Balance: R$${this.balance.toFixed(2)}`);
};

const account = new Account(11, 22, 10);
account.deposit(11);
account.deposit(10);
account.withdraw(30);

function ContaCorrente(agencyNumber, accountNumber, balance, limit) {
    Account.call(this, agencyNumber, accountNumber, balance);
    this.limit = limit;
}
ContaCorrente.prototype = Object.create(Account.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;


ContaCorrente.prototype.withdraw = function(value) {
    if (value > (this.balance + this.limit)) {
        console.log(`Balance insufficient: R$${this.balance.toFixed(2)}`);
        return;
    }
    this.balance -= value;
    this.seeBalance();
};

function ContaPupanca(agencyNumber, accountNumber, balance) {
    Account.call(this, agencyNumber, accountNumber, balance);
}
ContaPupanca.prototype = Object.create(Account.prototype);
ContaPupanca.prototype.constructor = ContaPupanca;


const contaCorrente = new ContaCorrente(11, 22, 0);
const contaPoupanca = new ContaPupanca(12, 33, 0)