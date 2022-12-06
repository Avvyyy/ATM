var numberBase =[1000];

function selectChoice(){
let userSelect = prompt("Welcome...What will you like to do?\n 1.Transfer\n 2.Withdraw\n 3.Buy Airtime\n 4.Pay Bills\n");
if (userSelect == 1){
    transfer();
}else if (userSelect == 2){
    withdraw();
}else if (userSelect == 3){
    buyAirtime();
}else if (userSelect == 4 ){
    cashIn();
}else if (userSelect.length == 0){
    alert("Go back and select an option");
    selectChoice();
}
}

selectChoice();

function transfer(){
    var accountNumber = prompt("Kindly Enter your account number");
    if (accountNumber == numberBase){
        var transferAmount = Number(prompt("Input Transfer Amount"));
        console.log(transferAmount);
        alert("Transfer Successful");
    }else{
        alert("Account Number Non-Existent");
    }
}

function withdraw(){
    var accountNumber = prompt("Kindly Enter your account number");
    if (accountNumber == numberBase){
        var withdrawAmount = Number(prompt("Input Withdraw Amount"));
        console.log(withdrawAmount);
        alert("Withdraw Successful");
    }else{
        alert("Account Number Non-Existent");
    }
}

function buyAirtime(){
    var accountNumber = prompt("Kindly Enter your account number");
    if (accountNumber == numberBase){
        var airTime = Number(prompt("Input Airtime Amount"));
        console.log(airTime);
        alert("Airtime Purchase Successful");
    }else{
        alert("Account Number Non-Existent")
    }
}

function cashIn(){
    var accountNumber = prompt("Kindly Enter your account number");
    if (accountNumber == numberBase){
        var cashInAmount= Number(prompt("Input CashIn Amount"));
        console.log(cashInAmount);
        alert("Cash In Successful");
    }else{
        alert("Account Number Non-Existent")
    }
}