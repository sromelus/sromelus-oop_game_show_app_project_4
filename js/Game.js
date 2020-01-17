/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(missed = 0, phrases){
     this.missed = missed;
     this.phrases = phrases;
     this.activePhrase = null;
   }

   startGame(){
     document.querySelector('#overlay').style.display = 'none';
     this.activePhrase = new Phrase(this.getRandomPhrase());
     this.activePhrase.addPhraseToDisplay();
   }

   getRandomPhrase(){
     const number = Math.floor(Math.random() * this.phrases.length);
     const phrase = this.phrases[number];
     return phrase;
   }

   handleInteraction(button){
     button.setAttribute("disabled", "")
     if(this.activePhrase.checkLetter(button.innerText)){
       button.className = 'chosen';
       this.activePhrase.showMatchedLetter(button.innerText)
       if(this.checkForWin()){
         thid.gameOver();
       }
     } else {
       button.className = 'wrong'
       this.removeLife()
     }
   }

   removeLife(){
     const scoreboard = document.querySelectorAll('#scoreboard im')
     scoreboard[this.missed].src = "images/lostHeart.png"
     this.missed += 1;
     if(this.missed === 5){
       this.gameOver();
     }
   }

   checkForWin(){
     const letters = document.querySelectorAll('#phrase li')
     const isAllLetterShowing = (li) => li.classList.value.split(' ').includes('hide')
     let isWinner = true;
     letters.forEach(li => {
        if(li.innerText.trim().length > 0){
           if(!li.classList.value.includes('show')){
             isWinner = false;
           }
        }
      })
    return isWinner;
   }

   gameOver(){
     document.querySelector('#overlay').style.display = '';
     const gameOverMessage = document.querySelector('#game-over-message');
     const buttonReset = document.querySelector('#btn__reset');
     if(this.checkForWin()){
       gameOverMessage.innerText = 'You Win!'
     } else{
       gameOverMessage.innerText = 'Sorry, try again next time!'
     }
     buttonReset.innerText = 'Play Again';
   }

 }




 // const qwerty = document.querySelector('#qwerty');
 // const phraseLetters = document.querySelectorAll('#phrase li')
 //
 // qwerty.addEventListener('click', (e) => {
   //   const clickedLetter = e.target.innerText;
   //   phraseLetters.forEach(letter =>  {
     //     if(letter.innerText === clickedLetter ){
       //       return true
       //     } else {
         //       console.log(false);
         //       return false
         //     }
         //   })
         // });
