function pastryShop(input){
    let type = input[0];
    let numOfCake = Number(input[1]);
    let date = Number(input[2]);
    let price = 0;
       if(date <= 15){
        if(type === "Cake"){
            price = numOfCake * 24;
        }else if(type === "Souffle"){
            price = numOfCake * 6.66; 
        }else{
            price = numOfCake * 12.60;
        }
    }else if(date > 15){
        if(type === "Cake"){
            price = numOfCake * 28.70;
        }else if(type === "Souffle"){
            price = numOfCake * 9.80; 
        }else{
            price = numOfCake * 16.98;
        }
    }
    if(date <= 22){
        if(price >= 100 && price <= 200){
            price *= 0.85;
        }else if(price > 200){
            price *= 0.75;
        }
        if(date <=15){
            price *= 0.9;
        }
    }
    console.log(price.toFixed(2));
   


}
pastryShop(["Baklava",
"50",
"1"])


