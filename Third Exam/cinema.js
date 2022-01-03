function cinema(input){
     let typeOfCinema = input[0];
     let lines = Number(input[1]);
     let columns = Number(input[2]);
     let result = 0.0;
      if(typeOfCinema === 'Premiere'){
          result = lines * columns * 12.00;
          console.log((result).toFixed(2));
      }else if(typeOfCinema === 'Normal'){
        result = lines * columns * 7.50;
        console.log((result).toFixed(2));
      }else{
        result = lines * columns * 5.00;
        console.log((result).toFixed(2));
      }
}
cinema(["Premiere","10","12"]);
