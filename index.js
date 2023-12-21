var randomNumber1= Math.floor((Math.random()*6)+1); //1-6
var randomNumber2= Math.floor((Math.random()*6)+1);
var randomDiceImage1= "./assets/images/dice"+[randomNumber1]+".png";
var randomDiceImage2= "./assets/images/dice"+[randomNumber2]+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

//To decide who's win 


if(randomNumber1>randomNumber2)
{
document.getElementById("changetext").innerHTML="Player 1 Wins !"
}

else if(randomNumber1<randomNumber2)
{
document.getElementById("changetext").innerHTML="Player 2 Wins !"
}

else 
{
    document.getElementById("changetext").innerHTML="Draw! Refresh me for rematch" 
}