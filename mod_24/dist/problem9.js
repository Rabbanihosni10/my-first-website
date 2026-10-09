"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processTransaction = (balance, transaction) => {
    if (transaction.type === "deposit") {
        return balance + transaction.amount;
    }
    else {
        if (transaction.amount > balance) {
            return "Insufficient balance";
        }
        else {
            return balance - transaction.amount;
        }
    }
};
console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
// 7000
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));
// 3000
// insufficient balance:
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));
// 5000  (unchanged) 
// insufficient balance
//# sourceMappingURL=problem9.js.map