function changeBureau(input){
   let numBitcoin = Number(input[0]);
   let numChinesecoin = Number(input[1]);
   let commission = Number(input[2]);
   let moneyWithoutCommission = 0.0;
   let money = 0.0;
   let result = 0.0;
   result = (numChinesecoin * 0.15) ;
   result = 1.76 * result;
   moneyWithoutCommission = (result + (numBitcoin * 1168)) / 1.95;
   money = moneyWithoutCommission * ((100 - commission)/100);

   console.log(money.toFixed(2));
   

}
changeBureau(["1","5","5"])