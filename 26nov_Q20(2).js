// Question 2: Simulating Private Variables with Closures

function createBankAccount() {
    let balance = 0;
    let transactionHistory = []; // private variable

    return {
        deposit: function (amount) {
            balance += amount;
            transactionHistory.push(`Deposited: ${amount}`);
            console.log("Deposited:", amount);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
                transactionHistory.push(`Failed withdrawal attempt: ${amount}`);
            } else {
                balance -= amount;
                console.log("Withdrawn:", amount);
                transactionHistory.push(`Withdrawn: ${amount}`);
            }
        },
        getBalance: function () {
            console.log("Current balance:", balance);
        },
        getHistory: function () {
            console.log("Transaction History:", transactionHistory);
        }
    };
}

// Example Usage:
const account = createBankAccount();
account.deposit(500);     // Deposited: 500
account.withdraw(200);    // Withdrawn: 200
account.withdraw(400);    // Insufficient balance
account.getBalance();     // Current balance: 300
account.getHistory();     // Shows all transactions
