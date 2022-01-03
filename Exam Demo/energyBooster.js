function energyBooster(input) {
    let typeFruit = input[0];
    let typeSize = input[1];
    let countSets = Number(input[2]);
    let result = 0.0;
    switch (typeFruit) {
        case "Watermelon":
            if(typeSize === "big"){
              result = 5 * 28.70 * countSets
            }else{
              result = 2 * 56 * countSets
            }
            break;
        case "Mango":
            if(typeSize === "big"){
                result = 5 * 19.60 * countSets
            }else{
                result = 2 * 36.66 * countSets  
            }
            break;
        case "Pineapple":
            if(typeSize === "big"){
                result = 5 * 24.80 * countSets
            }else{
                result = 2 * 42.10 * countSets  
            }
            break;
        case "Raspberry":
            if(typeSize === "big"){
                result = 5 * 15.20 * countSets
            }else{
                result = 2 * 20 * countSets
            }
            break;
    }
   if(result >= 400 && result <=1000){
       result = result * 0.85;
   }else if(result > 1000){
     result = result * 0.50;
   }else{
       result = result;
   }
   console.log(`${result.toFixed(2)} lv.`)
}
energyBooster(["Raspberry","small","50"])
