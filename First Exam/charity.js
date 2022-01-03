function charity(input){
     let daysOfCharityCompany = Number(input[0]);
     let numbersOfBakeries = Number(input[1]);
     let numbersOfCakes = Number(input[2]);
     let numbersOfWaffles = Number(input[3]);
     let numbersOfPancakes = Number(input[4]);
     let priceOfCakes = 45 ; 
     let priceOfWaffles = 5.8;
     let priceOfPancakes = 3.2;
     let moneyFromCakes = numbersOfCakes * priceOfCakes;
    let moneyFromWaffles = numbersOfWaffles * priceOfWaffles;
    let moneyFromPancakes = numbersOfPancakes * priceOfPancakes;
    let result = ((moneyFromCakes + moneyFromPancakes + moneyFromWaffles)*numbersOfBakeries)*daysOfCharityCompany;
    let result2 = result - result/8;
    console.log(result2);

}
charity(["23","8","14","30","16"])
