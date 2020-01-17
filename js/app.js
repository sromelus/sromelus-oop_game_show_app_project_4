/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const phrasesArray = [
   'America is a very powerfull contry',
   'The game had begun',
   'The pencil is long',
   'I am doing my work',
   'Trump is the current president',
   'I love watching TV'
 ]

let game1;

 document.querySelector('#overlay').addEventListener('click', () =>{
   game1 = new Game(0, phrasesArray);
   game1.startGame();
   document.querySelector('#overlay').style.display = 'none'
 })

 document.querySelectorAll('#qwerty').addEventListener('click', (e) => {
   game1.handleInteraction(e.target);
 });



  // const phraseLetters = document.querySelectorAll('#phrase li');
//  let li =  document.createElement('li');
//  li.innerText = '<li>MacCheese</li>'
//
//  console.log(document.querySelector("#phrase ul").appendChild(li))
//  // .appendChild('<li>MacCheese</li>');
//
// p = new Phrase('Hey mami');
// // debugger
// p.addPhraseToDisplay();
// // debugger
// // p.showMatchLetter('h');
// // debugger
//
//
//  document.addEventListener('keydown', function(event){
//      game.handleKeydown(event);
//  });
//
//
//
//  const isBelowThreshold = (currentValue) => currentValue === 3;
//
//  const array1 = [3, 3, 3, 3, 3, 3];
//
//  console.log(array1.every(isBelowThreshold));
//
//  const letters = document.querySelectorAll('#phrase li')
//  // document.querySelectorAll('#phrase li')[5].classList.remove('hide')
//  const isAllLetterShowing = (li) => li.classList.value.split(' ').includes('hide')
