function foodForPets(input){
    let countDay = Number(input[0]);
    let quantityFood = Number(input[1]);
    let dogFood = 0;
    let catFood = 0;
    let day3Cat = 0;
    let day3Dog = 0;
    let bisquits = 0;
    let eatenFood = 0;

    for(let i =2;i<=input.length - 1;i++){
        eatenFood += Number(input[i]);
    }
   

    for(let i = 2;i<=input.length - 1;i+=2){
        dogFood += Number(input[i]);
    }
    
    for(let i = 3;i<=input.length - 1;i+=2){
        catFood += Number(input[i]);
    }
    if(countDay >= 3){
        for(let i=6;i<=input.length - 1;i++){
           day3Dog = Number(input[i]);
           day3Cat = Number(input[++i]);
        }
        bisquits = (day3Cat + day3Dog) * 0.10;
        } 
    console.log(`Total eaten biscuits: ${Math.ceil(bisquits)}gr.`);
    console.log(`${((eatenFood / quantityFood)*100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((dogFood / eatenFood)*100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((catFood / eatenFood)*100).toFixed(2)}% eaten from the cat.`);
   
   

}
foodForPets(["3","1000","300","20","100","30","110","40"])