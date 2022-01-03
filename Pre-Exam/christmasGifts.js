function christmasGifts(input){
    let age = Number(input[0]);
    let counterAdults = 0;
    let counterKids = 0;
     let moneyAdults = 0;
     let moneyKids = 0;
    for(let i = 0;i<input.length - 1;i++){
        let currentAge = Number(input[i])
        if(currentAge <= 16){
          counterKids++;
        }else{
counterAdults++;
        }
    }
    moneyAdults = counterAdults * 15;
    moneyKids = counterKids * 5;
    console.log(`Number of adults: ${counterAdults}`);
    console.log(`Number of kids: ${counterKids}`);
    console.log(`Money for toys: ${moneyKids}`);
    console.log(`Money for sweaters: ${moneyAdults}`);
   

}christmasGifts(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"]);