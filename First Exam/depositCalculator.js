function calculator(input){
    let  depositSum = Number(input[0]);
     let timeOfDeposit = Number(input[1]);
    let yearProcent = Number(input[2]);
let result = depositSum + timeOfDeposit*((depositSum * yearProcent/100)/12);

console.log(result);

}
calculator(["200","3","5.7"])
