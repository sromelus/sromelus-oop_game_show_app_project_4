/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // let li =  document.createElement('li');
 // li.innerText = '<li>MacCheese</li>'
 //
 // console.log(document.querySelector("#phrase ul").appendChild(li))
 // // .appendChild('<li>MacCheese</li>');

p = new Phrase('Hey mami');
// debugger
p.addPhraseToDisplay();
// debugger
// p.showMatchLetter('h');
// debugger
 document.querySelector('#overlay').addEventListener('click', () =>{
    document.querySelector('#overlay').style.display = 'none'
 })

 document.addEventListener('keydown', function(event){
     game.handleKeydown(event);
 });

 //
 // qwerty.addEventListener('click', (e) => {
 //   const clickedLetter = e.target.innerText;
 //   p.checkLetter(clickedLetter)
 // });

 const isBelowThreshold = (currentValue) => currentValue === 3;

 const array1 = [3, 3, 3, 3, 3, 3];

 console.log(array1.every(isBelowThreshold));

 const letters = document.querySelectorAll('#phrase li')
 // document.querySelectorAll('#phrase li')[5].classList.remove('hide')
 const isAllLetterShowing = (li) => li.classList.value.split(' ').includes('hide')
