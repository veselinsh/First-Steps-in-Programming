function balls(input) {
    let num = Number(input[0]);
    let points = 0;
    let pointsRed = 0;
    let pointsOrange = 0;
    let pointsYellow = 0;
    let pointsWhite = 0;
    let pointsBlack = 0;
    let otherColorPoints = 0
    for (let i = 1; i <= num; i++) {
        let currentColor = input[i];
        switch (currentColor) {
            case "red":
                points += 5;
                pointsRed++;
                break;
            case "orange":
                points += 10;
                pointsOrange++;
                break;
            case "yellow":
                points += 15;
                pointsYellow++;
                break;
            case "white":
                points += 20;
                pointsWhite++;
                break;
            case "black":
                points /= 2;
                pointsBlack++;
                break;
            default:
                otherColorPoints++;

        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Points from red balls: ${pointsRed}`);
    console.log(`Points from orange balls: ${pointsOrange}`);
    console.log(`Points from yellow balls: ${pointsYellow}`);
    console.log(`Points from white balls: ${pointsWhite}`);
    console.log(`Other colors picked: ${otherColorPoints}`);
    console.log(`Divides from black balls: ${pointsBlack}`);
}
balls(["10", "white", "white", "ee","red","orange","red","black","black","black","black"]);