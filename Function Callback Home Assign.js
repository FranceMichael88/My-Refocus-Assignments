function createBankAccount(name,amount,balance, callback){
    console.log(`${name} your balance is ${balance}` );
    
    callback(name, amount, balance);
}
    
function depositAmount(name, amount, balance){
   
     console.log (`You deposited ${amount}`);
     console.log (`Your current balance is ${amount}`)   
}
createBankAccount ("Insuficient funds", 500, 0, depositAmount)