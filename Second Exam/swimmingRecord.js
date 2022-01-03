function swimmingRecord(input){
    let worldRecord = Number(input[0]);
    let distanceForRecord = Number(input[1]);
    let secondsForOneMeter = Number(input[2]);
    let time = distanceForRecord * secondsForOneMeter;
    let delay = Math.floor(distanceForRecord / 15) * 12.5;
   

    let finalresult = time + delay;
 
   if(worldRecord <= finalresult){
          console.log(`No, he failed! He was ${(finalresult - worldRecord).toFixed(2)} seconds slower.`);
    }else if(finalresult <= worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${(finalresult).toFixed(2)} seconds.`)
   }

}
swimmingRecord(["55555.67","3017","5.03"])



