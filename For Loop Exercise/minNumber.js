function minNumber(input) {
    let numbersCount = Number(input[0]);
    let numberMin = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= numbersCount; i++) {
        let number = Number(input[i]);
        if (number < numberMin) {
            numberMin = number;
        }
    }
    console.log(numberMin);
}
minNumber(["2", "100", "99"])
