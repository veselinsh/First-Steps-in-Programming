function toyShop(input){
    let priceForHoliday = Number(input[0]);
    let countPuzzles = Number(input[1]);
    let countPuppies = Number(input[2]);
    let countBears = Number(input[3]);
    let countMinnion = Number(input[4]);
    let countTrucks = Number(input[5]);

    let countToys = countPuzzles + countPuppies + countBears +  countMinnion + countTrucks;
    let priceForAllToys = countPuzzles * 2.60  + countPuppies * 3 + countBears * 4.10 +  countMinnion * 8.20 + countTrucks * 2;
    if(countToys > 50){
        priceForAllToys = priceForAllToys * 0.75;

    }
    priceForAllToys = priceForAllToys * 0.90;
    if(priceForAllToys > priceForHoliday){
        console.log(`Yes! ${(priceForAllToys -  priceForHoliday).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(Math.abs(priceForAllToys -  priceForHoliday).toFixed(2))} lv needed.`);
    }


}
toyShop(["40.8", "20", "25", "30", "50", "10"])

