function fruitMarket(input){
   let priceStrawberry = Number(input[0]);
   let weightOfBananas = Number(input[1]);
   let weightOfOrange = Number(input[2]);
   let weightOfRaspberries = Number(input[3]);
   let weightOfStrawberry = Number(input[4]);
   let priceOfRaspberries = priceStrawberry / 2;
   let priceOfOranges = priceOfRaspberries * 0.6;
   let priceOfBananas = priceOfRaspberries * 0.2;
   let result = (priceOfRaspberries * weightOfRaspberries) + (priceStrawberry * weightOfStrawberry) + (priceOfOranges * weightOfOrange) + (priceOfBananas * weightOfBananas);

   console.log(result);
}
fruitMarket(["48","10","3.3","6.5","1.7"])
