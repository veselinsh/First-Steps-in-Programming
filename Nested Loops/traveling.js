function traveling(input){
let index = 0;
let destination = input[index++];

while(destination !== "End"){
    let budget = Number(input[index++]);
    let savedMoney = 0;

    while(savedMoney <= budget){
        let currentSavedMoney = Number(input[index++]);
        savedMoney += currentSavedMoney

        if(savedMoney >= budget){
            console.log(`Going to ${destination}!`);
                 break;
        }else{

        }
    }
    destination = input[index++];
}


}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])

