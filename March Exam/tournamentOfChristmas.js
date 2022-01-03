function tournamentOfChristmas(input){
    let days = Number(input[0]);
    let donations = 0;
    let counterWin = 0;
    let counterLose = 0;
    let index = 1;
   
    for(let i = 1;i<= days;i++){ 
        let command = input[index++]
        let dayWin = 0;
        let dayLose = 0;
        let dayDonations = 0;
        while(command !== "Finish"){

            let type = input[index++];
            if(type === "win"){
              dayWin++;
              counterWin++;
              dayDonations += 20;
            }else{
                dayLose++;
                counterLose++;
            }
            command = input[index++];
        }
        if(dayWin > dayLose){
            dayDonations *= 1.10;
            donations += dayDonations;
        }else{
            donations += dayDonations;
        }
    }
   if(counterWin > counterLose){
       donations *= 1.2;
       console.log(`You won the tournament! Total raised money: ${donations.toFixed(2)}`);
   }else{
       console.log(`You lost the tournament! Total raised money: ${donations.toFixed(2)}`);
   }


}
tournamentOfChristmas
