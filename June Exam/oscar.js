function oscar(input){
    let name = input[0];
    let pointsFromAcademy = Number(input[1]);
    let judge = Number(input[2]);
    let index = 4;
    for(let i = 3;i<=input.length - 1;i+=2){
        let nameJury = input[i];
        let result = Number(nameJury.length)
        let juryPoints = Number(input[index]);
        index += 2;
        pointsFromAcademy += (result * juryPoints / 2);
        if(pointsFromAcademy >= 1250.5){
            break;
        }

    
    }
    if(pointsFromAcademy>= 1250.5){
        console.log(`Congratulations, ${name} got a nominee for leading role with ${(pointsFromAcademy).toFixed(1)}!`);
    }else{
        console.log(`Sorry, ${name} you need ${(1250.5 - pointsFromAcademy).toFixed(1)} more!`);
    }
}
oscar(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
