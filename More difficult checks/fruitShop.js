function fruitShop(input){
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let result = 0;
    
    switch(fruit){
        case "banana":
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                 result = quantity * 2.50;
                 console.log((result).toFixed(2));
                 break;
                 case "Saturday":
                case "Sunday":
                 result = quantity * 2.70;
                 console.log((result).toFixed(2));
                 break;
                 default:
                     console.log("error");
                     break;
            }
            break;
        case "apple":
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    result = quantity * 1.20;
                    console.log((result).toFixed(2));
                    break;
                    case "Saturday":
                   case "Sunday":
                    result = quantity * 1.25;
                    console.log((result).toFixed(2));
                    break;
                    default:
                        console.log("error");
                        break;
            }
            break;
        case "orange":
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    result = quantity * 0.85;
                    console.log((result).toFixed(2));
                    break;
                    case "Saturday":
                   case "Sunday":
                    result = quantity * 0.90;
                    console.log((result).toFixed(2));
                    break;
                    default:
                        console.log("error");
                        break;
            }
            break;
        case "grapefruit":
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    result = quantity * 1.45;
                    console.log((result).toFixed(2));
                    break;
                    case "Saturday":
                   case "Sunday":
                    result = quantity * 1.60;
                    console.log((result).toFixed(2));
                    break;
                    default:
                        console.log("error");
                        break;
            }
            break;
        case "kiwi":
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    result = quantity * 2.70;
                    console.log((result).toFixed(2));
                    break;
                    case "Saturday":
                   case "Sunday":
                    result = quantity * 3.00;
                    console.log((result).toFixed(2));
                    break;
                    default:
                        console.log("error");
                        break;
            }
            break;
        case "pineapple":
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    result = quantity * 5.50;
                    console.log((result).toFixed(2));
                    break;
                    case "Saturday":
                   case "Sunday":
                    result = quantity * 5.60;
                    console.log((result).toFixed(2));
                    break;
                    default:
                        console.log("error");
                        break;
            }
            break;
        case "grapes":
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    result = quantity * 3.85;
                    console.log((result).toFixed(2));
                    break;
                    case "Saturday":
                   case "Sunday":
                    result = quantity * 4.20;
                    console.log((result).toFixed(2));
                    break;
                    default:
                        console.log("error");
                        break;
            }
            break;
        default:
        console.log("error");
        break;
    }
   
}
fruitShop(["apple","Tuesday","2"])
