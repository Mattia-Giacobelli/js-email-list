console.log('Email list');


/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/

//Save ul DOM element
const emailListEl = document.getElementById('email-list')
console.log(emailListEl);


//Stamp 10 random email as li
//-create variable with li markup
let emailLi


//Trasform into a function
function getRandomEmails(markupEl, stampInEl) {

    //-Create varible wuth api URL
    const randomEmail = 'https://flynn.boolean.careers/exercises/api/random/mail'
    
    //-cycle 10 times to generate the email addresses
    for (let i = 1; i <= 10; i++) {
        //-Get emails from boolean API
        fetch(randomEmail)
        .then(response => response.json())
        .then(data => {
            console.log(data.response);
            //-Add email to li
            markupEl = `<li class="list-group-item">${data.response}</li>`
            //-Stamp result in the ul
            stampInEl.innerHTML += markupEl
        })
    }
}

getRandomEmails(emailLi, emailListEl)
    
//Generate 10 new mails on button click
const buttonEl = document.querySelector('button')

buttonEl.addEventListener('click', () => {
    getRandomEmails(emailLi, emailListEl)
})