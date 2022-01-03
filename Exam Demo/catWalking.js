function catWalking(input){
     let minutesWalk = Number(input[0]);
     let countWalk = Number(input[1]);
     let caloriesPerDay = Number(input[2]);
     let result = 0.0;

     result = (minutesWalk * countWalk * 5);
     if(result >= caloriesPerDay * 50 /100 ){
         console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${result}.`);
     }else{
         console.log(`No, the walk for your cat is not enough. Burned calories per day: ${result}.`);
     }
}
catWalking(["30","3","600"]);