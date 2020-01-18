/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const phrasesArray = [
   'The sky is blue',
   'Treehouse is the best',
   'The pencil is long',
   'I am doing my work',
   'Dance Monkey',
   'I love coding javascript'
 ]

let game1;

 document.querySelector('#overlay').addEventListener('click', () =>{
   game1 = new Game(0, phrasesArray);
   game1.resetGame();
   game1.startGame();
   document.querySelector('#overlay').style.display = 'none'
 })

 document.querySelector('#qwerty').addEventListener('click', (e) => {
   if(e.target.tagName === 'BUTTON'){
     game1.handleInteraction(e.target);
   }
 });
