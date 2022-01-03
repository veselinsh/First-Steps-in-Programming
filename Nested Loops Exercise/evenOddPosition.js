function evenOddPosition(input) {
    let down = Number(input[0]);
    let up = Number(input[1]);
    let printLine = '';

    for (let i = down; i <= up; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if(j%2===0){
                evenSum += currentDigit;
            }else{
                oddSum += currentDigit;
            }
        }
        if(evenSum === oddSum){
            printLine += `${i} `
        }
    }
    console.log(printLine);

}
evenOddPosition(["100000",
    "100050"])
