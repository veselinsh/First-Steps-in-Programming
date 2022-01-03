function building(input) {
    let floor = Number(input[0]);
    let rooms = Number(input[1]);
    

    for (let i = floor; i > 0; i--) {
        let result = "";
        for (let j = 0; j < rooms; j++) {
            if(i === floor){
                 result +=  "L" + i + j + " ";
            }else if(i % 2 === 0){
                result +=  "O" + i + j + " ";
            }else{
                result +=  "A" + i + j + " ";
            }
         
        }
        console.log(result);
    }

}
building(["9", "5"])