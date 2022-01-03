function easterParty(input){
    let guests = Number(input[0]);
    let priceForOneGuest = Number(input[1]);
    let budget = Number(input[2]);

    if(guests >= 10 && guests <= 15){
        priceForOneGuest *= 0.85;
    }
    
}
easterParty(["18","30","450"]);