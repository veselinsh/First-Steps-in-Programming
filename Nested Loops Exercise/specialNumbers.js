function specialNumber(input) {
    let divideNumber = Number(input[0]);
    let output = '';

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let z = 1; z <= 9; z++) {
                    if (divideNumber % i === 0 && divideNumber % j === 0 && divideNumber % k === 0 && divideNumber % z === 0) {
                        output += "" + `${i}${j}${k}${z} `;

                    }
                }
            }
        }
    }
    console.log(output)

}
specialNumber(["3"]);