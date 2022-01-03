function easterLunch(input){
    let kozunak = Number(input[0]);
    let eggs = Number(input[1]);
    let cookie = Number(input[2]);
    let result = 0;

    result = kozunak * 3.20 + eggs * 4.35  + cookie * 5.40 + eggs * 12 * 0.15;
    console.log(result.toFixed(2)); 
}
easterLunch(["3","2","3"])