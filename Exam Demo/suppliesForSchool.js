function suppliesForSchool(input){
  let packsPen = Number(input[0]);
  let packsMarkers = Number(input[1]);
  let literDezinfektant = Number(input[2]);
  let procentDiscount = Number(input[3]);
  let result = 0.0;

  result = (packsPen * 5.80) + (packsMarkers * 7.20) + (literDezinfektant * 1.20);
  result = result * ((100 - procentDiscount)/100);
  console.log(result.toFixed(3));


}
suppliesForSchool(["2","3","2.5","25"]);