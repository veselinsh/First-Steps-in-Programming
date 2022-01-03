function cinemaTickets(input){
let index = 0
   let command = input[index++];
   let standard = 0;
   let kid = 0;
   let student = 0;
   let totaltickets = 0;
   let tempTicket = 0
   while(command !== "Finish"){
       let name = command;
       let capacity = Number(input[index++]);
       let typeTickets = input[index++];
       while(typeTickets !== "End" || (index - 1) !== capacity){
           if(capacity <= tempTicket){
               break;
           }
           switch(typeTickets){
               case "student":
            student++;
            totaltickets++;
            break;
            case "standard":
                standard++;
                totaltickets++;
                break;
                case "kid":
                kid++;
                totaltickets++;
                break;
           }
           tempTicket++;
           type = input[index++];
       }
       console.log(`${name} - ${(tempTicket / capacity )*100}% full.`);
     
       command = input[index++];
   }
}
cinemaTickets(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student",
"student","student","student","student","student","Finish"])
