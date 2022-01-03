function roomPainting(input){
    let countPaint = Number(input[0]);
    let pricePaint = countPaint * 21.50;
    let countWallpaper = Number(input[1]);
    let priceWallpaper = countWallpaper * 5.20;
    let countGloves = Math.ceil(countWallpaper * 0.35);
    let countBrush = Math.floor(countPaint * 0.48);
    let priceGloves = Number(input[2]);
    let priceBrush = Number(input[3]);
    let result = 0;
    let delivery = 0
    result = pricePaint + priceWallpaper + (countGloves * priceGloves ) + (priceBrush * countBrush);
    delivery = (result.toFixed(2)) / 15;
console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);

}
roomPainting([ '10', '8', '2.2', '5' ])