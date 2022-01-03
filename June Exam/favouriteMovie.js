function favouriteMovie(input){
    let index = 0;
    let command = input[index++];
    let counterMovie = 0;
    let pointsMovie = 0;
    let maxPoints = Number.MIN_SAFE_INTEGER;
    
    while(command !== "STOP" || counterMovie !== 7){
        let nameMovie = command;
        counterMovie++;
        for(let i = 0;i <= nameMovie - 1;i++){
           pointsMovie += nameMovie.charCodeAt(i);

        }
        command = input[index++];
        console.log(pointsMovie);
    }

    

}
favouriteMovie(["Matrix",
"Breaking bad",
"Legend",
"STOP"])
