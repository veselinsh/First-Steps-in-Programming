function aluminumJoinery(input) {
    let countJoinery = Number(input[0]);
    let size = input[1];
    let delivery = input[2];
    let price = 0;

    if (countJoinery <= 10) {
        console.log("Invalid order");
    } else {
        switch (size) {
            case "90X130":
                price = countJoinery * 110;
                if (countJoinery > 30 && countJoinery <= 60) {
                    price *= 0.95;
                } else if (countJoinery > 60 ) {
                    price *= 0.92;
                } 
                 if (countJoinery > 99) {
                    if (delivery === "With delivery") {
                        price += 60;
                        price *= 0.96;
                    } else {
                        price *= 0.96;
                    }
                }
                break;
            case "100X150":

                price = countJoinery * 140;

                if (countJoinery > 40 && countJoinery <= 80) {
                    price *= 0.94;
                } else if (countJoinery > 80) {
                    price *= 0.90;
                } 
                if (countJoinery > 99) {
                    if (delivery === "With delivery") {
                        price += 60;
                        price *= 0.96;
                    } else {
                        price *= 0.96;
                    }
                }
                break;
            case "130X180":
                price = countJoinery * 190;
 
                if (countJoinery > 20 && countJoinery <= 50) {
                    price *= 0.93;
                } else if (countJoinery > 50) {
                    price *= 0.88;
                } 
                 if (countJoinery > 99) {
                    if (delivery === "With delivery") {
                        price += 60;
                        price *= 0.96;
                    } else {
                        price *= 0.96;
                    }
                }
                break;
            case "200X300":
                price = countJoinery * 250;
                if (countJoinery > 25 && countJoinery <= 50) {
                    price *= 0.91;
                } else if (countJoinery > 50) {
                    price *= 0.86;
                } 
                if (countJoinery > 99) {
                    if (delivery === "With delivery") {
                        price += 60;
                        price *= 0.96;

                    } else {
                        price *= 0.96;
                    }
                }
                break;
        }
        console.log(`${price.toFixed(2)} BGN`);
    }


}
aluminumJoinery(["105", "100X150", "With delivery"])

