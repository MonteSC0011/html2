// console.log("Hello World");

// let randomNumber = Math.random(); //0.0-1

// if (randomNumber < 0.50) {

//     console.log("Condition was Met");
//     console.log(randomNumber);

// }

// // 
// if (randomNumber >= 0.5) {

//     console.log('Condition Was Met');
//     console.log(randomNumber); 
// }

// 
// const dayOfWeek = 'Saturday';

// if (dayOfWeek === 'Monday'){
//     console.log("Yay its Monday!");

// } else if (dayOfWeek === 'Friday'){

//     console.log("Yay Its Friday");

// } else if (dayOfWeek === 'Saturday') {

//     console.log("You have the correct Day from the variable"); 
// }

// const age = prompt("Enter An Age");

// if (age < 5) {

//     console.log("Hey, you're a baby!");

// } else if (age < 10) {

//     console.log("Hey, you're just a kid!");
// } else if (age < 35) {

//     console.log("You're getting older.");
// }
// // IF ALL OTHER CONDITIONS FAIL - ELSE.
// else {

//     console.log("You are over the age of 35.");
// }

const fruit = 'Peach';

switch (fruit) {

    case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        break;
    case 'Bananas':
        console.log("Bananas are $0.10 a pound");
        break;
    case 'Avocados':
        console.log("Advocados are expensive");   
        break; 
    case 'Papayas':
        console.log("Papayas are $0.70 a pound");
        break;
    default:
        console.log("Last Resort If All Conditions Fail");

}