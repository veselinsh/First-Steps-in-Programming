function easterBakery(input){
    let priceForFlour = Number(input[0]);
    let kgFlour = Number(input[1]);
    let kgSugar = Number(input[2]);
    let egg = Number(input[3]);
    let packsMaya = Number(input[4]);

    let priceForSugar = priceForFlour * 0.75;
    let priceForEgg = priceForFlour * 1.10;
    let priceForMaya = priceForSugar * 0.2;

    let result = 0;
    result = priceForFlour * kgFlour + kgSugar * priceForSugar + egg * priceForEgg + packsMaya * priceForMaya;
    console.log(result.toFixed(2));



}
easterBakery(["50","10","3.5","6","1"])