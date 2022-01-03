function suitcasesLoad(input){
    let index = 0;
    let command = input[index++];
    let suits = 0;
    while(command !== "End"){
        let capacity = Number(command);
         let suitcase = Number(input[index++]);
         suits++;
        if(index % 3 === 0){
            suitcase *= 1.10;
        }
        capacity -= suitcase;
        if(capacity < 0){
            console.log(`No more space!`)
           console.log(`Statistic: ${suits} suitcases loaded.`);
            break;
        }
        command = input[index++];
    }
    console.log(`Congratulations! All suitcases are loaded!`);
    console.log(`Statistic: ${suits} suitcases loaded.`);
}
suitcasesLoad(["550","100","252","72","End"]);