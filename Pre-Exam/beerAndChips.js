function beerAndChips(input){
    let name = input[0];
    let budget = Number(input[1]);
    let numberBeers = Number(input[2]);
    let packsChips = Number(input[3]);
    let result = 0;
    let priceBeer = 0;
    let priceChips = 0;
    priceBeer = 1.2 * numberBeers;
    priceChips = priceBeer * 0.45;
    let finalPriceChips = Math.ceil(priceChips * packsChips);
    result = priceBeer + finalPriceChips;
    if(budget >= result){
        console.log(`${name} bought a snack and has ${(budget - result).toFixed(2)} leva left.`);
    }else{
        console.log(`${name} needs ${Math.abs(budget - result).toFixed(2)} more leva!`);
    }


}
beerAndChips(["George",
"10",
"2",
"3"])
