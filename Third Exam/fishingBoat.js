function fishingBoat(input) {
    let budget = Number(input[0]);
    let timeOfYear = input[1];
    let numberAngels = Number(input[2]);
    let priceBoat = 0;
    let finalPrice = 0;

    switch(timeOfYear){
        case "Spring":
            priceBoat = 3000;
            if(numberAngels % 2 != 0){
                if(numberAngels <= 6){
                    finalPrice = priceBoat * 0.90;
                  }else if(numberAngels >= 7 && numberAngels <= 11){
                      finalPrice = priceBoat * 0.85;
                  }else if(numberAngels >= 12){
                      finalPrice = priceBoat * 0.75;
                  }
                }else{
                    if(numberAngels <= 6){
                        finalPrice = priceBoat * 0.85;
                      }else if(numberAngels >= 7 && numberAngels <= 11){
                          finalPrice = priceBoat * 0.80;
                      }else if(numberAngels >= 12){
                          finalPrice = priceBoat * 0.70;
                      } 
                }
                break;
        case "Summer":
            priceBoat = 4200;
            if(numberAngels % 2 != 0){
                if(numberAngels <= 6){
                    finalPrice = priceBoat * 0.90;
                  }else if(numberAngels >= 7 && numberAngels <= 11){
                      finalPrice = priceBoat * 0.85;
                  }else if(numberAngels >= 12){
                      finalPrice = priceBoat * 0.75;
                  }
                }else{
                    if(numberAngels <= 6){
                        finalPrice = priceBoat * 0.85;
                      }else if(numberAngels >= 7 && numberAngels <= 11){
                          finalPrice = priceBoat * 0.80;
                      }else if(numberAngels >= 12){
                          finalPrice = priceBoat * 0.70;
                      } 
                }
                break;
        case "Autumn":
            priceBoat = 4200;
            if(numberAngels <= 6){
                finalPrice = priceBoat * 0.90;
              }else if(numberAngels >= 7 && numberAngels <= 11){
                 finalPrice = priceBoat * 0.85;
              }else if(numberAngels >= 12){
                  finalPrice = priceBoat * 0.75;
              }
              break;
            
        case "Winter":
            priceBoat = 2600;
            if(numberAngels % 2 != 0){
            if(numberAngels <= 6){
                finalPrice = priceBoat * 0.90;
              }else if(numberAngels >= 7 && numberAngels <= 11){
                  finalPrice = priceBoat * 0.85;
              }else if(numberAngels >= 12){
                  finalPrice = priceBoat * 0.75;
              }
            }else{
                if(numberAngels <= 6){
                    finalPrice = priceBoat * 0.85;
                  }else if(numberAngels >= 7 && numberAngels <= 11){
                     finalPrice = priceBoat * 0.80;
                  }else if(numberAngels >= 12){
                      finalPrice = priceBoat * 0.70;
                  } 
            }
            break;
    }
    if(finalPrice <= budget){
        console.log(`Yes! You have ${(budget - finalPrice).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva.`);
    }


}
fishingBoat(["2000",
"Winter",
"13"])



