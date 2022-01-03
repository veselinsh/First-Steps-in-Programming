function bestPlayer(input) {
    let index = 0;
    let command = input[index++];
    let goalsTop = Number.MIN_SAFE_INTEGER;
    let names = "";
    while (command !== "END") {
        let name = command;
        names = name;
        let goals = Number(input[index++]);
        if (goals > goalsTop) {
            goalsTop = goals; 
            
        }
        if (goalsTop >= 10) {
            console.log(`${names} is the best player!`);
            console.log(`He has scored ${goalsTop} goals and made a hat-trick !!!`);
            break;
        }  
        command = input[index++];
    } 
    if (goalsTop < 10){
          if (goalsTop < 3) {
        console.log(`${names} is the best player!`);
        console.log("He has scored 2 goals.");
    } else {
        console.log(`${names} is the best player!`);
        console.log(`He has scored ${goalsTop} goals and made a hat-trick !!!`)
        
    }
    }


}
bestPlayer(["Neymar", "5", "Ronaldo", "10"])