const deckstring = require("deckstrings");
const cardList = require("./cards.json");

//Input deckstring:
const deck = deckstring.decode("AAECAa0GDAmXArQD7QXTCtcKvsgC5swCws4CkNMCoIADjYIDCaEE0cEC2MEC5cwCtM4C8M8C6NAC4+kCn+sCAA==");

//Getting names of dbfIds:
var orderDeck = [];
for(var i=0; i<deck.cards.length; i++){
  /*orderDeck.push("# " + deck.cards[i][1] + "x " + search(deck.cards[i][0]));*/
  orderDeck.push(search(deck.cards[i][0]));
}

//Sorting in order of mana cost:
orderDeck.sort(function(a, b){return search(a)-search(b)})
for(var i=0; i<orderDeck.length; i++){
  console.log("# " + orderDeck[i]);
}

//Search function (Can return name for dbfId OR return mana cost for name)
function search(card){
  for(var i=0; i<cardList.length; i++){
    if(cardList[i].dbfId == Number(card)){
      return cardList[i].name;
    } else if (cardList[i].name == card){
      return cardList[i].cost;
    }
  }
}
