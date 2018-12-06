$.getJSON("https://api.hearthstonejson.com/v1/27845/enUS/cards.collectible.json", data => {
  cardList = data;
});

//Deck decoder using other two functions and .decode function imported from deckstrings module. Inputs: Deckcode, the encoded deckstring you want to decode, and div, the html element you want to append text to.
function decodeDeck(deckcode, div){
  let deck = deckstrings.decode(filter(deckcode));
  deck = orderCards(deck);
  $(div).empty();
  for(var i=0; i<deck.length; i++){
    //$(div).append($("<p>").text("\n" + deck[i][1] + "x " + deck[i][0]));
    //$(div).append($("<img>").attr(`https://art.hearthstonejson.com/v1/tiles/${search('id', deck[i][0])}.png`));
    $(div).append($("<h4>",{text: deck[i][1]}));
    $(div).append($('<img>',{src:`https://art.hearthstonejson.com/v1/tiles/${search('id', deck[i][0])}.png`}));
    $(div).append($('<img> class = grad'));
    $(div).append($('<br>'));
  }
}

//Filters multiline strings by eliminating comments (Comments are lines that start with '#' and are to be ignored)
function filter(deck){
  let filtered = deck.split(/\n/g)
  for (var i=0; i<filtered.length; i++){
    if (filtered[i].charAt(0) !== "#"){
      return(filtered[i]);
    }
  }
}

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
