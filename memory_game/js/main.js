console.log("Up and Running");

var label = document.getElementById("messageLabel");

const cards = [
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
        console.log("You Found a Match!");
    }
    else
    {
        console.log("Sorry, Try Again.");
    }

    if (cardsInPlay.length > 2)
    {
        clearGame();
    }
}

function flipCard()
{
    var cardId = this.getAttribute("data-id");
    console.log("User Flipped " + cards[cardId].rank + " of " + cards[cardId].suit);

    cardsInPlay.push(cards[cardId]);

    this.setAttribute("src", cards[cardId].cardImage);

    if (cardsInPlay.length == 2)
    {
       checkForMatch();
    }
}

function clearGame()
{
   cardsInPlay = [];
   var allCards = document.getElementsByClassName("cardElement");
   for (var i = 0; i < cards.length; ++i)
   {
       allCards[i].setAttribute("src", "images/back.png");
   }
}

function createBoard()
{
    var board = document.getElementById("game-board");

    for (var i = 0; i < cards.length; ++i)
    {
        var cardElement = document.createElement("img");
        cardElement.setAttribute("data-id", i);
        cardElement.setAttribute("class", "cardElement");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.addEventListener("click", flipCard);
        board.appendChild(cardElement);
    }

    var button = document.createElement("button");
    button.setAttribute("id", "btnReset");
    button.innerHTML = "Reset Game";
    button.addEventListener("click", clearGame);
    board.appendChild(button);
}

createBoard();