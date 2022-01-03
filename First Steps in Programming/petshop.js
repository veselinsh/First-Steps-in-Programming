function petShop(input){
    let dogs = Number(input[0]);
    let otherPets = Number(input[1]);
    let priceForDogsFood = 2.5;
    let priceForOtherPetsFood = 4;

    let result = (dogs * priceForDogsFood) + (otherPets * priceForOtherPetsFood);

    console.log(result);

}
petShop(["5","4"]);