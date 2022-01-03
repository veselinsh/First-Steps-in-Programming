function sumOfTwoNumbers(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combination = 0;
    let isFound = false;
    for (let i = x; i <= y; i++) {
        for (let j = x; j <= y; j++) {
            combination++;
            if ((i + j) === magicNumber) {
                isFound = true;
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNumber})`);
                break;
            }
           
        }
        if(isFound){
               break;
           }
    }
  if(!isFound){
       console.log(`${combination} combinations - neither equals ${magicNumber}`);
  }
}
sumOfTwoNumbers(["23",
"24",
"20"])

