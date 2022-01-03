function trekkingMania(input) {
    let groupClimbers = Number(input[0]);
    let sumClimbers = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= groupClimbers; i++) {
        let participants = Number(input[i]);
        if (participants <= 5) {
            p1 += participants
        } else if (participants >= 6 && participants <= 12) {
            p2 += participants;
        } else if (participants > 12 && participants < 26) {
            p3 += participants;
        } else if (participants > 25 && participants < 41) {
            p4 += participants;
        } else if (participants > 40) {
            p5 += participants;
        }
        sumClimbers += participants;
    }
    
    console.log(`${(p1 / sumClimbers * 100).toFixed(2)}%`);
    console.log(`${(p2 / sumClimbers * 100).toFixed(2)}%`);
    console.log(`${(p3 / sumClimbers * 100).toFixed(2)}%`);
    console.log(`${(p4 / sumClimbers * 100).toFixed(2)}%`);
    console.log(`${(p5 / sumClimbers * 100).toFixed(2)}%`);

}
trekkingMania(["10", "10", "5", "1", "100", "12", "26",
    "17", "37", "40", "78"])