const deckstring = require("deckstrings");
const cardList = require("./cards.json");


//Demonstration of program:
//Uses a Resurrect Priest deck netdecked from hsreplay.net.
deckcode = "AAECAa0GDAmXArQD7QXTCtcKvsgC5swCws4CkNMCoIADjYIDCaEE0cEC2MEC5cwCtM4C8M8C6NAC4+kCn+sCAA=="
const deck = deckstring.decode(deckcode);
console.log(orderCards(deck));

//Resulting ordered deck is a two-dimensional array. The first column is the name of the card, the second column is the amount of copies of that card.
function orderCards(deck){
  let result = [];
  for(var i=0; i<deck.cards.length; i++){
    result.push([search('name', deck.cards[i][0]),deck.cards[i][1]]);
  };
  result.sort(function(a, b){
    return search('cost', a[0])-search('cost', b[0])
  });
  return result;
}

//Search function searches for a field in cards.json for a card's dbfId or name field match.
function search(field, card){
  for(var i=0; i<cardList.length; i++){
    if(cardList[i].dbfId == card || cardList[i].name == card){
      return cardList[i][field];
    }
  }
}
