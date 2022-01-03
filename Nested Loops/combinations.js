function combinations(input){
   let n = Number(input[0]);
   let combination = 0;

   for(let i = 0;i<=n;i++){
       for(let j = 0;j<=n;j++){
           for(let p = 0;p<=n;p++){
               if((p + j + i) === n){
                   combination++;
               }
           }
       }
   }
   console.log(combination);
}
combinations(["25"]);