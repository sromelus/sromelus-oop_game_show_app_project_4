/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(missed = 0, phrases){
     this.missed = missed;
     this.phrases = phrases;
     this.activePhrase = null;
   }

   /**
   * start the game by hiding start button and overlay
   **/
   startGame(){
     document.querySelector('#overlay').style.display = 'none';
     this.activePhrase = new Phrase(this.getRandomPhrase());
     this.activePhrase.addPhraseToDisplay();
   }

   /**
   * start the game by hiding start button and overlay
   * @return  {string} phrase - a random sentence from the phrases array
   **/
   getRandomPhrase(){
     const number = Math.floor(Math.random() * this.phrases.length);
     const phrase = this.phrases[number];
     return phrase;
   }

   /**
   * handle the game main functionality
   * disable the correspondent button's character
   * check if the passed in letter is in the phrase
   * if yes show all match letters on screen
   * if no remove a life
   **/
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

   /**
   * remove a life(heart) from the game.
   * keep count of life lost
   * if there is only one life left background color changes to red and move from a pale red to a bright red
   * to give it a sense of a suspense like a live heartbeat
   * if life lost count equal 5 end the game by calling gameOver()
   **/
   removeLife(){
     const scoreboard = document.querySelectorAll('#scoreboard img')
     scoreboard[this.missed].src = "images/lostHeart.png"
     this.missed += 1;

     if(this.missed === 4){
       document.querySelector('.main-container').classList.add('onelife');
     }

     if(this.missed === 5){
       this.gameOver();
       document.querySelector('.main-container').classList.remove('onelife');
     }
   }

   /**
   * end the game
   * if win display winning message
   * if lost display losing message
   *  @return {boolean}  true or false
   **/
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


   /**
   * end the game
   * if win display winning message
   * if lost display losing message
   **/
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


   /**
   * reset game
   * restore all buttons, hidden phrase characters and live to initial state
   **/
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
