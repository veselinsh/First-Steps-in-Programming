function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let placeForStaying = "";
    let priceForNight = 0;

    if(budget <= 100){
        destination = "Bulgaria";
        if(season == "summer"){
            placeForStaying = "Camp";
            priceForNight = budget * 0.30;
        }else if(season == "winter"){
            placeForStaying = "Hotel";
            priceForNight = budget * 0.70;
        }
    }else if(budget > 100 && budget <= 1000){
        destination = "Balkans";
        if(season == "summer"){
            placeForStaying = "Camp";
            priceForNight = budget * 0.40;
        }else if(season == "winter"){
            placeForStaying = "Hotel";
            priceForNight = budget * 0.80;
        }

    }else if(budget > 1000){
        destination = "Europe";
        if(season == "summer" || season == "winter"){
            placeForStaying = "Hotel"
            priceForNight = budget * 0.90
        }
        

    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${placeForStaying} - ${(priceForNight).toFixed(2)}`);
}
journey(["50", "summer"]);