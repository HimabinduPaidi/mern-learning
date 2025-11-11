function createBankAccount(initialDeposit=0){
    let bankBalance = initialDeposit;
    const transactionHistory = [];
    // {transactionId, dateAndTimeOfTransaction, transactionType, amount}

    if(initialDeposit > 0){
        transactionHistory.push({
            transactionId: `${transactionHistory.length + 1}`,
            dateAndTimeOfTransaction: getCurrentDateAndTime(), //'10/11/2025, 3:42:27 pm'
            transactionType: "initial deposit",
            amount: initialDeposit
        })
        console.log(`Initially deposited ${initialDeposit} successfully!`)
    }

    function getCurrentDateAndTime(){
        const now = new Date();
        return now.toLocaleString();
    }

    function currentBalance(){
        console.log(`Total Bank Balance: ${bankBalance}`)
    }

    function printStatement(){
        if(transactionHistory.length === 0){
            return;
        }

        transactionHistory.map((transaction) => (console.log(`${transaction.dateAndTimeOfTransaction} - ${transaction.transactionType} : ${transaction.amount}`)))

        currentBalance()
    }

    function depositAmount(amountToBeDeposited){
        bankBalance = bankBalance + amountToBeDeposited
        transactionHistory.push({
            transactionId: `${transactionHistory.length + 1}`,
            dateAndTimeOfTransaction: getCurrentDateAndTime(),
            transactionType: "deposit",
            amount: amountToBeDeposited
        })
        console.log(`Successfully deposited ${amountToBeDeposited} into you bank account.`)

        currentBalance();
    }

    function withdrawAmount(amountToBeWithdrawn){
        if(amountToBeWithdrawn > bankBalance){
            console.log("Insufficient Balance!");
            currentBalance();
            return
        }
        bankBalance = bankBalance - amountToBeWithdrawn;
        transactionHistory.push({
            transactionId: `${transactionHistory.length + 1}`,
            dateAndTimeOfTransaction: getCurrentDateAndTime(), 
            transactionType: "withdraw",
            amount: amountToBeWithdrawn
        })
        console.log(`Successfully withdrawn ${amountToBeWithdrawn} from you bank account.`)
        currentBalance();
    }

    return {
        depositAmount,
        printStatement,
        currentBalance,
        withdrawAmount
    }
}

const sundeeepAccount = createBankAccount(1000)

sundeeepAccount.depositAmount(300);
sundeeepAccount.withdrawAmount(400);