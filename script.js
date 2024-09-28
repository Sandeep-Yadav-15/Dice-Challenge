//The buttons respond on click
//This is done by adding it to a function
//Function to let the button roll the dice.
function rollDice() {
    //add everything i do far
    
//For Player 1
//Generate a random number for the first dice and should between from 1 to 6
const firstRandomNum = Math.floor(Math.random()*6)+1; //Math.floor() rounds a number DOWN to the nearest integer:
//it goona generate a string with images/Dice1.png upto images/Dice6.png in short generate random dice
const firstDiceImage = "./images/Dice" + firstRandomNum + ".png";
/*
1Math.random() → gives random numbers between 0 & 0.9
2Times that by six: Math.random() * 6 → gives random numbers between 0 & 5.9
3Round them down: Math.floor(Math.random() * 6) → gives random numbers between 0 & 5 (no decimals)
4But we need numbers between 1 & 6: So we add 1 to it → Math.floor(Math.random() * 6) + 1;
*/

//so now i need to target the Dom i.e Document Object Model Means Represent the page content as HTML
//IN THIS CASE  specifically i neet to target the image tag and change the src attribute to the random image
document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);
// 👆 this selects all image tags and then chooses the first [index 0]

//For Player 2
//Generate a random number for the first dice and should between from 1 to 6
const secondRandomNum = Math.floor(Math.random()*6)+1;
//it goona generate a string with images/Dice1.png upto images/Dice6.png in short generate random dice
const secondDiceImage = "./images/Dice" + secondRandomNum + ".png";
//so now i need to target the Dom i.e Document Object Model Means Represent the page content as HTML
//IN THIS CASE  specifically i neet to target the image tag and change the src attribute to the random image
document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);
//this select image tag index[1] and set the element.

//For Winner
//if first dice is greater than second dice then player 1 wins
if(firstRandomNum > secondRandomNum){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";//change h1 text
    document.querySelectorAll("p")[0].style.textShadow = '0 0 5px #0000FF'; // Add a glow to the text
    
    // Reset styles for the other paragraph for every refresh
    document.querySelectorAll("p")[1].style.textShadow = '';
    
}
//if second dice is greater than first dice then player 2 wins
else if(secondRandomNum > firstRandomNum){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    document.querySelectorAll("p")[1].style.textShadow = '0 0 3px #FF0000';
    
    // Reset styles for the other paragraph
    document.querySelectorAll("p")[0].style.textShadow = '';
    }
    //if both dice are equal then it's a draw
    else{
        document.querySelector("h1").innerHTML = "It's a Draw!";
         // Reset styles for both paragraphs in case of a draw
         document.querySelectorAll("p")[0].style.textShadow = '';
         document.querySelectorAll("p")[1].style.textShadow = '';
        }
}
//Get the button element and add a click event listner
document.querySelector("button").addEventListener("click", rollDice);


        