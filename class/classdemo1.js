//var 
//let
//const



class Bank{

    balance;

    constructor(){
        console.log("constructor");
        this.balance = 100;
    }
    deposit() {
            console.log("deposit",this.balance);
    }
    
}

//
b = new Bank();
b1 = new Bank();
document.getElementById("btn").addEventListener("click",b.deposit);
