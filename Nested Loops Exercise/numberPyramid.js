function numberPyramid(input){
    let n = Number(input[0]);
    let isBigger = false;
    let current = 1;
    let printLine = ""; 

    for(let i = 1;i<=n;i++){
        for(let j = 1;j<=i;j++){
           if(current > n){
               isBigger = true;
               break;
           }
           printLine += current + " ";
           current++;
        }
        console.log(printLine);
        printLine = "";
        if(isBigger){
            break;
        }
    }
}
numberPyramid(["7"]);