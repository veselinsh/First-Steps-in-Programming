function trapecoidArea(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);

    let s = (a + b) * h /2;
    console.log(s.toFixed(2));
}
trapecoidArea(["8","13","7"]);