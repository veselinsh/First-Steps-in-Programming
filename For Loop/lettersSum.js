function lettersSum(input){
   //  буква	a	e	i	o	u
   // стойност	1	2	3	4	5
   let letter = input[0];
   let sum = 0;
   for(let i = 0;i < letter.length;i++){
      let noun = letter[i];
    switch(noun){
        case "a": sum += 1; break;
        case "e": sum += 2;break;
        case "i": sum += 3;break;
        case "o": sum += 4;break;
        case "u": sum += 5;break;
    }
   }
   console.log(sum);
    
}
lettersSum(["hello"]);