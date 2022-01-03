function coins(input){
   let balance = Number(input[0]) * 100;
   let coins = 0;
   while(balance !== 0){
      if(balance - 200 >= 0){
          coins++;
          balance -= 200;
      }else if(balance - 100 >= 0){
        coins++;
        balance -= 100;
    }else if(balance - 50 >= 0){
        coins++;
        balance -= 50;
    }else if(balance - 20 >= 0){
        coins++;
        balance -= 20;
    }else if(balance - 10 >= 0){
        coins++;
        balance -= 10;
    }else if(balance - 5 >= 0){
        coins++;
        balance -= 5;
    }else if(balance - 2 >= 0){
        coins++;
        balance -= 2;
    }else if(balance - 1 >= 0){
        coins++;
        balance -= 1;
    }else{
        break;
    }
   }
   console.log(coins);
}
coins(["1.23"]);