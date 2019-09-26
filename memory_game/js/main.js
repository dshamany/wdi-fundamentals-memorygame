console.log("Up and Running");

var cards = [
    {
        rank: "Queen",
        suit: "Hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "Queen",
        suit: "Diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "King",
        suit: "Hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "King",
        suit: "Diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
]
var cardsInPlay = [];

function checkForMatch()
{
    if (cardsInPlay[0].rank === cardsInPlay[1].rank)
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
    console.log("User Flipped " + cards[cardId].rank + " of " + cards[cardId].suit);

    cardsInPlay.push(cards[cardId]);

    if (cardsInPlay.length === 2)
    {
       checkForMatch();
       cardsInPlay = [];
    }
}

// flipCard(0);