function books(input){
   let pages = Number(input[0]);
   let pagesforHour = Number(input[1]);
   let numberOfDaysForOneBook = (input[2]);
   let result = (pages / pagesforHour) / numberOfDaysForOneBook;
   console.log(result);
}
books(["212","20","2"]);
