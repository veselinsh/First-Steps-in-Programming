function project(input){
    let nameOfArchitecture = input[0];
    let numbersOfProjects = Number(input[1]);
    let hoursOfMakeProjects = numbersOfProjects * 3;

    console.log(`The architect ${nameOfArchitecture} will need ${hoursOfMakeProjects} hours to complete ${numbersOfProjects} project/s.` );
}
project(["George","4"]);