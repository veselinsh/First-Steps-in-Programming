function barcodeGenerator(input) {
    let firstNumber = input[0];
    let lastNumber = input[1];
    let output = ''

    for (let i = Number(firstNumber.charAt(0)); i <= Number(lastNumber.charAt(0)); i++) {
        for (let j = Number(firstNumber.charAt(1)); j <= Number(lastNumber.charAt(1)); j++) {
            for (let k = Number(firstNumber.charAt(2)); k <= Number(lastNumber.charAt(2)); k++) {
                for (let z = Number(firstNumber.charAt(3)); z <= Number(lastNumber.charAt(3)); z++) {
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && z % 2 !== 0){
                       output += "" + `${i}${j}${k}${z} `;
                    }
                }
            }
        }
    }
    console.log(output);



}
barcodeGenerator(["2345", "6789"])