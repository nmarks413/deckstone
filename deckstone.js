const deckstring = require("deckstrings");
const cardList = require("./cards.json");


//Input deckstring:
deckcode = "AAECAa0GDAmXArQD7QXTCtcKvsgC5swCws4CkNMCoIADjYIDCaEE0cEC2MEC5cwCtM4C8M8C6NAC4+kCn+sCAA=="
const deck = deckstring.decode(deckcode);

//Getting names of dbfIds and storing # of copies:
var orderDeck = [];
for(var i=0; i<deck.cards.length; i++){
  orderDeck.push([search(deck.cards[i][0]),deck.cards[i][1]]);
};

//Sorting in order of mana cost:
orderDeck.sort(function(a, b){
  return search(a[0])-search(b[0])
});

//Formatting and printing output:
console.log('# ' + search(deck.heroes[0]));
console.log('#')

for(let i in orderDeck){
  console.log('# ' + orderDeck[i][1] + 'x ' + orderDeck[i][0]);
}

console.log('#')
console.log('# ' + deckcode)

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
