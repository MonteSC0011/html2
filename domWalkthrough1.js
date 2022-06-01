/*
console.dir(document);

// Gives the domain of the web page.
console.log(document.domain);
// Gives the URL of the web page.
console.log(document.URL); 

THE DOCUMENT ATTRIBUTE CAN ACCESS DIFFERENT ELEMENTS.

console.log(document.title);

console.log(document.doctype);

console.log(document.head);

console.log(document.body);

console.log(document.all);

console.log(document.all[10])
*/

// console.log(document.all[10]);

// document.all[10].textContent = "I am changing the header";

// console.log(document.forms);

// console.log(document.links);
// console.log(document.images); 

/////////////////////
//GetElementByID

// console.log(document.getElementById('header-title'));

// // 
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);


// headerTitle.textContent = "Changed the Title again."
// headerTitle.innerText = "Hello Changed You Again"

// headerTitle.style.color = 'hotpink';

/////////////////////////////////////
//////////GetElementByClassName

var items = document.getElementsByClassName('list-group-item');

console.log(items); 

// 
items[1].style.backgroundColor = 'pink'; 
items[1].style.fontWeight = 'bold'; 
items[1].textContent = 'Skee Wee'
items[1].style.color = 'green';

items[0].style.backgroundColor = 'red'; 
items[0].style.fontWeight = 'bold'; 
items[0].textContent = 'Ooooop'
items[0].style.color = 'white';

items[2].style.backgroundColor = 'blue'; 
items[2].style.fontWeight = 'bold'; 
items[2].textContent = 'Zeee Phi'
items[2].style.color = 'white';

// 
// for (let i = 1; i <=10; i++) {
//     console.log(i);
// }

// 
// for (let i = 0; i <=20; i+=2) {

//     console.log(i);

// }

// for (let i = 100; i >= 0; i-=2) {

//     console.log(i);
// }

const myDiamonds = ['Snacky','Scary','Lily','IttyBitty','Pinchie', 'Piggy','Lanky','Nibbles','Kibbles'];

for (let i = 0; i < myDiamonds.length; i++) {
    console.log(i, myDiamonds[i]);
}



