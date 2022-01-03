function newHouse(input){
   let typeFlower = input[0];
   let numberFlowers = Number(input[1]);
   let budget = Number(input[2]);
   let result = 0.0;
   
   if(typeFlower === "Roses"){
     if(numberFlowers > 80){
         result = numberFlowers * 5 * 0.9;
     }else{
         result = numberFlowers * 5;
     }
   }else if(typeFlower === "Dahlias"){
       if(numberFlowers > 90){
        result = numberFlowers * 3.80 * 0.85;
       }else{
        result = numberFlowers * 3.80; 
       }
   }else if(typeFlower === "Tulips"){
       if(numberFlowers > 80){
        result = numberFlowers * 2.80 * 0.85;
       }else{
        result = numberFlowers * 2.80;
       }

   }else if(typeFlower === "Narcissus"){
       if(numberFlowers < 120){
        result = numberFlowers * 3 * 1.15;
       }else{
        result = numberFlowers * 3;
       }

   }else if(typeFlower === "Gladiolus"){
       if(numberFlowers < 80){
        result = numberFlowers * 2.50 * 1.20;
       }else{
        result = numberFlowers * 2.50;
       }
   }
   if(budget < result){
       console.log(`Not enough money, you need ${(result - budget).toFixed(2)} leva more.`);
   }else{
       console.log(`Hey, you have a great garden with ${numberFlowers} ${typeFlower} and ${(budget - result).toFixed(2)} leva left.`);
   }
}
newHouse(["Roses","55","250"]);
