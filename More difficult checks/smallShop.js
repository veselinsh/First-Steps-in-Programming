function smallShop(input){
   let stock = input[0];
   let city = input[1];
   let numberOfStocks = Number(input[2]);
   let result = ''
   
   if(stock == "coffee"){
       switch(city){
           case "Sofia":
               result = numberOfStocks * 0.50;
               console.log(result);
               break;
            case "Plovdiv":
                result = numberOfStocks * 0.40;
                console.log(result);
                break;
            case "Varna":
               result = numberOfStocks * 0.45;
               console.log(result);
               break;
       }
   }else if(stock == "water"){
    switch(city){
        case "Sofia":
            result = numberOfStocks * 0.80;
            console.log(result);
            break;
         case "Plovdiv":
             result = numberOfStocks * 0.70;
             console.log(result);
             break;
         case "Varna":
            result = numberOfStocks * 0.70;
            console.log(result);
            break;
    }

   }else if(stock == "beer"){
    switch(city){
        case "Sofia":
            result = numberOfStocks * 1.20;
            console.log(result);
            break;
         case "Plovdiv":
             result = numberOfStocks * 1.15;
             console.log(result);
             break;
         case "Varna":
            result = numberOfStocks * 1.10;
            console.log(result);
            break;
    }


   }else if(stock == "sweets"){
    switch(city){
        case "Sofia":
            result = numberOfStocks * 1.45;
            console.log(result);
            break;
         case "Plovdiv":
             result = numberOfStocks * 1.30;
             console.log(result);
             break;
         case "Varna":
            result = numberOfStocks * 1.35;
            console.log(result);
            break;
    }

   }else{
    switch(city){
        case "Sofia":
            result = numberOfStocks * 1.60;
            console.log(result);
            break;
         case "Plovdiv":
             result = numberOfStocks * 1.50;
             console.log(result);
             break;
         case "Varna":
            result = numberOfStocks * 0.70;
            console.log(result);
            break;
    }

   }
}
smallShop(["coffee","Varna","2"]);
