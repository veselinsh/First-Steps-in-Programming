function birthadayParty(input){
    let hallOfParty = Number(input[0]);
     let cake = hallOfParty * 0.2;
     let drinks = cake * 0.55;
     let animator = hallOfParty / 3;
     let result = hallOfParty + cake + animator + drinks;

     console.log(result);
}
birthadayParty(["2250"]);