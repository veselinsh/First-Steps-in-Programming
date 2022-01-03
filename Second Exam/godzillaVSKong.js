function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let numberStatists = Number(input[1]);
    let priceForSuits = Number(input[2]);
    let dekor = budget * 0.1;
    let finalresult = '';


    let sumForOutfit = numberStatists * priceForSuits;
    if (numberStatists > 150) {
        sumForOutfit = sumForOutfit * 0.9;
    }
    finalresult = sumForOutfit + dekor;
    if (finalresult > budget) {
        console.log(`Not enough money!`)
         console.log(`Wingard needs ${(finalresult - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - finalresult).toFixed(2)} leva left.`)
    }

}
godzillaVsKong(["15437.62",
"186",
"57.99"])

