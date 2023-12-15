// Code your solutions in this file
const names = ["Guadalupe","Ollie", "Aki"];

function writeCards(names, wedding){

    let messages = [];
    for ( let i = 0; i < names.length; i++){
       let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`
       messages.push(message); 
    }
 return messages;
}


function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}
