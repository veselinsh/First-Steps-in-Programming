function goldMine(input){
    let index = 0;
    let numLocations = Number(input[index++]);
    for(let i = 0;i<numLocations;i++){
         let expactionGold = Number(input[index++]);
         let daysInMine = Number(input[index++]);
         let countGold = 0;
         let result = 0;
         for(let j = 0;j<daysInMine;j++){
             let goldPerDay = Number(input[index++]);
             countGold += goldPerDay;
         }
         result = countGold / daysInMine;
         if(expactionGold <= result ){
             console.log(`Good job! Average gold per day: ${(result).toFixed(2)}.`);
         }else{
             console.log(`You need ${(expactionGold - result).toFixed(2)} gold.`);
         }
    }
   

}goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])