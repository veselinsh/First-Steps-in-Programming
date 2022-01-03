function mountainRain(input){
     let record = Number(input[0]);
     let distance = Number(input[1]);
     let timeForOneMeter = Number(input[2]);
     let time = 0.0;
    let late = 0.0;
    late = (Math.floor(distance / 50)) * 30;
    time = timeForOneMeter * distance + late;
    if(time < record){
        console.log(`Yes! The new record is ${(time).toFixed(2)} seconds."`);
    }else{
        console.log(`No! He was ${(time - record).toFixed(2)} seconds slower.`);
    }


}
mountainRain([5554.36, 1340,3.23])