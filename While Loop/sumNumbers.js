function sumNumbers(input){
    let index = 0;
    let total = Number(input[index]);
    index++;
    let sum = 0;
    while(sum < total){ 
        let numbers = Number(input[index]);
        sum += numbers;
        index++;

    }
           console.log(sum);
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])
