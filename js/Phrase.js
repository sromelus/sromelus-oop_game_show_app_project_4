/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }

   /**
   * add each character of a random phrase on start game screen
   **/
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

   /**
   * check if letter is in the phrase
   * @param {character} letter - Any letter from a-z
   * @return {boolean}  true or false
   **/
   checkLetter(letter){
     return this.phrase.includes(letter)
   }

   /**
   * show letters that are in the phrase
   * @param {character} letter - Any letter from a-z
   **/
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
