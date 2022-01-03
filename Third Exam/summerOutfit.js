function summerOutfit(input){
   let degree = Number(input[0]);
   let periodOfDay = input[1];
   let outfit = "";
   let shoes = "";

   if(degree >= 10 && degree <= 18){
        if(periodOfDay === "Morning"){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }else if(periodOfDay === "Afternoon" || periodOfDay === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins"
        }
   }else if(degree > 18 && degree <= 24){
       if(periodOfDay === "Morning"){
        outfit = "Shirt";
        shoes = "Moccasins";
        
       }else if(periodOfDay === "Afternoon"){
        outfit = "T-Shirt";
        shoes = "Sandals";
        
       }else if(periodOfDay === "Evening"){
        outfit = "Shirt";
        shoes = "Moccasins";
        
       }

   }else if(degree >= 25){
      if(periodOfDay === "Morning"){
        outfit = "T-Shirt";
        shoes = "Sandals";
      }else if(periodOfDay === "Afternoon"){
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }else if(periodOfDay === "Evening"){
        outfit = "Shirt";
        shoes = "Moccasins";
      }
   }
   console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["22",
"Afternoon"]);
