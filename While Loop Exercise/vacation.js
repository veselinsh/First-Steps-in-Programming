function vacation(input) {
    let budget = Number(input[0]);
    let availableMoney = Number(input[1]);
    let spendDays = 0;
    let days = 0;
    let index = 2;
    while (availableMoney <= budget) {
        let operation = input[index];
        index++;
        let money = Number(input[index]);
        if (operation === "spend") {
            if (money > availableMoney) {
                availableMoney = 0;
            } else {
                availableMoney -= money
            }
            days++;
            spendDays++;
        } else if (operation === "save") {
            availableMoney += money;
            spendDays = 0;
            days++;
        }
        if (spendDays === 5) {
            console.log("You can't save the money.");
            console.log(`${days}`);
            break;
        }
        if (availableMoney >= budget) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
        index++;
    }
}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])
