/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const phrasesArray = [
   'Hii Airpockets baby',
   'I love your ass',
   'The pencil is long',
   'I am doing my work',
   'Dance',
   'I love instagram'
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

// `${e.target.innerText}`

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
