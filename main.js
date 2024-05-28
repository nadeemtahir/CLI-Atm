import inquirer from "inquirer";
// initialize user balance and pin code.
let myBalance = 10000;
let myPin = 7869;
// print welcome message.
console.log("Welcome to Manahil's ATM");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Your pin is correct, Login successfuly.");
    // console.log(`Current account balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log("operationAns");
    if (operationAns.operation === "withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdrawl method:",
                choices: ["fast cash", "Enter amount"]
            }
        ]);
        console.log(withdrawAns.withdrawMethod);
        if (withdrawAns.withdrawMethod === "fast cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select amount",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("Insufficient balance.");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw successfully.`);
                console.log(`your remaining balance is ${myBalance}`);
            }
            ;
        }
        else if (withdrawAns.withdrawMethod === "Enter amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter your amount to withdraw:",
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw suiccessfully.`);
                console.log(`your remaining balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your account balance is: ${myBalance}`);
    }
}
else {
    console.log("your pin is incorrect");
    console.log("Please try again!");
}
