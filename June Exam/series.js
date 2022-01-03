function series(input) {
    let budget = Number(input[0]);
    let countSeries = Number(input[1]);
    let index = 3;
    let result = 0;
    for (let i = 2; i <= input.length - 1; i += 2) {
        let name = input[i];
        let price = Number(input[index]);
        index += 2;
        switch (name) {
            case "Thrones":
                price *= 0.50;
                budget -= price;
                break;
            case "Lucifer":
                price *= 0.60;
                budget -= price;
                break;
            case "Protector":
                price *= 0.70;
                budget -= price;
                break;
            case "TotalDrama":
                price *= 0.80;
                budget -= price;
                break;
            case "Area":
                price *= 0.90;
                budget -= price;
                break;
                default:
                    budget -= price;
        }
    }
    if(budget >= 0){
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
    }else{
        console.log(`You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`);
    }


}
series(["10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2"])
