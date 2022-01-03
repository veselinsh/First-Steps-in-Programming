function oldBooks(input){
   let favouriteBook = input[0];
   let bookIsFound = false
   let index = 1;
   let nextBook = input[index];

   while(nextBook !== "No More Books"){
       if(nextBook === favouriteBook){
           bookIsFound = true;
           break;
       }
       index++;
       nextBook = input[index];
    }
    if(bookIsFound === true){
        console.log(`You checked ${index-1} books and found it.`);
    }
    else{
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`)
    }
}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])
