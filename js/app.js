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

document.querySelector('#btn__reset').addEventListener('mouseover', () =>{
  document.querySelector('.title').classList.add('animate');
})

document.querySelector('#btn__reset').addEventListener('mouseleave', () =>{
  document.querySelector('.title').classList.remove('animate');
})

 document.querySelector('#btn__reset').addEventListener('click', () =>{
   game1 = new Game(0, phrasesArray);
   game1.resetGame();
   game1.startGame();
 })

 document.addEventListener("keypress", (e) => {
   if(document.querySelector('#overlay').style.display === 'none'){
     document.querySelectorAll('#qwerty button').forEach(button =>{
       if(e.key === button.innerText && button.className === 'key'){
         game1.handleInteraction(button);
       }
     });
   } else {
     if(e.key === ' '){
       game1 = new Game(0, phrasesArray);
       game1.resetGame();
       game1.startGame();
     }
   }
 });

 document.querySelector('#qwerty').addEventListener('click', (e) => {
   if(e.target.tagName === 'BUTTON'){
     game1.handleInteraction(e.target);
   }
 });
