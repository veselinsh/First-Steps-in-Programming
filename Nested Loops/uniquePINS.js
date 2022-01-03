function uniquePin(input){
    let border1 = Number(input[0]);
    let border2 = Number(input[1]);
    let border3 = Number(input[2]);
    for(let i = 1;i<=border1;i++){
        for(let j=2;j<=border2;j++){
            for(let k = 1;k<=border3;k++){
                if(i % 2 === 0 && Number.isInteger(j) && k % 2 ===0 ){
                    console.log(`${i} ${j} ${k}`)
                }
            }
        }
    }

}
uniquePin(["3","5","5"]);