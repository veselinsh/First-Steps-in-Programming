function cleverLili(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let result = 0;
    let toys = 0;
    let sum = 0;
    let brotherMoney = 0;
    let currentMoney = 10;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sum += currentMoney;
            brotherMoney += 1;
            currentMoney += 10;
        }
        else {
            toys += 1;
        }
    }
    result = (sum - brotherMoney) + toys * toyPrice;



    if (result >= washingMachine) {
        console.log(`Yes!${(result - washingMachine).toFixed(2)}`);
    } else {
        console.log(`No!${(washingMachine - result).toFixed(2)}`);
    }



}
cleverLili(["10", "170", "6"]);