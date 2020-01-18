/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }

   addPhraseToDisplay(){
     const currentPhrase = this.phrase.split('');
     const phraseSection = document.querySelector('#phrase ul');

     currentPhrase.forEach(letter => {
       const li = document.createElement('li');
       if(letter === " "){
         li.className = 'space';
         li.innerText = letter;
       } else {
         li.className = `hide letter ${letter}`;
         li.innerText = letter;
       }
       phraseSection.appendChild(li);
     });
   }

   checkLetter(letter){
     return this.phrase.includes(letter)
   }

   showMatchLetter(letter){
     const phraseLetters = document.querySelectorAll('#phrase li')
     phraseLetters.forEach(li =>  {
       if(li.innerText === letter ){
         li.classList.remove('hide')
         li.classList.add('show')
       }
     })
   }
 }
