function fishTank(input){
      let lenght = Number(input[0]);
      let width = Number(input[1]);
      let height = Number(input[2]);
    let procentOfFishTank = Number(input[3]);
    let V = lenght * width * height;
    let procent = procentOfFishTank * 0.01;
     let waterInFishTank = V * 0.001;
    let pureArea = waterInFishTank * (1 - procent);
    console.log(pureArea);
}   
fishTank(["85","75","47","17"])
