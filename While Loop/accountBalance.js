function accountBalance(input){
    let index = 0;
  let command = input[index]
  index++;
  let total = 0;

  while(command !== "NoMoreMoney"){
      let currenDeposit = Number(command);
      
      if(currenDeposit < 0){
          console.log("Invalid operation!");
          break;
      }
     total += currenDeposit;
     console.log(`Increase: ${currenDeposit.toFixed(2)}`);
     command = input[index];
      index++;
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
