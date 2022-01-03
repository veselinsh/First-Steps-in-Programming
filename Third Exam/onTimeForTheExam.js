function onTimeForTheExam(input){
    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hourArrived = Number(input[2]);  
    let minutesArrived = Number(input[3]);
    let examInMinutes = hourExam * 60  + minutesExam;
    let arrivedInMinutes = hourArrived * 60 + minutesArrived;

    if(examInMinutes - arrivedInMinutes <= 30 && examInMinutes - arrivedInMinutes >= 0){
        console.log("On time");
        if(examInMinutes - arrivedInMinutes !== 0){
              console.log(`${examInMinutes - arrivedInMinutes} minutes before the start`);
        }
    }else if(examInMinutes - arrivedInMinutes > 30){
        console.log("Early");
       if(examInMinutes - arrivedInMinutes < 60){
           console.log(`${examInMinutes - arrivedInMinutes} minutes before the start" `)
       }else{
           let diff =  examInMinutes - arrivedInMinutes;
           let h = Math.floor(diff / 60);
           let min = diff % 60;
           if(min < 10){
            console.log(`${h}:0${min} hours before the start`);
           }else{
           console.log(`${h}:${min} hours before the start`);
           }
       }
    }else{
        console.log("Late");
      let diff = Math.abs(arrivedInMinutes - examInMinutes);
      let h = Math.floor(diff / 60);
      let min = diff % 60;
      if(diff < 60){
          console.log(`${diff} minutes after the start`);
      }else{
        if(min < 10){
            console.log(`${h}:0${min} hours after the start`);
        }else{
            console.log(`${h}:${min} hours after the start`);
        }
      }
    }
  
} 
onTimeForTheExam(["10",
"00",
"10",
"00"])









