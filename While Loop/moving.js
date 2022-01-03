function moving(input){
    let index = 0;
    let w = input[index];
    index++;
    let l = input[index];
    index++;
    let h = input[index];
    let freeCubicMeter = l * h * w;
    index++;
    let command = input[index];
    index++;
    while(command !== "Done"){
        let box = Number(command); 
        freeCubicMeter -= box;
        if(freeCubicMeter < 0){
            console.log(`No more free space! You need ${Math.abs(freeCubicMeter)} Cubic meters more.`);
            break;
        }
      
        command = input[index];
        index++;
    }
    if(freeCubicMeter >= 0){
          console.log(`${freeCubicMeter} Cubic meters left.`);
    }
  
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

