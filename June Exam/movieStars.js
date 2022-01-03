function movieStars(input){
    let budget = Number(input[0]);
    let index = 1;
    let command = input[index++];
    let result = 0;
    let isLong = false;
    while(command !== "ACTION"){
        let name = command;
      if(result > budget){
          break;
      }
        if(name.length > 15){
           isLong = true;
        }
        if(isLong){
            let currentSalary = 0.2 * budget;
            budget -= currentSalary;
            isLong = false;
        }else{ 
             let salary = Number(input[index++]);
            budget -= salary;
        }
        command = input[index++];
        
      
    }
    if(budget >= 0){
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }else{
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    }
   

}movieStars(["90000",
"Christian Bale",
"70000.50",
"Leonard DiCaprio",
"Kevin Spacey",
"24000.99"])
