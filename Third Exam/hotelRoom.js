function hotelRoom(input) {
    let month = input[0];
    let countNight = Number(input[1]);
    let apartment = 0;
    let studio = 0;
    let sumForApartment = 0;
    let sumForStudio = 0;
    let discount = 0;

    switch (month) {
        case "May":
        case "October":
            studio = 50;
            sumForStudio = studio * countNight;
            apartment = 65;
            sumForApartment = apartment * countNight; 
               break;
        case "July":
        case "August":
            studio = 76;
            sumForStudio = studio * countNight;
            apartment = 77;
            sumForApartment = apartment * countNight;
            break;
        case "September":
        case "June":
            studio = 75.20;
            sumForStudio = studio * countNight;
            apartment = 68.70;
            sumForApartment = apartment * countNight;
            break;
    }
    if(month === "May" || month === "October"){
        if(countNight > 7 && countNight <= 14){
           sumForStudio = sumForStudio * 0.95
       
        }else if(countNight > 14){
            sumForStudio = sumForStudio * 0.70;
        }
    }else if(month === "June" || month === "September"){
        if(countNight > 14){
            sumForStudio = sumForStudio * 0.80;
        }else{
            sumForStudio = sumForStudio;
        }
    }
    if(countNight > 14){
        sumForApartment = sumForApartment * 0.90;
    }
    console.log(`Apartment: ${sumForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${sumForStudio.toFixed(2)} lv.`);
}
hotelRoom(["June",
"14"])

