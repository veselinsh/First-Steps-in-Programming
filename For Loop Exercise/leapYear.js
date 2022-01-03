function leapYear(input){
   let beginnigYear = Number(input[0]);
   let finalYear =  Number(input[1]);

   for(let i = beginnigYear;i<=finalYear;i+=4){
       console.log(i);
   }
}
leapYear(["1908","1919"])
