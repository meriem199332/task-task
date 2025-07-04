// let balance = 0;
// let balanceDiv = document.getElementById("balance");

// balanceDiv.innerHTML = `<div class="balance">the balance is : <span>${balance}</span></div>`;
// let showBalanceHistory = [];
// // let showTransaction = () => {

// // };
// let showData = () => {
//     let pass = +prompt("enter pin");
//     if (pass == pin) {
//         console.clear();
//         console.log(`"your balance is :" ${balance}`);
//     } else {
//         alert("you entered wrong pin");
//     }
// };

// let depositAmount = () => {
//     let deposit = document.querySelector("#deposit");
//      let transaction = {
//             beforeBalance: balance,
//             type: "deposit",
//             amount: amount,
//             afterBalance: balance + amount,
//         };
//     balance += amount;

//     showBalanceHistory.push(deposit);
//     showData();
   
// };

// let withdrawAmount = () => {
//     let amount = document.querySelector("#withdraw");
//     if (amount <= balance) {
//         let transaction = {
//             beforeBalance: balance,
//             type: "withdraw",
//             amount: amount,
//             afterBalance: balance - amount,
//         };
//         transactionHistory.push(transaction);
//         balance -= amount;
//         showData();
//     } else {
//         alert("your balance is not enough");
//     }
// };

let balance = 0;
let pin = 1993; 
let balanceDiv = document.getElementById("balance");
let transactionHistory = [];


function updateBalanceDisplay() {
    balanceDiv.innerHTML = `<div class="balance">the balance is : <span>${balance} $</span></div>`;
}


function updateHistoryTable() {
    let tableBody = document.getElementById("historyTable");
    tableBody.innerHTML = "";

    transactionHistory.forEach((transaction) => {
        let row = `<tr>
                <td>${transaction.type}</td>
                <td>${transaction.amount} DH</td>
                <td>${transaction.beforeBalance} DH</td>
                <td>${transaction.afterBalance} DH</td>
              </tr>`;
        tableBody.innerHTML += row;
    });
}


function showData() {
    let pass = +prompt("Enter PIN to show balance");
    if (pass === pin) {
        console.clear();
        console.log(`Your balance is: ${balance} DH`);
    } else {
        alert("Wrong PIN");
    }
}

function depositAmount() {
    let amount = +document.getElementById("amountInput").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount to deposit");
        return;
    }

    let transaction = {
        beforeBalance: balance,
        type: "Deposit",
        amount: amount,
        afterBalance: balance + amount,
    };

    balance += amount;
    transactionHistory.push(transaction);

    updateBalanceDisplay();
    updateHistoryTable();
    showData();
}


function withdrawAmount() {
    let amount = +document.getElementById("amountInput").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount to withdraw");
        return;
    }

    if (amount <= balance) {
        let transaction = {
            beforeBalance: balance,
            type: "Withdraw",
            amount: amount,
            afterBalance: balance - amount,
        };

        balance -= amount;
        transactionHistory.push(transaction);

        updateBalanceDisplay();
        updateHistoryTable();
        showData();
    } else {
        alert("Insufficient balance");
    }
}


updateBalanceDisplay();
