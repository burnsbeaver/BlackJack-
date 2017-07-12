window.onload = function(){
var deckOfCards = [
  {
    cardType: 2,
    cardSuite: "Hearts",
    CardImage: "images/2_of_hearts.svg"
  },
  {
    cardType: 3,
    cardSuite: "Hearts",
    CardImage: "images/3_of_hearts.svg"
  },
  {
    cardType: 4,
    cardSuite: "Hearts",
    CardImage: "images/4_of_hearts.svg"
  },
  {
    cardType: 5,
    cardSuite: "Hearts",
    CardImage: "images/5_of_hearts.svg"
  },
  {
    cardType: 6,
    cardSuite: "Hearts",
    CardImage: "images/6_of_hearts.svg"
  },
  {
    cardType: 7,
    cardSuite: "Hearts",
    CardImage: "images/7_of_hearts.svg"
  },
  {
    cardType: 8,
    cardSuite: "Hearts",
    CardImage: "images/8_of_hearts.svg"
  },
  {
    cardType: 9,
    cardSuite: "Hearts",
    CardImage: "images/9_of_hearts.svg"
  },
  {
    cardType: 10,
    cardSuite: "Hearts",
    CardImage: "images/10_of_hearts.svg"
  },
  {
    cardType: "Jack",
    cardSuite: "Hearts",
    CardImage: "images/jack_of_hearts.svg"
  },
  {
    cardType: "Queen",
    cardSuite: "Hearts",
    CardImage:"images/queen_of_hearts.svg"
  },
  {
    cardType: "King",
    cardSuite: "Hearts",
    CardImage:"images/king_of_hearts.svg"
  },
  {
    cardType: "Ace",
    cardSuite: "Hearts",
    CardImage: "images/ace_of_hearts.svg"
  },
  {
    cardType: 2,
    cardSuite: "Diamonds",
    CardImage: "images/2_of_diamonds.svg"
  },
  {
    cardType: 3,
    cardSuite: "Diamonds",
    CardImage:"images/3_of_diamonds.svg"
  },
  {
    cardType: 4,
    cardSuite: "Diamonds",
    CardImage:"images/4_of_diamonds.svg"
  },
  {
    cardType: 5,
    cardSuite: "Diamonds",
    CardImage:"images/5_of_diamonds.svg"
  },
  {
    cardType: 6,
    cardSuite: "Diamonds",
    CardImage:"images/6_of_diamonds.svg"
  },
  {
    cardType: 7,
    cardSuite: "Diamonds",
    CardImage:"images/7_of_diamonds.svg"
  },
  {
    cardType: 8,
    cardSuite: "Diamonds",
    CardImage:"images/8_of_diamonds.svg"
  },
  {
    cardType: 9,
    cardSuite: "Diamonds",
    CardImage:"images/9_of_diamonds.svg"
  },
  {
    cardType: 10,
    cardSuite: "Diamonds",
    CardImage:"images/10_of_diamonds.svg"
  },
  {
    cardType: "Jack",
    cardSuite: "Diamonds",
    CardImage:"images/jack_of_diamonds.svg"
  },
  {
    cardType: "Queen",
    cardSuite: "Diamonds",
    CardImage:"images/queen_of_diamonds.svg"
  },
  {
    cardType: "King",
    cardSuite: "Diamonds",
    CardImage:"images/king_of_diamonds.svg"
  },
  {
    cardType: "Ace",
    cardSuite: "Diamonds",
    CardImage:"images/ace_of_diamonds.svg"
  },
  {
    cardType: 2,
    cardSuite: "Clubs",
    CardImage:"images/2_of_clubs.svg"
  },
  {
    cardType: 3,
    cardSuite: "Clubs",
    CardImage:"images/3_of_clubs.svg"
  },
  {
    cardType: 4,
    cardSuite: "Clubs",
    CardImage:"images/4_of_clubs.svg"
  },
  {
    cardType: 5,
    cardSuite: "Clubs",
    CardImage:"images/5_of_clubs.svg"
  },
  {
    cardType: 6,
    cardSuite: "Clubs",
    CardImage:"images/6_of_clubs.svg"
  },
  {
    cardType: 7,
    cardSuite: "Clubs",
    CardImage:"images/7_of_clubs.svg"
  },
  {
    cardType: 8,
    cardSuite: "Clubs",
    CardImage:"images/8_of_clubs.svg"
  },
  {
    cardType: 9,
    cardSuite: "Clubs",
    CardImage:"images/9_of_clubs.svg"
  },
  {
    cardType: 10,
    cardSuite: "Clubs",
    CardImage:"images/10_of_clubs.svg"
  },
  {
    cardType: "Jack",
    cardSuite: "Clubs",
    CardImage:"images/jack_of_clubs.svg"
  },
  {
    cardType: "Queen",
    cardSuite: "Clubs",
    CardImage:"images/queen_of_clubs.svg"
  },
  {
    cardType: "King",
    cardSuite: "Clubs",
    CardImage:"images/king_of_clubs.svg"
  },
  {
    cardType: "Ace",
    cardSuite: "Clubs",
    CardImage:"images/ace_of_clubs.svg"
  },
  {
    cardType: 2,
    cardSuite: "Spades",
    CardImage:"images/2_of_spades.svg"
  },
  {
    cardType: 3,
    cardSuite: "Spades",
    CardImage:"images/3_of_spades.svg"
  },
  {
    cardType: 4,
    cardSuite: "Spades",
    CardImage:"images/4_of_spades.svg"
  },
  {
    cardType: 5,
    cardSuite: "Spades",
    CardImage:"images/5_of_spades.svg"
  },
  {
    cardType: 6,
    cardSuite: "Spades",
    CardImage:"images/6_of_spades.svg"
  },
  {
    cardType: 7,
    cardSuite: "Spades",
    CardImage:"images/7_of_spades.svg"
  },
  {
    cardType: 8,
    cardSuite: "Spades",
    CardImage:"images/8_of_spades.svg"
  },
  {
    cardType: 9,
    cardSuite: "Spades",
    CardImage:"images/9_of_spades.svg"
  },
  {
    cardType: 10,
    cardSuite: "Spades",
    CardImage:"images/10_of_spades.svg"
  },
  {
    cardType: "Jack",
    cardSuite: "Spades",
    CardImage:"images/jack_of_spades.svg"
  },
  {
    cardType: "Queen",
    cardSuite: "Spades",
    CardImage:"images/queen_of_spades.svg"
  },
  {
    cardType: "King",
    cardSuite: "Spades",
    CardImage:"images/king_of_spades.svg"
  },
  {
    cardType: "Ace",
    cardSuite: "Spades",
    CardImage:"images/ace_of_spades.svg"
  }
]






var AppController = {
  //Functions that run from event listeners

    //Deal- if game si
}

//event listeners

  $('#deal_button').on('click', function(){
    console.log("Deal Button Clicked");
    AppController.Deal();
  });
  $('#hit_button').on('click', function(){
    console.log("Hit Button Clicked");
    AppController.Hit();
  });
  $('#stand_button').on('click', function(){
    console.log("Stay Button Clicked");
    AppController.Stay();
  });
};
