function yardGreening(input){
    let area = Number(input);
    let priceForOneYearGreening = 7.61;
    let priceForGreening = area * priceForOneYearGreening;
    let discount = 0.18 * priceForGreening;
    let finalPrice = priceForGreening - discount ;
   console.log(finalPrice);
   console.log(discount);
}
yardGreening("550");