function carryPuppy(input){
    let food = Number(input[0]) * 1000;
    for(let i = 1;i<=input.length - 2;i++){
        let foodPerDay = Number(input[i]);
        food -= foodPerDay;

    }
    if(food >= 0){
        console.log(`Food is enough! Leftovers: ${food} grams.`);
    }else if(food < 0){
        console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`);
    }

}
carryPuppy(["4","130","345","400","180","230","120","Adopted"])