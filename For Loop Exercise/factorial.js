function factorial(input){
   let factorial = Number(input[0]);
   let result = 1;
   for(let i = 2;i <=factorial;i++){
     result *= i;
   }
   console.log(result);
}
factorial(["8"])