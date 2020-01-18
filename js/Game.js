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
     button.setAttribute("disabled", "");
     if(this.activePhrase.checkLetter(button.innerText)){
       button.className = 'chosen';
       this.activePhrase.showMatchLetter(button.innerText)
       if(this.checkForWin()){
         this.gameOver();
       }
     } else {
       button.className = 'wrong';
       this.removeLife();
     }
   }

   removeLife(){
     const scoreboard = document.querySelectorAll('#scoreboard img')
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

   resetGame(){
     document.querySelector('#phrase ul').innerHTML = '';
     document.querySelectorAll('#qwerty button').forEach(button => {
       button.className = 'key';
       button.disabled = false;
     })
     document.querySelectorAll('#scoreboard img').forEach(li => {
       li.src = "images/liveHeart.png"
     })
   }
 }
