console.log("Up and Running");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch()
{
    if (cardsInPlay[0] === cardsInPlay[1])
    {
        alert("You Found a Match!");
    }
    else
    {
        alert("Sorry, Try Again.");
    }
}

function flipCard(cardId)
{
    console.log("User Flipped " + cards[cardId]);

    cardsInPlay.push(cards[cardId]);

    if (cardsInPlay.length === 2)
    {
       checkForMatch();
    }
}

flipCard(0);
flipCard(1);