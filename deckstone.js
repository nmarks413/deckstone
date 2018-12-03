//Deck decoder using other two functions and .decode function imported from deckstrings module. Inputs: Deckcode, the encoded deckstring you want to decode, and div, the html element you want to append text to.
function decodeDeck(deckcode, div){
  let deck = deckstrings.decode(deckcode);
  deck = orderCards(deck);
  for(var i=0; i<deck.length; i++){
    let br = document.createElement("br");
    div.appendChild(br);
    let content = document.createTextNode("\n" + deck[i][1] + "x " + deck[i][0]);
    div.appendChild(content);
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

const cardList = [
  {
    "artist": "Nutthapon Petchthai",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 5,
    "dbfId": 2539,
    "flavor": "It's on the rack next to ice lance, acid lance, and English muffin lance.",
    "id": "AT_001",
    "name": "Flame Lance",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "TGT",
    "text": "Deal $8 damage to a minion.",
    "type": "SPELL"
  },
  {
    "artist": "Tooth",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 2541,
    "flavor": "Burning man, brah.",
    "id": "AT_002",
    "mechanics": [
      "SECRET"
    ],
    "name": "Effigy",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Secret:</b> When a friendly minion dies, summon a random minion with the same Cost.",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 2545,
    "flavor": "And he can't get up.",
    "health": 2,
    "id": "AT_003",
    "mechanics": [
      "HEROPOWER_DAMAGE"
    ],
    "name": "Fallen Hero",
    "rarity": "RARE",
    "set": "TGT",
    "text": "Your Hero Power deals 1 extra damage.",
    "type": "MINION"
  },
  {
    "artist": "Gabor Szikszai",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 1,
    "dbfId": 2572,
    "flavor": "Now with 100% more blast!",
    "id": "AT_004",
    "mechanics": [
      "RECEIVES_DOUBLE_SPELLDAMAGE_BONUS"
    ],
    "name": "Arcane Blast",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "referencedTags": [
      "SPELLPOWER"
    ],
    "set": "TGT",
    "text": "Deal $2 damage to a minion. This spell gets double bonus from <b>Spell Damage</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Mike Sass",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 2542,
    "flavor": "It's always Huffer.",
    "id": "AT_005",
    "name": "Polymorph: Boar",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "CHARGE"
    ],
    "set": "TGT",
    "text": "Transform a minion into a 4/2 Boar with <b>Charge</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Dan Scott",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 2549,
    "flavor": "Is he aspiring or inspiring?  Make up your mind!",
    "health": 5,
    "id": "AT_006",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Dalaran Aspirant",
    "rarity": "COMMON",
    "referencedTags": [
      "SPELLPOWER"
    ],
    "set": "TGT",
    "text": "<b>Inspire:</b> Gain <b>Spell Damage +1</b>.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 2571,
    "flavor": "Does he sling spells, or do his spells linger about.  Who can say?",
    "health": 4,
    "id": "AT_007",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Spellslinger",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Add a random spell to each player's hand.",
    "type": "MINION"
  },
  {
    "artist": "Christopher Moeller",
    "attack": 6,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 6,
    "dbfId": 2544,
    "flavor": "The Grand Tournament has a \"No dragons allowed\" policy, but it's rarely enforced.",
    "health": 6,
    "id": "AT_008",
    "name": "Coldarra Drake",
    "race": "DRAGON",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "You can use your Hero Power any number of times.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan & Gabor",
    "attack": 7,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 8,
    "dbfId": 2546,
    "elite": true,
    "flavor": "A masterless shamurai.",
    "health": 7,
    "id": "AT_009",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Rhonin",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "<b>Deathrattle:</b> Add 3 copies of Arcane Missiles to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Brandon Kitkouski",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 2552,
    "flavor": "Not getting trampled is really the trick here.",
    "health": 3,
    "id": "AT_010",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ram Wrangler",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Battlecry:</b> If you have a Beast, summon a\nrandom Beast.",
    "type": "MINION"
  },
  {
    "artist": "Alex Garner",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 2555,
    "flavor": "She really likes seeing people get better.  That's why she hurts them in the first place.",
    "health": 5,
    "id": "AT_011",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Holy Champion",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "Whenever a character is healed, gain +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 5,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 2551,
    "flavor": "What did you expect to happen?  He's a Spawn.  Of Shadows.",
    "health": 4,
    "id": "AT_012",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Spawn of Shadows",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Inspire:</b> Deal 4 damage to each hero.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 2568,
    "flavor": "The promise of glory is a powerful tool to get minions to do your bidding.  Only slightly less powerful than the promise of an ice cream bar!",
    "id": "AT_013",
    "name": "Power Word: Glory",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "TGT",
    "text": "Choose a minion. Whenever it attacks, restore 4 Health to\nyour hero.",
    "type": "SPELL"
  },
  {
    "artist": "Warren Mahy",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 2566,
    "flavor": "Hopes to be promoted to \"Shadowfriend\" someday.",
    "health": 3,
    "id": "AT_014",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Shadowfiend",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Whenever you draw a card, reduce its Cost by (1).",
    "type": "MINION"
  },
  {
    "artist": "Dan Dos Santos",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 2563,
    "flavor": "\"Are you interested in... HEALTH benefits?!\"",
    "id": "AT_015",
    "name": "Convert",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "TGT",
    "text": "Put a copy of an enemy minion into your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Sean O'Danield",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 2564,
    "flavor": "This minion is really powerful!",
    "id": "AT_016",
    "name": "Confuse",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Swap the Attack and Health of all minions.",
    "type": "SPELL"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2569,
    "flavor": "A result of magical experiments carried out by the Black Dragonflight, it's not his fault that he's a vicious killer.",
    "health": 6,
    "id": "AT_017",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Twilight Guardian",
    "race": "DRAGON",
    "rarity": "EPIC",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "TGT",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Chris Rahn",
    "attack": 5,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 7,
    "dbfId": 2556,
    "elite": true,
    "flavor": "She sees into your past and makes you face your fears.  Most common fear:  Getting Majordomo out of Sneed's Old Shredder.",
    "health": 4,
    "id": "AT_018",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Confessor Paletress",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "<b>Inspire:</b> Summon a random <b>Legendary</b> minion.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 2822,
    "flavor": "Crescendo himself summoned this steed, riding it to victory in the Grand Tournament.  Wherever he rides, an army of riders ride behind him, supporting the legendary champion.",
    "health": 1,
    "id": "AT_019",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Dreadsteed",
    "race": "DEMON",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "<b>Deathrattle:</b> At the end\n of the turn, summon a Dreadsteed.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 6,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 7,
    "dbfId": 2624,
    "flavor": "They were originally called Cuddleguards, but they were not inspiring the proper amount of fear.",
    "health": 8,
    "id": "AT_020",
    "name": "Fearsome Doomguard",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "TGT",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 2777,
    "flavor": "\"No, no, no. I asked for a tiny JESTER of evil.\"",
    "health": 2,
    "id": "AT_021",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Tiny Knight of Evil",
    "race": "DEMON",
    "rarity": "RARE",
    "set": "TGT",
    "text": "Whenever you discard a card, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 2628,
    "flavor": "* Not actually Jaraxxus' fist.",
    "id": "AT_022",
    "mechanics": [
      "InvisibleDeathrattle"
    ],
    "name": "Fist of Jaraxxus",
    "rarity": "RARE",
    "set": "TGT",
    "text": "When you play or discard this, deal $4 damage to a random enemy.",
    "type": "SPELL"
  },
  {
    "artist": "Skan Srisuwan",
    "attack": 5,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 2537,
    "flavor": "We like to call him \"Wesley\".",
    "health": 4,
    "id": "AT_023",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Void Crusher",
    "race": "DEMON",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Inspire:</b> Destroy a random minion for each player.",
    "type": "MINION"
  },
  {
    "artist": "Kevin Chen",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 2535,
    "flavor": "Very dangerous when attached to a demonbomb.",
    "id": "AT_024",
    "name": "Demonfuse",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0,
      "REQ_TARGET_WITH_RACE": 15
    },
    "rarity": "COMMON",
    "set": "TGT",
    "text": "Give a Demon +3/+3. Give your opponent a Mana Crystal.",
    "type": "SPELL"
  },
  {
    "artist": "Paul Mafayon",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 2632,
    "flavor": "A prime example of lose-lose negotiating.",
    "id": "AT_025",
    "name": "Dark Bargain",
    "playRequirements": {
      "REQ_MINIMUM_ENEMY_MINIONS": 2
    },
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Destroy 2 random enemy minions. Discard 2 random cards.",
    "type": "SPELL"
  },
  {
    "artist": "Sojin Hwang",
    "attack": 4,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 2623,
    "flavor": "After playing against 5 Annoy-O-Trons, any normal guard will become a Wrathguard.",
    "health": 3,
    "id": "AT_026",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Wrathguard",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "Whenever this minion takes damage, also deal that amount to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Tooth",
    "attack": 4,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 2621,
    "elite": true,
    "flavor": "He can summon anything, even a FEARSOME DOOMGUARD*.\n*He's pretty sure this is going to work out.",
    "health": 4,
    "id": "AT_027",
    "name": "Wilfred Fizzlebang",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "Cards you draw from your Hero Power cost (0).",
    "type": "MINION"
  },
  {
    "artist": "Ryan Metcalf",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 2765,
    "flavor": "He needed a break after that business in the Vale of Eternal Blossoms. Naturally, he chose to spend his vacation in an icy snowscape killing monsters.",
    "health": 7,
    "id": "AT_028",
    "mechanics": [
      "COMBO"
    ],
    "name": "Shado-Pan Rider",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Combo:</b> Gain +3 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 2715,
    "flavor": "The best part of buccaneering is the pants.",
    "health": 1,
    "id": "AT_029",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Buccaneer",
    "race": "PIRATE",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "Whenever you equip a weapon, give it +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 2767,
    "flavor": "Almost went to play for Stormwind before signing with Undercity.",
    "health": 2,
    "id": "AT_030",
    "mechanics": [
      "COMBO"
    ],
    "name": "Undercity Valiant",
    "playRequirements": {
      "REQ_TARGET_FOR_COMBO": 0
    },
    "rarity": "COMMON",
    "set": "TGT",
    "targetingArrowText": "Deal 1 damage.",
    "text": "<b>Combo:</b> Deal 1 damage.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 2766,
    "flavor": "He has a giant collection of purses now.  One for every outfit!",
    "health": 2,
    "id": "AT_031",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Cutpurse",
    "rarity": "RARE",
    "set": "TGT",
    "text": "Whenever this minion attacks a hero, add the Coin to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Tooth",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 2768,
    "flavor": "I have great deal for you... for 4 damage to your face!",
    "health": 3,
    "id": "AT_032",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Shady Dealer",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Battlecry:</b> If you have a Pirate, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 2770,
    "flavor": "Yoink!",
    "id": "AT_033",
    "name": "Burgle",
    "rarity": "RARE",
    "set": "TGT",
    "text": "Add 2 random cards to your hand <i>(from your opponent's class)</i>.",
    "type": "SPELL"
  },
  {
    "artist": "Nutthapon Petchthai",
    "attack": 1,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 2763,
    "durability": 3,
    "flavor": "How much more poisoned can a blade get?  The answer is a lot.  A lot more poisoned.",
    "id": "AT_034",
    "name": "Poisoned Blade",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Your Hero Power gives this weapon +1 Attack instead of replacing it.",
    "type": "WEAPON"
  },
  {
    "artist": "Daren Bader",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 2587,
    "flavor": "Can you hold these eggs for just a second?  I promise they're not full of giant enraged undead spider things.",
    "id": "AT_035",
    "name": "Beneath the Grounds",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Shuffle 3 Ambushes into your opponent's deck. When drawn, you summon a 4/4 Nerubian.",
    "type": "SPELL"
  },
  {
    "artist": "Eric Braddock",
    "attack": 8,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 9,
    "dbfId": 2586,
    "elite": true,
    "flavor": "Was actually a pretty nice guy before, you know, the whole Lich King thing.",
    "health": 4,
    "id": "AT_036",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Anub'arak",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "<b>Deathrattle:</b> Return this to your hand and summon a 4/4 Nerubian.",
    "type": "MINION"
  },
  {
    "artist": "Dan Brereton",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 2792,
    "flavor": "2 out of 2 saplings recommend that you summon the saplings.",
    "id": "AT_037",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Living Roots",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Choose One -</b> Deal $2 damage; or Summon two 1/1 Saplings.",
    "type": "SPELL"
  },
  {
    "artist": "Laurel Austin",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 2782,
    "flavor": "She loves mana crystals, she hates mana crystals.   So fickle!",
    "health": 3,
    "id": "AT_038",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Darnassus Aspirant",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Gain an empty Mana Crystal.\n<b>Deathrattle:</b> Lose a Mana Crystal.",
    "type": "MINION"
  },
  {
    "artist": "Alex Pascenko",
    "attack": 5,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 2780,
    "flavor": "Maybe if you whistle a tune it will soothe him.  Yeah...  Try that.",
    "health": 4,
    "id": "AT_039",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Savage Combatant",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Inspire:</b> Give your hero\n+2 Attack this turn.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 4,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 2786,
    "flavor": "She was born to be something.  She is just not quite sure what yet...",
    "health": 4,
    "id": "AT_040",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Wildwalker",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 20
    },
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Give a friendly Beast +3 Health.",
    "type": "MINION"
  },
  {
    "artist": "Ralph Horsley",
    "attack": 6,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 7,
    "dbfId": 2788,
    "flavor": "He gets a discount on the tournament entry fee because he is his own horse.",
    "health": 6,
    "id": "AT_041",
    "name": "Knight of the Wild",
    "rarity": "RARE",
    "set": "TGT",
    "text": "Whenever you summon a Beast, reduce the Cost of this card by (1).",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 2783,
    "flavor": "That's saberTEETH, not like curved pirate blades.  That's a different kind of druid.  Druid of the Curved Pirate Blades.",
    "health": 1,
    "id": "AT_042",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Druid of the Saber",
    "rarity": "COMMON",
    "referencedTags": [
      "CHARGE",
      "STEALTH"
    ],
    "set": "TGT",
    "text": "[x]<b>Choose One -</b> Transform\ninto a 2/1 with <b>Charge</b>;\nor a 3/2 with <b>Stealth</b>.",
    "type": "MINION"
  },
  {
    "artist": "Christopher Moeller",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 2785,
    "flavor": "Hey!  Moon!  Can I have some mana crystals?",
    "id": "AT_043",
    "name": "Astral Communion",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Gain 10 Mana Crystals. Discard your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Dan Scott",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 2793,
    "flavor": "Is this a noun or a verb?  We will never know.",
    "id": "AT_044",
    "name": "Mulch",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Destroy a minion.\nAdd a random minion to your opponent's hand.",
    "type": "SPELL"
  },
  {
    "artist": "Velvet Engine",
    "attack": 5,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 9,
    "dbfId": 2796,
    "elite": true,
    "flavor": "Call her \"Tweety\".  She'll find it real funny.  I PROMISE.",
    "health": 5,
    "id": "AT_045",
    "mechanics": [
      "AURA"
    ],
    "name": "Aviana",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "Your minions cost (1).",
    "type": "MINION"
  },
  {
    "artist": "Eva Widermann",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 2513,
    "flavor": "Turns out the tuskarr aren't real choosy about their totems.",
    "health": 2,
    "id": "AT_046",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tuskarr Totemic",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Summon a random basic Totem.",
    "type": "MINION"
  },
  {
    "artist": "RK Post",
    "attack": 4,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 2613,
    "flavor": "It's nice to find a real craftsman in this day and age of mass-produced totems.",
    "health": 4,
    "id": "AT_047",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Draenei Totemcarver",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Gain +1/+1 for each friendly Totem.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 2612,
    "flavor": "Favored by shaman who study the art of restoration and healing, this spell would feel smug, if it had feelings.",
    "id": "AT_048",
    "name": "Healing Wave",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "TGT",
    "text": "Restore #7 Health. Reveal a minion in each deck. If yours costs more, Restore #14 instead.",
    "type": "SPELL"
  },
  {
    "artist": "Sean McNally",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 5,
    "dbfId": 2615,
    "flavor": "Allowing totems to attack is not cheating.  I mean, there isn't anything in the rule books about it.",
    "health": 6,
    "id": "AT_049",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Thunder Bluff Valiant",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Inspire:</b> Give your Totems +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Peet Cooper",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 2617,
    "durability": 4,
    "flavor": "You can only pick it up if you are worthy.",
    "id": "AT_050",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Charged Hammer",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "<b>Deathrattle:</b> Your Hero Power becomes 'Deal 2 damage.'",
    "type": "WEAPON"
  },
  {
    "artist": "Tyler Walpole",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 2620,
    "flavor": "I'm not a shaman or anything, but isn't Elemental Destruction the opposite of what they want to do?",
    "id": "AT_051",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Elemental Destruction",
    "overload": 5,
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Deal $4-$5 damage to all minions. <b>Overload:</b> (5)",
    "type": "SPELL"
  },
  {
    "artist": "Steve Prescott",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 2610,
    "flavor": "What happens when you glue a buncha totems together.",
    "health": 4,
    "id": "AT_052",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Totem Golem",
    "overload": 1,
    "race": "TOTEM",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Overload:</b> (1)",
    "type": "MINION"
  },
  {
    "artist": "Zoltan & Gabor",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 2514,
    "flavor": "MOMMMMMYYYYYYYYY!!!",
    "id": "AT_053",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Ancestral Knowledge",
    "overload": 2,
    "rarity": "COMMON",
    "set": "TGT",
    "text": "Draw 2 cards. <b>Overload:</b> (2)",
    "type": "SPELL"
  },
  {
    "artist": "Wei Wang",
    "attack": 4,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 6,
    "dbfId": 2618,
    "elite": true,
    "flavor": "Calling the mist doesn't sound all that great.  \"Ooooh, it is slightly damp now!\"",
    "health": 4,
    "id": "AT_054",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "The Mistcaller",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Give all minions in your hand and deck +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Marcelo Vignali",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 2582,
    "flavor": "Flash!  Ahhhhhhh~",
    "id": "AT_055",
    "name": "Flash Heal",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "TGT",
    "text": "Restore #5 Health.",
    "type": "SPELL"
  },
  {
    "artist": "Jonboy Meyers",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 2638,
    "flavor": "pow POW pow",
    "id": "AT_056",
    "name": "Powershot",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "TGT",
    "text": "Deal $2 damage to a minion and the minions next to it.",
    "type": "SPELL"
  },
  {
    "artist": "Tyson Murphy",
    "attack": 4,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 2639,
    "flavor": "Takes way better care of her pets than her brother, Unstablemaster.",
    "health": 2,
    "id": "AT_057",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Stablemaster",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 20
    },
    "rarity": "EPIC",
    "referencedTags": [
      "IMMUNE"
    ],
    "set": "TGT",
    "targetingArrowText": "Grant <b>Immune</b> this turn.",
    "text": "<b>Battlecry:</b> Give a friendly Beast <b>Immune</b> this turn.",
    "type": "MINION"
  },
  {
    "artist": "James Zhang",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 2635,
    "flavor": "Elekk jousting is AWESOME.",
    "health": 2,
    "id": "AT_058",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "King's Elekk",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, draw it.",
    "type": "MINION"
  },
  {
    "artist": "Eva Widermann",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 2642,
    "flavor": "This is a \"bearly\" concealed reference.",
    "health": 1,
    "id": "AT_059",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Brave Archer",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Inspire:</b> If your hand is empty, deal 2 damage to the enemy hero.",
    "type": "MINION"
  },
  {
    "artist": "Richard Wright",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 2641,
    "flavor": "You'll never guess what's in that conveniently bear-sized, bear-smelling box.",
    "id": "AT_060",
    "mechanics": [
      "SECRET"
    ],
    "name": "Bear Trap",
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "TGT",
    "text": "<b>Secret:</b> After your hero is attacked, summon a 3/3 Bear with <b>Taunt</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 2484,
    "flavor": "Rexxar narrowed his eyes, grabbed his machine gun, and said: \"It's go time.  Lock and load.\"\nThis card pays homage to that special moment.",
    "id": "AT_061",
    "name": "Lock and Load",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Each time you cast a spell this turn, add a random Hunter card to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Skan Srisuwan",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 6,
    "dbfId": 2483,
    "flavor": "\"THEY'RE EVERYWHERE GET THEM OFF!!!\" - Everyone",
    "id": "AT_062",
    "name": "Ball of Spiders",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "RARE",
    "set": "TGT",
    "text": "Summon three 1/1 Webspinners.",
    "type": "SPELL"
  },
  {
    "artist": "Andrew Hou",
    "attack": 4,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 7,
    "dbfId": 2633,
    "elite": true,
    "flavor": "With the help of his trusty sidekick Dreadscale, the giant jormungar Acidmaw is ready to face any knight!",
    "health": 2,
    "id": "AT_063",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Acidmaw",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "Whenever another minion takes damage, destroy it.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 4,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 2634,
    "elite": true,
    "flavor": "Let's be clear about this:  ACIDMAW is the sidekick.",
    "health": 2,
    "id": "AT_063t",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Dreadscale",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "At the end of your turn, deal 1 damage to all other minions.",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 2729,
    "flavor": "You might think bashing doesn't take a lot of practice.  It doesn't.",
    "id": "AT_064",
    "name": "Bash",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "TGT",
    "text": "Deal $3 damage.\nGain 3 Armor.",
    "type": "SPELL"
  },
  {
    "artist": "Michael Franchina",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 2756,
    "durability": 2,
    "flavor": "\"King's Attacker\" is a shield.  Funny, huh?",
    "id": "AT_065",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "King's Defender",
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "TGT",
    "text": "<b>Battlecry:</b> If you have a minion with <b>Taunt</b>, gain +1 Durability.",
    "type": "WEAPON"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 2711,
    "flavor": "\"Four out of three orcs struggle with math.\" - Angry Zurge",
    "health": 3,
    "id": "AT_066",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Orgrimmar Aspirant",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Inspire:</b> Give your weapon +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 5,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 2753,
    "flavor": "Playing him also gets you into the Magnataur Beta.",
    "health": 3,
    "id": "AT_067",
    "name": "Magnataur Alpha",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Also damages the minions next to whomever\nhe attacks.",
    "type": "MINION"
  },
  {
    "artist": "Mishi McCaig",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 2754,
    "flavor": "The best offense is a good defense.",
    "id": "AT_068",
    "name": "Bolster",
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "TGT",
    "text": "Give your <b>Taunt</b> minions +2/+2.",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 2733,
    "flavor": "Come at me, bro.",
    "health": 2,
    "id": "AT_069",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Sparring Partner",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "set": "TGT",
    "targetingArrowText": "Grant <b>Taunt</b>.",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Give a\nminion <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 2757,
    "elite": true,
    "flavor": "What's more boss than riding a parrot with a jawbone for a shoulderpad while wielding a giant hook-lance-thing and wearing a pirate hat?  NOTHING.",
    "health": 6,
    "id": "AT_070",
    "mechanics": [
      "CHARGE"
    ],
    "name": "Skycap'n Kragg",
    "race": "PIRATE",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "<b>Charrrrrge</b>\nCosts (1) less for each friendly Pirate.",
    "type": "MINION"
  },
  {
    "artist": "Evgeniy Zagumennyy",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 2758,
    "flavor": "\"Put more spikes on her.  No, more spikes.  What part of 'more spikes' do you not understand?  MORE SPIKES!\" - Alexstrasza",
    "health": 3,
    "id": "AT_071",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Alexstrasza's Champion",
    "rarity": "RARE",
    "referencedTags": [
      "CHARGE"
    ],
    "set": "TGT",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Charge</b>.",
    "type": "MINION"
  },
  {
    "artist": "Wei Wang",
    "attack": 7,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 10,
    "dbfId": 2760,
    "elite": true,
    "flavor": "Leader of the Alliance!  Father of Anduin!  Also he likes to play Arena, and he averages 12 wins.",
    "health": 7,
    "id": "AT_072",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Varian Wrynn",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Draw 3 cards.\nPut any minions you drew directly into the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 2648,
    "flavor": "Competition can be an inspiration to improve oneself.  Or kill all the competitors.",
    "id": "AT_073",
    "mechanics": [
      "SECRET"
    ],
    "name": "Competitive Spirit",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Secret:</b> When your turn starts, give your minions +1/+1.",
    "type": "SPELL"
  },
  {
    "artist": "Jonboy Meyers",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 2717,
    "flavor": "\"Arf! Arf! Arf!\" - Seal of Champions",
    "id": "AT_074",
    "name": "Seal of Champions",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "TGT",
    "text": "Give a minion\n+3 Attack and <b>Divine Shield</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan & Gabor",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 2515,
    "flavor": "He doesn't even get Sundays off.  Every day he's hostling.",
    "health": 4,
    "id": "AT_075",
    "mechanics": [
      "AURA"
    ],
    "name": "Warhorse Trainer",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "Your Silver Hand Recruits have +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Sam Nielson",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 2655,
    "flavor": "Hee hee!  Look at his cute little feet.",
    "health": 4,
    "id": "AT_076",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Murloc Knight",
    "race": "MURLOC",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Inspire:</b> Summon a random Murloc.",
    "type": "MINION"
  },
  {
    "artist": "Joe Wilson",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 2720,
    "durability": 2,
    "flavor": "The stripes make it look like a candy cane, but we recommend against licking it.",
    "id": "AT_077",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Argent Lance",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, +1 Durability.",
    "type": "WEAPON"
  },
  {
    "artist": "Mauricio Herrera",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 6,
    "dbfId": 2654,
    "flavor": "You have to get past the vendors first.  So many are lost to shopping...",
    "id": "AT_078",
    "name": "Enter the Coliseum",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Destroy all minions except each player's highest Attack minion.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 6,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 6,
    "dbfId": 2726,
    "flavor": "He may sound surly and antisocial, but he's actually just really shy.",
    "health": 6,
    "id": "AT_079",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Mysterious Challenger",
    "rarity": "EPIC",
    "referencedTags": [
      "SECRET"
    ],
    "set": "TGT",
    "text": "<b>Battlecry:</b> Put one of each <b>Secret</b> from your deck into the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Jesper Ejsing",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2517,
    "flavor": "He'll never admit it, but he pushes you hard because he really cares about you.",
    "health": 3,
    "id": "AT_080",
    "name": "Garrison Commander",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "You can use your Hero Power twice a turn.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 7,
    "dbfId": 2727,
    "elite": true,
    "flavor": "Nobody rocks a monocle like Eadric.",
    "health": 7,
    "id": "AT_081",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Eadric the Pure",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Change all enemy minions'\nAttack to 1.",
    "type": "MINION"
  },
  {
    "artist": "Ron Spears",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 2486,
    "flavor": "But not the lowliest!",
    "health": 2,
    "id": "AT_082",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Lowly Squire",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Inspire:</b> Gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2533,
    "flavor": "Check it out.  You can do barrel rolls on this thing.",
    "health": 3,
    "id": "AT_083",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Dragonhawk Rider",
    "rarity": "COMMON",
    "referencedTags": [
      "WINDFURY"
    ],
    "set": "TGT",
    "text": "<b>Inspire:</b> Gain <b>Windfury</b>\nthis turn.",
    "type": "MINION"
  },
  {
    "artist": "Tyson Murphy",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2577,
    "flavor": "Lance Carrier is an obscure entry level position in orcish armies.  A mystery, since orcs don't generally use lances.",
    "health": 2,
    "id": "AT_084",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Lance Carrier",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "TGT",
    "targetingArrowText": "Give +2 Attack.",
    "text": "<b>Battlecry:</b> Give a friendly minion +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Froilan Gardner",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2488,
    "flavor": "Not a good basis for a system of government.",
    "health": 6,
    "id": "AT_085",
    "mechanics": [
      "AURA"
    ],
    "name": "Maiden of the Lake",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "Your Hero Power costs (1).",
    "type": "MINION"
  },
  {
    "artist": "Greg Staples",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2576,
    "flavor": "Listen all y'all it's a saboteur!",
    "health": 3,
    "id": "AT_086",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Saboteur",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Your opponent's Hero Power costs (5) more next turn.",
    "type": "MINION"
  },
  {
    "artist": "Evgeniy Zagumennyy",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2490,
    "flavor": "His horse's name is Betsy.",
    "health": 1,
    "id": "AT_087",
    "mechanics": [
      "CHARGE",
      "DIVINE_SHIELD"
    ],
    "name": "Argent Horserider",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Charge</b>\n<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2491,
    "flavor": "This champion has learned from the best.  Except for his target selection.",
    "health": 5,
    "id": "AT_088",
    "mechanics": [
      "FORGETFUL",
      "TRIGGER_VISUAL"
    ],
    "name": "Mogor's Champion",
    "rarity": "RARE",
    "set": "TGT",
    "text": "50% chance to attack the wrong enemy.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2495,
    "flavor": "Underneath all that impressive armor, he's just skin and bones.  Okay, maybe just bones.",
    "health": 2,
    "id": "AT_089",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Boneguard Lieutenant",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Inspire:</b> Gain +1 Health.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2497,
    "flavor": "An elegant gorilla, for a more civilized age.",
    "health": 3,
    "id": "AT_090",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Mukla's Champion",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Inspire:</b> Give your other minions +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Sean McNally",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2575,
    "flavor": "The medic tournament is less entertaining than the Grand Tournament.",
    "health": 8,
    "id": "AT_091",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Tournament Medic",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Inspire:</b> Restore #2 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2594,
    "flavor": "He's a lot cooler than Magma Rager.",
    "health": 2,
    "id": "AT_092",
    "name": "Ice Rager",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "TGT",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2532,
    "flavor": "Ironically, the natural enemy of the snobold is THE CANDLE.",
    "health": 6,
    "id": "AT_093",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Frigid Snobold",
    "rarity": "COMMON",
    "set": "TGT",
    "spellDamage": 1,
    "text": "<b>Spell Damage +1</b>",
    "type": "MINION"
  },
  {
    "artist": "James Zhang",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2580,
    "flavor": "At first he liked juggling chain saws, but then he thought, \"Flames are better!  Because FIRE!\"",
    "health": 3,
    "id": "AT_094",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Flame Juggler",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Deal 1 damage to a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "Esad Ribic",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2579,
    "flavor": "He used to be a librarian.  Old habits die hard.",
    "health": 2,
    "id": "AT_095",
    "mechanics": [
      "DIVINE_SHIELD",
      "STEALTH"
    ],
    "name": "Silent Knight",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Stealth</b>\n<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Skan Srisuwan",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2500,
    "flavor": "It takes a lot to wind him up.",
    "health": 5,
    "id": "AT_096",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Clockwork Knight",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 17
    },
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "TGT",
    "targetingArrowText": "Give +1/+1.",
    "text": "<b>Battlecry:</b> Give a friendly Mech +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Adam Byrne",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 2499,
    "flavor": "He was so excited to get season tickets to this year's Grand Tournament.  He normally doesn't get them at first and has to buy them from Ogre scalpers.",
    "health": 1,
    "id": "AT_097",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Tournament Attendee",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Wayne Reynolds",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2573,
    "flavor": "Hey!  Let me try that...",
    "health": 5,
    "id": "AT_098",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Sideshow Spelleater",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Copy your opponent's Hero Power.",
    "type": "MINION"
  },
  {
    "artist": "Ben Wootten",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2598,
    "flavor": "Someone called her a Rhinorider, and she's NOT HAPPY.",
    "health": 5,
    "id": "AT_099",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Kodorider",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "<b>Inspire:</b> Summon a 3/5 War Kodo.",
    "type": "MINION"
  },
  {
    "artist": "John Polidora",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2503,
    "flavor": "The Silver Hand is the best paladin organization.  The Argent Crusaders are super jealous.",
    "health": 3,
    "id": "AT_100",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Silver Hand Regent",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Inspire:</b> Summon a 1/1 Silver Hand Recruit.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2521,
    "flavor": "What did the pits ever do to you?",
    "health": 6,
    "id": "AT_101",
    "name": "Pit Fighter",
    "rarity": "COMMON",
    "set": "TGT",
    "type": "MINION"
  },
  {
    "artist": "Gonzalo Ordonez",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 2522,
    "flavor": "You can keep him, but you have to promise to feed him and clean out his tank every day!",
    "health": 9,
    "id": "AT_102",
    "name": "Captured Jormungar",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "TGT",
    "type": "MINION"
  },
  {
    "artist": "Seamus Gallagher",
    "attack": 9,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 2520,
    "flavor": "You have no idea how tired this guy is of being released.",
    "health": 7,
    "id": "AT_103",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "North Sea Kraken",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "TGT",
    "targetingArrowText": "Deal 4 damage.",
    "text": "<b>Battlecry:</b> Deal 4 damage.",
    "type": "MINION"
  },
  {
    "artist": "Skan Srisuwan",
    "attack": 5,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 2504,
    "flavor": "Just could not be talked out of using his turtle for the joust...",
    "health": 5,
    "id": "AT_104",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tuskarr Jouster",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, restore #7 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 2502,
    "flavor": "Don't worry.  With a little skin cream he's going to clear right up.",
    "health": 4,
    "id": "AT_105",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Injured Kvaldir",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Deal 3 damage to this minion.",
    "type": "MINION"
  },
  {
    "artist": "Andrea Uderzo",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2259,
    "flavor": "When there's something strange (say, a gibbering demon) in your neighborhood, who are you going to call?",
    "health": 3,
    "id": "AT_106",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Light's Champion",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 15
    },
    "rarity": "RARE",
    "referencedTags": [
      "SILENCE"
    ],
    "set": "TGT",
    "targetingArrowText": "<b>Silence</b> a Demon.",
    "text": "<b>Battlecry:</b> <b>Silence</b> a Demon.",
    "type": "MINION"
  },
  {
    "artist": "Edouard Guiton & Tony Washington",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2627,
    "flavor": "Yep.  It's a horse... wearing armor... going to war.",
    "health": 3,
    "id": "AT_108",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Armored Warhorse",
    "race": "BEAST",
    "rarity": "RARE",
    "referencedTags": [
      "CHARGE"
    ],
    "set": "TGT",
    "text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, gain <b>Charge</b>.",
    "type": "MINION"
  },
  {
    "artist": "Benjamin Zhang",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2505,
    "flavor": "Who argent watches the Argent Watchman?",
    "health": 4,
    "id": "AT_109",
    "mechanics": [
      "CANT_ATTACK",
      "INSPIRE"
    ],
    "name": "Argent Watchman",
    "rarity": "RARE",
    "set": "TGT",
    "text": "Can't attack.\n<b>Inspire:</b> Can attack as normal this turn.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2585,
    "flavor": "Meets monthly with the gladiators to discuss career goals.",
    "health": 5,
    "id": "AT_110",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Coliseum Manager",
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Inspire:</b> Return this minion to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Ron Spears",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2704,
    "flavor": "Menu:  Funnel cakes, carrots, popcorn, jormungar steaks.  It's hard serving a diverse clientele.",
    "health": 5,
    "id": "AT_111",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Refreshment Vendor",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Restore #4 Health to each hero.",
    "type": "MINION"
  },
  {
    "artist": "Penny Arcade",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2507,
    "flavor": "Needs just a few more ratings points to become Grandmaster Jouster.",
    "health": 6,
    "id": "AT_112",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Master Jouster",
    "rarity": "RARE",
    "referencedTags": [
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "set": "TGT",
    "text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, gain <b>Taunt</b> and <b>Divine Shield</b>.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2509,
    "flavor": "Join the Argent Crusade!  We have attractive tabards and you get to carry really nice swords!",
    "health": 4,
    "id": "AT_113",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Recruiter",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "<b>Inspire:</b> Add a 2/2 Squire to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2752,
    "flavor": "To be honest, heckling is not the most effective form of evil.",
    "health": 4,
    "id": "AT_114",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Evil Heckler",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Howard Lyon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2581,
    "flavor": "Good fencers make good neighbors, right?",
    "health": 2,
    "id": "AT_115",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fencing Coach",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "RARE",
    "set": "TGT",
    "text": "<b>Battlecry:</b> The next time you use your Hero Power, it costs (2) less.",
    "type": "MINION"
  },
  {
    "artist": "Jeff Easley",
    "attack": 1,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 2596,
    "flavor": "Keeping tabs on the Grand Tournament is priority #1 for the five mighty Dragonflights!",
    "health": 4,
    "id": "AT_116",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Wyrmrest Agent",
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "TGT",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Jesper Ejsing",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2493,
    "flavor": "Goes by \"MC ElfyElf\".",
    "health": 2,
    "id": "AT_117",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Master of Ceremonies",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "<b>Battlecry:</b> If you have a minion with <b>Spell Damage</b>, gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Todd Lockwood",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2510,
    "flavor": "A veteran of a number of crusades, she is a force for light and goodness.  Her latest crusade is against goblin telemarketers.",
    "health": 5,
    "id": "AT_118",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Grand Crusader",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Add a random Paladin card to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2511,
    "flavor": "Coming soon... to a tuskarr village near you!",
    "health": 4,
    "id": "AT_119",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Kvaldir Raider",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Inspire:</b> Gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Greg Staples",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 10,
    "dbfId": 2512,
    "flavor": "Don't ask him about the beard.  JUST DON'T.",
    "health": 8,
    "id": "AT_120",
    "name": "Frost Giant",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "Costs (1) less for each time you used your Hero Power this game.",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasper",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2518,
    "flavor": "The crowd ALWAYS yells lethal.",
    "health": 4,
    "id": "AT_121",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Crowd Favorite",
    "rarity": "EPIC",
    "referencedTags": [
      "BATTLECRY"
    ],
    "set": "TGT",
    "text": "Whenever you play a card with <b>Battlecry</b>, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Nutthapon Petchthai",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2724,
    "elite": true,
    "flavor": "Gormok has been giving impaling lessons in a small tent near the tournament grounds.  For only 25g you too could learn the fine art of impaling!",
    "health": 4,
    "id": "AT_122",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gormok the Impaler",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE_AND_MINIMUM_FRIENDLY_MINIONS": 4
    },
    "rarity": "LEGENDARY",
    "set": "TGT",
    "targetingArrowText": "Deal 4 damage.",
    "text": "<b>Battlecry:</b> If you have at least 4 other minions, deal 4 damage.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 2682,
    "elite": true,
    "flavor": "Chillmaw keeps trying to ruin the Grand Tournament, and she would've done it too, if it weren't for those dang kids!",
    "health": 6,
    "id": "AT_123",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Chillmaw",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "[x]<b>Taunt</b>\n<b>Deathrattle:</b> If you're holding\na Dragon, deal 3 damage\nto all minions.",
    "type": "MINION"
  },
  {
    "artist": "Wayne Reynolds",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2595,
    "elite": true,
    "flavor": "Bolf keeps coming in 2nd at the Grand Tournament.  It might be his year this year, if Lebron doesn't enter.",
    "health": 9,
    "id": "AT_124",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Bolf Ramshield",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "Whenever your hero takes damage, this minion takes it instead.",
    "type": "MINION"
  },
  {
    "artist": "John Polidora",
    "attack": 10,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 2725,
    "elite": true,
    "flavor": "This massive yeti just closes his eyes and charges at the nearest target.  The nearest Target is a couple blocks away and has sick deals on skateboards.",
    "health": 10,
    "id": "AT_125",
    "mechanics": [
      "CHARGE"
    ],
    "name": "Icehowl",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "<b>Charge</b>\nCan't attack heroes.",
    "type": "MINION"
  },
  {
    "artist": "Marcleo Vignali",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2683,
    "elite": true,
    "flavor": "The ethereals have their own jousting tournament, and Saraad is the reigning champion.  Also he won the ethereal hot dog eating contest.",
    "health": 5,
    "id": "AT_127",
    "mechanics": [
      "INSPIRE"
    ],
    "name": "Nexus-Champion Saraad",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "<b>Inspire:</b> Add a random spell to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2681,
    "elite": true,
    "flavor": "Apparently it really was just a flesh wound.",
    "health": 4,
    "id": "AT_128",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "The Skeleton Knight",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "<b>Deathrattle:</b> Reveal a minion in each deck. If yours costs more, return this to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Mark Zug",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2748,
    "elite": true,
    "flavor": "LOVES being called \"the wonder twins\".",
    "health": 4,
    "id": "AT_129",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Fjola Lightbane",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "TGT",
    "text": "Whenever <b>you</b> target this minion with a spell, gain <b>Divine Shield.</b>",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 6,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 6,
    "dbfId": 2723,
    "flavor": "A little better than Sea Minus Reaver.",
    "health": 7,
    "id": "AT_130",
    "mechanics": [
      "TOPDECK"
    ],
    "name": "Sea Reaver",
    "rarity": "EPIC",
    "set": "TGT",
    "text": "When you draw this, deal 1 damage to your minions.",
    "type": "MINION"
  },
  {
    "artist": "Ben Thompson",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2519,
    "elite": true,
    "flavor": "HATES being called \"the wonder twins\".",
    "health": 4,
    "id": "AT_131",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Eydis Darkbane",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "Whenever <b>you</b> target this minion with a spell, deal 3 damage to a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "Jomaro Kindred",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2736,
    "elite": true,
    "flavor": "It's like putting racing stripes and a giant spoiler on your hero power.",
    "health": 3,
    "id": "AT_132",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Justicar Trueheart",
    "rarity": "LEGENDARY",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Replace your starting Hero Power with a better one.",
    "type": "MINION"
  },
  {
    "artist": "Skan Srisuwan",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 2818,
    "flavor": "It's not HER fault you didn't put a spinning saw blade on your horse.",
    "health": 2,
    "id": "AT_133",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gadgetzan Jouster",
    "rarity": "COMMON",
    "set": "TGT",
    "text": "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 47775,
    "flavor": "\"See you later bot\"\n- Jaina",
    "health": 1,
    "id": "BOT_020",
    "mechanics": [
      "MODULAR",
      "RUSH"
    ],
    "name": "Skaterbot",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Magnetic</b>\n<b>Rush</b>",
    "type": "MINION"
  },
  {
    "artist": "Ursula dorada",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 47781,
    "flavor": "\"You have my shield! And the rest of me too.\"",
    "health": 5,
    "id": "BOT_021",
    "mechanics": [
      "MODULAR",
      "TAUNT"
    ],
    "name": "Bronze Gatekeeper",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Magnetic</b>\n<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 47837,
    "flavor": "They're Dr. Boom's babies. His baby boomers.",
    "health": 2,
    "id": "BOT_031",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Goblin Bomb",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "[x]<b>Deathrattle:</b> Deal 2 damage\nto the enemy hero.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 47840,
    "flavor": "Me throw face.",
    "id": "BOT_033",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Bomb Toss",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Deal $2 damage. Summon a 0/2 Goblin Bomb.",
    "type": "SPELL"
  },
  {
    "artist": "Jomaro Kindred",
    "attack": 5,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 7,
    "dbfId": 47841,
    "elite": true,
    "flavor": "Every good plan requires a bit of patience. And a lot of explosives.",
    "health": 5,
    "id": "BOT_034",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Boommaster Flark",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Summon four 0/2 Goblin Bombs.",
    "type": "MINION"
  },
  {
    "artist": "Tyler Walpole",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 47842,
    "flavor": "Keeps getting banned for toxic behavior.",
    "health": 2,
    "id": "BOT_035",
    "mechanics": [
      "MODULAR",
      "POISONOUS"
    ],
    "name": "Venomizer",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Magnetic</b>\n<b>Poisonous</b>",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 47855,
    "flavor": "She learns by trial and error.  Mostly error.",
    "health": 1,
    "id": "BOT_038",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fireworks Tech",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 17
    },
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "BOOMSDAY",
    "text": "[x]<b>Battlecry:</b> Give a friendly\nMech +1/+1. If it has\n<b>Deathrattle</b>, trigger it.",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 47856,
    "flavor": "If at first you don't succeed, die, die again.",
    "health": 6,
    "id": "BOT_039",
    "mechanics": [
      "AURA"
    ],
    "name": "Necromechanic",
    "rarity": "EPIC",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "BOOMSDAY",
    "text": "Your <b>Deathrattles</b> trigger twice.",
    "type": "MINION"
  },
  {
    "artist": "J. Paick & K. Turovec",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 47860,
    "flavor": "Harrison Jones was kicked off this project.",
    "id": "BOT_042",
    "name": "Weapons Project",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Each player equips a 2/3 Weapon and\ngains 6 Armor.",
    "type": "SPELL"
  },
  {
    "artist": "Sean McNally",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 47888,
    "flavor": "Ironic. It could recycle others, but not itself.",
    "health": 6,
    "id": "BOT_050",
    "mechanics": [
      "LIFESTEAL",
      "TAUNT"
    ],
    "name": "Rusty Recycler",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Taunt</b>\n<b>Lifesteal</b>",
    "type": "MINION"
  },
  {
    "artist": "J. Paick & K. Turovec",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 47887,
    "flavor": "Step 1: Grow giant evil strawberry.\nStep 2: ????\nStep 3: Rule Azeroth!",
    "id": "BOT_054",
    "name": "Biology Project",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0
    },
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Each player gains 2 Mana Crystals.",
    "type": "SPELL"
  },
  {
    "artist": "Vladimir Kafanov",
    "attack": 1,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 48691,
    "flavor": "He's all beeps and smiles but you're just a walking pile of armor to him.",
    "health": 3,
    "id": "BOT_059",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Eternium Rover",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Whenever this minion takes damage, gain 2 Armor.",
    "type": "MINION"
  },
  {
    "artist": "Jiajun Tian",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 47924,
    "flavor": "\"Well if I didn't build the whelp and YOU didn't build the whelp…\"",
    "health": 2,
    "id": "BOT_066",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Mechanical Whelp",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> Summon a 7/7 Mechanical Dragon.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 47925,
    "flavor": "This is the happiest moment of Grik's life. We'll miss him.",
    "id": "BOT_067",
    "name": "Rocket Boots",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "RUSH"
    ],
    "set": "BOOMSDAY",
    "text": "Give a minion <b>Rush</b>. Draw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 9,
    "dbfId": 47928,
    "elite": true,
    "flavor": "Dr. Boom ends his motivational speeches by dropping the mechs.",
    "id": "BOT_069",
    "name": "The Boomship",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "LEGENDARY",
    "referencedTags": [
      "RUSH"
    ],
    "set": "BOOMSDAY",
    "text": "Summon 3 random minions from your hand. Give them <b>Rush</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Zero",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 48025,
    "flavor": "They're a little light-headed.",
    "health": 1,
    "id": "BOT_079",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Faithful Lumi",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 17
    },
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "targetingArrowText": "Give +1/+1.",
    "text": "<b>Battlecry:</b> Give a friendly Mech +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Brian Despain",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 48034,
    "flavor": "Double-majoring in culinary sciences was definitely a mistake.",
    "health": 2,
    "id": "BOT_083",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Toxicologist",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Give your weapon +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 48035,
    "flavor": "Elite Tauren Chieftain's next hit single.",
    "id": "BOT_084",
    "name": "Violet Haze",
    "rarity": "COMMON",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "BOOMSDAY",
    "text": "Add 2 random <b>Deathrattle</b> cards to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Konstantin Turovec",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 48040,
    "flavor": "The tenth Pyroblast really felt like overkill.",
    "id": "BOT_087",
    "name": "Academic Espionage",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "Shuffle 10 cards from your opponent's class into your deck. They cost (1).",
    "type": "SPELL"
  },
  {
    "artist": "Wayne Wu",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 48051,
    "flavor": "It's just a Tempest Tantrum.",
    "id": "BOT_093",
    "name": "Elementary Reaction",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_TARGET_WITH_DEATHRATTLE": 0
    },
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Draw a card. Copy it if you played an Elemental last turn.",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 48060,
    "flavor": "After a stressful work day it really needs an outlet.",
    "health": 4,
    "id": "BOT_098",
    "name": "Unpowered Mauler",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "Can only attack if you cast a spell this turn.",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 6,
    "dbfId": 48799,
    "flavor": "Genius is 1% inspiration, and 99% drawing your Deathwing.",
    "id": "BOT_099",
    "name": "Eureka!",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "Summon a copy of a random minion from your hand.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 47978,
    "flavor": "Let's see what's behind rift number one!",
    "id": "BOT_101",
    "name": "Astral Rift",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "Add 2 random minions to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Ivan Fomin",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 47979,
    "flavor": "Preferred weapon of Dr. Boom's orthodontist.",
    "health": 1,
    "id": "BOT_102",
    "mechanics": [
      "DEATHRATTLE",
      "RUSH"
    ],
    "name": "Spark Drill",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Rush</b>\n<b>Deathrattle:</b> Add two\n1/1 Sparks with <b>Rush</b> to your hand.",
    "type": "MINION"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 47982,
    "elite": true,
    "flavor": "She's Dr. Boom's right-hand mage.",
    "health": 4,
    "id": "BOT_103",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Stargazer Luna",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "After you play the\nright-most card in your hand, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 48542,
    "flavor": "Star player on the inter-office Boomball team.",
    "health": 4,
    "id": "BOT_104",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dyn-o-matic",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Deal 5 damage randomly split among all minions except Mechs.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 48552,
    "flavor": "We asked, \"Where do the missiles go?\" and he answered, \"Yes.\"",
    "health": 4,
    "id": "BOT_107",
    "mechanics": [
      "MODULAR",
      "TRIGGER_VISUAL"
    ],
    "name": "Missile Launcher",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "[x]<b>Magnetic</b>\nAt the end of your turn,\ndeal 1 damage to all\nother characters.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 48099,
    "flavor": "She feels waiting for healing makes you appreciate it more.",
    "health": 4,
    "id": "BOT_216",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Omega Medic",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> If you have 10 Mana Crystals, restore #10 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Adam Byrne",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 6,
    "dbfId": 48100,
    "flavor": "Insecurity detected. Alerting hugbots.",
    "health": 5,
    "id": "BOT_218",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Security Rover",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "BOOMSDAY",
    "text": "[x]Whenever this minion\ntakes damage, summon a\n2/3 Mech with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Nicola Saviori",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 48101,
    "flavor": "All the better to hug you with!",
    "id": "BOT_219",
    "name": "Extra Arms",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "[x]Give a minion +2/+2.\nAdd 'More Arms!' to your\nhand that gives +2/+2.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 48113,
    "flavor": "Might take a few episodes to power up.",
    "id": "BOT_222",
    "name": "Spirit Bomb",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Deal $4 damage to a minion and your hero.",
    "type": "SPELL"
  },
  {
    "artist": "Dave Allsop",
    "attack": 2,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 48116,
    "flavor": "What's worse than finding two imps in your lab? Only finding one of them.",
    "health": 2,
    "id": "BOT_224",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Doubling Imp",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Summon a copy of this minion.",
    "type": "MINION"
  },
  {
    "artist": "Nicola Saviori",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 48298,
    "flavor": "Why did the demon cross the streams? To get to The Other Side.",
    "health": 5,
    "id": "BOT_226",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Nethersoul Buster",
    "race": "DEMON",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Gain +1 Attack for each damage your hero has taken this turn.",
    "type": "MINION"
  },
  {
    "artist": "Jiajun Tian",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 48644,
    "flavor": "Actually works by enlarging the rest of the world.",
    "id": "BOT_234",
    "name": "Shrink Ray",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "Set the Attack and Health of all minions\nto 1.",
    "type": "SPELL"
  },
  {
    "artist": "James Ryman",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 48637,
    "elite": true,
    "flavor": "He wants to tank, but Boom always makes him play support.",
    "health": 2,
    "id": "BOT_236",
    "mechanics": [
      "DIVINE_SHIELD",
      "LIFESTEAL"
    ],
    "name": "Crystalsmith Kangor",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "<b>Divine Shield</b>, <b>Lifesteal</b>\nYour healing is doubled.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 7,
    "dbfId": 48142,
    "flavor": "Why Beryllium? Because it's hard to spell.",
    "health": 8,
    "id": "BOT_237",
    "mechanics": [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS",
      "MODULAR"
    ],
    "name": "Beryllium Nullifier",
    "race": "MECHANICAL",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "<b>Magnetic</b>\nCan't be targeted by spells or Hero Powers.",
    "type": "MINION"
  },
  {
    "armor": 7,
    "artist": "Matt Dixon",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 7,
    "dbfId": 48146,
    "elite": true,
    "flavor": "\"Of course I've gone mad with power. Ever try going mad without it?\"",
    "health": 30,
    "id": "BOT_238",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dr. Boom, Mad Genius",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "RUSH"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> For the rest of the game, your Mechs have <b>Rush</b>.",
    "type": "HERO"
  },
  {
    "artist": "Arthur Gimaldinov",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 48487,
    "elite": true,
    "flavor": "What could go wrong?",
    "id": "BOT_242",
    "name": "Myra's Unstable Element",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "Draw the rest of\nyour deck.",
    "type": "SPELL"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 48159,
    "elite": true,
    "flavor": "On her first day on the job, Myra removed the smoke detectors.",
    "health": 2,
    "id": "BOT_243",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Myra Rotspring",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "DEATHRATTLE",
      "DISCOVER"
    ],
    "set": "BOOMSDAY",
    "text": "[x]<b>Battlecry:</b> <b>Discover</b> a\n<b>Deathrattle</b> minion. Also\ngain its <b>Deathrattle</b>.",
    "type": "MINION"
  },
  {
    "artist": "J. Paick & K. Turovec",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 7,
    "dbfId": 48161,
    "elite": true,
    "flavor": "Finally, Electra can work from home.",
    "id": "BOT_245",
    "name": "The Storm Bringer",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "Transform your minions into random <b>Legendary</b> minions.",
    "type": "SPELL"
  },
  {
    "artist": "Evgeniy Dlinnov",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 0,
    "dbfId": 48798,
    "flavor": "Working in a shaman's lab, it's important to be well-grounded.",
    "id": "BOT_246",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Beakered Lightning",
    "overload": 2,
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Deal $1 damage to all minions. <b>Overload:</b> (2)",
    "type": "SPELL"
  },
  {
    "artist": "Nicola Saviori",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 48185,
    "flavor": "Wrecks a dude, any size. Catches thieves, eats those guys. Look out! Here comes a Spider Bomb!",
    "health": 2,
    "id": "BOT_251",
    "mechanics": [
      "DEATHRATTLE",
      "MODULAR"
    ],
    "name": "Spider Bomb",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Magnetic</b>\n<b>Deathrattle:</b> Destroy a random enemy minion.",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasper",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 48803,
    "flavor": "Sometimes science is more art than science. A lot of people don’t get that.",
    "id": "BOT_254",
    "name": "Unexpected Results",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "[x]Summon two random\n$2-Cost minions <i>(improved\nby <b>Spell Damage</b>)</i>.",
    "type": "SPELL"
  },
  {
    "artist": "Gonzalo Ordonez",
    "attack": 5,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 7,
    "dbfId": 48195,
    "flavor": "All signs point to Antonidas.",
    "health": 5,
    "id": "BOT_256",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Astromancer",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "[x]<b>Battlecry:</b> Summon a\nrandom minion with Cost\nequal to your hand size.",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasper",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 7,
    "dbfId": 48198,
    "elite": true,
    "flavor": "Luna became head of the astronomy department when her boss invented the Pocket Black Hole.",
    "id": "BOT_257",
    "name": "Luna's Pocket Galaxy",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "Change the Cost of minions in your\ndeck to (1).",
    "type": "SPELL"
  },
  {
    "artist": "James Ryman",
    "attack": 5,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 48203,
    "elite": true,
    "flavor": "His original name was Aerek. Then the first clone was Berek. They went evil around Merek.",
    "health": 5,
    "id": "BOT_258",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Zerek, Master Cloner",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> If you've cast any spells on this minion, resummon it.",
    "type": "MINION"
  },
  {
    "artist": "Garrett Hanna",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 48211,
    "flavor": "People called him a soulless monster. We're not sure this is better.",
    "id": "BOT_263",
    "name": "Soul Infusion",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "Give the\nleft-most minion in your hand +2/+2.",
    "type": "SPELL"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 48223,
    "flavor": "New facial recognition systems keep out the Lorewalkers and Doomsayers.",
    "health": 3,
    "id": "BOT_267",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Piloted Reaper",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> Summon a random minion from\nyour hand that costs (2) or less.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 48226,
    "flavor": "\"I shall build a mighty golden paladin! And he will GREET the WORLD!\"",
    "health": 1,
    "id": "BOT_270",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Giggling Inventor",
    "rarity": "RARE",
    "referencedTags": [
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Summon two 1/2 Mechs with <b>Taunt</b> and <b>Divine Shield</b>.",
    "type": "MINION"
  },
  {
    "artist": "J. Axer",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 48415,
    "flavor": "Help me, worthy opponent. You're my only hope.",
    "health": 3,
    "id": "BOT_280",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Holomancer",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "After your opponent plays a minion, summon a 1/1 copy of it.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 48471,
    "flavor": "Once you hop, you just can't stop!",
    "health": 1,
    "id": "BOT_283",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Pogo-Hopper",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "[x]<b>Battlecry:</b> Gain +2/+2 for\neach other Pogo-Hopper\nyou played this game.",
    "type": "MINION"
  },
  {
    "artist": "Vlad Botos",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 48478,
    "durability": 2,
    "flavor": "Grab death by the handle.",
    "id": "BOT_286",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Necrium Blade",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> Trigger the <b>Deathrattle</b> of a random friendly minion.",
    "type": "WEAPON"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 48480,
    "flavor": "Join the chemistry lab! We've got all the solutions.",
    "health": 2,
    "id": "BOT_288",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Lab Recruiter",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Shuffle 3 copies of a friendly minion into your deck.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 48490,
    "flavor": "Best drank after a stiff gale.",
    "health": 4,
    "id": "BOT_291",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Storm Chaser",
    "race": "ELEMENTAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Draw a spell from your deck that costs (5) or more.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 48508,
    "flavor": "\"Surrender. You have 10 mana to comply.\"",
    "health": 6,
    "id": "BOT_296",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Omega Defender",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "[x]<b>Taunt</b>\n<b>Battlecry:</b> If you have\n10 Mana Crystals,\ngain +10 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 48515,
    "flavor": "They told Dr. Boom he could only pick one. He disagreed.",
    "id": "BOT_299",
    "mechanics": [
      "DISCOVER"
    ],
    "name": "Omega Assembly",
    "rarity": "RARE",
    "referencedTags": [
      "GEARS"
    ],
    "set": "BOOMSDAY",
    "text": "[x]<b>Discover</b> a Mech. If you\nhave 10 Mana Crystals,\nkeep all 3 cards.",
    "type": "SPELL"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 48505,
    "flavor": "Proper grammar would be \"sprung rocket.\"",
    "health": 1,
    "id": "BOT_308",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Spring Rocket",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "targetingArrowText": "Deal 2 damage.",
    "text": "<b>Battlecry:</b> Deal 2 damage.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 48529,
    "flavor": "*Awesome arm not included.",
    "health": 5,
    "id": "BOT_309",
    "name": "Upgradeable Framebot",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "type": "MINION"
  },
  {
    "artist": "Vladimir Kafanov",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 48536,
    "flavor": "It's a car!\n*Whomp whomp whomp*\nIt's a robot!\n*Whomp whom-CRUNCH*\nIt's… three.. smaller robots!",
    "health": 1,
    "id": "BOT_312",
    "mechanics": [
      "DEATHRATTLE",
      "MODULAR"
    ],
    "name": "Replicating Menace",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Magnetic</b>\n<b>Deathrattle:</b> Summon three 1/1 Microbots.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 48518,
    "flavor": "It'll be fine.  It's not like they have any reason to hate us.",
    "health": 3,
    "id": "BOT_401",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Weaponized Piñata",
    "race": "MECHANICAL",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> Add a random <b>Legendary</b> minion to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 48519,
    "flavor": "The secret is... There is no plan!",
    "id": "BOT_402",
    "name": "Secret Plan",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER",
      "SECRET"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Discover</b> a <b>Secret</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Jason Kang",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 48524,
    "flavor": "It's not juicy at all. IT'S JUST MESSING WITH YOUR HEAD.",
    "id": "BOT_404",
    "name": "Juicy Psychmelon",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "Draw a 7, 8, 9, and\n10-Cost minion\n from your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Jason Kang",
    "attack": 1,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 48526,
    "durability": 3,
    "flavor": "Boom's Second Law of Motion:\nHIT IT VERY HARD!",
    "id": "BOT_406",
    "mechanics": [
      "FINISH_ATTACK_SPELL_ON_DAMAGE",
      "TRIGGER_VISUAL"
    ],
    "name": "Supercollider",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "[x]After you attack a minion,\nforce it to attack one\nof its neighbors.",
    "type": "WEAPON"
  },
  {
    "artist": "Mike Sass",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 48527,
    "flavor": "Most of his friends are still Metalheads.",
    "health": 5,
    "id": "BOT_407",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Thunderhead",
    "race": "ELEMENTAL",
    "rarity": "EPIC",
    "referencedTags": [
      "OVERLOAD",
      "RUSH"
    ],
    "set": "BOOMSDAY",
    "text": "[x]After you play a card with\n<b>Overload</b>, summon two\n1/1 Sparks with <b>Rush</b>.",
    "type": "MINION"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 48537,
    "elite": true,
    "flavor": "\"The coin? You used me for THE COIN!?\"",
    "health": 3,
    "id": "BOT_411",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Electra Stormsurge",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Your next spell this turn casts twice.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 48544,
    "flavor": "Her hair was always like that.",
    "health": 1,
    "id": "BOT_413",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Brainstormer",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "[x]<b>Battlecry:</b> Gain +1 Health\nfor each spell in your hand.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 48566,
    "flavor": "Her suit was fitted using a scale model.",
    "health": 2,
    "id": "BOT_414",
    "mechanics": [
      "DIVINE_SHIELD",
      "STEALTH"
    ],
    "name": "Cloakscale Chemist",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Stealth</b>\n<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 49621,
    "flavor": "He's teaching his little buddy to talk, but all it says is, \"I am Gloop.\"",
    "health": 3,
    "id": "BOT_419",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dendrologist",
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> If you control a Treant, <b>Discover</b> a spell.",
    "type": "MINION"
  },
  {
    "artist": "Sam Hogg",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 48607,
    "flavor": "We'll put a happy tree right here... and give him a little friend.",
    "id": "BOT_420",
    "name": "Landscaping",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Summon two 2/2 Treants.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 6,
    "dbfId": 48609,
    "flavor": "That racial bonus to Herbalism finally paid off.",
    "health": 4,
    "id": "BOT_422",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Tending Tauren",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "[x]<b>Choose One -</b> Give your\nother minions +1/+1;\nor Summon two\n2/2 Treants.",
    "type": "MINION"
  },
  {
    "artist": "Adam Byrne",
    "attack": 4,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 7,
    "dbfId": 48612,
    "flavor": "Unlike gnomes, dreampetals grow more than 3 feet tall.",
    "health": 4,
    "id": "BOT_423",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Dreampetal Florist",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "At the end of your turn, reduce the Cost of a random minion in your hand by (7).",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 10,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 10,
    "dbfId": 48625,
    "elite": true,
    "flavor": "\"Your software will fail. Your users will abandon you. You are already obsolete.\"",
    "health": 10,
    "id": "BOT_424",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Mecha'thun",
    "race": "MECHANICAL",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "[x]<b>Deathrattle:</b> If you have no\ncards in your deck, hand,\nand battlefield, destroy\nthe enemy hero.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 8,
    "dbfId": 48670,
    "elite": true,
    "flavor": "It used to be a Ba-zooka but we ran out of sheep.",
    "id": "BOT_429",
    "name": "Flark's Boom-Zooka",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "[x]Summon 3 minions from\nyour deck. They attack\nenemy minions, then die.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 48700,
    "flavor": "She's on a bomb voyage.",
    "health": 1,
    "id": "BOT_431",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Whirliglider",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Summon a 0/2 Goblin Bomb.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 5,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 8,
    "dbfId": 48717,
    "elite": true,
    "flavor": "She will NOT STOP until she gets tenure.",
    "health": 5,
    "id": "BOT_433",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Dr. Morrigan",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> Swap this with a minion from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Max Greck",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 48757,
    "elite": true,
    "flavor": "Of all the scientists, he has the most knowledge (when measured in volume).",
    "health": 4,
    "id": "BOT_434",
    "name": "Flobbidinous Floop",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "While in your hand, this is a 3/4 copy of the last minion you played.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 48759,
    "flavor": "Zerek got sick of fighting over the remote.",
    "id": "BOT_435",
    "name": "Cloning Device",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Discover</b> a copy of a minion in your opponent's deck.",
    "type": "SPELL"
  },
  {
    "artist": "Cicily He",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 48764,
    "flavor": "Mined exclusively from the dark side of the moon.",
    "id": "BOT_436",
    "name": "Prismatic Lens",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0
    },
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "Draw a minion and a spell from your deck. Swap their Costs.",
    "type": "SPELL"
  },
  {
    "artist": "Mike Azevedo",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 48770,
    "flavor": "\"Ha ha! Glork looks ridiculous! ...Glork? Glork?\"",
    "id": "BOT_437",
    "name": "Goblin Prank",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "referencedTags": [
      "RUSH"
    ],
    "set": "BOOMSDAY",
    "text": "Give a friendly minion +3/+3 and <b>Rush</b>. It dies at end of turn.",
    "type": "SPELL"
  },
  {
    "artist": "Garrett Hanna",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 48772,
    "flavor": "Goes great with Cyber-Salsa.",
    "id": "BOT_438",
    "name": "Cybertech Chip",
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "BOOMSDAY",
    "text": "Give your minions \"<b>Deathrattle:</b> Add a random Mech to your hand.\"",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 2,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 48835,
    "flavor": "Conclusion: Nothing there.",
    "health": 2,
    "id": "BOT_443",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Void Analyst",
    "race": "DEMON",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> Give all Demons in your hand +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 48837,
    "elite": true,
    "flavor": "How much gloop could Floop's Gloop gloop if Floop's Gloop\ncould gloop gloop?",
    "id": "BOT_444",
    "name": "Floop's Glorious Gloop",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "Whenever a minion dies this turn, gain 1 Mana Crystal this turn only.",
    "type": "SPELL"
  },
  {
    "artist": "Eva Widermann",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 48886,
    "flavor": "Its project name was KAN-GA. The little one was R-00.",
    "health": 1,
    "id": "BOT_445",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Mecharoo",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> Summon a 1/1 Jo-E Bot.",
    "type": "MINION"
  },
  {
    "artist": "David Kegg",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 49018,
    "flavor": "This elf's winning the arms race.",
    "health": 3,
    "id": "BOT_447",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Crystallizer",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "[x]<b>Battlecry:</b> Deal 5 damage\nto your hero. Gain 5 Armor.",
    "type": "MINION"
  },
  {
    "artist": "Daria Tuzova",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 49019,
    "faction": "HORDE",
    "flavor": "Sadly the warranty does not cover fireballs or acts of Boom.",
    "health": 12,
    "id": "BOT_448",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Damaged Stegotron",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Deal 6 damage to this minion.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 49052,
    "flavor": "Batteries have three components: Cathode, Anode, and Overload.",
    "id": "BOT_451",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Voltaic Burst",
    "overload": 1,
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "RARE",
    "referencedTags": [
      "RUSH"
    ],
    "set": "BOOMSDAY",
    "text": "Summon two 1/1 Sparks with <b>Rush</b>. <b>Overload:</b> (1)",
    "type": "SPELL"
  },
  {
    "artist": "Konstantin Turovec",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 1,
    "dbfId": 49081,
    "flavor": "Literally starstruck.",
    "id": "BOT_453",
    "name": "Shooting Star",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Deal $1 damage to a minion and the minions next to it.",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 4,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 8,
    "dbfId": 48744,
    "flavor": "\"Are you sure that's enough gloop?\"\n\"Hold on.\"",
    "health": 4,
    "id": "BOT_507",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gloop Sprayer",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0
    },
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Summon a copy of each adjacent minion.",
    "type": "MINION"
  },
  {
    "artist": "Vlad Botos",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 48748,
    "flavor": "Two near-death experiences for the price of one!",
    "id": "BOT_508",
    "name": "Necrium Vial",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0,
      "REQ_TARGET_WITH_DEATHRATTLE": 0
    },
    "rarity": "EPIC",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "BOOMSDAY",
    "text": "Trigger a friendly minion's <b>Deathrattle</b> twice.",
    "type": "SPELL"
  },
  {
    "artist": "Dave Allsop",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 48929,
    "flavor": "Shortstop on N'zoth's softball team.",
    "health": 1,
    "id": "BOT_509",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Dead Ringer",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> Draw a <b>Deathrattle</b> minion from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Ivan Fomin",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 48753,
    "flavor": "Dress for the bomb you want, not the bomb you have.",
    "health": 5,
    "id": "BOT_511",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Seaforium Bomber",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "[x]<b>Battlecry:</b> Shuffle a Bomb\ninto your opponent's deck.\nWhen drawn, it explodes\nfor 5 damage.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 0,
    "dbfId": 48976,
    "flavor": "\"Help! I've fallen and I can't get down!\"",
    "id": "BOT_517",
    "name": "Topsy Turvy",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Swap a minion's Attack and Health.",
    "type": "SPELL"
  },
  {
    "artist": "Jerry Mascho",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 48823,
    "flavor": "\"Zerek! Stay out of my lab!\"",
    "id": "BOT_521",
    "name": "Ectomancy",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "Summon copies of all Demons you control.",
    "type": "SPELL"
  },
  {
    "artist": "Mike Sass",
    "attack": 8,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 10,
    "dbfId": 48831,
    "flavor": "The latest advancement in\nhippo-botany.",
    "health": 8,
    "id": "BOT_523",
    "mechanics": [
      "RUSH"
    ],
    "name": "Mulchmuncher",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Rush</b>. Costs (1) less for each friendly Treant that died this game.",
    "type": "MINION"
  },
  {
    "artist": "Brian Despain",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 49013,
    "flavor": "Available as a bundle, along with Power Words: Detonate, Animate, Annihilate, and Paper Weight.",
    "id": "BOT_529",
    "name": "Power Word: Replicate",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_NUM_MINION_SLOTS": 1,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "Choose a friendly minion. Summon a 5/5 copy of it.",
    "type": "SPELL"
  },
  {
    "artist": "L Chanchai",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 49263,
    "flavor": "Casting with the stars.",
    "health": 1,
    "id": "BOT_531",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Celestial Emissary",
    "race": "ELEMENTAL",
    "rarity": "RARE",
    "referencedTags": [
      "SPELLPOWER"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Your next spell this turn has <b>Spell Damage +2</b>.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 49161,
    "faction": "HORDE",
    "flavor": "When it absolutely, positively, has to blow up overnight.",
    "health": 2,
    "id": "BOT_532",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Explodinator",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Summon two 0/2 Goblin Bombs.",
    "type": "MINION"
  },
  {
    "artist": "Daria Tuzova",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 49162,
    "flavor": "Electra stores her elementals in the cloud.",
    "health": 2,
    "id": "BOT_533",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Menacing Nimbus",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Add a random Elemental to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 9,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 49163,
    "faction": "ALLIANCE",
    "flavor": "Leave them alone for two minutes and they go right into sleep mode.",
    "health": 7,
    "id": "BOT_534",
    "mechanics": [
      "DIVINE_SHIELD"
    ],
    "name": "Bull Dozer",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Vladimir Kafanov",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 49164,
    "flavor": "Best-selling author of \"How to Make Friends You Completely Control.\"",
    "health": 1,
    "id": "BOT_535",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Microtech Controller",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Summon two 1/1 Microbots.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 4,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 49167,
    "flavor": "They don't just find the truth. They give it a ten second head start, then hunt it down.",
    "health": 5,
    "id": "BOT_536",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Omega Agent",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "[x]<b>Battlecry:</b> If you have 10\nMana Crystals, summon\n 2 copies of this minion.",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 0,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 49169,
    "flavor": "When you need more iron in your diet.",
    "health": 5,
    "id": "BOT_537",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Mechano-Egg",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> Summon an 8/8 Robosaur.",
    "type": "MINION"
  },
  {
    "artist": "L Chanchai",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 49170,
    "flavor": "He goes by Bzzzzt Aldrin.",
    "health": 1,
    "id": "BOT_538",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Spark Engine",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "referencedTags": [
      "RUSH"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Add a \n1/1 Spark with <b>Rush</b> to your hand.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 49171,
    "flavor": "We ran out of jars, so we started putting brains in other stuff.",
    "health": 4,
    "id": "BOT_539",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Arcane Dynamo",
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> <b>Discover</b> a spell that costs (5) or more.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 49172,
    "flavor": "\"I said this looks like a job for me\nSo everybody just follow me\n'Cause we need a little E.M.P.\n'Cause it feels so mechy without me…\"",
    "health": 3,
    "id": "BOT_540",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "E.M.P. Operative",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 17
    },
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "targetingArrowText": "Destroy a Mech.",
    "text": "<b>Battlecry:</b> Destroy a Mech.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 49175,
    "flavor": "Has a side-business selling her lipstick shade, \"Omega Red.\"",
    "health": 3,
    "id": "BOT_543",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Omega Mind",
    "rarity": "EPIC",
    "referencedTags": [
      "LIFESTEAL"
    ],
    "set": "BOOMSDAY",
    "text": "[x]<b>Battlecry:</b> If you have 10\nMana Crystals, your spells\n have <b>Lifesteal</b> this turn.",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 49176,
    "flavor": "You leave Deathstalker Rexxar alone in the lab for TWO minutes…",
    "health": 6,
    "id": "BOT_544",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Loose Specimen",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Deal 6 damage randomly split among other friendly minions.",
    "type": "MINION"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 49184,
    "elite": true,
    "flavor": "Everything but the kitchen sink. Oh wait, there's one on his back.",
    "health": 2,
    "id": "BOT_548",
    "mechanics": [
      "DIVINE_SHIELD",
      "LIFESTEAL",
      "MODULAR",
      "RUSH",
      "TAUNT"
    ],
    "name": "Zilliax",
    "race": "MECHANICAL",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "<b>Magnetic</b>\n<b><b>Divine Shield</b>, <b>Taunt</b>, Lifesteal, Rush</b>",
    "type": "MINION"
  },
  {
    "artist": "Cicily He",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 49188,
    "flavor": "Carefully assembled from two Electrowrongs.",
    "health": 3,
    "id": "BOT_550",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Electrowright",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> If you're holding a spell that costs (5) or more, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "David Kegg",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 49195,
    "flavor": "\"You're a Sagittarius? Me too! Just gimme a sec.\"",
    "health": 7,
    "id": "BOT_552",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Star Aligner",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "[x]<b>Battlecry:</b> If you control 3\nminions with 7 Health, deal\n7 damage to all enemies.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 49201,
    "elite": true,
    "flavor": "She wanders realities, taking on many forms. One was a unicorn princess.",
    "health": 6,
    "id": "BOT_555",
    "mechanics": [
      "STEALTH"
    ],
    "name": "Harbinger Celestia",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "[x]<b>Stealth</b>\nAfter your opponent plays\na minion, become a\ncopy of it.",
    "type": "MINION"
  },
  {
    "artist": "Ian Ameling",
    "attack": 0,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 49265,
    "flavor": "“Now I feel... REALLY icky.”",
    "health": 2,
    "id": "BOT_558",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Test Subject",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "[x]<b>Deathrattle:</b> Return any\nspells you cast on this\nminion to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 49269,
    "flavor": "Her friends call her \"Shuffleupugus\".",
    "health": 4,
    "id": "BOT_559",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Augmented Elekk",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "Whenever you shuffle a card into a deck, shuffle in an extra copy.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 49233,
    "faction": "HORDE",
    "flavor": "It was fitting in fine until it gathered nuts <i>and</i> bolts.",
    "health": 4,
    "id": "BOT_562",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Coppertail Imposter",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "referencedTags": [
      "STEALTH"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Gain <b>Stealth</b> until your next turn.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 49356,
    "flavor": "WAR! GEAR! What is it good for?",
    "health": 5,
    "id": "BOT_563",
    "mechanics": [
      "MODULAR"
    ],
    "name": "Wargear",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Magnetic</b>",
    "type": "MINION"
  },
  {
    "artist": "Anton Kagounkin",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 49361,
    "flavor": "\"Well we HAD it contained. Then you went and gave it legs!\"",
    "health": 4,
    "id": "BOT_565",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Blightnozzle Crawler",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "referencedTags": [
      "POISONOUS",
      "RUSH"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> Summon a 1/1 Ooze with <b>Poisonous</b> and <b>Rush</b>.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 4,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 49416,
    "flavor": "It's hard to call her reckless when it's clear she knows what she's doing.",
    "health": 6,
    "id": "BOT_566",
    "mechanics": [
      "AURA",
      "TRIGGER_VISUAL"
    ],
    "name": "Reckless Experimenter",
    "rarity": "EPIC",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "BOOMSDAY",
    "text": "[x]<b>Deathrattle</b> minions you\nplay cost (3) less, but die\nat the end of the turn.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 9,
    "dbfId": 49421,
    "elite": true,
    "flavor": "Cloning can be a jarring experience.",
    "id": "BOT_567",
    "name": "Zerek's Cloning Gallery",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "Summon a 1/1 copy of each minion in your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 49423,
    "elite": true,
    "flavor": "Worst field trip ever.",
    "id": "BOT_568",
    "name": "The Soularium",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "Draw 3 cards.\nAt the end of your turn, discard them.",
    "type": "SPELL"
  },
  {
    "artist": "Dany Orizio",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 49447,
    "elite": true,
    "flavor": "The original clever girl.",
    "health": 4,
    "id": "BOT_573",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Subject 9",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "SECRET"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Draw 5 different <b>Secrets</b> from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Max Greck",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 49494,
    "flavor": "You don't have to be crazy to work here, but it helps.",
    "health": 4,
    "id": "BOT_576",
    "mechanics": [
      "COMBO"
    ],
    "name": "Crazed Chemist",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_FOR_COMBO": 0
    },
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "targetingArrowText": "Give +4 Attack.",
    "text": "<b>Combo:</b> Give a friendly minion +4 Attack.",
    "type": "MINION"
  },
  {
    "artist": "J. Paick & K. Turovec",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 48692,
    "flavor": "Abstract: Analyzing systemic applications of coldlight data sets vis-a-vis shuffle-related paradigms. Conclusion: Yay, cards!",
    "id": "BOT_600",
    "name": "Research Project",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Each player draws 2 cards.",
    "type": "SPELL"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 6,
    "dbfId": 48693,
    "flavor": "Some say the world will end in fire. Some say in ice. Why not BOTH?",
    "health": 3,
    "id": "BOT_601",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Meteorologist",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> For each card in your hand, deal 1 damage to a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 48890,
    "flavor": "Rage alongside the machine.",
    "health": 1,
    "id": "BOT_603",
    "mechanics": [
      "RUSH"
    ],
    "name": "Steel Rager",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Rush</b>",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 4,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 49045,
    "flavor": "INGREDIENTS: STAR-STUFF, \nBLUE #1, NATURAL AND ARTIFICIAL FLAVORS.",
    "health": 3,
    "id": "BOT_604",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Cosmic Anomaly",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "spellDamage": 2,
    "text": "<b>Spell Damage +2</b>",
    "type": "MINION"
  },
  {
    "artist": "Tyler West Studios",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 49279,
    "flavor": "More Boom for your buck.",
    "health": 2,
    "id": "BOT_606",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Kaboom Bot",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Deathrattle:</b> Deal 4 damage to a random enemy minion.",
    "type": "MINION"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 48982,
    "flavor": "They tried for weeks to make a stealth version, but eventually decided to just let it glow.",
    "health": 3,
    "id": "BOT_906",
    "mechanics": [
      "MODULAR"
    ],
    "name": "Glow-Tron",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "<b>Magnetic</b>",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 48983,
    "flavor": "Also known as a power zinc.",
    "health": 2,
    "id": "BOT_907",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Galvanizer",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "[x]<b>Battlecry:</b> Reduce the\nCost of Mechs in your\nhand by (1).",
    "type": "MINION"
  },
  {
    "artist": "Zero",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 48984,
    "flavor": "We call it the bubble machine.",
    "id": "BOT_908",
    "mechanics": [
      "SECRET"
    ],
    "name": "Autodefense Matrix",
    "rarity": "COMMON",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "BOOMSDAY",
    "text": "<b>Secret:</b> When one of your minions is attacked, give it <b>Divine Shield</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler West Studio",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 48985,
    "flavor": "\"The Light is neither a particle nor a wave. It's more of a juice, really.\"",
    "id": "BOT_909",
    "name": "Crystology",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "[x]Draw two 1-Attack\nminions from your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 6,
    "dbfId": 48989,
    "flavor": "\"Windell! More light!\"\n\"I'm givin' it all she's got, Kangor!\"",
    "health": 4,
    "id": "BOT_910",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Glowstone Technician",
    "rarity": "EPIC",
    "set": "BOOMSDAY",
    "text": "<b>Battlecry:</b> Give all minions in your hand +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 48993,
    "flavor": "Every ten seconds it asks if you want to update.",
    "health": 4,
    "id": "BOT_911",
    "mechanics": [
      "DIVINE_SHIELD",
      "MODULAR",
      "TAUNT"
    ],
    "name": "Annoy-o-Module",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "BOOMSDAY",
    "text": "<b>Magnetic</b>\n<b>Divine Shield</b>\n<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Dai Yang",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 7,
    "dbfId": 49009,
    "elite": true,
    "flavor": "\"That's three, Kangor. Three isn't endless.\"\n- Countess Ashmore",
    "id": "BOT_912",
    "name": "Kangor's Endless Army",
    "playRequirements": {
      "REQ_FRIENDLY_MINIONS_OF_RACE_DIED_THIS_GAME": 17,
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "LEGENDARY",
    "referencedTags": [
      "MODULAR"
    ],
    "set": "BOOMSDAY",
    "text": "Resurrect 3 friendly Mechs. They keep any <b>Magnetic</b> upgrades.",
    "type": "SPELL"
  },
  {
    "artist": "J. Paick & K. Turovec",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 50432,
    "flavor": "Another group project where Jaraxxus doesn't do any work.",
    "id": "BOT_913",
    "name": "Demonic Project",
    "rarity": "COMMON",
    "set": "BOOMSDAY",
    "text": "Each player transforms a random minion in their hand into a Demon.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 50477,
    "elite": true,
    "flavor": "From the prestigious Westfall Wonderfuls.",
    "health": 5,
    "id": "BOT_914",
    "name": "Whizbang the Wonderful",
    "rarity": "LEGENDARY",
    "set": "BOOMSDAY",
    "text": "You start the game with one of Whizbang's Wonderful Decks!",
    "type": "MINION"
  },
  {
    "artist": "Jaime Jones",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 2274,
    "flavor": "Each year, folk gather in front of Blackrock Mountain to mourn those who were mind-controlled into the lava.",
    "howToEarn": "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "id": "BRM_001",
    "name": "Solemn Vigil",
    "rarity": "COMMON",
    "set": "BRM",
    "text": "Draw 2 cards. Costs (1) less for each minion that died this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 2275,
    "flavor": "Flamewakers HATE being confused for Flamewalkers. They just wake up fire, they don’t walk on it. Walking on fire is CRAZY.",
    "health": 4,
    "howToEarn": "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "id": "BRM_002",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Flamewaker",
    "rarity": "RARE",
    "set": "BRM",
    "text": "After you cast a spell, deal 2 damage randomly split among all enemies.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 5,
    "dbfId": 2284,
    "flavor": "Dragons breathe fire, sure, but did you know they can also breathe Cotton Candy?  It's harder to give them a reason to do that, though.",
    "howToEarn": "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "id": "BRM_003",
    "name": "Dragon's Breath",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "BRM",
    "text": "Deal $4 damage. Costs (1) less for each minion that died this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Sam Nielson",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 2286,
    "flavor": "The twilight whelps are basically magic-vampires. Despite this, they are not a reference to any popular series of novels.",
    "health": 1,
    "howToEarn": "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "id": "BRM_004",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Twilight Whelp",
    "race": "DRAGON",
    "rarity": "COMMON",
    "set": "BRM",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, gain +2 Health.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 2301,
    "flavor": "Demons are not angry most of the time. You have to play this card in order to really bring it out of them.",
    "howToEarn": "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "id": "BRM_005",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Demonwrath",
    "rarity": "RARE",
    "set": "BRM",
    "text": "[x]Deal $2 damage to all\nminions except Demons.",
    "type": "SPELL"
  },
  {
    "artist": "Steve Prescott",
    "attack": 2,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 2288,
    "flavor": "His imp gang likes to sneak into Stormwind to spraypaint \"Ragnaros Rulez\" on the Mage Tower.",
    "health": 4,
    "howToEarn": "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "id": "BRM_006",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Imp Gang Boss",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "BRM",
    "text": "Whenever this minion takes damage, summon a 1/1 Imp.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 2304,
    "flavor": "If you are thinking about visiting Moonbrook, you better roll deep.",
    "howToEarn": "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "id": "BRM_007",
    "name": "Gang Up",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "BRM",
    "text": "Choose a minion. Shuffle 3 copies of it into your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Eric Braddock",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 2291,
    "flavor": "He loves skulking. He skulks after hours just for the joy of it, but his friends are pretty worried he'll get burnt out.",
    "health": 3,
    "howToEarn": "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "id": "BRM_008",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dark Iron Skulker",
    "rarity": "RARE",
    "set": "BRM",
    "text": "<b>Battlecry:</b> Deal 2 damage to all undamaged enemy minions.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 7,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 9,
    "dbfId": 2295,
    "flavor": "The roots, the roots, the roots is on fire!",
    "health": 8,
    "howToEarn": "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "id": "BRM_009",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Volcanic Lumberer",
    "rarity": "RARE",
    "set": "BRM",
    "text": "<b>Taunt</b>\nCosts (1) less for each minion that died this turn.",
    "type": "MINION"
  },
  {
    "artist": "Stanley Lau",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 2292,
    "flavor": "Druids who fought too long in Northrend were easily seduced by Ragnaros; a mug of hot chocolate was generally all it took.",
    "health": 2,
    "howToEarn": "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "id": "BRM_010",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Druid of the Flame",
    "rarity": "COMMON",
    "set": "BRM",
    "text": "<b>Choose One -</b> Transform into a 5/2 minion; or a 2/5 minion.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 2289,
    "flavor": "Chocolate lava cake is shockingly delicious.",
    "howToEarn": "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "id": "BRM_011",
    "name": "Lava Shock",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "OVERLOAD"
    ],
    "set": "BRM",
    "text": "Deal $2 damage.\nUnlock your <b>Overloaded</b> Mana Crystals.",
    "type": "SPELL"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 2290,
    "flavor": "Ragnaros interviews hundreds of Fire Elementals for the position of \"Destroyer\" but very few have what it takes.",
    "health": 6,
    "howToEarn": "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "id": "BRM_012",
    "mechanics": [
      "BATTLECRY",
      "OVERLOAD"
    ],
    "name": "Fireguard Destroyer",
    "overload": 1,
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "BRM",
    "text": "<b>Battlecry:</b> Gain 1-4 Attack. <b>Overload:</b> (1)",
    "type": "MINION"
  },
  {
    "artist": "Jonboy Meyers",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 2260,
    "flavor": "Han shot first.",
    "howToEarn": "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "id": "BRM_013",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Quick Shot",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "BRM",
    "text": "Deal $3 damage.\nIf your hand is empty, draw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Jomaro Kindred",
    "attack": 4,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 2263,
    "flavor": "It takes a special kind of hunter to venture deep into a firey lava pit and convince a monster who lives there to come home and be a cuddly housepet.",
    "health": 4,
    "howToEarn": "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "id": "BRM_014",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Core Rager",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "BRM",
    "text": "<b>Battlecry:</b> If your hand is empty, gain +3/+3.",
    "type": "MINION"
  },
  {
    "artist": "Ben Olson",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 2296,
    "flavor": "This is better than Arcane Explosion, so I guess warriors are finally getting revenge on mages for Mortal Strike being worse than Fireball.",
    "howToEarn": "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "id": "BRM_015",
    "name": "Revenge",
    "rarity": "RARE",
    "set": "BRM",
    "text": "Deal $1 damage to all minions. If you have 12 or less Health, deal $3 damage instead.",
    "type": "SPELL"
  },
  {
    "artist": "Efrem Palacios",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 2297,
    "flavor": "Once a lowly \"Stick Flinger\", he's been relentless on the path to his ultimate dream: \"Tauren Flinger\".",
    "health": 5,
    "howToEarn": "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "id": "BRM_016",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Axe Flinger",
    "rarity": "COMMON",
    "set": "BRM",
    "text": "Whenever this minion takes damage, deal 2 damage to the enemy hero.",
    "type": "MINION"
  },
  {
    "artist": "Luke Mancini",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 2298,
    "flavor": "I walked into the dungeon and noticed a slain adventurer. In his final moments, he had scrawled out a message in the dust on the wall beside him. Two words: \"rez plz\"",
    "howToEarn": "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "id": "BRM_017",
    "name": "Resurrect",
    "playRequirements": {
      "REQ_FRIENDLY_MINION_DIED_THIS_GAME": 0,
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "RARE",
    "set": "BRM",
    "text": "Summon a random friendly minion that died this game.",
    "type": "SPELL"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 5,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 2299,
    "flavor": "Everybody wants someone to snuggle with. Even giant armored scaly draconic beasts of destruction.",
    "health": 5,
    "howToEarn": "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "id": "BRM_018",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dragon Consort",
    "race": "DRAGON",
    "rarity": "RARE",
    "set": "BRM",
    "text": "<b>Battlecry:</b> The next Dragon you play costs (2) less.",
    "type": "MINION"
  },
  {
    "artist": "Bobby Chiu",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2279,
    "flavor": "If you love getting your face punched, come to the Grim Guzzler!",
    "health": 3,
    "howToEarn": "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "id": "BRM_019",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Grim Patron",
    "rarity": "RARE",
    "set": "BRM",
    "text": "After this minion survives damage, summon another Grim Patron.",
    "type": "MINION"
  },
  {
    "artist": "Edouard Guiton & Stuido HIVE",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2306,
    "flavor": "Dragonkin Sorcerers be all \"I'm a wizard\" and everyone else be all \"daaaaang\".",
    "health": 5,
    "howToEarn": "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "id": "BRM_020",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Dragonkin Sorcerer",
    "race": "DRAGON",
    "rarity": "COMMON",
    "set": "BRM",
    "text": "Whenever <b>you</b> target this minion with a spell, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 2278,
    "flavor": "Think of them as bullets for your dragon gun.",
    "health": 2,
    "howToEarn": "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "id": "BRM_022",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Dragon Egg",
    "rarity": "RARE",
    "set": "BRM",
    "text": "Whenever this minion takes damage, summon a 2/1 Whelp.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2257,
    "flavor": "Drakonids were created to have all the bad parts of a dragon in the form of a humanoid. But, like, why?",
    "health": 6,
    "howToEarn": "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "id": "BRM_024",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Drakonid Crusher",
    "race": "DRAGON",
    "rarity": "COMMON",
    "set": "BRM",
    "text": "<b>Battlecry:</b> If your opponent has 15 or less Health, gain +3/+3.",
    "type": "MINION"
  },
  {
    "artist": "Lucas Graciano",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2258,
    "flavor": "Volcanic Drakes breathe lava instead of fire. The antacid vendor at Thorium Point does a brisk business with them.",
    "health": 4,
    "howToEarn": "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "id": "BRM_025",
    "name": "Volcanic Drake",
    "race": "DRAGON",
    "rarity": "COMMON",
    "set": "BRM",
    "text": "Costs (1) less for each minion that died this turn.",
    "type": "MINION"
  },
  {
    "artist": "John Polidora",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2283,
    "flavor": "Hungry Hungry Dragon is NOT a fun game.",
    "health": 6,
    "howToEarn": "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "id": "BRM_026",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Hungry Dragon",
    "race": "DRAGON",
    "rarity": "COMMON",
    "set": "BRM",
    "text": "<b>Battlecry:</b> Summon a random 1-Cost minion for your opponent.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 9,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 2281,
    "elite": true,
    "flavor": "You thought Executus turned you into Ragnaros, but really Ragnaros was in you the whole time.",
    "health": 7,
    "howToEarn": "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "id": "BRM_027",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Majordomo Executus",
    "rarity": "LEGENDARY",
    "set": "BRM",
    "text": "<b>Deathrattle:</b> Replace your hero with Ragnaros, the Firelord.",
    "type": "MINION"
  },
  {
    "artist": "Wayne Reynolds",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2262,
    "elite": true,
    "flavor": "His second greatest regret is summoning an evil Firelord who enslaved his entire people.",
    "health": 5,
    "howToEarn": "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Depths, in the Blackrock Mountain adventure.",
    "id": "BRM_028",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Emperor Thaurissan",
    "rarity": "LEGENDARY",
    "set": "BRM",
    "text": "At the end of your turn, reduce the Cost of cards in your hand by (1).",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 2308,
    "elite": true,
    "flavor": "Rend believes he is the True Warchief of the Horde and he keeps editing the wikipedia page for \"Warchief of the Horde\" to include his picture.",
    "health": 4,
    "howToEarn": "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackrock Spire, in the Blackrock Mountain adventure.",
    "id": "BRM_029",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Rend Blackhand",
    "playRequirements": {
      "REQ_LEGENDARY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND": 0
    },
    "rarity": "LEGENDARY",
    "set": "BRM",
    "targetingArrowText": "Destroy a Legend.",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, destroy a <b>Legendary</b> minion.",
    "type": "MINION"
  },
  {
    "artist": "Ruan Jia",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 2261,
    "elite": true,
    "flavor": "They call him \"Blackwing\" because he's a black dragon...... and he's got wings.",
    "health": 8,
    "howToEarn": "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "id": "BRM_030",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Nefarian",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "BRM",
    "text": "<b>Battlecry:</b> Add 2 random spells to your hand <i>(from your opponent's class)</i>.",
    "type": "MINION"
  },
  {
    "artist": "Todd Lockwood",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 2280,
    "elite": true,
    "flavor": "Left head and right head can never agree about what to eat for dinner, so they always end up just eating ramen again.",
    "health": 8,
    "howToEarn": "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Blackwing Lair, in the Blackrock Mountain adventure.",
    "id": "BRM_031",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Chromaggus",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "BRM",
    "text": "Whenever you draw a card, put another copy into your hand.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2408,
    "flavor": "This is who you go to when your Blackwing needs a tune up. Don't go to a cut rate Blackwing tune up shop!",
    "health": 4,
    "howToEarn": "Unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Molten Core, in the Blackrock Mountain adventure.",
    "id": "BRM_033",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Blackwing Technician",
    "rarity": "COMMON",
    "set": "BRM",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Greg Staples",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2409,
    "flavor": "He got his name when he gave Blackwing some comic books and rock & roll records.",
    "health": 4,
    "howToEarn": "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "howToEarnGolden": "Crafting unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.",
    "id": "BRM_034",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Blackwing Corruptor",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND": 0
    },
    "rarity": "COMMON",
    "set": "BRM",
    "targetingArrowText": "Deal 3 damage.",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, deal 3 damage.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 5,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 40323,
    "elite": true,
    "flavor": "\"Could you do me a favor and get the keys from Kazakus?\"",
    "health": 5,
    "id": "CFM_020",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Raza the Chained",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "[x]  <b>Battlecry:</b> If your deck has  \nno duplicates, your Hero\n Power costs (1) this game.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 0,
    "dbfId": 40324,
    "flavor": "This is delicious! Oh no. BRAIN FREEEEEEEZE!",
    "id": "CFM_021",
    "name": "Freezing Potion",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "GANGS",
    "text": "<b>Freeze</b> an enemy.",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 40337,
    "flavor": "Don't blame the bot for his crimes...  Blame whoever keeps winding him up!",
    "health": 5,
    "id": "CFM_025",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Wind-up Burglebot",
    "race": "MECHANICAL",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "Whenever this attacks a minion and survives, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 40339,
    "flavor": "There is an urban legend that the first Toxic Sewer Ooze was born because a rookie Goon stashed an open container of milk in a Hidden Cache.",
    "id": "CFM_026",
    "mechanics": [
      "SECRET"
    ],
    "name": "Hidden Cache",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "<b>Secret:</b> After your opponent plays a minion, give a random minion in your hand +2/+2.",
    "type": "SPELL"
  },
  {
    "artist": "Daria Tuzova",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 40213,
    "flavor": "His first trick: making your wallet disappear!",
    "health": 7,
    "id": "CFM_039",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Street Trickster",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "GANGS",
    "spellDamage": 1,
    "text": "<b>Spell Damage +1</b>",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 40281,
    "flavor": "It has double the Attack.  \"Go on.\"  And double the Health.  \"Yes??\"  And its trigger has twice the effect.  \"WHAT???\"  And it costs…  Five times more.",
    "health": 6,
    "id": "CFM_060",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Red Mana Wyrm",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "Whenever  you cast a spell, gain +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 40285,
    "flavor": "Waterspeakers can tell the future! So the Jade Lotus employs them to speculate on the Auction House.",
    "health": 6,
    "id": "CFM_061",
    "mechanics": [
      "BATTLECRY",
      "OVERLOAD"
    ],
    "name": "Jinyu Waterspeaker",
    "overload": 1,
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "GANGS",
    "targetingArrowText": "Restore 6 Health.",
    "text": "[x]<b>Battlecry:</b> Restore #6 Health.\n<b>Overload:</b> (1)",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 6,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 7,
    "dbfId": 40295,
    "flavor": "Some new asphalt should do the trick.",
    "health": 6,
    "id": "CFM_062",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Grimestreet Protector",
    "rarity": "RARE",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "GANGS",
    "text": "[x]<b>Taunt</b>\n<b>Battlecry:</b> Give adjacent\n minions <b>Divine Shield</b>.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 40289,
    "flavor": "#abs",
    "health": 4,
    "id": "CFM_063",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Kooky Chemist",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "GANGS",
    "targetingArrowText": "Swap Attack and Health of a minion.",
    "text": "<b>Battlecry:</b> Swap the Attack and Health of a minion.",
    "type": "MINION"
  },
  {
    "artist": "Eva Widermann",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 40294,
    "flavor": "When oil, railroad, steel, robber, and red are all already taken, your options are limited.",
    "health": 1,
    "id": "CFM_064",
    "name": "Blubber Baron",
    "rarity": "EPIC",
    "referencedTags": [
      "BATTLECRY"
    ],
    "set": "GANGS",
    "text": "Whenever you summon a <b>Battlecry</b> minion while this is in your hand, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 40297,
    "flavor": "The secret ingredient in Kazakus's award-winning chili recipe.",
    "id": "CFM_065",
    "name": "Volcanic Potion",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "Deal $2 damage to all minions.",
    "type": "SPELL"
  },
  {
    "artist": "Andrew Hou",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 1,
    "dbfId": 40299,
    "flavor": "I'll tell you one thing he doesn't lack: GUMPTION.",
    "health": 1,
    "id": "CFM_066",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Kabal Lackey",
    "rarity": "COMMON",
    "referencedTags": [
      "SECRET"
    ],
    "set": "GANGS",
    "text": "[x]<b>Battlecry:</b> The next <b>Secret</b>\nyou play this turn costs (0).",
    "type": "MINION"
  },
  {
    "artist": "Sam Nielsen",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 40344,
    "flavor": "He didn't go to school for healing, but we keep losing all the good healers to Ratchet, so I guess we'll take him.",
    "health": 6,
    "id": "CFM_067",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Hozen Healer",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "GANGS",
    "targetingArrowText": "Restore a minion to full Health.",
    "text": "<b>Battlecry</b>: Restore a minion to full Health.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 40517,
    "flavor": "Kazakus has a squad of imps bottling Felfire round-the-clock and he *still* can't keep up with demand.",
    "id": "CFM_094",
    "name": "Felfire Potion",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "Deal $5 damage to all characters.",
    "type": "SPELL"
  },
  {
    "artist": "Andrew Hou",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 40549,
    "flavor": "He's the reason the First Bank of Gadgetzan has steel floors.",
    "health": 1,
    "id": "CFM_095",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Weasel Tunneler",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "<b>Deathrattle:</b> Shuffle this minion into your opponent's deck.",
    "type": "MINION"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 41566,
    "flavor": "Her favorite mixture is cola and lime.",
    "health": 2,
    "id": "CFM_120",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Mistress of Mixtures",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Deathrattle:</b> Restore #4 Health to each hero.",
    "type": "MINION"
  },
  {
    "artist": "Alex Alexandrov",
    "attack": 0,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 40364,
    "flavor": "Happy to defend any public offender!",
    "health": 7,
    "id": "CFM_300",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Public Defender",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 40371,
    "flavor": "One of the most famous busts in Gadgetzan’s history happened on Smuggler’s Run, where Sergeant Sally apprehended a cadre of Grimy Goons transporting a massive number of illegal fish heads.",
    "id": "CFM_305",
    "name": "Smuggler's Run",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "Give all minions in your hand +1/+1.",
    "type": "SPELL"
  },
  {
    "artist": "Jon Neimeister",
    "attack": 7,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 10,
    "dbfId": 40416,
    "elite": true,
    "flavor": "Aya siphons a bit of Kun's soul to animate each golem in her Jade army. To his credit, he's being a great sport about it.",
    "health": 7,
    "id": "CFM_308",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Kun the Forgotten King",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "<b>Choose One -</b> Gain 10 Armor; or Refresh your Mana Crystals.",
    "type": "MINION"
  },
  {
    "artist": "Mike Saas",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 40419,
    "flavor": "When you really need a job done… but you don't really care if it gets done right.",
    "id": "CFM_310",
    "name": "Call in the Finishers",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "Summon four 1/1 Murlocs.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 5,
    "cardClass": "SHAMAN",
    "collectible": true,
    "collectionText": "<b>Battlecry:</b> Summon a <b>Jade Golem</b>. Give it <b>Taunt</b>.",
    "cost": 7,
    "dbfId": 40422,
    "flavor": "Seeing his Jade Golem grow up into the tall, handsome 6/6 standing before him was the proudest moment of his life.",
    "health": 5,
    "id": "CFM_312",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Jade Chieftain",
    "rarity": "COMMON",
    "referencedTags": [
      "JADE_GOLEM",
      "TAUNT"
    ],
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Summon a{1} {0} <b>Jade Golem</b>. Give it <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Benjamin Zhang",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 40423,
    "flavor": "INFINITE LOOP!",
    "id": "CFM_313",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Finders Keepers",
    "overload": 1,
    "rarity": "EPIC",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "GANGS",
    "text": "<b>Discover</b> a card with <b>Overload</b>. <b>Overload:</b> (1)",
    "type": "SPELL"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 1,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 40426,
    "flavor": "To be a cool cat in Gadgetzan, you gotta have bling.",
    "health": 1,
    "id": "CFM_315",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Alleycat",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Summon a 1/1 Cat.",
    "type": "MINION"
  },
  {
    "artist": "Ozhill Studio",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 40428,
    "flavor": "He's gonna do it his way.",
    "health": 2,
    "id": "CFM_316",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Rat Pack",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "[x]<b>Deathrattle:</b> Summon a\nnumber of 1/1 Rats equal\n to this minion's Attack.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "classes": [
      "HUNTER",
      "PALADIN",
      "WARRIOR"
    ],
    "collectible": true,
    "cost": 2,
    "dbfId": 40474,
    "flavor": "\"Naw, naw.  You're talkin' about Grime BOULEVARD.  I ain't know nuthin' 'bout that.\"",
    "health": 1,
    "id": "CFM_321",
    "mechanics": [
      "BATTLECRY",
      "GRIMY_GOONS"
    ],
    "multiClassGroup": "GRIMY_GOONS",
    "name": "Grimestreet Informant",
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "GANGS",
    "text": "[x]<b>Battlecry:</b> <b>Discover</b> a\nHunter, Paladin, or Warrior\ncard.",
    "type": "MINION"
  },
  {
    "artist": "Cole Eastburn",
    "attack": 5,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 5,
    "dbfId": 40486,
    "elite": true,
    "flavor": "My life for Aya!",
    "health": 5,
    "id": "CFM_324",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "White Eyes",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "<b>Taunt</b>\n<b>Deathrattle:</b> Shuffle\n'The Storm Guardian' into your deck.",
    "type": "MINION"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 40608,
    "flavor": "\"Oh, I'm not serious about it.  I only pirate on the weekends.\"",
    "health": 1,
    "id": "CFM_325",
    "name": "Small-Time Buccaneer",
    "race": "PIRATE",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "Has +2 Attack while you have a weapon equipped.",
    "type": "MINION"
  },
  {
    "artist": "Eric Braddock",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 40617,
    "flavor": "\"Yeah, I can get you Knuckles.  No, no, he's been clean for *weeks*.\"",
    "health": 4,
    "id": "CFM_328",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fight Promoter",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "[x]<b>Battlecry:</b> If you control\na minion with 6 or more\n Health, draw two cards.",
    "type": "MINION"
  },
  {
    "artist": "Sam Nielsen",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 40678,
    "elite": true,
    "flavor": "When confronted with accusations of performance-enhancing bananas, Knuckles replied, \"I get my fruit from trees I knock down with my bare hands like everyone else.\"",
    "health": 7,
    "id": "CFM_333",
    "mechanics": [
      "FINISH_ATTACK_SPELL_ON_DAMAGE",
      "TRIGGER_VISUAL"
    ],
    "name": "Knuckles",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "After this attacks a\nminion, it also hits the enemy hero.",
    "type": "MINION"
  },
  {
    "artist": "Grace Liu",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 40679,
    "flavor": "Are you sure these are the crates that are supposed to go to the Gadgetzan petting zoo?",
    "id": "CFM_334",
    "name": "Smuggler's Crate",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "Give a random Beast in your hand +2/+2.",
    "type": "SPELL"
  },
  {
    "artist": "Luca Zontini",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 41126,
    "flavor": "\"Crime reported at First Bank of Gadgetzan.  Huge quantities of Jade being carried away by what looks like a bunch of Hozen.  Kodo 77 can you make it over there now?\"",
    "health": 4,
    "id": "CFM_335",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dispatch Kodo",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "race": "BEAST",
    "rarity": "RARE",
    "set": "GANGS",
    "targetingArrowText": "Deal damage equal to this minion's Attack.",
    "text": "<b>Battlecry:</b> Deal damage equal to this minion's Attack.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 40681,
    "flavor": "The Grimy Goons can get you any weapon you want but if you want it to not explode you gotta pay extra.",
    "health": 3,
    "id": "CFM_336",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Shaky Zipgunner",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "[x]<b>Deathrattle:</b> Give a random\nminion in your hand +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Nick Southham",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 40683,
    "durability": 4,
    "flavor": "A great improvement over the guppy launcher.",
    "id": "CFM_337",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Piranha Launcher",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "[x]After your hero attacks,\nsummon a 1/1 Piranha.",
    "type": "WEAPON"
  },
  {
    "artist": "Adam Byrne",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 40684,
    "flavor": "Still angry that the Gadgetzan Rager Club wouldn't accept him as a member.",
    "health": 2,
    "id": "CFM_338",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Trogg Beastrager",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Give a random Beast in your hand +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41118,
    "elite": true,
    "flavor": "\"Who is she?  Where did she come from?  We don't even have a police force here in Gadgetzan!!\" - Mayor Noggenfogger",
    "health": 1,
    "id": "CFM_341",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Sergeant Sally",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "<b>Deathrattle:</b> Deal damage equal to this minion's Attack to all enemy minions.",
    "type": "MINION"
  },
  {
    "artist": "Mark Gibbons",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 6,
    "dbfId": 40791,
    "flavor": "You can't just leave a Luckydo somewhere.  You gotta keep 'em with you!  Especially in Gadgetzan!",
    "health": 5,
    "id": "CFM_342",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Luckydo Buccaneer",
    "race": "PIRATE",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> If your weapon has at least 3 Attack, gain +4/+4.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "collectionText": "[x]<b>Taunt</b>\n<b>Battlecry:</b> Summon a\n<b>Jade Golem</b>.",
    "cost": 6,
    "dbfId": 40797,
    "flavor": "I think we should talk about the jade elephant in the room.",
    "health": 6,
    "id": "CFM_343",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Jade Behemoth",
    "rarity": "COMMON",
    "referencedTags": [
      "JADE_GOLEM"
    ],
    "set": "GANGS",
    "text": "[x]<b>Taunt</b>\n<b>Battlecry:</b> Summon a{1}\n{0} <b>Jade Golem</b>.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 40803,
    "elite": true,
    "flavor": "The last true master of Finjitsu.",
    "health": 4,
    "id": "CFM_344",
    "mechanics": [
      "STEALTH",
      "TRIGGER_VISUAL"
    ],
    "name": "Finja, the Flying Star",
    "race": "MURLOC",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "[x]<b>Stealth</b>\n   Whenever this attacks and   \nkills a minion, summon 2\n Murlocs from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Matthew O'Connor",
    "cardClass": "DRUID",
    "collectible": true,
    "collectionText": "<b>Choose One -</b> Summon a <b>Jade Golem</b>; or Shuffle 3 copies of this card into your deck.",
    "cost": 1,
    "dbfId": 40372,
    "flavor": "Shuffle or no guts.",
    "id": "CFM_602",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Jade Idol",
    "rarity": "RARE",
    "referencedTags": [
      "JADE_GOLEM"
    ],
    "set": "GANGS",
    "text": "<b>Choose One -</b> Summon a{1} {0} <b>Jade Golem</b>; or Shuffle 3 copies of this card into your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 40373,
    "flavor": "You'd be insane NOT to drink it!",
    "id": "CFM_603",
    "name": "Potion of Madness",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_NUM_MINION_SLOTS": 1,
      "REQ_TARGET_MAX_ATTACK": 2,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "Gain control of an enemy minion with 2 or less Attack until end of turn.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler West Studios",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 40375,
    "flavor": "Filled with electrolytes!",
    "id": "CFM_604",
    "name": "Greater Healing Potion",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "GANGS",
    "text": "Restore #12 Health to a friendly character.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 5,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 40378,
    "flavor": "His job is to spy on the Goons and the Jade Lotus, but he's OBVIOUSLY a dragon so it's pretty hard work.",
    "health": 6,
    "id": "CFM_605",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Drakonid Operative",
    "race": "DRAGON",
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "GANGS",
    "text": "[x]<b>Battlecry:</b> If you're holding a\nDragon, <b>Discover</b> a card in\n your opponent's deck.",
    "type": "MINION"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 40381,
    "flavor": "Gadgetzan, where even the pet rocks have pet rocks.",
    "health": 3,
    "id": "CFM_606",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Mana Geode",
    "race": "ELEMENTAL",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "Whenever this minion is healed, summon a 2/2 Crystal.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 40957,
    "flavor": "There's a fine line between \"potion\" and \"grenade\". Wait. Actually, there's not.",
    "id": "CFM_608",
    "name": "Blastcrystal Potion",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "Destroy a minion and one of your Mana Crystals.",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 40389,
    "flavor": "\"Doc says the persistent burning sensation in my soul is probably just an ulcer.\"",
    "health": 7,
    "id": "CFM_609",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Fel Orc Soulfiend",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "At the start of your turn, deal 2 damage to this minion.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 5,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 40391,
    "flavor": "The trick is soaking the crystals in warm milk to soften them up.",
    "health": 4,
    "id": "CFM_610",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Crystalweaver",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Give your Demons +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Raven Mimura",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 40393,
    "flavor": "You know what really makes my blood boil? The skyrocketing price of Bloodfury potions!",
    "id": "CFM_611",
    "name": "Bloodfury Potion",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "GANGS",
    "text": "[x]Give a minion +3 Attack.\nIf it's a Demon, also\ngive it +3 Health.",
    "type": "SPELL"
  },
  {
    "artist": "Wayne Reynolds",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 40397,
    "flavor": "The mark of the Lotus is a little flower drawn in permanent marker on the ankle.",
    "id": "CFM_614",
    "name": "Mark of the Lotus",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "Give your minions +1/+1.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 40401,
    "flavor": "The Hozen don't get paid much, but at least they get to keep any excess mana.",
    "id": "CFM_616",
    "name": "Pilfered Power",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "Gain an empty Mana Crystal for each friendly minion.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Garner",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 40404,
    "flavor": "If you think her job is easy, YOU try falling asleep on cue.",
    "health": 3,
    "id": "CFM_617",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Celestial Dreamer",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "[x]<b>Battlecry:</b> If you control a\nminion with 5 or more\nAttack, gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "classes": [
      "MAGE",
      "PRIEST",
      "WARLOCK"
    ],
    "collectible": true,
    "cost": 4,
    "dbfId": 40407,
    "entourage": [
      "CFM_065",
      "CFM_021",
      "CFM_603",
      "CFM_604",
      "CFM_611",
      "CFM_620",
      "CFM_094",
      "CFM_661",
      "CFM_662",
      "CFM_608"
    ],
    "flavor": "Sure you could have that Polymorph potion, but wouldn't you rather have this mystery potion?  It could be anything.  Even a Polymorph potion!",
    "health": 3,
    "id": "CFM_619",
    "mechanics": [
      "BATTLECRY",
      "KABAL"
    ],
    "multiClassGroup": "KABAL",
    "name": "Kabal Chemist",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Add a random Potion to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 40409,
    "flavor": "Tastes like Baaaaananas.",
    "id": "CFM_620",
    "mechanics": [
      "SECRET"
    ],
    "name": "Potion of Polymorph",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "<b>Secret:</b> After your opponent plays a minion, transform it into a\n1/1 Sheep.",
    "type": "SPELL"
  },
  {
    "artist": "Jomaro Kindred",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "classes": [
      "MAGE",
      "PRIEST",
      "WARLOCK"
    ],
    "collectible": true,
    "cost": 4,
    "dbfId": 40408,
    "elite": true,
    "entourage": [
      "CFM_621t11",
      "CFM_621t12",
      "CFM_621t13"
    ],
    "flavor": "The mysterious leader of the Kabal is NOT a dragon, and does NOT deal in illegal potions.  Any public statements to the contrary will be met with litigation and Dragonfire Potions.",
    "health": 3,
    "id": "CFM_621",
    "mechanics": [
      "BATTLECRY",
      "KABAL"
    ],
    "multiClassGroup": "KABAL",
    "name": "Kazakus",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "[x]<b>Battlecry:</b> If your deck\nhas no duplicates,\n create a custom spell.",
    "type": "MINION"
  },
  {
    "artist": "Evgeniy Zaqumyenny",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 7,
    "dbfId": 40411,
    "flavor": "Wow, and I thought Arcane Missiles was great!",
    "id": "CFM_623",
    "name": "Greater Arcane Missiles",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "Shoot three missiles at random enemies that deal $3 damage each.",
    "type": "SPELL"
  },
  {
    "artist": "Dave Allsop",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 40432,
    "flavor": "Inkmaster Solia had to figure out how to tattoo feathers.",
    "health": 4,
    "id": "CFM_626",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Kabal Talonpriest",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "GANGS",
    "targetingArrowText": "Give +3 Health.",
    "text": "<b>Battlecry:</b> Give a friendly minion +3 Health.",
    "type": "MINION"
  },
  {
    "artist": "Joe Wilson",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 0,
    "dbfId": 40437,
    "flavor": "There is something funny about this coin… can't quite put my finger on it…",
    "id": "CFM_630",
    "name": "Counterfeit Coin",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "Gain 1 Mana Crystal this turn only.",
    "type": "SPELL"
  },
  {
    "artist": "Anton Magdalina",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 40438,
    "durability": 3,
    "flavor": "For the goon that wants to make a fashion statement.",
    "id": "CFM_631",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Brass Knuckles",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "[x]After your hero attacks,\ngive a random minion in\nyour hand +1/+1.",
    "type": "WEAPON"
  },
  {
    "artist": "Garrett Hanna",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 40441,
    "flavor": "For 5000g, you can just give the Jade Lotus any name and they will assassinate and/or embarrass them.",
    "health": 5,
    "id": "CFM_634",
    "mechanics": [
      "STEALTH",
      "TRIGGER_VISUAL"
    ],
    "name": "Lotus Assassin",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "<b>Stealth</b>. Whenever this attacks and kills a minion, gain <b>Stealth</b>.",
    "type": "MINION"
  },
  {
    "artist": "Jon Neimeister",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 40464,
    "flavor": "WE WENT THERE!",
    "health": 1,
    "id": "CFM_636",
    "mechanics": [
      "STEALTH"
    ],
    "name": "Shadow Rager",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Stealth</b>",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 40465,
    "elite": true,
    "flavor": "What do sailors yell when Patches steals their treasure chest full of laws and other things being transported to parliament for a vote?  \"The Eyes have it!\"",
    "health": 1,
    "id": "CFM_637",
    "name": "Patches the Pirate",
    "race": "PIRATE",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "[x]After you play a Pirate,\nsummon this minion\nfrom your deck.",
    "type": "MINION"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 4,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 40469,
    "flavor": "\"Sir, you don't have a permit to park your mount here.\"",
    "health": 4,
    "id": "CFM_639",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Grimestreet Enforcer",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "At the end of your turn, give all minions in your hand +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 40482,
    "elite": true,
    "flavor": "Grapplehammer is the horrible mind behind the Automatic Piranha Launcher (banned in 7 districts)!",
    "health": 2,
    "id": "CFM_643",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Hobart Grapplehammer",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Give all weapons in your hand and deck +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Yewon Park",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 40492,
    "flavor": "Quit playing games with his heart. And his fingers. And foot. It's rude.",
    "health": 1,
    "id": "CFM_646",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Backstreet Leper",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "[x]<b>Deathrattle:</b> Deal 2 damage\nto the enemy hero.",
    "type": "MINION"
  },
  {
    "artist": "Tyler West Studios",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 40493,
    "flavor": "Imagine how much further his darts would go if he had lungs instead of gills!",
    "health": 1,
    "id": "CFM_647",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Blowgill Sniper",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "race": "MURLOC",
    "rarity": "COMMON",
    "set": "GANGS",
    "targetingArrowText": "Deal 1 damage.",
    "text": "<b>Battlecry:</b> Deal 1 damage.",
    "type": "MINION"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 40494,
    "flavor": "\"It'd be a shame if someone disenchanted those Legendaries.\"",
    "health": 1,
    "id": "CFM_648",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Big-Time Racketeer",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Summon a 6/6 Ogre.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "classes": [
      "MAGE",
      "PRIEST",
      "WARLOCK"
    ],
    "collectible": true,
    "cost": 3,
    "dbfId": 40496,
    "flavor": "Hey, you park your kodo under a harpy nest, you get what you deserve.",
    "health": 2,
    "id": "CFM_649",
    "mechanics": [
      "BATTLECRY",
      "KABAL"
    ],
    "multiClassGroup": "KABAL",
    "name": "Kabal Courier",
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "GANGS",
    "text": "<b>Battlecry:</b> <b>Discover</b> a Mage, Priest, or Warlock card.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 40531,
    "flavor": "Listen, see?  We'll take 'em to the docks, see?  And throw 'em in the sea, see?",
    "health": 1,
    "id": "CFM_650",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Grimscale Chum",
    "race": "MURLOC",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "[x]<b>Battlecry:</b> Give a random\nMurloc in your hand +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Rafael Zanchetin",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 40889,
    "flavor": "Hook-tails are nice and all but she keeps getting stuck on things.",
    "health": 4,
    "id": "CFM_651",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Naga Corsair",
    "race": "PIRATE",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Give your weapon +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 40906,
    "flavor": "He'll be a first-rate bruiser once he gets used to his contacts.",
    "health": 5,
    "id": "CFM_652",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Second-Rate Bruiser",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "[x]<b>Taunt</b>\nCosts (2) less if your\nopponent has at least\nthree minions.",
    "type": "MINION"
  },
  {
    "artist": "Eric Braddock",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 40911,
    "flavor": "He loves his job and would do it for free!  (But don't tell his boss!)",
    "health": 3,
    "id": "CFM_653",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Hired Gun",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Jerry Mascho",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 40914,
    "flavor": "\"What'll it be?  A Jade Brew?  A Grimy Goose?  A Kabal Manatini?\"",
    "health": 3,
    "id": "CFM_654",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Friendly Bartender",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "At the end of your turn, restore #1 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Anton Magdalina",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 40921,
    "flavor": "When Sergeant Sally shows up unexpectedly, DO NOT FLUSH YOUR MANA CRYSTALS DOWN THE TOILET.",
    "health": 3,
    "id": "CFM_655",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Toxic Sewer Ooze",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Remove 1 Durability from your opponent's weapon.",
    "type": "MINION"
  },
  {
    "artist": "Adam Byrne",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 40928,
    "flavor": "\"Hmmmm…  Call it a hunch, but I'm starting to think that there may be some kind of criminal activity going on in Gadgetzan.\"",
    "health": 6,
    "id": "CFM_656",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Streetwise Investigator",
    "rarity": "COMMON",
    "referencedTags": [
      "STEALTH"
    ],
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Enemy minions lose <b>Stealth</b>.",
    "type": "MINION"
  },
  {
    "artist": "Alex Alexandrov",
    "attack": 5,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 40929,
    "flavor": "Gadgetzan Writer’s Award goes to the player who writes the most compelling fanfic about why this Arakkoa has a golden frog in his hand!",
    "health": 5,
    "id": "CFM_657",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Kabal Songstealer",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "SILENCE"
    ],
    "set": "GANGS",
    "targetingArrowText": "Silence a minion.",
    "text": "[x]<b>Battlecry:</b> <b>Silence</b> a minion.",
    "type": "MINION"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 40931,
    "flavor": "\"WHY ARE YOU IN THE BACK ROOM?  WHO IS WATCHING THE FRONT?!\"",
    "health": 4,
    "id": "CFM_658",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Backroom Bouncer",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "Whenever a friendly minion dies, gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Eva Wildermann",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 40949,
    "flavor": "Comment on her height, and she'll go from flapper to kneecapper in seconds flat.",
    "health": 2,
    "id": "CFM_659",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gadgetzan Socialite",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "GANGS",
    "targetingArrowText": "Restore 2 Health.",
    "text": "<b>Battlecry:</b> Restore #2 Health.",
    "type": "MINION"
  },
  {
    "artist": "J. Ejsing & E. Amundsen",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 40935,
    "flavor": "When casting a tournament, you really have to put your soul into it!",
    "health": 4,
    "id": "CFM_660",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Manic Soulcaster",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "GANGS",
    "targetingArrowText": "Shuffle a copy into your deck.",
    "text": "<b>Battlecry:</b> Choose a friendly minion. Shuffle a copy into your deck.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 40936,
    "flavor": "I hope you didn't disenchant your Shadow Word: Horror!",
    "id": "CFM_661",
    "name": "Pint-Size Potion",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "[x]Give all enemy minions\n-3 Attack this turn only.",
    "type": "SPELL"
  },
  {
    "artist": "Charlene Le Scanff",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 40938,
    "flavor": "No one was brave enough to fire the dragon in person… so they made the potion do it.",
    "id": "CFM_662",
    "name": "Dragonfire Potion",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "[x]Deal $5 damage to all\nminions except Dragons.",
    "type": "SPELL"
  },
  {
    "artist": "Jon Neimeister",
    "attack": 6,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 40940,
    "flavor": "She ships illicit mana crystals around the world in packages marked: FUNNEL CAKE.",
    "health": 6,
    "id": "CFM_663",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Kabal Trafficker",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "[x]At the end of your turn,\nadd a random Demon\nto your hand.",
    "type": "MINION"
  },
  {
    "artist": "Alex Alexandrov",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 40950,
    "flavor": "Hair products are 79% of his monthly budget.",
    "health": 3,
    "id": "CFM_665",
    "name": "Worgen Greaser",
    "rarity": "COMMON",
    "set": "GANGS",
    "type": "MINION"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 40951,
    "flavor": "Grook Fu, the ancient Hozen art of bashing heads with a stick.",
    "health": 5,
    "id": "CFM_666",
    "mechanics": [
      "WINDFURY"
    ],
    "name": "Grook Fu Master",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Windfury</b>",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 40952,
    "flavor": "Please don't explode!  Please don't explode!  Please don't explode!",
    "health": 2,
    "id": "CFM_667",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Bomb Squad",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "set": "GANGS",
    "targetingArrowText": "Deal 5 damage.",
    "text": "[x]<b>Battlecry:</b> Deal 5 damage\nto an enemy minion.\n<b>Deathrattle:</b> Deal 5 damage\nto your hero.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 40953,
    "flavor": "\"Every me, get in here!\"",
    "health": 2,
    "id": "CFM_668",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Doppelgangster",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Summon 2 copies of this minion.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 40954,
    "flavor": "He only burgles to pay the bills.  He is really just a bully at heart.",
    "health": 6,
    "id": "CFM_669",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Burgly Bully",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "Whenever your opponent casts a spell, add a Coin to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Tooth",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 40955,
    "elite": true,
    "flavor": "This flavor text was randomly generated.  If it happens to form words and make sense, that is purely by chance.",
    "health": 4,
    "id": "CFM_670",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Mayor Noggenfogger",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "All targets are chosen randomly.",
    "type": "MINION"
  },
  {
    "artist": "Tyler West Studios",
    "attack": 5,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 5,
    "dbfId": 40988,
    "flavor": "She loves Frozen. I mean who doesn't?",
    "health": 5,
    "id": "CFM_671",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Cryomancer",
    "rarity": "COMMON",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "GANGS",
    "text": "<b>Battlecry:</b> If an enemy is <b>Frozen</b>, gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasper",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 41841,
    "elite": true,
    "flavor": "She has set up her Black Market here in Gadgetzan for one purpose, to make a KILLING when Beanie Babies make their inevitable comeback.",
    "health": 3,
    "id": "CFM_672",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Madam Goya",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "targetingArrowText": "Swap with a minion in your deck.",
    "text": "<b>Battlecry:</b> Choose a friendly minion. Swap it with a minion in your deck.",
    "type": "MINION"
  },
  {
    "artist": "Tyson Murphy",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "classes": [
      "HUNTER",
      "PALADIN",
      "WARRIOR"
    ],
    "collectible": true,
    "cost": 7,
    "dbfId": 40703,
    "elite": true,
    "flavor": "The brilliant mastermind of the Grimy Goons, Han sometimes thinks about ditching the idiot Cho, but that would just tear him apart.",
    "health": 6,
    "id": "CFM_685",
    "mechanics": [
      "BATTLECRY",
      "GRIMY_GOONS"
    ],
    "multiClassGroup": "GRIMY_GOONS",
    "name": "Don Han'Cho",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Give a random minion in your hand +5/+5.",
    "type": "MINION"
  },
  {
    "artist": "J. Ejsing & E. Amundsen",
    "attack": 5,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 7,
    "dbfId": 40701,
    "elite": true,
    "flavor": "Solia marks the Kabal with intricate tattoos that grant immense power. Also it makes it harder for other gangs to recruit from their numbers. BACK OFF, GOONS.",
    "health": 5,
    "id": "CFM_687",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Inkmaster Solia",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "[x]<b>Battlecry:</b> If your deck has\nno duplicates, the next\nspell you cast this turn\ncosts (0).",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 40700,
    "flavor": "Did you know the Hogchoppers compete every year at the Mirage Raceway?  They do.  It's a real group.",
    "health": 5,
    "id": "CFM_688",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Spiked Hogrider",
    "rarity": "RARE",
    "referencedTags": [
      "CHARGE",
      "TAUNT"
    ],
    "set": "GANGS",
    "text": "<b>Battlecry:</b> If an enemy minion has <b>Taunt</b>, gain <b>Charge</b>.",
    "type": "MINION"
  },
  {
    "artist": "Izzy Hoover",
    "cardClass": "ROGUE",
    "collectible": true,
    "collectionText": "Deal $2 damage.\n<b>Combo:</b> Summon a <b>Jade Golem</b>.",
    "cost": 2,
    "dbfId": 40698,
    "flavor": "Good news is, after you remove it from your wound, you can use it to pay your medical bills!",
    "id": "CFM_690",
    "mechanics": [
      "COMBO"
    ],
    "name": "Jade Shuriken",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "CHOOSE_ONE",
      "JADE_GOLEM"
    ],
    "set": "GANGS",
    "text": "Deal $2 damage.\n<b>Combo:</b> Summon a{1} {0} <b>Jade Golem</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 1,
    "cardClass": "ROGUE",
    "collectible": true,
    "collectionText": "<b>Stealth</b>\n<b>Deathrattle:</b> Summon a <b>Jade Golem</b>.",
    "cost": 2,
    "dbfId": 40697,
    "flavor": "He's so good at swarming, he can swarm all by himself!",
    "health": 1,
    "id": "CFM_691",
    "mechanics": [
      "DEATHRATTLE",
      "STEALTH"
    ],
    "name": "Jade Swarmer",
    "rarity": "COMMON",
    "referencedTags": [
      "JADE_GOLEM"
    ],
    "set": "GANGS",
    "text": "<b>Stealth</b>\n<b>Deathrattle:</b> Summon a{1} {0} <b>Jade Golem</b>.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 40696,
    "flavor": "Is it just me, or is there something fishy about that ferryman?",
    "health": 3,
    "id": "CFM_693",
    "mechanics": [
      "COMBO"
    ],
    "name": "Gadgetzan Ferryman",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_FOR_COMBO": 0
    },
    "rarity": "RARE",
    "set": "GANGS",
    "targetingArrowText": "Return to your hand.",
    "text": "<b>Combo:</b> Return a friendly minion to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 40695,
    "flavor": "He used to be Aya's tutor, but she fired him for bugging her too much.",
    "health": 4,
    "id": "CFM_694",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Shadow Sensei",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_STEALTHED_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "STEALTH"
    ],
    "set": "GANGS",
    "targetingArrowText": "Give +2/+2.",
    "text": "<b>Battlecry:</b> Give a <b>Stealthed</b> minion +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Sean McNally",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 40694,
    "flavor": "Ragnaros looked down. He looked like some kind of War Golem. \"WHAT HAVE YOU DONE TO ME,\" he yelled. But all that came out was a deep grinding sound. He began to cry.",
    "id": "CFM_696",
    "name": "Devolve",
    "playRequirements": {
      "REQ_HERO_TARGET": 0
    },
    "rarity": "RARE",
    "set": "GANGS",
    "text": "Transform all enemy minions into random ones that cost (1) less.",
    "type": "SPELL"
  },
  {
    "artist": "Luke Mancini",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 40693,
    "flavor": "If you think her Illidan and Sylvanas cosplay is great, wait till you see her Reno Jackson!",
    "health": 5,
    "id": "CFM_697",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Lotus Illusionist",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "[x]After this minion attacks\na hero, transform it into a\n random 6-Cost minion.",
    "type": "MINION"
  },
  {
    "artist": "Yewon Park",
    "attack": 4,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 40691,
    "flavor": "Pretty harmless unless you're a Seadevil.",
    "health": 2,
    "id": "CFM_699",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Seadevil Stinger",
    "race": "MURLOC",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "[x]<b>Battlecry:</b> The next Murloc\nyou play this turn costs\n Health instead of Mana.",
    "type": "MINION"
  },
  {
    "artist": "Phil Saunders",
    "cardClass": "SHAMAN",
    "collectible": true,
    "collectionText": "Deal $4 damage. Summon a <b>Jade Golem</b>.",
    "cost": 4,
    "dbfId": 40455,
    "flavor": "Jade Lightning, goooo Jade Lightning!",
    "id": "CFM_707",
    "name": "Jade Lightning",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "JADE_GOLEM"
    ],
    "set": "GANGS",
    "text": "Deal $4 damage. Summon a{1} {0} <b>Jade Golem</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "DRUID",
    "collectible": true,
    "collectionText": "Summon a <b>Jade Golem</b>. Gain an empty Mana Crystal.",
    "cost": 3,
    "dbfId": 40523,
    "flavor": "Meditating under a jade blossom is said to grant you wisdom, unless you have a pollen allergy.",
    "id": "CFM_713",
    "name": "Jade Blossom",
    "playRequirements": {
      "REQ_MINION_SLOT_OR_MANA_CRYSTAL_SLOT": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "JADE_GOLEM"
    ],
    "set": "GANGS",
    "text": "Summon a{1} {0} <b>Jade Golem</b>. Gain an empty Mana Crystal.",
    "type": "SPELL"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "classes": [
      "DRUID",
      "ROGUE",
      "SHAMAN"
    ],
    "collectible": true,
    "collectionText": "<b>Battlecry:</b> Summon a <b>Jade Golem</b>.",
    "cost": 4,
    "dbfId": 40527,
    "flavor": "\"He's so cute!  I just want to squeeze him, then use him for Jade Golem parts!\" - Aya Blackpaw",
    "health": 3,
    "id": "CFM_715",
    "mechanics": [
      "BATTLECRY",
      "JADE_GOLEM",
      "JADE_LOTUS"
    ],
    "multiClassGroup": "JADE_LOTUS",
    "name": "Jade Spirit",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Summon a{1} {0} <b>Jade Golem</b>.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 41414,
    "flavor": "If you're sleeping with the fishes, we highly suggest not bringing an electric blanket.",
    "id": "CFM_716",
    "name": "Sleep with the Fishes",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "Deal $3 damage to all damaged minions.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "collectionText": "<b>Battlecry:</b> Summon a <b>Jade Golem</b>.\n<b><b>Overload</b>:</b> (1)",
    "cost": 2,
    "dbfId": 40529,
    "durability": 2,
    "flavor": "\"Best manicure ever!\" - Aya Blackpaw",
    "id": "CFM_717",
    "mechanics": [
      "BATTLECRY",
      "OVERLOAD"
    ],
    "name": "Jade Claws",
    "overload": 1,
    "rarity": "RARE",
    "referencedTags": [
      "JADE_GOLEM"
    ],
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Summon a{1} {0} <b>Jade Golem</b>.\n<b><b>Overload</b>:</b> (1)",
    "type": "WEAPON"
  },
  {
    "artist": "James Ryman",
    "attack": 7,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 9,
    "dbfId": 40537,
    "elite": true,
    "flavor": "Spicklefizz pondered his life choices as he looked at the chain around his neck. \"Become a warlock,\" they said. \"You get to enslave demons,\" they said.",
    "health": 9,
    "id": "CFM_750",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Krul the Unshackled",
    "race": "DEMON",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "[x]<b>Battlecry:</b> If your deck has\nno duplicates, summon all\n Demons from your hand. ",
    "type": "MINION"
  },
  {
    "artist": "Luke Mancini",
    "attack": 6,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 7,
    "dbfId": 40541,
    "flavor": "The Kabal print this on every package of illicit Mana Crystals: WARNING - DO NOT PUT WITHIN REACH OF ABYSSALS. THIS IS NOT APPROVED FOR USE BY FLAMING DEMONS OF ANY KIND.",
    "health": 6,
    "id": "CFM_751",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Abyssal Enforcer",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Deal 3 damage to all other characters.",
    "type": "MINION"
  },
  {
    "artist": "Mark Gibbons",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 40566,
    "flavor": "It fell off a kodo, I promise!",
    "id": "CFM_752",
    "name": "Stolen Goods",
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "GANGS",
    "text": "Give a random <b>Taunt</b> minion in your hand +3/+3.",
    "type": "SPELL"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 40567,
    "flavor": "If you bargain hard, he'll throw in the hat.",
    "health": 1,
    "id": "CFM_753",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Grimestreet Outfitter",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Give all minions in your hand +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Wayne Reynolds",
    "attack": 4,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 40568,
    "flavor": "\"You look like a Gadgetgun 3000-Mark IV man, am I right?\"",
    "health": 3,
    "id": "CFM_754",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Grimy Gadgeteer",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "At the end of your turn, give a random minion in your hand +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 40569,
    "flavor": "\"I don't know a lot about used GvG cards, so I'm going to have to call in an expert.\"",
    "health": 3,
    "id": "CFM_755",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Grimestreet Pawnbroker",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Give a random weapon in your hand +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Rafael Zanchetin",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 40574,
    "flavor": "The rent is cheap and she passes the savings onto YOU!",
    "health": 7,
    "id": "CFM_756",
    "mechanics": [
      "TAUNT",
      "TRIGGER_VISUAL"
    ],
    "name": "Alley Armorsmith",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "[x]<b>Taunt</b>\nWhenever this minion\ndeals damage, gain\nthat much Armor.",
    "type": "MINION"
  },
  {
    "artist": "Richie Marella",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 40577,
    "flavor": "Remember, submit your bribes directly to the Marshal - it's the law!",
    "health": 2,
    "id": "CFM_759",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Meanstreet Marshal",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "<b>Deathrattle:</b> If this minion has 2 or more Attack, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 5,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 6,
    "dbfId": 40583,
    "flavor": "\"Listen, I can cut you in on a little of this premium mana, but you can't tell my boss.\"",
    "health": 5,
    "id": "CFM_760",
    "name": "Kabal Crystal Runner",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET"
    ],
    "set": "GANGS",
    "text": "Costs (2) less for each <b>Secret</b> you've played this game.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 40905,
    "elite": true,
    "flavor": "Aya even staged an intervention once, but Shaku still insists that he is not a hoarder.",
    "health": 3,
    "id": "CFM_781",
    "mechanics": [
      "STEALTH",
      "TRIGGER_VISUAL"
    ],
    "name": "Shaku, the Collector",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "[x]<b>Stealth</b>. Whenever this\nattacks, add a random card\nto your hand <i>(from your\nopponent's class).</i>",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 41567,
    "flavor": "It's not his fault…  Someone keeps stealing his soap!",
    "health": 6,
    "id": "CFM_790",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Dirty Rat",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "[x]<b>Taunt</b>\n<b>Battlecry:</b> Your opponent\nsummons a random minion\nfrom their hand.",
    "type": "MINION"
  },
  {
    "artist": "Rudy Siswanto",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 40587,
    "flavor": "Get to da Kodo! Now!",
    "id": "CFM_800",
    "mechanics": [
      "SECRET"
    ],
    "name": "Getaway Kodo",
    "rarity": "RARE",
    "set": "GANGS",
    "text": "<b>Secret:</b> When a friendly minion dies, return it to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "James Ryman",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 40603,
    "elite": true,
    "flavor": "Wrathion, son of Deathwing, is a dragon.  Why isn't he tagged as a dragon, you ask?  WHAT, ARE YOU TRYING TO BLOW HIS COVER??",
    "health": 5,
    "id": "CFM_806",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Wrathion",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "<b>Taunt</b>. <b>Battlecry:</b> Draw cards until you draw one that isn't a Dragon.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 40605,
    "elite": true,
    "flavor": "Gadgetzan has always run an under-the-table auction house, and business has been PRETTY good for Beardo since the population explosion.  And since the explosion that destroyed the competing auction houses in the city.",
    "health": 4,
    "id": "CFM_807",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Auctionmaster Beardo",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "After you cast a spell, refresh your Hero Power.",
    "type": "MINION"
  },
  {
    "artist": "Garrett Hanna",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 40607,
    "elite": true,
    "flavor": "Infamous in the seedy underground card rooms of Gadgetzan, he got his nickname winning the coveted Shark Plushie in the city's first Hearthstone tournament.",
    "health": 4,
    "id": "CFM_808",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Genzo, the Shark",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "Whenever this attacks, both players draw until they have 3 cards.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 40611,
    "flavor": "The Hogchoppers are well-known throughout Kalimdor for being a real, actual group.",
    "health": 4,
    "id": "CFM_809",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tanaris Hogchopper",
    "rarity": "COMMON",
    "referencedTags": [
      "CHARGE"
    ],
    "set": "GANGS",
    "text": "[x]<b>Battlecry:</b> If your opponent's\nhand is empty, gain <b>Charge</b>.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 40613,
    "flavor": "The Hogchoppers, the terrors of Tanaris, can always be found at one tavern or another in Gadgetzan, refueling for totally real and legit adventures that they go on.",
    "health": 6,
    "id": "CFM_810",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Leatherclad Hogleader",
    "rarity": "EPIC",
    "referencedTags": [
      "CHARGE"
    ],
    "set": "GANGS",
    "text": "<b>Battlecry:</b> If your opponent has 6 or more cards in hand, gain <b>Charge</b>.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 40615,
    "flavor": "The true mystery of lunar visions is how there is nothing to watch when there are so many channels.",
    "id": "CFM_811",
    "name": "Lunar Visions",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "Draw 2 cards. Minions drawn cost (2) less.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 40636,
    "elite": true,
    "flavor": "Wickerflame spent years as a recruit for the Goons, never making the big-time because he always fired his chest-cannon too slowly.  \"Hey,\" he thought, \"maybe if I keep my beard lit on fire, I can do this faster.\"  BOOM, promoted.",
    "health": 2,
    "id": "CFM_815",
    "mechanics": [
      "DIVINE_SHIELD",
      "LIFESTEAL",
      "TAUNT"
    ],
    "name": "Wickerflame Burnbristle",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "<b>Divine Shield, Taunt, Lifesteal</b>",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "attack": 4,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 40641,
    "flavor": "There is no carrot.",
    "health": 5,
    "id": "CFM_816",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Virmen Sensei",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 20
    },
    "rarity": "RARE",
    "set": "GANGS",
    "targetingArrowText": "Give +2/+2.",
    "text": "<b>Battlecry:</b> Give a friendly Beast +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Sojin Hwang",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 40741,
    "flavor": "She's working on a story!  While skydiving!",
    "health": 3,
    "id": "CFM_851",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Daring Reporter",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "Whenever your opponent draws a card, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Grace Liu",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "classes": [
      "DRUID",
      "ROGUE",
      "SHAMAN"
    ],
    "collectible": true,
    "cost": 5,
    "dbfId": 40742,
    "flavor": "Mostly, they stand around and look cool.",
    "health": 3,
    "id": "CFM_852",
    "mechanics": [
      "BATTLECRY",
      "JADE_LOTUS"
    ],
    "multiClassGroup": "JADE_LOTUS",
    "name": "Lotus Agents",
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "GANGS",
    "text": "<b>Battlecry:</b> <b>Discover</b> a Druid, Rogue, or Shaman card.",
    "type": "MINION"
  },
  {
    "artist": "Sean McNally",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "classes": [
      "HUNTER",
      "PALADIN",
      "WARRIOR"
    ],
    "collectible": true,
    "cost": 3,
    "dbfId": 40743,
    "flavor": "She's got anything you want.  Need the latest derpinger?  No problem!",
    "health": 4,
    "id": "CFM_853",
    "mechanics": [
      "BATTLECRY",
      "GRIMY_GOONS"
    ],
    "multiClassGroup": "GRIMY_GOONS",
    "name": "Grimestreet Smuggler",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Battlecry:</b> Give a random minion in your hand +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 40744,
    "flavor": "His new shampoo is really working!",
    "health": 8,
    "id": "CFM_854",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Ancient of Blossoms",
    "rarity": "COMMON",
    "set": "GANGS",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Gonzalo Ordonez",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 40745,
    "flavor": "His house cleaning service is quite thorough.  Not a spot to be found... or any of your stuff!",
    "health": 7,
    "id": "CFM_855",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Defias Cleaner",
    "playRequirements": {
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_DEATHRATTLE": 0
    },
    "rarity": "EPIC",
    "referencedTags": [
      "DEATHRATTLE",
      "SILENCE"
    ],
    "set": "GANGS",
    "targetingArrowText": "Silence a minion with Deathrattle.",
    "text": "<b>Battlecry:</b> <b>Silence</b> a minion with <b>Deathrattle</b>.",
    "type": "MINION"
  },
  {
    "artist": "Jon Neimeister",
    "attack": 5,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 40598,
    "flavor": "Get the ingredients wrong on ONE healing potion and they take your license. What a world!",
    "health": 5,
    "id": "CFM_900",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Unlicensed Apothecary",
    "race": "DEMON",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "After you summon a minion, deal 5 damage to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Glenn Rane",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "classes": [
      "DRUID",
      "ROGUE",
      "SHAMAN"
    ],
    "collectible": true,
    "collectionText": " <b>Battlecry and Deathrattle:</b> Summon a <b>Jade Golem</b>.",
    "cost": 6,
    "dbfId": 40596,
    "elite": true,
    "flavor": "Though young, Aya took over as the leader of Jade Lotus through her charisma and strategic acumen when her predecessor was accidentally crushed by a jade golem.",
    "health": 3,
    "id": "CFM_902",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE",
      "JADE_GOLEM",
      "JADE_LOTUS"
    ],
    "multiClassGroup": "JADE_LOTUS",
    "name": "Aya Blackpaw",
    "rarity": "LEGENDARY",
    "set": "GANGS",
    "text": "<b>Battlecry and Deathrattle:</b> Summon a{1} {0} <b>Jade Golem</b>.",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 40634,
    "flavor": "Now we know why they wear tiny watches.",
    "id": "CFM_905",
    "name": "Small-Time Recruits",
    "rarity": "EPIC",
    "set": "GANGS",
    "text": "[x]Draw three 1-Cost\nminions from your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Kan Lui",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 40839,
    "flavor": "Well… a guy who knows a guy.",
    "id": "CFM_940",
    "mechanics": [
      "DISCOVER"
    ],
    "name": "I Know a Guy",
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "GANGS",
    "text": "<b>Discover</b> a <b>Taunt</b> minion.",
    "type": "SPELL"
  },
  {
    "artist": "Donato Giancola",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 922,
    "faction": "ALLIANCE",
    "flavor": "If 1/2 minions are all that is defending Goldshire, you would think it would have been overrun years ago.",
    "health": 2,
    "howToEarnGolden": "Unlocked at Paladin Level 57.",
    "id": "CS1_042",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Goldshire Footman",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Monica Langlois",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 602,
    "faction": "ALLIANCE",
    "flavor": "He used to be called Bog Beast, but it confused people because he wasn't an actual beast.   Boom, New Name!",
    "health": 6,
    "id": "CS1_069",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Fen Creeper",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 841,
    "flavor": "If the Holy Light forsakes you, good luck casting this spell.  Also, you're probably a jerk.",
    "howToEarn": "Unlocked at Level 6.",
    "howToEarnGolden": "Unlocked at Level 45.",
    "id": "CS1_112",
    "name": "Holy Nova",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $2 damage to all enemies. Restore #2 Health to all friendly characters.",
    "type": "SPELL"
  },
  {
    "artist": "Sean O’Daniels",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 10,
    "dbfId": 8,
    "flavor": "Nominated as \"Spell Most Likely to Make Your Opponent Punch the Wall.\"",
    "howToEarn": "Unlocked at Level 10.",
    "howToEarnGolden": "Unlocked at Level 49.",
    "id": "CS1_113",
    "name": "Mind Control",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_NUM_MINION_SLOTS": 1,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Take control of an enemy minion.",
    "type": "SPELL"
  },
  {
    "artist": "Steve Prescott",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 376,
    "flavor": "Good idea: Buffing your minions.  Bad idea: Starting a conversation in the Barrens.",
    "id": "CS1_129",
    "name": "Inner Fire",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Change a minion's Attack to be equal to its Health.",
    "type": "SPELL"
  },
  {
    "artist": "Steve Ellis",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 279,
    "flavor": "It doesn't matter how pious you are.  Everyone needs a good smiting now and again.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 23.",
    "id": "CS1_130",
    "name": "Holy Smite",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $2 damage.",
    "type": "SPELL"
  },
  {
    "artist": "Michael Komarck",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 1099,
    "flavor": "I see what you did there.",
    "howToEarn": "Unlocked at Level 4.",
    "howToEarnGolden": "Unlocked at Level 32.",
    "id": "CS2_003",
    "name": "Mind Vision",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Put a copy of a random card in your opponent's hand into your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Jessica Jung",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 613,
    "flavor": "Sure the extra protection is nice, but the shield really reduces visibility.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 47.",
    "id": "CS2_004",
    "name": "Power Word: Shield",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Give a minion +2 Health.\nDraw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Dany Orizio",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 1050,
    "flavor": "The claw decides who will stay and who will go.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 32.",
    "id": "CS2_005",
    "name": "Claw",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Give your hero +2 Attack this turn. Gain 2 Armor.",
    "type": "SPELL"
  },
  {
    "artist": "Cyril Van Der Haegen",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 773,
    "flavor": "8 Health, no waiting.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 15.",
    "id": "CS2_007",
    "name": "Healing Touch",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Restore #8 Health.",
    "type": "SPELL"
  },
  {
    "artist": "Richard Wright",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 0,
    "dbfId": 467,
    "flavor": "\"Cast Moonfire, and never stop.\" - How to Be a Druid, Chapter 5, Section 3",
    "howToEarn": "Unlocked at Level 6.",
    "howToEarnGolden": "Unlocked at Level 40.",
    "id": "CS2_008",
    "name": "Moonfire",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $1 damage.",
    "type": "SPELL"
  },
  {
    "artist": "Brad Vancata",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 213,
    "flavor": "Not to be confused with Jim of the Wild.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 28.",
    "id": "CS2_009",
    "name": "Mark of the Wild",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "CORE",
    "text": "Give a minion <b>Taunt</b> and +2/+2.<i>\n(+2 Attack/+2 Health)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Grace Liu",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 742,
    "flavor": "What do they roar? Nobody can quite tell, but it sounds like \"Elephant Macho Breeze\".  It's probably not that, though.",
    "howToEarn": "Unlocked at Level 4.",
    "howToEarnGolden": "Unlocked at Level 43.",
    "id": "CS2_011",
    "name": "Savage Roar",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Give your characters +2 Attack this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Sean O’Daniels",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 64,
    "flavor": "When a bear rears back and extends his arms, he's about to Swipe!  ... or hug.",
    "howToEarn": "Unlocked at Level 8.",
    "howToEarnGolden": "Unlocked at Level 47.",
    "id": "CS2_012",
    "name": "Swipe",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $4 damage to an enemy and $1 damage to all other enemies.",
    "type": "SPELL"
  },
  {
    "artist": "James Ryman",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 1124,
    "flavor": "Grow your own mana crystals with this Mana Crystal Growth Kit, only 39.99!",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 23.",
    "id": "CS2_013",
    "name": "Wild Growth",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Gain an empty Mana Crystal.",
    "type": "SPELL"
  },
  {
    "artist": "Vance Kovacs",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 77,
    "flavor": "There was going to be a pun in this flavor text, but it just came out baa-d.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 47.",
    "id": "CS2_022",
    "name": "Polymorph",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Transform a minion\ninto a 1/1 Sheep.",
    "type": "SPELL"
  },
  {
    "artist": "Dave Berggren",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 555,
    "flavor": "Playing this card makes you SMARTER.  And let's face it: we could all stand to be a little smarter.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 15.",
    "id": "CS2_023",
    "name": "Arcane Intellect",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Draw 2 cards.",
    "type": "SPELL"
  },
  {
    "artist": "Steve Ellis",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 662,
    "flavor": "It is customary to yell \"Chill out!\" or \"Freeze!\" or \"Ice ice, baby!\" when you play this card.",
    "howToEarn": "Unlocked at Level 2.",
    "howToEarnGolden": "Unlocked at Level 40.",
    "id": "CS2_024",
    "mechanics": [
      "FREEZE"
    ],
    "name": "Frostbolt",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $3 damage to a character and <b>Freeze</b> it.",
    "type": "SPELL"
  },
  {
    "artist": "Howard Lyon",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 447,
    "flavor": "This spell is much better than Arcane Implosion.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 28.",
    "id": "CS2_025",
    "name": "Arcane Explosion",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $1 damage to all enemy minions.",
    "type": "SPELL"
  },
  {
    "artist": "Josh Tallman",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 587,
    "flavor": "Hey man, that's cold.  Literally and metaphorically.",
    "howToEarn": "Unlocked at Level 6.",
    "howToEarnGolden": "Unlocked at Level 23.",
    "id": "CS2_026",
    "mechanics": [
      "FREEZE"
    ],
    "name": "Frost Nova",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Freeze</b> all enemy minions.",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 1,
    "dbfId": 1084,
    "flavor": "Oh hey it's Mirror Image! !egamI rorriM s'ti yeh hO",
    "howToEarn": "Unlocked at Level 4.",
    "howToEarnGolden": "Unlocked at Level 36.",
    "id": "CS2_027",
    "name": "Mirror Image",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "FREE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "CORE",
    "text": "Summon two 0/2 minions with <b>Taunt</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Chris Seaman",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 6,
    "dbfId": 457,
    "flavor": "This spell can be very Entertaining.",
    "id": "CS2_028",
    "mechanics": [
      "FREEZE"
    ],
    "name": "Blizzard",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Deal $2 damage to all enemy minions and <b>Freeze</b> them.",
    "type": "SPELL"
  },
  {
    "artist": "Ralph Horsley",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 315,
    "flavor": "This spell is useful for burning things.  If you're looking for spells that toast things, or just warm them a little, you're in the wrong place.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 44.",
    "id": "CS2_029",
    "name": "Fireball",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $6 damage.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 1,
    "dbfId": 172,
    "flavor": "The trick is not to break the lance.  Otherwise, you have \"Ice Pieces.\"  Ice Pieces aren't as effective.",
    "id": "CS2_031",
    "mechanics": [
      "FREEZE"
    ],
    "name": "Ice Lance",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "HOF",
    "text": "<b>Freeze</b> a character. If it was already <b>Frozen</b>, deal $4 damage instead.",
    "type": "SPELL"
  },
  {
    "artist": "Romain De Santi",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 7,
    "dbfId": 1004,
    "flavor": "When the ground is on fire, you should <i>not</i> stop, drop, and roll.",
    "howToEarn": "Unlocked at Level 10.",
    "howToEarnGolden": "Unlocked at Level 51.",
    "id": "CS2_032",
    "name": "Flamestrike",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $4 damage to all enemy minions.",
    "type": "SPELL"
  },
  {
    "artist": "John Avon",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 395,
    "flavor": "Don't summon a water elemental at a party.  It'll dampen the mood.",
    "health": 6,
    "howToEarn": "Unlocked at Level 8.",
    "howToEarnGolden": "Unlocked at Level 49.",
    "id": "CS2_033",
    "mechanics": [
      "FREEZE"
    ],
    "name": "Water Elemental",
    "race": "ELEMENTAL",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Freeze</b> any character damaged by this minion.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 971,
    "flavor": "FROST SHOCK!",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 32.",
    "id": "CS2_037",
    "mechanics": [
      "FREEZE"
    ],
    "name": "Frost Shock",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $1 damage to an enemy character and <b>Freeze</b> it.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan & Gabor",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 404,
    "flavor": "It was just a flesh wound.",
    "id": "CS2_038",
    "name": "Ancestral Spirit",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "EXPERT1",
    "text": "Give a minion \"<b>Deathrattle:</b> Resummon this minion.\"",
    "type": "SPELL"
  },
  {
    "artist": "Justin Sweet",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 51,
    "flavor": "Windfury is like Earthfury and Firefury, but more light and airy.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 23.",
    "id": "CS2_039",
    "name": "Windfury",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "referencedTags": [
      "WINDFURY"
    ],
    "set": "CORE",
    "text": "Give a minion <b>Windfury</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Dan Scott",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 0,
    "dbfId": 149,
    "flavor": "I personally prefer some non-ancestral right-the-heck-now healing, but maybe that is just me.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 15.",
    "id": "CS2_041",
    "name": "Ancestral Healing",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "CORE",
    "text": "Restore a minion\nto full Health and\ngive it <b>Taunt</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Ralph Horsley",
    "attack": 6,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 6,
    "dbfId": 189,
    "flavor": "He can never take a bath. Ewww.",
    "health": 5,
    "howToEarn": "Unlocked at Level 10.",
    "howToEarnGolden": "Unlocked at Level 49.",
    "id": "CS2_042",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fire Elemental",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "race": "ELEMENTAL",
    "rarity": "FREE",
    "set": "CORE",
    "targetingArrowText": "Deal 3 damage.",
    "text": "<b>Battlecry:</b> Deal 3 damage.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 239,
    "flavor": "This would be real handy if your enemy is made of rock.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 36.",
    "id": "CS2_045",
    "name": "Rockbiter Weapon",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Give a friendly character +3 Attack this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Luca Zontini",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 5,
    "dbfId": 1171,
    "flavor": "blaarghghLLGHRHARAAHAHHH!!",
    "howToEarn": "Unlocked at Level 2.",
    "howToEarnGolden": "Unlocked at Level 40.",
    "id": "CS2_046",
    "name": "Bloodlust",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Give your minions +3 Attack this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Lars Grant-West",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 818,
    "flavor": "Drek'thar can't see, but he can <i>see</i>. You know what I mean? It's ok if you don't.",
    "id": "CS2_053",
    "name": "Far Sight",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Draw a card. That card costs (3) less.",
    "type": "SPELL"
  },
  {
    "artist": "Dave Allsop",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 914,
    "flavor": "It’s a Bolt.   It's made out of Shadow.   What more do you need to know!",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 47.",
    "id": "CS2_057",
    "name": "Shadow Bolt",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $4 damage\nto a minion.",
    "type": "SPELL"
  },
  {
    "artist": "Bernie Kang",
    "attack": 0,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 469,
    "flavor": "Imps are content to hide and viciously taunt everyone nearby.",
    "health": 1,
    "id": "CS2_059",
    "mechanics": [
      "STEALTH",
      "TRIGGER_VISUAL"
    ],
    "name": "Blood Imp",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "[x]  <b>Stealth</b>. At the end of your  \nturn, give another random\n friendly minion +1 Health.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 919,
    "flavor": "\"I've just sucked one year of your life away.\"",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 45.",
    "id": "CS2_061",
    "name": "Drain Life",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $2 damage. Restore #2 Health to your hero.",
    "type": "SPELL"
  },
  {
    "artist": "Chippy",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 950,
    "flavor": "It's spells like these that make it hard for Warlocks to get decent help.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 49.",
    "id": "CS2_062",
    "name": "Hellfire",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $3 damage to ALL characters.",
    "type": "SPELL"
  },
  {
    "artist": "Wayne Reynolds",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 982,
    "flavor": "It starts with stealing a pen from work, and before you know it, BOOOM!  Corrupted!",
    "howToEarn": "Unlocked at Level 2.",
    "howToEarnGolden": "Unlocked at Level 32.",
    "id": "CS2_063",
    "name": "Corruption",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Choose an enemy minion. At the start of your turn, destroy it.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan & Gabor",
    "attack": 6,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 1019,
    "flavor": "\"INFERNOOOOOOOOOO!\" - Jaraxxus, Eredar Lord of the Burning Legion",
    "health": 6,
    "howToEarn": "Unlocked at Level 10.",
    "howToEarnGolden": "Unlocked at Level 23.",
    "id": "CS2_064",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dread Infernal",
    "race": "DEMON",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry:</b> Deal 1 damage to ALL other characters.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 48,
    "flavor": "No relation to \"The Voidsteppers\", the popular Void-based dance troupe.",
    "health": 3,
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 36.",
    "id": "CS2_065",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Voidwalker",
    "race": "DEMON",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Michael Sutfin",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 0,
    "dbfId": 180,
    "flavor": "It's funny how often yelling \"Look over there!\" gets your opponent to turn around.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 36.",
    "id": "CS2_072",
    "name": "Backstab",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0,
      "REQ_UNDAMAGED_TARGET": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $2 damage to an undamaged minion.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 268,
    "flavor": "\"I'm cold blooded, check it and see!\"",
    "id": "CS2_073",
    "mechanics": [
      "COMBO"
    ],
    "name": "Cold Blood",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Give a minion +2 Attack. <b>Combo:</b> +4 Attack instead.",
    "type": "SPELL"
  },
  {
    "artist": "Trevor Jacobs",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 459,
    "flavor": "Rogues guard the secrets to poison-making carefully, lest magi start incorporating poison into their spells.  Poisonbolt? Rain of Poison?  Poison Elemental?  Nobody wants that.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 43.",
    "id": "CS2_074",
    "name": "Deadly Poison",
    "playRequirements": {
      "REQ_WEAPON_EQUIPPED": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Give your weapon +2 Attack.",
    "type": "SPELL"
  },
  {
    "artist": "Frank Cho",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 710,
    "flavor": "There's something about this strike that just feels off.  Sinister, even.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 15.",
    "id": "CS2_075",
    "name": "Sinister Strike",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $3 damage to the enemy hero.",
    "type": "SPELL"
  },
  {
    "artist": "Glenn Rane",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 345,
    "flavor": "If you don't want to be assassinated, move to the Barrens and change your name. Good luck!",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 47.",
    "id": "CS2_076",
    "name": "Assassinate",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Destroy an enemy minion.",
    "type": "SPELL"
  },
  {
    "artist": "James Zhang",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 7,
    "dbfId": 630,
    "flavor": "Rogues are not good joggers.",
    "howToEarn": "Unlocked at Level 10.",
    "howToEarnGolden": "Unlocked at Level 49.",
    "id": "CS2_077",
    "name": "Sprint",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Draw 4 cards.",
    "type": "SPELL"
  },
  {
    "artist": "Brian Huang",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 421,
    "durability": 4,
    "flavor": "Guaranteed to have been owned by a real assassin.   Certificate of authenticity included.",
    "howToEarn": "Unlocked at Level 2.",
    "howToEarnGolden": "Unlocked at Level 32.",
    "id": "CS2_080",
    "name": "Assassin's Blade",
    "rarity": "FREE",
    "set": "CORE",
    "type": "WEAPON"
  },
  {
    "artist": "Jimmy Lo",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 141,
    "flavor": "Never play 'Hide and Go Seek' with a Hunter.",
    "howToEarn": "Unlocked at Level 6.",
    "howToEarnGolden": "Unlocked at Level 40.",
    "id": "CS2_084",
    "name": "Hunter's Mark",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Change a minion's Health to 1.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 70,
    "flavor": "\"As in, you MIGHT want to get out of my way.\" - Toad Mackle, recently buffed.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 45.",
    "id": "CS2_087",
    "name": "Blessing of Might",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Give a minion +3 Attack.",
    "type": "SPELL"
  },
  {
    "artist": "E.M. Gist",
    "attack": 5,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 7,
    "dbfId": 1068,
    "flavor": "Holy beings from the beyond are so cliché!",
    "health": 6,
    "howToEarn": "Unlocked at Level 8.",
    "howToEarnGolden": "Unlocked at Level 47.",
    "id": "CS2_088",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Guardian of Kings",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry:</b> Restore #6 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan & Gabor",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 291,
    "flavor": "If you are often bathed in Holy Light, you should consider wearing sunscreen.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 15.",
    "id": "CS2_089",
    "name": "Holy Light",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Restore #6 Health.",
    "type": "SPELL"
  },
  {
    "artist": "Glenn Rane",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 383,
    "durability": 4,
    "flavor": "Prince Malchezaar was a collector of rare weapons. He'd animate them and have them dance for him.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 36.",
    "id": "CS2_091",
    "name": "Light's Justice",
    "rarity": "FREE",
    "set": "CORE",
    "type": "WEAPON"
  },
  {
    "artist": "Lucas Graciano",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 943,
    "flavor": "Given the number of kings who have been assassinated, are you sure you want their blessing?",
    "howToEarn": "Unlocked at Level 10.",
    "howToEarnGolden": "Unlocked at Level 49.",
    "id": "CS2_092",
    "name": "Blessing of Kings",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Give a minion +4/+4. <i>(+4 Attack/+4 Health)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Vance Kovacs",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 476,
    "flavor": "Consecrated ground glows with Holy energy.  But it smells a little, too.",
    "howToEarn": "Unlocked at Level 4.",
    "howToEarnGolden": "Unlocked at Level 43.",
    "id": "CS2_093",
    "name": "Consecration",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $2 damage to all enemies.",
    "type": "SPELL"
  },
  {
    "artist": "Efrem Palacios",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 250,
    "flavor": "A good paladin has many tools.  Hammer of Wrath, Pliers of Vengeance, Hacksaw of Justice, etc.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 32.",
    "id": "CS2_094",
    "name": "Hammer of Wrath",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $3 damage.\nDraw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Ryan Sook",
    "attack": 4,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 847,
    "durability": 2,
    "flavor": "It Slices, it Dices. You can cut a tin can with it. (But you wouldn't want to.)",
    "howToEarn": "Unlocked at Level 2.",
    "howToEarnGolden": "Unlocked at Level 40.",
    "id": "CS2_097",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Truesilver Champion",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Whenever your hero attacks, restore #2 Health to it.",
    "type": "WEAPON"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 344,
    "flavor": "\"Guys! Guys! Slow down!\" - some kind of non-warrior minion",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 23.",
    "id": "CS2_103",
    "name": "Charge",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "referencedTags": [
      "CHARGE"
    ],
    "set": "CORE",
    "text": "Give a friendly minion <b>Charge</b>. It can't attack heroes this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Jonboy Meyers",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 1108,
    "flavor": "Minion get ANGRY.   Minion SMASH!",
    "id": "CS2_104",
    "name": "Rampage",
    "playRequirements": {
      "REQ_DAMAGED_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Give a damaged minion +3/+3.",
    "type": "SPELL"
  },
  {
    "artist": "Jonboy Meyers",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 1007,
    "flavor": "Really, if you're a hero, this is <i>every</i> strike.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 15.",
    "id": "CS2_105",
    "name": "Heroic Strike",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Give your hero +4 Attack this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Lucas Graciano",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 401,
    "durability": 2,
    "flavor": "During times of tranquility and harmony, this weapon was called by its less popular name, Chilly Peace Axe.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 49.",
    "id": "CS2_106",
    "name": "Fiery War Axe",
    "rarity": "FREE",
    "set": "CORE",
    "type": "WEAPON"
  },
  {
    "artist": "Dany Orizio",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 785,
    "flavor": "It's okay, he deserved it.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 47.",
    "id": "CS2_108",
    "name": "Execute",
    "playRequirements": {
      "REQ_DAMAGED_TARGET": 0,
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Destroy a damaged enemy minion.",
    "type": "SPELL"
  },
  {
    "artist": "Stefan Kopinski",
    "attack": 5,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 304,
    "durability": 2,
    "flavor": "No… actually you should fear the Reaper.",
    "howToEarn": "Unlocked at Level 10.",
    "howToEarnGolden": "Unlocked at Level 51.",
    "id": "CS2_112",
    "name": "Arcanite Reaper",
    "rarity": "FREE",
    "set": "CORE",
    "type": "WEAPON"
  },
  {
    "artist": "Phroilan Gardner",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 940,
    "flavor": "Hey you two…could you stand next to each other for a second…",
    "howToEarn": "Unlocked at Level 2.",
    "howToEarnGolden": "Unlocked at Level 40.",
    "id": "CS2_114",
    "name": "Cleave",
    "playRequirements": {
      "REQ_MINIMUM_ENEMY_MINIONS": 2
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "[x]Deal $2 damage to\ntwo random enemy\nminions.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1651,
    "flavor": "He can see really far, and he doesn't use a telescope like those filthy pirates.",
    "health": 3,
    "id": "CS2_117",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Earthen Ring Farseer",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "targetingArrowText": "Restore 3 Health.",
    "text": "<b>Battlecry:</b> Restore #3 Health.",
    "type": "MINION"
  },
  {
    "artist": "Matt Gaser",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1653,
    "flavor": "He likes to think he is powerful, but pretty much anyone can solo Molten Core now.",
    "health": 1,
    "howToEarnGolden": "Unlocked at Shaman Level 51.",
    "id": "CS2_118",
    "name": "Magma Rager",
    "race": "ELEMENTAL",
    "rarity": "FREE",
    "set": "CORE",
    "type": "MINION"
  },
  {
    "artist": "Ittoku",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 1370,
    "flavor": "His dreams of flying and breathing fire like his idol will never be realized.",
    "health": 7,
    "howToEarnGolden": "Unlocked at Druid Level 51.",
    "id": "CS2_119",
    "name": "Oasis Snapjaw",
    "race": "BEAST",
    "rarity": "FREE",
    "set": "CORE",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1369,
    "flavor": "Edward \"Lefty\" Smith tried to make luggage out of a river crocolisk once.",
    "health": 3,
    "howToEarnGolden": "Unlocked at Druid Level 55.",
    "id": "CS2_120",
    "name": "River Crocolisk",
    "race": "BEAST",
    "rarity": "FREE",
    "set": "CORE",
    "type": "MINION"
  },
  {
    "artist": "Richie Marella",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 41,
    "flavor": "Grunting is what his father did and his father before that.   It's more than just a job.",
    "health": 2,
    "howToEarnGolden": "Unlocked at Shaman Level 57.",
    "id": "CS2_121",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Frostwolf Grunt",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Phill Gonzales",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1401,
    "flavor": "\"That's a 50 DKP minus!\"",
    "health": 2,
    "howToEarnGolden": "Unlocked at Warrior Level 57.",
    "id": "CS2_122",
    "mechanics": [
      "AURA"
    ],
    "name": "Raid Leader",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Your other minions have +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 289,
    "faction": "HORDE",
    "flavor": "Orcish raiders ride wolves because they are well adapted to harsh environments, and because they are soft and cuddly.",
    "health": 1,
    "howToEarnGolden": "Unlocked at Warrior Level 59.",
    "id": "CS2_124",
    "mechanics": [
      "CHARGE"
    ],
    "name": "Wolfrider",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Charge</b>",
    "type": "MINION"
  },
  {
    "artist": "Lars Grant-West",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1182,
    "flavor": "\"Bear Carcass 1/10\"",
    "health": 3,
    "howToEarnGolden": "Unlocked at Hunter Level 59.",
    "id": "CS2_125",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Ironfur Grizzly",
    "race": "BEAST",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 67,
    "faction": "HORDE",
    "flavor": "He likes to act like he's in charge, but the silverback matriarch actually runs things.",
    "health": 4,
    "howToEarnGolden": "Unlocked at Warrior Level 53.",
    "id": "CS2_127",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Silverback Patriarch",
    "race": "BEAST",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Ladronn",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 622,
    "faction": "ALLIANCE",
    "flavor": "They're still embarrassed about \"The Deathwing Incident\".",
    "health": 5,
    "howToEarnGolden": "Unlocked at Paladin Level 55.",
    "id": "CS2_131",
    "mechanics": [
      "CHARGE"
    ],
    "name": "Stormwind Knight",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Charge</b>",
    "type": "MINION"
  },
  {
    "artist": "Tooth",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 339,
    "faction": "ALLIANCE",
    "flavor": "\"Ready! Aim! Drink!\"",
    "health": 2,
    "howToEarnGolden": "Unlocked at Mage Level 55.",
    "id": "CS2_141",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ironforge Rifleman",
    "playRequirements": {
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "targetingArrowText": "Deal 1 damage.",
    "text": "<b>Battlecry:</b> Deal 1 damage.",
    "type": "MINION"
  },
  {
    "artist": "Gabor Szikszai",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 672,
    "faction": "HORDE",
    "flavor": "In the old days, Kobolds were the finest candle merchants in the land. Then they got pushed too far...",
    "health": 2,
    "howToEarnGolden": "Unlocked at Warlock Level 59.",
    "id": "CS2_142",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Kobold Geomancer",
    "rarity": "FREE",
    "set": "CORE",
    "spellDamage": 1,
    "text": "<b>Spell Damage +1</b>",
    "type": "MINION"
  },
  {
    "artist": "Dan Brereton",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 724,
    "faction": "ALLIANCE",
    "flavor": "Pirates are into this new fad called \"Planking\".",
    "health": 1,
    "id": "CS2_146",
    "name": "Southsea Deckhand",
    "race": "PIRATE",
    "rarity": "COMMON",
    "referencedTags": [
      "CHARGE"
    ],
    "set": "EXPERT1",
    "text": "Has <b>Charge</b> while you have a weapon equipped.",
    "type": "MINION"
  },
  {
    "artist": "Court Jones",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 308,
    "faction": "ALLIANCE",
    "flavor": "She's never quite sure what she's making, she just knows it's AWESOME!",
    "health": 4,
    "howToEarnGolden": "Unlocked at Priest Level 57.",
    "id": "CS2_147",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gnomish Inventor",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry:</b> Draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Kev Walker",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 413,
    "faction": "ALLIANCE",
    "flavor": "The Stormpike Commandos are demolition experts.  They also bake a mean cupcake.",
    "health": 2,
    "howToEarnGolden": "Unlocked at Paladin Level 51.",
    "id": "CS2_150",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Stormpike Commando",
    "playRequirements": {
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "targetingArrowText": "Deal 2 damage.",
    "text": "<b>Battlecry:</b> Deal 2 damage.",
    "type": "MINION"
  },
  {
    "artist": "Matt Starbuck",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 69,
    "faction": "ALLIANCE",
    "flavor": "It's good to be a knight.   Less so to be one's squire.",
    "health": 4,
    "id": "CS2_151",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Silver Hand Knight",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Summon a 2/2 Squire.",
    "type": "MINION"
  },
  {
    "artist": "Steve Ellis",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 525,
    "faction": "ALLIANCE",
    "flavor": "You earn the title of Archmage when you can destroy anyone who calls you on it.",
    "health": 7,
    "howToEarnGolden": "Unlocked at Mage Level 57.",
    "id": "CS2_155",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Archmage",
    "rarity": "FREE",
    "set": "CORE",
    "spellDamage": 1,
    "text": "<b>Spell Damage +1</b>",
    "type": "MINION"
  },
  {
    "artist": "Ralph Horsley",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 134,
    "faction": "ALLIANCE",
    "flavor": "Just mail him a package with a name and 10,000 gold.  He'll take care of the rest.",
    "health": 5,
    "id": "CS2_161",
    "mechanics": [
      "STEALTH"
    ],
    "name": "Ravenholdt Assassin",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Stealth</b>",
    "type": "MINION"
  },
  {
    "artist": "E.M. Gist",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 157,
    "faction": "ALLIANCE",
    "flavor": "He used to be a 2100+ rated arena player, but that was years ago and nobody can get him to shut up about it.",
    "health": 5,
    "howToEarnGolden": "Unlocked at Priest Level 59.",
    "id": "CS2_162",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Lord of the Arena",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 191,
    "faction": "ALLIANCE",
    "flavor": "Mrrraggglhlhghghlgh, mrgaaag blarrghlgaahahl mrgggg glhalhah a bghhll graggmgmg Garrosh mglhlhlh mrghlhlhl!!",
    "health": 1,
    "howToEarnGolden": "Unlocked at Priest Level 51.",
    "id": "CS2_168",
    "name": "Murloc Raider",
    "race": "MURLOC",
    "rarity": "FREE",
    "set": "CORE",
    "type": "MINION"
  },
  {
    "artist": "Greg Hildebrandt",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 641,
    "faction": "HORDE",
    "flavor": "They were the inspiration for the championship Taurenball team: The Dragonhawks.",
    "health": 1,
    "id": "CS2_169",
    "mechanics": [
      "WINDFURY"
    ],
    "name": "Young Dragonhawk",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Windfury</b>",
    "type": "MINION"
  },
  {
    "artist": "Howard Lyon",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 648,
    "flavor": "This card is boaring.",
    "health": 1,
    "howToEarnGolden": "Unlocked at Hunter Level 53.",
    "id": "CS2_171",
    "mechanics": [
      "CHARGE"
    ],
    "name": "Stonetusk Boar",
    "race": "BEAST",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Charge</b>",
    "type": "MINION"
  },
  {
    "artist": "Dan Brereton",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 216,
    "faction": "HORDE",
    "flavor": "\"Kill 30 raptors.\" - Hemet Nesingwary",
    "health": 2,
    "howToEarnGolden": "Unlocked at Hunter Level 57.",
    "id": "CS2_172",
    "name": "Bloodfen Raptor",
    "race": "BEAST",
    "rarity": "FREE",
    "set": "CORE",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasper",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 739,
    "flavor": "He just wants a hug.   A sloppy... slimy... hug.",
    "health": 1,
    "howToEarnGolden": "Unlocked at Paladin Level 53.",
    "id": "CS2_173",
    "mechanics": [
      "CHARGE"
    ],
    "name": "Bluegill Warrior",
    "race": "MURLOC",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Charge</b>",
    "type": "MINION"
  },
  {
    "artist": "Brian Despain",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 635,
    "faction": "HORDE",
    "flavor": "Sen'jin Village is nice, if you like trolls and dust.",
    "health": 5,
    "howToEarnGolden": "Unlocked at Rogue Level 59.",
    "id": "CS2_179",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Sen'jin Shieldmasta",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Samwise",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1109,
    "faction": "HORDE",
    "flavor": "He claims it is an old war wound, but we think he just cut himself shaving.",
    "health": 7,
    "id": "CS2_181",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Injured Blademaster",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Deal 4 damage to HIMSELF.",
    "type": "MINION"
  },
  {
    "artist": "Mauro Cascioli",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 90,
    "flavor": "He always dreamed of coming down from the mountains and opening a noodle shop, but he never got the nerve.",
    "health": 5,
    "howToEarnGolden": "Unlocked at Warrior Level 55.",
    "id": "CS2_182",
    "name": "Chillwind Yeti",
    "rarity": "FREE",
    "set": "CORE",
    "type": "MINION"
  },
  {
    "artist": "Dave Kendall",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 712,
    "flavor": "Golems are not afraid, but for some reason they still run when you cast Fear on them.  Instinct, maybe?  A desire to blend in?",
    "health": 7,
    "howToEarnGolden": "Unlocked at Rogue Level 51.",
    "id": "CS2_186",
    "name": "War Golem",
    "rarity": "FREE",
    "set": "CORE",
    "type": "MINION"
  },
  {
    "artist": "Matt Cavotta",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 1140,
    "faction": "HORDE",
    "flavor": "You can hire him... until someone offers him enough gold to turn on you.",
    "health": 4,
    "howToEarnGolden": "Unlocked at Shaman Level 55.",
    "id": "CS2_187",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Booty Bay Bodyguard",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 242,
    "faction": "ALLIANCE",
    "flavor": "ADD ME TO YOUR DECK, MAGGOT!",
    "health": 1,
    "id": "CS2_188",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Abusive Sergeant",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "targetingArrowText": "Give +2 Attack this turn.",
    "text": "<b>Battlecry:</b> Give a minion +2 Attack this turn.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 389,
    "faction": "HORDE",
    "flavor": "Don't bother asking her out on a date.  She'll shoot you down.",
    "health": 1,
    "howToEarnGolden": "Unlocked at Druid Level 57.",
    "id": "CS2_189",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Elven Archer",
    "playRequirements": {
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "targetingArrowText": "Deal 1 damage.",
    "text": "<b>Battlecry:</b> Deal 1 damage.",
    "type": "MINION"
  },
  {
    "artist": "Clint Langley",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 257,
    "faction": "HORDE",
    "flavor": "Someone did mess with Tuskerr once.  ONCE.",
    "health": 3,
    "howToEarnGolden": "Unlocked at Hunter Level 55.",
    "id": "CS2_196",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Razorfen Hunter",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry:</b> Summon a 1/1 Boar.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 995,
    "flavor": "Training Ogres in the art of spellcasting is a questionable decision.",
    "health": 4,
    "howToEarnGolden": "Unlocked at Warlock Level 55.",
    "id": "CS2_197",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Ogre Magi",
    "rarity": "FREE",
    "set": "CORE",
    "spellDamage": 1,
    "text": "<b>Spell Damage +1</b>",
    "type": "MINION"
  },
  {
    "artist": "Brian Despain",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 1686,
    "flavor": "\"ME HAVE GOOD STATS FOR THE COST\"",
    "health": 7,
    "howToEarnGolden": "Unlocked at Warlock Level 51.",
    "id": "CS2_200",
    "name": "Boulderfist Ogre",
    "rarity": "FREE",
    "set": "CORE",
    "type": "MINION"
  },
  {
    "artist": "E.M. Gist",
    "attack": 9,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 1687,
    "flavor": "You don’t tame a Core Hound. You just train it to eat someone else before it eats you.",
    "health": 5,
    "howToEarnGolden": "Unlocked at Hunter Level 51.",
    "id": "CS2_201",
    "name": "Core Hound",
    "race": "BEAST",
    "rarity": "FREE",
    "set": "CORE",
    "type": "MINION"
  },
  {
    "artist": "Trevor Jacobs",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 290,
    "faction": "HORDE",
    "flavor": "Their wings are silent but their screech is... whatever the opposite of silent is.",
    "health": 1,
    "id": "CS2_203",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ironbeak Owl",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "SILENCE"
    ],
    "set": "EXPERT1",
    "targetingArrowText": "<b>Silence</b> a minion.",
    "text": "<b>Battlecry:</b> <b>Silence</b> a minion.",
    "type": "MINION"
  },
  {
    "artist": "John Polidora",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 445,
    "faction": "HORDE",
    "flavor": "One Insane Rocketeer.   One Rocket full of Explosives.   Infinite Fun.",
    "health": 2,
    "howToEarnGolden": "Unlocked at Shaman Level 59.",
    "id": "CS2_213",
    "mechanics": [
      "CHARGE"
    ],
    "name": "Reckless Rocketeer",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Charge</b>",
    "type": "MINION"
  },
  {
    "artist": "Justin Sweet",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 61,
    "faction": "HORDE",
    "flavor": "She'll craft you a sword, but you'll need to bring her 5 Steel Ingots, 3 Motes of Earth, and the scalp of her last customer.",
    "health": 6,
    "id": "CS2_221",
    "mechanics": [
      "ENRAGED"
    ],
    "name": "Spiteful Smith",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Your weapon has +2 Attack while this is damaged.",
    "type": "MINION"
  },
  {
    "artist": "Doug Alexander",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 753,
    "faction": "ALLIANCE",
    "flavor": "When Deathwing assaulted the capital, this soldier was the only member of his squad to survive. Now he's all bitter and stuff.",
    "health": 6,
    "howToEarnGolden": "Unlocked at Paladin Level 59.",
    "id": "CS2_222",
    "mechanics": [
      "AURA"
    ],
    "name": "Stormwind Champion",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Your other minions have +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 496,
    "faction": "HORDE",
    "flavor": "The Frostwolves are locked in combat with the Stormpike Expedition over control of Alterac Valley.  Every attempt at peace-talks has ended with Captain Galvangar killing the mediator.",
    "health": 4,
    "howToEarnGolden": "Unlocked at Shaman Level 53.",
    "id": "CS2_226",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Frostwolf Warlord",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry:</b> Gain +1/+1 for each other friendly minion on the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "John Polidora",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 1122,
    "faction": "HORDE",
    "flavor": "No Job is too big.  No fee is too big.",
    "health": 6,
    "id": "CS2_227",
    "mechanics": [
      "AURA"
    ],
    "name": "Venture Co. Mercenary",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Your minions cost (3) more.",
    "type": "MINION"
  },
  {
    "artist": "Malcolm Davis",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 0,
    "dbfId": 179,
    "flavor": "If you hit an Eredar Lord with enough Wisps, it will explode.   But why?",
    "health": 1,
    "id": "CS2_231",
    "name": "Wisp",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 8,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 8,
    "dbfId": 205,
    "flavor": "I <i>dare</i> you to attack Darnassus.",
    "health": 8,
    "howToEarn": "Unlocked at Level 10.",
    "howToEarnGolden": "Unlocked at Level 49.",
    "id": "CS2_232",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Ironbark Protector",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 1064,
    "flavor": "\"Look, it's not just about waving daggers around really fast.  It's a lot more complicated than that.\" - Shan, Rogue Trainer",
    "id": "CS2_233",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Blade Flurry",
    "playRequirements": {
      "REQ_WEAPON_EQUIPPED": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Destroy your weapon and deal its damage to all enemy minions.",
    "type": "SPELL"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 1367,
    "flavor": "A step up from a spell cast by many beginning acolytes: \"Shadow Word: Annoy\".",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 36.",
    "id": "CS2_234",
    "name": "Shadow Word: Pain",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_MAX_ATTACK": 3,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Destroy a minion with 3 or less Attack.",
    "type": "SPELL"
  },
  {
    "artist": "Terese Nielsen",
    "attack": 1,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 1650,
    "flavor": "They help the downtrodden and distressed.  Also they sell cookies.",
    "health": 3,
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 40.",
    "id": "CS2_235",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Northshire Cleric",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Whenever a minion is healed, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Jim Pavelec",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 1361,
    "flavor": "Double the trouble. Double the fun!",
    "howToEarn": "Unlocked at Level 2.",
    "howToEarnGolden": "Unlocked at Level 28.",
    "id": "CS2_236",
    "name": "Divine Spirit",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Double a minion's Health.",
    "type": "SPELL"
  },
  {
    "artist": "Bernie Kang",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 1241,
    "flavor": "If you feed him, he loses his whole <i>identity</i>.",
    "health": 2,
    "howToEarn": "Unlocked at Level 4.",
    "howToEarnGolden": "Unlocked at Level 47.",
    "id": "CS2_237",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Starving Buzzard",
    "race": "BEAST",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Whenever you summon a Beast, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Jesper Ejsing",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 582,
    "flavor": "Healing is just something she does in her free time.  It's more of a hobby really.",
    "health": 5,
    "howToEarnGolden": "Unlocked at Priest Level 55.",
    "id": "DS1_055",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Darkscale Healer",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry:</b> Restore #2 Health to all friendly characters.",
    "type": "MINION"
  },
  {
    "artist": "Dan Brereton",
    "attack": 4,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 1003,
    "flavor": "\"Who let the dogs out?\" he asks.  It's rhetorical.",
    "health": 3,
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 28.",
    "id": "DS1_070",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Houndmaster",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 20
    },
    "rarity": "FREE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "CORE",
    "targetingArrowText": "Give a Beast +2/+2 and Taunt.",
    "text": "<b>Battlecry:</b> Give a friendly Beast +2/+2 and <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Malcolm Davis",
    "attack": 1,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 606,
    "flavor": "Other beasts totally dig hanging out with timber wolves.",
    "health": 1,
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 23.",
    "id": "DS1_175",
    "mechanics": [
      "AURA"
    ],
    "name": "Timber Wolf",
    "race": "BEAST",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Your other Beasts have +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Lars Grant-West",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 699,
    "flavor": "Tundra rhinos are often mistaken for kodos.  Or am I mistaken?",
    "health": 5,
    "howToEarn": "Unlocked at Level 8.",
    "howToEarnGolden": "Unlocked at Level 43.",
    "id": "DS1_178",
    "mechanics": [
      "AURA"
    ],
    "name": "Tundra Rhino",
    "race": "BEAST",
    "rarity": "FREE",
    "referencedTags": [
      "CHARGE"
    ],
    "set": "CORE",
    "text": "Your Beasts have <b>Charge</b>.",
    "type": "MINION"
  },
  {
    "artist": "Benjamin Zhang",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 292,
    "flavor": "You see, it's all about <i>throughput</i>.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 36.",
    "id": "DS1_183",
    "name": "Multi-Shot",
    "playRequirements": {
      "REQ_MINIMUM_ENEMY_MINIONS": 2
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $3 damage to two random enemy minions.",
    "type": "SPELL"
  },
  {
    "artist": "Mauro Cascioli",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 1047,
    "flavor": "For the person who just cannot decide what card to put into a deck!",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 15.",
    "id": "DS1_184",
    "name": "Tracking",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Look at the top 3 cards of your deck. Draw one and discard the others.",
    "type": "SPELL"
  },
  {
    "artist": "Luca Zontini",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 877,
    "flavor": "Magi conjured arcane arrows to sell to hunters, until hunters learned just enough magic to do it themselves.  The resulting loss of jobs sent Stormwind into a minor recession.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 32.",
    "id": "DS1_185",
    "name": "Arcane Shot",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $2 damage.",
    "type": "SPELL"
  },
  {
    "artist": "Peter C. Lee",
    "attack": 5,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 7,
    "dbfId": 311,
    "durability": 2,
    "flavor": "The longbow allows shots to be fired from farther away and is useful for firing on particularly odorous targets.",
    "id": "DS1_188",
    "name": "Gladiator's Longbow",
    "rarity": "EPIC",
    "referencedTags": [
      "IMMUNE"
    ],
    "set": "EXPERT1",
    "text": "Your hero is <b>Immune</b> while attacking.",
    "type": "WEAPON"
  },
  {
    "artist": "Dave Allsop",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 545,
    "flavor": "This spell blasts you directly in the MIND.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 15.",
    "id": "DS1_233",
    "name": "Mind Blast",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $5 damage to the enemy hero.",
    "type": "SPELL"
  },
  {
    "artist": "Erik Ko",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 1655,
    "flavor": "She’s smaller than her sisters Mediumwarden and Heavywarden.",
    "health": 2,
    "id": "EX1_001",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Lightwarden",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Whenever a character is healed, gain +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 1656,
    "elite": true,
    "flavor": "He was sent by the Lich King to disrupt the Argent Tournament.   We can pretty much mark that a failure.",
    "health": 5,
    "id": "EX1_002",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "The Black Knight",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_MUST_TARGET_TAUNTER": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "LEGENDARY",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "EXPERT1",
    "targetingArrowText": "Destroy a minion with Taunt.",
    "text": "<b>Battlecry:</b> Destroy an enemy minion with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Vance Kovacs",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 1634,
    "flavor": "She can't wait to learn Power Word: Fortitude Rank 2.",
    "health": 1,
    "id": "EX1_004",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Young Priestess",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "At the end of your turn, give another random friendly minion +1 Health.",
    "type": "MINION"
  },
  {
    "artist": "Chris Seaman",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 1657,
    "flavor": "Mere devilsaurs no longer excite him.  Soon he'll be trying to catch Onyxia with only a dull Krol Blade.",
    "health": 2,
    "id": "EX1_005",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Big Game Hunter",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_MIN_ATTACK": 7
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "targetingArrowText": "Destroy a minion with an Attack of 7 or more.",
    "text": "<b>Battlecry:</b> Destroy a minion with 7 or more Attack.",
    "type": "MINION"
  },
  {
    "artist": "Sean O’Daniels",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1658,
    "flavor": "WARNING.  WARNING.  WARNING.",
    "health": 3,
    "id": "EX1_006",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Alarm-o-Bot",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "[x]At the start of your turn,\nswap this minion with a\n   random one in your hand.",
    "type": "MINION"
  },
  {
    "artist": "Dave Kendall",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1659,
    "flavor": "He trained when he was younger to be an acolyte of joy, but things didn’t work out like he thought they would.",
    "health": 3,
    "id": "EX1_007",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Acolyte of Pain",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Whenever this minion takes damage, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan & Gabor",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 757,
    "faction": "ALLIANCE",
    "flavor": "\"I solemnly swear to uphold the Light, purge the world of darkness, and to eat only burritos.\" - The Argent Dawn Oath",
    "health": 1,
    "id": "EX1_008",
    "mechanics": [
      "DIVINE_SHIELD"
    ],
    "name": "Argent Squire",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 1688,
    "flavor": "There is no beast more frightening (or ridiculous) than a fully enraged chicken.",
    "health": 1,
    "id": "EX1_009",
    "mechanics": [
      "ENRAGED"
    ],
    "name": "Angry Chicken",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Has +5 Attack while damaged.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 994,
    "faction": "ALLIANCE",
    "flavor": "If you want to stop a worgen from infiltrating, just yell, \"No! Bad boy!\"",
    "health": 1,
    "id": "EX1_010",
    "mechanics": [
      "STEALTH"
    ],
    "name": "Worgen Infiltrator",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Stealth</b>",
    "type": "MINION"
  },
  {
    "artist": "Karl Richardson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 132,
    "faction": "HORDE",
    "flavor": "Voodoo is an oft-misunderstood art. But it <i>is</i> art.",
    "health": 1,
    "howToEarnGolden": "Unlocked at Rogue Level 55.",
    "id": "EX1_011",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Voodoo Doctor",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "targetingArrowText": "Restore 2 Health.",
    "text": "<b>Battlecry:</b> Restore #2 Health.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 749,
    "elite": true,
    "flavor": "He's in charge of the Annual Scarlet Monastery Blood Drive!",
    "health": 1,
    "id": "EX1_012",
    "mechanics": [
      "DEATHRATTLE",
      "SPELLPOWER"
    ],
    "name": "Bloodmage Thalnos",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "spellDamage": 1,
    "text": "<b>Spell Damage +1</b>\n<b>Deathrattle:</b> Draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Sunny Gho",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1693,
    "elite": true,
    "flavor": "King Mukla wanders Jaguero Isle, searching for love.",
    "health": 5,
    "id": "EX1_014",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "King Mukla",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Give your opponent 2 Bananas.",
    "type": "MINION"
  },
  {
    "artist": "Karl Richardson",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 284,
    "faction": "ALLIANCE",
    "flavor": "\"Half of this class will not graduate… since they'll have been turned to chickens.\" - Tinkmaster Overspark, teaching Gizmos 101.",
    "health": 1,
    "howToEarnGolden": "Unlocked at Druid Level 59.",
    "id": "EX1_015",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Novice Engineer",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry:</b> Draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Glenn Rane",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 1721,
    "elite": true,
    "flavor": "Sylvanas was turned into the Banshee Queen by Arthas, but he probably should have just killed her because it just pissed her off.",
    "health": 5,
    "id": "EX1_016",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Sylvanas Windrunner",
    "rarity": "LEGENDARY",
    "set": "HOF",
    "text": "<b>Deathrattle:</b> Take\ncontrol of a random\nenemy minion.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 921,
    "faction": "HORDE",
    "flavor": "Stranglethorn is a beautiful place to visit, but you wouldn't want to live there.",
    "health": 2,
    "id": "EX1_017",
    "mechanics": [
      "STEALTH"
    ],
    "name": "Jungle Panther",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Stealth</b>",
    "type": "MINION"
  },
  {
    "artist": "Doug Alexander",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 608,
    "flavor": "They always have a spare flask of Sunwell Energy Drink™!",
    "health": 2,
    "howToEarnGolden": "Unlocked at Priest Level 53.",
    "id": "EX1_019",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Shattered Sun Cleric",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "targetingArrowText": "Give +1/+1.",
    "text": "<b>Battlecry:</b> Give a friendly minion +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Gonzalo Ordonez",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 642,
    "faction": "ALLIANCE",
    "flavor": "Never wash your whites with a Scarlet Crusader.",
    "health": 1,
    "id": "EX1_020",
    "mechanics": [
      "DIVINE_SHIELD"
    ],
    "name": "Scarlet Crusader",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Efrem Palacios",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 765,
    "faction": "HORDE",
    "flavor": "He's stationed in the Hellfire Peninsula, but he's hoping for a reassignment closer to Orgrimmar, or really anywhere the ground is less on fire.",
    "health": 3,
    "id": "EX1_021",
    "mechanics": [
      "WINDFURY"
    ],
    "name": "Thrallmar Farseer",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Windfury</b>",
    "type": "MINION"
  },
  {
    "artist": "Phroilan Gardner",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 34,
    "faction": "HORDE",
    "flavor": "The first time they tried to guard Silvermoon against the scourge, it didn’t go so well…",
    "health": 3,
    "id": "EX1_023",
    "mechanics": [
      "DIVINE_SHIELD"
    ],
    "name": "Silvermoon Guardian",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Warren Mahy",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 523,
    "faction": "ALLIANCE",
    "flavor": "She is still working on installing the rocket launcher add-on for Mr. Bitey.",
    "health": 4,
    "howToEarnGolden": "Unlocked at Mage Level 53.",
    "id": "EX1_025",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dragonling Mechanic",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry:</b> Summon a 2/1 Mechanical Dragonling.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 68,
    "faction": "ALLIANCE",
    "flavor": "The wonderful thing about tigers is tigers are wonderful things!",
    "health": 5,
    "id": "EX1_028",
    "mechanics": [
      "STEALTH"
    ],
    "name": "Stranglethorn Tiger",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Stealth</b>",
    "type": "MINION"
  },
  {
    "artist": "Glenn Rane",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 658,
    "flavor": "He really just wants to be your friend, but the constant rejection is starting to really get to him.",
    "health": 1,
    "id": "EX1_029",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Leper Gnome",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Deathrattle:</b> Deal 2 damage to the enemy hero.",
    "type": "MINION"
  },
  {
    "artist": "Andrea Uderzo",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 759,
    "faction": "ALLIANCE",
    "flavor": "She doesn’t ACTUALLY walk on the Sun.  It's just a name.  Don’t worry!",
    "health": 5,
    "id": "EX1_032",
    "mechanics": [
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "name": "Sunwalker",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Taunt</b>\n<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Luke Mancini",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 567,
    "faction": "ALLIANCE",
    "flavor": "Harpies are not pleasant sounding.  That's the nicest I can put it.",
    "health": 5,
    "id": "EX1_033",
    "mechanics": [
      "WINDFURY"
    ],
    "name": "Windfury Harpy",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Windfury</b>",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 1037,
    "flavor": "Twilight drakes feed on Mystical Energy.  And Tacos.",
    "health": 1,
    "id": "EX1_043",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Twilight Drake",
    "race": "DRAGON",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Gain +1 Health for each card in your hand.",
    "type": "MINION"
  },
  {
    "artist": "Attila Adorjany",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 791,
    "faction": "ALLIANCE",
    "flavor": "\"Does anyone have some extra Boar Pelts?\"",
    "health": 2,
    "id": "EX1_044",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Questing Adventurer",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Whenever you play a card, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Richard Wright",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 605,
    "faction": "ALLIANCE",
    "flavor": "Why do its eyes seem to follow you as you walk by?",
    "health": 5,
    "id": "EX1_045",
    "mechanics": [
      "CANT_ATTACK"
    ],
    "name": "Ancient Watcher",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Can't attack.",
    "type": "MINION"
  },
  {
    "artist": "Scott Hampton",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 348,
    "faction": "ALLIANCE",
    "flavor": "Guardians of Dark Iron Ore.  Perhaps the most annoying ore, given where you have to forge it.",
    "health": 4,
    "id": "EX1_046",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dark Iron Dwarf",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "targetingArrowText": "Give +2 Attack.",
    "text": "<b>Battlecry:</b> Give a minion +2 Attack this turn.",
    "type": "MINION"
  },
  {
    "artist": "Matt Cavotta",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 754,
    "faction": "HORDE",
    "flavor": "Spellbreakers can rip enchantments from magic-wielders.  The process is painless and can be performed on an outpatient basis.",
    "health": 3,
    "id": "EX1_048",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Spellbreaker",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "SILENCE"
    ],
    "set": "EXPERT1",
    "targetingArrowText": "<b>Silence</b> a minion.",
    "text": "<b>Battlecry:</b> <b>Silence</b> a minion.",
    "type": "MINION"
  },
  {
    "artist": "Wei Wang",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 415,
    "faction": "ALLIANCE",
    "flavor": "His youthful enthusiasm doesn’t always equal excellence in his brews.   Don’t drink the Mogu Stout!",
    "health": 2,
    "id": "EX1_049",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Youthful Brewmaster",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "targetingArrowText": "Return a minion to your hand.",
    "text": "<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1016,
    "flavor": "They can see the future.   In that future both players draw more cards.   Spoooky.",
    "health": 2,
    "id": "EX1_050",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Coldlight Oracle",
    "race": "MURLOC",
    "rarity": "RARE",
    "set": "HOF",
    "text": "<b>Battlecry:</b> Each player draws 2 cards.",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 12,
    "faction": "ALLIANCE",
    "flavor": "She’s trying to kick the habit, but still takes some mana whenever she has a stressful day.",
    "health": 3,
    "id": "EX1_055",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Mana Addict",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Whenever you cast a spell, gain +2 Attack this turn.",
    "type": "MINION"
  },
  {
    "artist": "Bernie Kang",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 186,
    "faction": "ALLIANCE",
    "flavor": "Most pandaren say his brew tastes like yak.  But apparently that's a compliment.",
    "health": 4,
    "id": "EX1_057",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ancient Brewmaster",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "targetingArrowText": "Return a minion to your hand.",
    "text": "<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 891,
    "faction": "ALLIANCE",
    "flavor": "She carries a shield, but only so she can give it to someone she can stand behind.",
    "health": 3,
    "id": "EX1_058",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Sunfury Protector",
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Give adjacent minions <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Tom Fleming",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 801,
    "flavor": "\"You'll <i>love</i> my new recipe!\" he says... especially if you're not happy with your current number of limbs.",
    "health": 2,
    "id": "EX1_059",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Crazed Alchemist",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "targetingArrowText": "Swap Attack and Health of a minion.",
    "text": "<b>Battlecry:</b> Swap the Attack and Health of a minion.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 736,
    "elite": true,
    "flavor": "He's a legend among murlocs.  \"Mrghllghghllghg!\", they say.",
    "health": 4,
    "howToEarn": "Unlocked when you have all the Murlocs from the Classic Set.",
    "howToEarnGolden": "Unlocked when you have all the Golden Murlocs from the Expert and Basic Sets.",
    "id": "EX1_062",
    "mechanics": [
      "CHARGE"
    ],
    "name": "Old Murk-Eye",
    "race": "MURLOC",
    "rarity": "LEGENDARY",
    "set": "HOF",
    "text": "<b>Charge</b>. Has +1 Attack for each other Murloc on the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Chris Rahn",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 906,
    "faction": "ALLIANCE",
    "flavor": "Oozes love Flamenco.  Don't ask.",
    "health": 2,
    "howToEarnGolden": "Unlocked at Rogue Level 57.",
    "id": "EX1_066",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Acidic Swamp Ooze",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry:</b> Destroy your opponent's weapon.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 281,
    "flavor": "The Argent Dawn stands vigilant against the Scourge, as well as people who cut in line at coffee shops.",
    "health": 2,
    "id": "EX1_067",
    "mechanics": [
      "CHARGE",
      "DIVINE_SHIELD"
    ],
    "name": "Argent Commander",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Charge</b>\n<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Ron Spears",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 37,
    "faction": "ALLIANCE",
    "flavor": "She's quite jealous of the Gallon-Sized Summoner.",
    "health": 2,
    "id": "EX1_076",
    "mechanics": [
      "AURA"
    ],
    "name": "Pint-Sized Summoner",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "The first minion you play each turn costs (1) less.",
    "type": "MINION"
  },
  {
    "artist": "Gonzalo Ordonez",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 158,
    "faction": "ALLIANCE",
    "flavor": "She promises not to tell anyone about that thing you did last night with that one person.",
    "health": 2,
    "id": "EX1_080",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Secretkeeper",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET"
    ],
    "set": "EXPERT1",
    "text": "Whenever a <b>Secret</b> is played, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 762,
    "faction": "ALLIANCE",
    "flavor": "He's not really all that crazy, he is just not as careful with explosives as he should be.",
    "health": 2,
    "id": "EX1_082",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Mad Bomber",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Deal 3 damage randomly split between all other characters.",
    "type": "MINION"
  },
  {
    "artist": "Tom Baxa",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 570,
    "elite": true,
    "faction": "ALLIANCE",
    "flavor": "Tinkmaster Overspark nearly lost his Tinker's license after the Great Ironforge Squirrel Stampede of '09.",
    "health": 3,
    "id": "EX1_083",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tinkmaster Overspark",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "targetingArrowText": "Transform a minion into a 5/5 or a 1/1 at random.",
    "text": "[x]<b>Battlecry:</b> Transform\nanother random minion\ninto a 5/5 Devilsaur\n or a 1/1 Squirrel.",
    "type": "MINION"
  },
  {
    "artist": "Wei Wang",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 1009,
    "flavor": "The Warsong clan is <i>such drama</i>. It's really not worth it to become a commander.",
    "health": 3,
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 36.",
    "id": "EX1_084",
    "mechanics": [
      "AURA"
    ],
    "name": "Warsong Commander",
    "rarity": "FREE",
    "referencedTags": [
      "CHARGE"
    ],
    "set": "CORE",
    "text": "Your <b>Charge</b> minions have +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Leo Che",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 734,
    "faction": "ALLIANCE",
    "flavor": "Mind Control technology is getting better, but that's not saying much.",
    "health": 3,
    "id": "EX1_085",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Mind Control Tech",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "[x]<b>Battlecry:</b> If your opponent\nhas 4 or more minions, take\n control of one at random.",
    "type": "MINION"
  },
  {
    "artist": "Sedhayu Ardian",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 466,
    "flavor": "Having Arcane golems at home really classes up the place, and as a bonus they are great conversation pieces.",
    "health": 4,
    "id": "EX1_089",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Arcane Golem",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Give your opponent a Mana Crystal.",
    "type": "MINION"
  },
  {
    "artist": "Chippy",
    "attack": 4,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 272,
    "flavor": "You never know who may be secretly working for the Cabal....",
    "health": 5,
    "id": "EX1_091",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Cabal Shadow Priest",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_MAX_ATTACK": 2
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "targetingArrowText": "Steal a minion that has 2 or less Attack.",
    "text": "<b>Battlecry:</b> Take control of an enemy minion that has 2 or less Attack.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 763,
    "faction": "ALLIANCE",
    "flavor": "You wouldn’t think that Argus would need this much defending.  But it does.",
    "health": 3,
    "id": "EX1_093",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Defender of Argus",
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Give adjacent minions +1/+1 and <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 932,
    "flavor": "He used to run the black market auction house, but there was just too much violence and he had to move.",
    "health": 4,
    "id": "EX1_095",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Gadgetzan Auctioneer",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Whenever you cast a spell, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 251,
    "flavor": "Always roll need.",
    "health": 1,
    "id": "EX1_096",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Loot Hoarder",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Deathrattle:</b> Draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 440,
    "flavor": "Abominations enjoy Fresh Meat and long walks on the beach.",
    "health": 4,
    "id": "EX1_097",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Abomination",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Taunt</b>. <b>Deathrattle:</b> Deal 2\ndamage to ALL characters.",
    "type": "MINION"
  },
  {
    "artist": "Mark Zug",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1135,
    "elite": true,
    "flavor": "Lorewalker Cho archives and shares tales from the land of Pandaria, but his favorite story is the one where Joey and Phoebe go on a road trip.",
    "health": 4,
    "id": "EX1_100",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Lorewalker Cho",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "Whenever a player casts a spell, put a copy into the other player’s hand.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 979,
    "flavor": "Laying siege isn't fun for anyone.  It's not even all that effective, now that everyone has a flying mount.",
    "health": 4,
    "id": "EX1_102",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Demolisher",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "At the start of your turn, deal 2 damage to a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 453,
    "flavor": "The Coldlight murlocs reside in the darkest pits of the Abyssal Depths.  So no, there's no getting away from murlocs.",
    "health": 3,
    "id": "EX1_103",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Coldlight Seer",
    "race": "MURLOC",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Give your other Murlocs +2 Health.",
    "type": "MINION"
  },
  {
    "artist": "Samwise",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 12,
    "dbfId": 993,
    "flavor": "His mother said that he was just big boned.",
    "health": 8,
    "id": "EX1_105",
    "name": "Mountain Giant",
    "race": "ELEMENTAL",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Costs (1) less for each other card in your hand.",
    "type": "MINION"
  },
  {
    "artist": "Wayne Reynolds",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 420,
    "elite": true,
    "faction": "ALLIANCE",
    "flavor": "Cairne was killed by Garrosh, so... don't put this guy in a Warrior deck.  It's pretty insensitive.",
    "health": 5,
    "id": "EX1_110",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Cairne Bloodhoof",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Deathrattle:</b> Summon a 4/5 Baine Bloodhoof.",
    "type": "MINION"
  },
  {
    "artist": "Ludo Lullabi",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 858,
    "elite": true,
    "entourage": [
      "Mekka1",
      "Mekka2",
      "Mekka3",
      "Mekka4"
    ],
    "faction": "ALLIANCE",
    "flavor": "He's the leader of the gnomes, and an incredible inventor.  He's getting better, too; He turns things into chickens WAY less than he used to.",
    "health": 6,
    "howToEarnGolden": "This was rewarded to players who helped test the Store during the Beta.",
    "id": "EX1_112",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gelbin Mekkatorque",
    "rarity": "LEGENDARY",
    "set": "HOF",
    "text": "<b>Battlecry:</b> Summon an AWESOME invention.",
    "type": "MINION"
  },
  {
    "artist": "Gabe from Penny Arcade",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 559,
    "elite": true,
    "faction": "ALLIANCE",
    "flavor": "At least he has Angry Chicken.",
    "health": 2,
    "id": "EX1_116",
    "mechanics": [
      "BATTLECRY",
      "CHARGE"
    ],
    "name": "Leeroy Jenkins",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Charge</b>. <b>Battlecry:</b> Summon two 1/1 Whelps for your opponent.",
    "type": "MINION"
  },
  {
    "artist": "Ariel Olivetti",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 904,
    "flavor": "There is a high cost to Eviscerating your opponent:  It takes a long time to get blood stains out of leather armor.",
    "id": "EX1_124",
    "mechanics": [
      "COMBO"
    ],
    "name": "Eviscerate",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Deal $2 damage. <b>Combo:</b> Deal $4 damage instead.",
    "type": "SPELL"
  },
  {
    "artist": "Lucas Graciano",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 282,
    "flavor": "Everyone has a price. Gnomes, for example, can be persuaded by stuffed animals and small amounts of chocolate.",
    "id": "EX1_126",
    "name": "Betrayal",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Force an enemy minion to deal its damage to the minions next to it.",
    "type": "SPELL"
  },
  {
    "artist": "Steve Hui",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 990,
    "flavor": "Rogues conceal everything but their emotions.  You can't get 'em to shut up about feelings.",
    "id": "EX1_128",
    "name": "Conceal",
    "rarity": "COMMON",
    "referencedTags": [
      "STEALTH"
    ],
    "set": "HOF",
    "text": "Give your minions <b>Stealth</b> until your next turn.",
    "type": "SPELL"
  },
  {
    "artist": "Andrew Robinson",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 667,
    "flavor": "I wouldn't say I LOVE knives, but I'm definitely a fan.",
    "howToEarn": "Unlocked at Level 4.",
    "howToEarnGolden": "Unlocked at Level 28.",
    "id": "EX1_129",
    "name": "Fan of Knives",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $1 damage to all enemy minions. Draw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan & Gabor",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 584,
    "flavor": "We will always remember you, \"Defender!\"",
    "id": "EX1_130",
    "mechanics": [
      "SECRET"
    ],
    "name": "Noble Sacrifice",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> When an enemy attacks, summon a 2/1 Defender as the new target.",
    "type": "SPELL"
  },
  {
    "artist": "Dany Orizio",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 201,
    "flavor": "He stole the deed to town years ago, so technically the town <i>is</i> his. He just calls people Scrub to be mean.",
    "health": 2,
    "id": "EX1_131",
    "mechanics": [
      "COMBO"
    ],
    "name": "Defias Ringleader",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Combo:</b> Summon a 2/1 Defias Bandit.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 462,
    "flavor": "Justice sometimes takes the form of a closed fist into a soft cheek.",
    "id": "EX1_132",
    "mechanics": [
      "SECRET"
    ],
    "name": "Eye for an Eye",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> When your hero takes damage, deal that much damage to the enemy hero.",
    "type": "SPELL"
  },
  {
    "artist": "Daren Bader",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 391,
    "durability": 2,
    "flavor": "Perdition's Blade is Ragnaros's back-up weapon while Sulfuras is in the shop.",
    "id": "EX1_133",
    "mechanics": [
      "BATTLECRY",
      "COMBO"
    ],
    "name": "Perdition's Blade",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "targetingArrowText": "Deal 1 damage.  Combo: 2 instead.",
    "text": "<b>Battlecry:</b> Deal 1 damage. <b>Combo:</b> Deal 2 instead.",
    "type": "WEAPON"
  },
  {
    "artist": "Chris Moeller",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 1117,
    "flavor": "The agents of SI:7 are responsible for Stormwind's covert activities.  Their duties include espionage, assassination, and throwing surprise birthday parties for the royal family.",
    "health": 3,
    "id": "EX1_134",
    "mechanics": [
      "COMBO"
    ],
    "name": "SI:7 Agent",
    "playRequirements": {
      "REQ_TARGET_FOR_COMBO": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "targetingArrowText": "Deal 2 damage.",
    "text": "<b>Combo:</b> Deal 2 damage.",
    "type": "MINION"
  },
  {
    "artist": "Ittoku",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 140,
    "flavor": "I am not sure how you get demptioned the first time.  It’s a mystery!",
    "id": "EX1_136",
    "mechanics": [
      "SECRET"
    ],
    "name": "Redemption",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> When a friendly minion dies, return it to life with 1 Health.",
    "type": "SPELL"
  },
  {
    "artist": "James Zhang",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 708,
    "flavor": "When all else fails, nothing beats a swift whack upside the head.",
    "id": "EX1_137",
    "mechanics": [
      "COMBO"
    ],
    "name": "Headcrack",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Deal $2 damage to the enemy hero. <b>Combo:</b> Return this to your hand next turn.",
    "type": "SPELL"
  },
  {
    "artist": "Graven Tung",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 0,
    "dbfId": 365,
    "flavor": "Rogue dance troops will sometimes Shadowstep away at the end of a performance.  Crowds love it.",
    "id": "EX1_144",
    "name": "Shadowstep",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Return a friendly minion to your hand. It costs (2) less.",
    "type": "SPELL"
  },
  {
    "artist": "Clint Langley",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 0,
    "dbfId": 1158,
    "flavor": "\"Be Prepared\" - Rogue Motto",
    "id": "EX1_145",
    "name": "Preparation",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "The next spell you cast this turn costs (3) less.",
    "type": "SPELL"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 836,
    "flavor": "The talk around the Ratchet Inn is that this card is too good and should be a Legendary.",
    "id": "EX1_154",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Wrath",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Choose One -</b>\nDeal $3 damage to a minion; or $1 damage\nand draw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Clint Langley",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 151,
    "flavor": "Druids call it the \"Mark of Nature.\"  Everyone else calls it \"needing a bath.\"",
    "id": "EX1_155",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Mark of Nature",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "EXPERT1",
    "text": "<b>Choose One -</b> Give a minion +4 Attack; or +4 Health and <b>Taunt</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Markus Erdt",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 381,
    "flavor": "\"Reforestation\" is suddenly a terrifying word.",
    "id": "EX1_158",
    "name": "Soul of the Forest",
    "rarity": "COMMON",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "EXPERT1",
    "text": "Give your minions \"<b>Deathrattle:</b> Summon a 2/2 Treant.\"",
    "type": "SPELL"
  },
  {
    "artist": "Steve Tappin",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 503,
    "flavor": "Never look a panther in the eye.  Or is it 'Always look a panther in the eye'?  Well, it's one of those.",
    "id": "EX1_160",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Power of the Wild",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Choose One -</b> Give your minions +1/+1; or Summon a 3/2 Panther.",
    "type": "SPELL"
  },
  {
    "artist": "Leo Che",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 233,
    "flavor": "Another one bites the dust.",
    "id": "EX1_161",
    "name": "Naturalize",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Destroy a minion.\nYour opponent draws 2 cards.",
    "type": "SPELL"
  },
  {
    "artist": "John Dickenson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 985,
    "flavor": "We are pretty excited about the upcoming release of Dire Wolf Beta, just repost this sign for a chance at a key.",
    "health": 2,
    "id": "EX1_162",
    "mechanics": [
      "ADJACENT_BUFF",
      "AURA"
    ],
    "name": "Dire Wolf Alpha",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Adjacent minions have +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Terese Nielsen",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 95,
    "flavor": "Druids take nourishment from many things: the power of nature, the songbird's chirp, a chocolate cake.",
    "id": "EX1_164",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Nourish",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Choose One -</b> Gain 2 Mana Crystals; or Draw 3 cards.",
    "type": "SPELL"
  },
  {
    "artist": "Luca Zontini",
    "attack": 4,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 692,
    "flavor": "Cat or Bear?  Cat or Bear?!  I just cannot CHOOSE!",
    "health": 4,
    "id": "EX1_165",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Druid of the Claw",
    "rarity": "COMMON",
    "referencedTags": [
      "CHARGE",
      "TAUNT"
    ],
    "set": "EXPERT1",
    "text": "[x]<b>Choose One -</b> Transform\ninto a 4/4 with <b>Charge</b>;\nor a 4/6 with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Gabor Szikszai",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 601,
    "flavor": "These guys just show up and start Keeping your Groves without even asking.",
    "health": 2,
    "id": "EX1_166",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Keeper of the Grove",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "SILENCE"
    ],
    "set": "EXPERT1",
    "text": "<b>Choose One -</b> Deal 2 damage; or <b>Silence</b> a minion.",
    "type": "MINION"
  },
  {
    "artist": "Doug Alexander",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 0,
    "dbfId": 254,
    "flavor": "Some druids still have flashbacks from strangers yelling \"Innervate me!!\" at them.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 36.",
    "id": "EX1_169",
    "name": "Innervate",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Gain 1 Mana Crystal this turn only.",
    "type": "SPELL"
  },
  {
    "artist": "Lars Grant-West",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1098,
    "flavor": "The Sholazar Basin is home to a lot of really horrible things. If you're going to visit, wear bug spray.  And plate armor.",
    "health": 3,
    "id": "EX1_170",
    "mechanics": [
      "POISONOUS"
    ],
    "name": "Emperor Cobra",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Poisonous</b>",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 6,
    "dbfId": 823,
    "flavor": "Balance is important to druids.  This card is perfectly balanced.",
    "howToEarn": "Unlocked at Level 2.",
    "howToEarnGolden": "Unlocked at Level 45.",
    "id": "EX1_173",
    "name": "Starfire",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $5 damage.\nDraw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Sean O’Daniels",
    "attack": 5,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 7,
    "dbfId": 1035,
    "flavor": "Young Night Elves love to play \"Who can get the Ancient of War to Uproot?\"  You lose if you get crushed to death.",
    "health": 5,
    "id": "EX1_178",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Ancient of War",
    "rarity": "EPIC",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "EXPERT1",
    "text": "<b>Choose One -</b>\n+5 Attack; or +5 Health and <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Daarken",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 505,
    "flavor": "Lightning Bolt! Lightning Bolt! Lightning Bolt!",
    "id": "EX1_238",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Lightning Bolt",
    "overload": 1,
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Deal $3 damage. <b>Overload:</b> (1)",
    "type": "SPELL"
  },
  {
    "artist": "Dan Scott",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 864,
    "flavor": "It's like an ocean of liquid magma in your mouth!",
    "id": "EX1_241",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Lava Burst",
    "overload": 2,
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Deal $5 damage. <b>Overload:</b> (2)",
    "type": "SPELL"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 618,
    "flavor": "Westfall is full of dust devils. And buzzards. And crazed golems. And pirates. Why does anyone live here?",
    "health": 1,
    "id": "EX1_243",
    "mechanics": [
      "OVERLOAD",
      "WINDFURY"
    ],
    "name": "Dust Devil",
    "overload": 2,
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Windfury</b>. <b>Overload:</b> (2)",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 0,
    "dbfId": 830,
    "flavor": "Totem-stomping is no longer recommended.",
    "howToEarn": "Unlocked at Level 6.",
    "howToEarnGolden": "Unlocked at Level 28.",
    "id": "EX1_244",
    "name": "Totemic Might",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Give your Totems +2 Health.",
    "type": "SPELL"
  },
  {
    "artist": "Kevin Chin",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 767,
    "flavor": "Earth Shock? Shouldn't it be \"Azeroth Shock\"?",
    "id": "EX1_245",
    "mechanics": [
      "SILENCE"
    ],
    "name": "Earth Shock",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Silence</b> a minion, then deal $1 damage to it.",
    "type": "SPELL"
  },
  {
    "artist": "Steve Hui",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 766,
    "flavor": "If you Hex a Murloc... it really isn't much of a change, is it?",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 47.",
    "id": "EX1_246",
    "name": "Hex",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "CORE",
    "text": "Transform a minion into a 0/1 Frog with <b>Taunt</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Nate Bowden",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 960,
    "durability": 3,
    "flavor": "Yo, that's a nice axe.",
    "id": "EX1_247",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Stormforged Axe",
    "overload": 1,
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Overload:</b> (1)",
    "type": "WEAPON"
  },
  {
    "artist": "Clint Langley",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 238,
    "flavor": "Spirit wolves are like regular wolves with pom-poms.",
    "id": "EX1_248",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Feral Spirit",
    "overload": 2,
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "EXPERT1",
    "text": "Summon two 2/3 Spirit Wolves with <b>Taunt</b>. <b>Overload:</b> (2)",
    "type": "SPELL"
  },
  {
    "artist": "Ian Ameling",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 336,
    "elite": true,
    "flavor": "Baron Geddon was Ragnaros's foremost lieutenant, until he got FIRED.",
    "health": 5,
    "id": "EX1_249",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Baron Geddon",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "At the end of your turn, deal 2 damage to ALL other characters.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 7,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 5,
    "dbfId": 1141,
    "flavor": "Nothing beats rock.",
    "health": 8,
    "id": "EX1_250",
    "mechanics": [
      "OVERLOAD",
      "TAUNT"
    ],
    "name": "Earth Elemental",
    "overload": 3,
    "race": "ELEMENTAL",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "<b>Taunt</b>\n<b><b>Overload</b>:</b> (3)",
    "type": "MINION"
  },
  {
    "artist": "Ralph Horsley",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 299,
    "flavor": "If you combine it with Spooned Lightning and Knived Lightning, you have the full dining set.",
    "id": "EX1_251",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Forked Lightning",
    "overload": 2,
    "playRequirements": {
      "REQ_MINIMUM_ENEMY_MINIONS": 2
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Deal $2 damage to 2 random enemy minions. <b>Overload:</b> (2)",
    "type": "SPELL"
  },
  {
    "artist": "Matt Gaser",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 774,
    "flavor": "Unlike bound elementals, Unbound ones really enjoy a night on the town.",
    "health": 4,
    "id": "EX1_258",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Unbound Elemental",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "referencedTags": [
      "OVERLOAD"
    ],
    "set": "EXPERT1",
    "text": "Whenever you play a card with <b>Overload</b>, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Christopher Moeller",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 629,
    "flavor": "An umbrella won't be effective, I'm afraid.",
    "id": "EX1_259",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Lightning Storm",
    "overload": 2,
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Deal $2-$3 damage to all enemy minions. <b>Overload:</b> (2)",
    "type": "SPELL"
  },
  {
    "artist": "Michael Komarck",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 1737,
    "flavor": "The ethereals are wrapped in cloth to give form to their non-corporeal bodies. Also because it's nice and soft.",
    "health": 3,
    "id": "EX1_274",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Ethereal Arcanist",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET"
    ],
    "set": "EXPERT1",
    "text": "If you control a <b>Secret</b> at the end of your turn, gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Leo Che",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 430,
    "flavor": "Magi of the Kirin Tor were casting Cubes of Cold for many years before Cones came into fashion some 90 years ago.",
    "id": "EX1_275",
    "mechanics": [
      "FREEZE"
    ],
    "name": "Cone of Cold",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Freeze</b> a minion and the minions next to it, and deal $1 damage to them.",
    "type": "SPELL"
  },
  {
    "artist": "Warren Mahy",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 1,
    "dbfId": 564,
    "flavor": "You'd think you'd be able to control your missiles a little better since you're a powerful mage and all.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 32.",
    "id": "EX1_277",
    "mechanics": [
      "ImmuneToSpellpower"
    ],
    "name": "Arcane Missiles",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $3 damage randomly split among all enemies.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Garner",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 573,
    "flavor": "Rogues are experts at SHIV-al-ry.",
    "howToEarn": "Unlocked at Level 6.",
    "howToEarnGolden": "Unlocked at Level 45.",
    "id": "EX1_278",
    "name": "Shiv",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $1 damage.\nDraw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Luca Zontini",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 10,
    "dbfId": 1087,
    "flavor": "Take the time for an evil laugh after you draw this card.",
    "id": "EX1_279",
    "name": "Pyroblast",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Deal $10 damage.",
    "type": "SPELL"
  },
  {
    "artist": "Dan Scott",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 512,
    "flavor": "When a Water elemental and an Ice elemental love each other VERY much...",
    "health": 5,
    "id": "EX1_283",
    "mechanics": [
      "BATTLECRY",
      "FREEZE"
    ],
    "name": "Frost Elemental",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "targetingArrowText": "Freeze a character.",
    "text": "<b>Battlecry:</b> <b>Freeze</b> a character.",
    "type": "MINION"
  },
  {
    "artist": "Benjamin Zhang",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 825,
    "flavor": "They initially planned to be the Beryl or Cerulean drakes, but those felt a tad too pretentious.",
    "health": 4,
    "id": "EX1_284",
    "mechanics": [
      "BATTLECRY",
      "SPELLPOWER"
    ],
    "name": "Azure Drake",
    "race": "DRAGON",
    "rarity": "RARE",
    "set": "HOF",
    "spellDamage": 1,
    "text": "<b>Spell Damage +1</b>\n<b>Battlecry:</b> Draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Jason Chan",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 113,
    "flavor": "What's the difference between a mage playing with Counterspell and a mage who isn't?  The mage who isn't is getting Pyroblasted in the face.",
    "id": "EX1_287",
    "mechanics": [
      "SECRET"
    ],
    "name": "Counterspell",
    "rarity": "RARE",
    "referencedTags": [
      "COUNTER"
    ],
    "set": "EXPERT1",
    "text": "<b>Secret:</b> When your opponent casts a spell, <b>Counter</b> it.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Garner",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 621,
    "flavor": "This is Rank 1.  Rank 2 is Chocolate Milk Barrier.",
    "id": "EX1_289",
    "mechanics": [
      "SECRET"
    ],
    "name": "Ice Barrier",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> When your\nhero is attacked,\ngain 8 Armor.",
    "type": "SPELL"
  },
  {
    "artist": "Raven Mimura",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 195,
    "flavor": "\"You go first.\" - Krush'gor the Behemoth, to his pet boar.",
    "id": "EX1_294",
    "mechanics": [
      "SECRET"
    ],
    "name": "Mirror Entity",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> After your opponent plays a minion, summon a copy of it.",
    "type": "SPELL"
  },
  {
    "artist": "Carl Frank",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 192,
    "flavor": "Ice is nice, and will suffice!",
    "id": "EX1_295",
    "mechanics": [
      "SECRET"
    ],
    "name": "Ice Block",
    "rarity": "EPIC",
    "referencedTags": [
      "IMMUNE"
    ],
    "set": "HOF",
    "text": "<b>Secret:</b> When your hero takes fatal damage, prevent it and become <b>Immune</b> this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Greg Staples",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 374,
    "elite": true,
    "flavor": "Ragnaros was summoned by the Dark Iron dwarves, who were eventually enslaved by the Firelord.  Summoning Ragnaros often doesn’t work out the way you want it to.",
    "health": 8,
    "id": "EX1_298",
    "mechanics": [
      "CANT_ATTACK",
      "TRIGGER_VISUAL"
    ],
    "name": "Ragnaros the Firelord",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "HOF",
    "text": "Can't attack. At the end of your turn, deal 8 damage to a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "John Polidora",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 517,
    "flavor": "Yes, he'll fight for you.  BUT HE'S NOT GOING TO LIKE IT.",
    "health": 5,
    "id": "EX1_301",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Felguard",
    "race": "DEMON",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Destroy one of your Mana Crystals.",
    "type": "MINION"
  },
  {
    "artist": "Matt Gaser",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 1092,
    "flavor": "If your spells look like horrifying skulls, let's be honest, you should get to draw some cards.",
    "howToEarn": "Unlocked at Level 4.",
    "howToEarnGolden": "Unlocked at Level 43.",
    "id": "EX1_302",
    "name": "Mortal Coil",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $1 damage to a minion. If that kills it, draw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Dave Kendall",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 147,
    "flavor": "Start with a powerful minion and stir in Shadowflame and you have a good time!",
    "id": "EX1_303",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Shadowflame",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Destroy a friendly minion and deal its Attack damage to all enemy minions.",
    "type": "SPELL"
  },
  {
    "artist": "Alexander Alexandrov",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 1221,
    "flavor": "If you put this into your deck, you WILL lose the trust of your other minions.",
    "health": 3,
    "id": "EX1_304",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Void Terror",
    "race": "DEMON",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "[x]<b>Battlecry:</b> Destroy both\nadjacent minions and gain\n their Attack and Health.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 4,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 592,
    "flavor": "Warlocks have it pretty good.",
    "health": 3,
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 40.",
    "id": "EX1_306",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Succubus",
    "race": "DEMON",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry:</b> Discard a random card.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 974,
    "flavor": "Are you lighting a soul on fire? Or burning someone with your OWN soul? This seems like an important distinction.",
    "howToEarn": "Unlocked at Level 6.",
    "howToEarnGolden": "Unlocked at Level 28.",
    "id": "EX1_308",
    "name": "Soulfire",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "[x]Deal $4 damage.\nDiscard a random card.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler Walpole",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 1100,
    "flavor": "You probably should avoid siphoning your own soul.  You might create some kind of weird infinite loop.",
    "id": "EX1_309",
    "name": "Siphon Soul",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Destroy a minion. Restore #3 Health to your hero.",
    "type": "SPELL"
  },
  {
    "artist": "Lucas Graciano",
    "attack": 5,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 631,
    "flavor": "Summoning a doomguard is risky. <i>Someone</i> is going to die.",
    "health": 7,
    "id": "EX1_310",
    "mechanics": [
      "BATTLECRY",
      "CHARGE"
    ],
    "name": "Doomguard",
    "race": "DEMON",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Charge</b>. <b>Battlecry:</b> Discard two random cards.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 8,
    "dbfId": 859,
    "flavor": "The Twisting Nether is a formless place of magic and illusion and destroyed minions.",
    "id": "EX1_312",
    "name": "Twisting Nether",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Destroy all minions.",
    "type": "SPELL"
  },
  {
    "artist": "Glenn Rane",
    "attack": 5,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 783,
    "flavor": "Mannoroth, Magtheridon, and Brutallus may be dead, but it turns out there are a LOT of pit lords.",
    "health": 6,
    "id": "EX1_313",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Pit Lord",
    "race": "DEMON",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Deal 5 damage to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Tyler Walpole",
    "attack": 0,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 969,
    "flavor": "NOT LESS THAN 1!  Don't get any ideas!",
    "health": 4,
    "id": "EX1_315",
    "mechanics": [
      "AURA"
    ],
    "name": "Summoning Portal",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Your minions cost (2) less, but not less than (1).",
    "type": "MINION"
  },
  {
    "artist": "Tom Baxa",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 846,
    "flavor": "We cannot even describe how horrible the death is.  It's CRAZY bad!  Maybe worse than that.  Just don't do it.",
    "id": "EX1_316",
    "name": "Power Overwhelming",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "HOF",
    "text": "Give a friendly minion +4/+4 until end of turn. Then, it dies. Horribly.",
    "type": "SPELL"
  },
  {
    "artist": "Raven Mimura",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 860,
    "flavor": "Generally demons are pretty obvious and you don’t need a spell to sense them.",
    "id": "EX1_317",
    "name": "Sense Demons",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Draw 2 Demons\nfrom your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 1090,
    "flavor": "Imps like being on fire.  They just do.",
    "health": 2,
    "id": "EX1_319",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Flame Imp",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Deal 3 damage to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 23,
    "flavor": "My advice to you is to avoid Doom, if possible.",
    "id": "EX1_320",
    "name": "Bane of Doom",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Deal $2 damage to a character. If that kills it, summon a random Demon.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 9,
    "dbfId": 777,
    "elite": true,
    "flavor": "\"TRIFLING GNOME! YOUR ARROGANCE WILL BE YOUR UNDOING!!!!\"",
    "health": 15,
    "id": "EX1_323",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Lord Jaraxxus",
    "race": "DEMON",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Destroy your hero and replace it with Lord Jaraxxus.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan & Gabor",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 0,
    "dbfId": 1189,
    "flavor": "Reserved for enemy spellcasters, evil liches from beyond the grave, and karaoke nights at the Grim Guzzler.",
    "id": "EX1_332",
    "mechanics": [
      "SILENCE"
    ],
    "name": "Silence",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Silence</b> a minion.",
    "type": "SPELL"
  },
  {
    "artist": "Mark Gibbons",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 220,
    "flavor": "You can rationalize it all you want, it's still a mean thing to do.",
    "id": "EX1_334",
    "name": "Shadow Madness",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_NUM_MINION_SLOTS": 1,
      "REQ_TARGET_MAX_ATTACK": 3,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Gain control of an enemy minion with 3 or less Attack until end of turn.",
    "type": "SPELL"
  },
  {
    "artist": "Daarken",
    "attack": 0,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 886,
    "flavor": "Spawn of the Light? Or Pawn of the Lights?",
    "health": 5,
    "id": "EX1_335",
    "name": "Lightspawn",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "This minion's Attack is always equal to its Health.",
    "type": "MINION"
  },
  {
    "artist": "Alex Garner",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 30,
    "flavor": "\"What do you get when you cast Thoughtsteal on an Orc?  Nothing!\" - Tauren joke",
    "id": "EX1_339",
    "name": "Thoughtsteal",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Copy 2 cards in your opponent's deck and add them to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Blizzard Entertainment",
    "attack": 0,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 797,
    "flavor": "It isn't clear if people ignore the Lightwell, or if it is just invisible.",
    "health": 5,
    "id": "EX1_341",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Lightwell",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "At the start of your turn, restore #3 Health to a damaged friendly character.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan & Gabor",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 145,
    "flavor": "Sometimes it feels like this is all a game.",
    "id": "EX1_345",
    "name": "Mindgames",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Put a copy of\na random minion from\nyour opponent's deck into the battlefield.",
    "type": "SPELL"
  },
  {
    "artist": "Lucas Graciano",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 679,
    "flavor": "This is not just a favor, but a divine one, like helping someone move a couch with a fold out bed!",
    "id": "EX1_349",
    "name": "Divine Favor",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Draw cards until you have as many in hand as your opponent.",
    "type": "SPELL"
  },
  {
    "artist": "Wei Wang",
    "attack": 7,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 7,
    "dbfId": 9,
    "elite": true,
    "flavor": "He's been exiled from his home, and all his brothers turned evil, but otherwise he doesn't have a lot to complain about.",
    "health": 7,
    "id": "EX1_350",
    "name": "Prophet Velen",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "Double the damage and healing of your spells and Hero Power.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 8,
    "dbfId": 594,
    "flavor": "A grammatically awkward life saver.",
    "id": "EX1_354",
    "name": "Lay on Hands",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Restore #8 Health. Draw 3 cards.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler Walpole",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 1522,
    "flavor": "This card causes double the trouble AND double the fun.",
    "id": "EX1_355",
    "name": "Blessed Champion",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Double a minion's Attack.",
    "type": "SPELL"
  },
  {
    "artist": "Daren Bader",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 854,
    "flavor": "This card makes something really damp.  Oh wait.  That's \"Humidity.\"",
    "howToEarn": "Unlocked at Level 6.",
    "howToEarnGolden": "Unlocked at Level 28.",
    "id": "EX1_360",
    "name": "Humility",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Change a minion's Attack to 1.",
    "type": "SPELL"
  },
  {
    "artist": "Doug Alexander",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 1022,
    "flavor": "\"I'm not saying you can dodge fireballs.  I'm saying with this shield, you won't have to.\"",
    "health": 2,
    "id": "EX1_362",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Argent Protector",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "EXPERT1",
    "targetingArrowText": "Give <b>Divine Shield</b>.",
    "text": "<b>Battlecry:</b> Give a friendly minion <b>Divine Shield</b>.",
    "type": "MINION"
  },
  {
    "artist": "Chippy",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 1373,
    "flavor": "Apparently with wisdom comes the knowledge that you should probably be attacking every turn.",
    "id": "EX1_363",
    "name": "Blessing of Wisdom",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Choose a minion. Whenever it attacks, draw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Justin Sweet",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 435,
    "flavor": "C'mon Molten Giant!!",
    "id": "EX1_365",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Holy Wrath",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Draw a card and deal damage equal to its Cost.",
    "type": "SPELL"
  },
  {
    "artist": "Efrem Palacios",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 643,
    "durability": 5,
    "flavor": "I dub you Sir Loin of Beef!",
    "id": "EX1_366",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Sword of Justice",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "After you summon a minion, give it +1/+1 and this loses 1 Durability.",
    "type": "WEAPON"
  },
  {
    "artist": "Clint Langley",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 727,
    "flavor": "This spell has been renamed so many times, even paladins don’t know what it should be called anymore.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 23.",
    "id": "EX1_371",
    "name": "Hand of Protection",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "CORE",
    "text": "Give a minion <b>Divine Shield</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Gonzalo Ordonez",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 232,
    "flavor": "Repentance often comes in the moment before obliteration. Curious.",
    "id": "EX1_379",
    "mechanics": [
      "SECRET"
    ],
    "name": "Repentance",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> After your opponent plays a minion, reduce its Health to 1.",
    "type": "SPELL"
  },
  {
    "artist": "Dany Orizio",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 1167,
    "flavor": "The Aldor hate two things: the Scryers and smooth jazz.",
    "health": 3,
    "id": "EX1_382",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Aldor Peacekeeper",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "targetingArrowText": "Change Attack to 1.",
    "text": "<b>Battlecry:</b> Change an enemy minion's Attack to 1.",
    "type": "MINION"
  },
  {
    "artist": "Brom",
    "attack": 6,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 8,
    "dbfId": 890,
    "elite": true,
    "flavor": "If you haven't heard the Tirion Fordring theme song, it's because it doesn't exist.",
    "health": 6,
    "id": "EX1_383",
    "mechanics": [
      "DEATHRATTLE",
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "name": "Tirion Fordring",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b><b>Divine Shield</b>,</b> <b>Taunt</b> <b>Deathrattle:</b> Equip a 5/3 Ashbringer.",
    "type": "MINION"
  },
  {
    "artist": "Alex Garner",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 6,
    "dbfId": 1174,
    "flavor": "Wham! Wham! Wham! Wham! Wham! Wham! Wham! Wham!",
    "id": "EX1_384",
    "mechanics": [
      "ImmuneToSpellpower"
    ],
    "name": "Avenging Wrath",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Deal $8 damage randomly split among all enemies.",
    "type": "SPELL"
  },
  {
    "artist": "Paul Warzecha",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 45,
    "flavor": "Tauren Warrior: Champion of Mulgore, Slayer of Quilboar, Rider of Thunderbluff Elevators.",
    "health": 3,
    "id": "EX1_390",
    "mechanics": [
      "ENRAGED",
      "TAUNT"
    ],
    "name": "Tauren Warrior",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Taunt</b>\nHas +3 Attack while damaged.",
    "type": "MINION"
  },
  {
    "artist": "E.M. Gist",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 1074,
    "flavor": "\"Dun da dun, dun da dun\": if you've heard an ogre sing this, it's too late.",
    "id": "EX1_391",
    "name": "Slam",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Deal $2 damage to a minion. If it survives, draw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 400,
    "flavor": "\"You won't like me when I'm angry.\"",
    "id": "EX1_392",
    "name": "Battle Rage",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Draw a card for each damaged friendly character.",
    "type": "SPELL"
  },
  {
    "artist": "Chippy",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 790,
    "flavor": "If an Amani berserker asks \"Joo lookin' at me?!\", the correct response is \"Nah, mon\".",
    "health": 3,
    "id": "EX1_393",
    "mechanics": [
      "ENRAGED"
    ],
    "name": "Amani Berserker",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Has +3 Attack while damaged.",
    "type": "MINION"
  },
  {
    "artist": "Cole Eastburn",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 700,
    "flavor": "All these guys ever do is talk about the Thunder King.   BOOOORRRINNG!",
    "health": 7,
    "id": "EX1_396",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Mogu'shan Warden",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Samwise",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 538,
    "flavor": "50% off fist weapons, limited time only!",
    "health": 3,
    "id": "EX1_398",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Arathi Weaponsmith",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Equip a 2/2 weapon.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 768,
    "flavor": "No Pain, No Gain.",
    "health": 7,
    "howToEarnGolden": "Unlocked at Warlock Level 57.",
    "id": "EX1_399",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Gurubashi Berserker",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Whenever this minion takes damage, gain +3 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Jonboy Meyers",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 636,
    "flavor": "The way to tell seasoned warriors from novice ones: the novices yell \"wheeeee\" while whirlwinding.",
    "howToEarn": "Unlocked at Level 6.",
    "howToEarnGolden": "Unlocked at Level 32.",
    "id": "EX1_400",
    "name": "Whirlwind",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $1 damage to ALL minions.",
    "type": "SPELL"
  },
  {
    "artist": "Greg Hildebrandt",
    "attack": 1,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 596,
    "flavor": "She accepts guild funds for repairs!",
    "health": 4,
    "id": "EX1_402",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Armorsmith",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Whenever a friendly minion takes damage, gain 1 Armor.",
    "type": "MINION"
  },
  {
    "artist": "Carl Critchlow",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 866,
    "flavor": "Have you seen the size of the shields in this game??  This is no easy job.",
    "health": 4,
    "id": "EX1_405",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Shieldbearer",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Wayne Reynolds",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 75,
    "flavor": "Do you know the first rule of Brawl Club?",
    "id": "EX1_407",
    "name": "Brawl",
    "playRequirements": {
      "REQ_MINIMUM_TOTAL_MINIONS": 2
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Destroy all minions except one. <i>(chosen randomly)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan & Gabor",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 804,
    "flavor": "\"If you only use one ability, use Mortal Strike.\" - The Warrior Code, Line 6",
    "id": "EX1_408",
    "name": "Mortal Strike",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Deal $4 damage. If you have 12 or less Health, deal $6 instead.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Cavotta",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 511,
    "flavor": "Easily worth 50 DKP.",
    "id": "EX1_409",
    "name": "Upgrade!",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "If you have a weapon, give it +1/+1. Otherwise equip a 1/3 weapon.",
    "type": "SPELL"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 546,
    "flavor": "\"What is a better weapon? The sharp one your enemies expect, or the blunt one they ignore?\" - The Art of Warrior, Chapter 9",
    "id": "EX1_410",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Shield Slam",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Deal 1 damage to a minion for each Armor you have.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan & Gabor",
    "attack": 7,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 7,
    "dbfId": 810,
    "durability": 1,
    "flavor": "Grommash Hellscream's famous axe.  Somehow this ended up in Prince Malchezaar's possession.  Quite the mystery!",
    "id": "EX1_411",
    "name": "Gorehowl",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Attacking a minion costs 1 Attack instead of 1 Durability.",
    "type": "WEAPON"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1155,
    "flavor": "If he's raging now, just wait until he gets nerfed.",
    "health": 3,
    "id": "EX1_412",
    "mechanics": [
      "ENRAGED"
    ],
    "name": "Raging Worgen",
    "rarity": "COMMON",
    "referencedTags": [
      "WINDFURY"
    ],
    "set": "EXPERT1",
    "text": "Has +1 Attack and <b>Windfury</b> while damaged.",
    "type": "MINION"
  },
  {
    "artist": "Glenn Rane",
    "attack": 4,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 8,
    "dbfId": 338,
    "elite": true,
    "flavor": "Grommash drank the tainted blood of Mannoroth, dooming the orcs to green skin and red eyes!  Maybe not his best decision.",
    "health": 9,
    "id": "EX1_414",
    "mechanics": [
      "CHARGE",
      "ENRAGED"
    ],
    "name": "Grommash Hellscream",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Charge</b>\nHas +6 Attack while damaged.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 976,
    "flavor": "\"Death will rise, from the tides!\"",
    "health": 1,
    "howToEarnGolden": "Unlocked at Rogue Level 53.",
    "id": "EX1_506",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Murloc Tidehunter",
    "race": "MURLOC",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry:</b> Summon a 1/1 Murloc Scout.",
    "type": "MINION"
  },
  {
    "artist": "Tim McBurnie",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1063,
    "flavor": "Do Murlocs ever get tired of making the same old sound?  Nope!  Mrglglrglglglglglglgl!",
    "health": 3,
    "id": "EX1_507",
    "mechanics": [
      "AURA"
    ],
    "name": "Murloc Warleader",
    "race": "MURLOC",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Your other Murlocs have +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Phil Saunders",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 510,
    "flavor": "These are the brainy murlocs.  It turns out that doesn’t mean much.",
    "health": 1,
    "howToEarnGolden": "Unlocked at Warlock Level 53.",
    "id": "EX1_508",
    "name": "Grimscale Oracle",
    "race": "MURLOC",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Your other Murlocs have +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 475,
    "flavor": "This guy gets crazy strong at family reunions.",
    "health": 2,
    "id": "EX1_509",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Murloc Tidecaller",
    "race": "MURLOC",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Whenever you summon a Murloc, gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Ben Olson",
    "attack": 1,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 1133,
    "flavor": "He’s not really that patient. It just takes a while for someone to walk by that he can actually reach.",
    "health": 1,
    "id": "EX1_522",
    "mechanics": [
      "POISONOUS",
      "STEALTH"
    ],
    "name": "Patient Assassin",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "<b>Stealth</b>\n <b>Poisonous</b>",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 1281,
    "flavor": "Hyenas prefer the bones of kodos or windserpents, but they'll eat pretty much anything.  Even Brussels sprouts.",
    "health": 2,
    "id": "EX1_531",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Scavenging Hyena",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Whenever a friendly Beast dies, gain +2/+1.",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 1091,
    "flavor": "Sometimes it's as simple as putting on a fake mustache and pointing at someone else.",
    "id": "EX1_533",
    "mechanics": [
      "SECRET"
    ],
    "name": "Misdirection",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> When an enemy attacks your hero, instead it attacks another random character.",
    "type": "SPELL"
  },
  {
    "artist": "Milivoj Ceran",
    "attack": 6,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 6,
    "dbfId": 1261,
    "flavor": "In the jungle, the mighty jungle, the lion gets slowly consumed by hyenas.",
    "health": 5,
    "id": "EX1_534",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Savannah Highmane",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Deathrattle:</b> Summon two 2/2 Hyenas.",
    "type": "MINION"
  },
  {
    "artist": "Cyril Van Der Haegen",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 1662,
    "durability": 2,
    "flavor": "First Lesson: Put the pointy end in the other guy.",
    "id": "EX1_536",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Eaglehorn Bow",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET"
    ],
    "set": "EXPERT1",
    "text": "[x]Whenever a friendly\n<b>Secret</b> is revealed,\ngain +1 Durability.",
    "type": "WEAPON"
  },
  {
    "artist": "Tom Baxa",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 394,
    "flavor": "Pull the pin, count to 5, then shoot.  Then duck.",
    "id": "EX1_537",
    "name": "Explosive Shot",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Deal $5 damage to a minion and $2 damage to adjacent ones.",
    "type": "SPELL"
  },
  {
    "artist": "Linggar Bramanty",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 1243,
    "flavor": "You must read the name of this card out loud each time you play it.",
    "id": "EX1_538",
    "name": "Unleash the Hounds",
    "playRequirements": {
      "REQ_MINIMUM_ENEMY_MINIONS": 1,
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "COMMON",
    "referencedTags": [
      "CHARGE"
    ],
    "set": "EXPERT1",
    "text": "For each enemy minion, summon a 1/1 Hound with <b>Charge</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Gabe from Penny Arcade",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 296,
    "flavor": "\"Kill!\", he commanded.",
    "howToEarn": "Unlocked at Level 10.",
    "howToEarnGolden": "Unlocked at Level 49.",
    "id": "EX1_539",
    "name": "Kill Command",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Deal $3 damage. If you control a Beast, deal\n$5 damage instead.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 8,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 9,
    "dbfId": 1144,
    "elite": true,
    "flavor": "The best defense against King Krush is to have someone you don’t like standing in front of you.",
    "health": 8,
    "id": "EX1_543",
    "mechanics": [
      "CHARGE"
    ],
    "name": "King Krush",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Charge</b>",
    "type": "MINION"
  },
  {
    "artist": "Tyler Walpole",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 896,
    "flavor": "Not only does it reveal your enemies, but it's also great for parties!",
    "id": "EX1_544",
    "name": "Flare",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET",
      "STEALTH"
    ],
    "set": "EXPERT1",
    "text": "All minions lose <b>Stealth</b>. Destroy all enemy <b>Secrets</b>. Draw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 903,
    "flavor": "The seething wrath is just beneath the surface.  Beneath that is wild abandon, followed by slight annoyance.",
    "id": "EX1_549",
    "name": "Bestial Wrath",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0,
      "REQ_TARGET_WITH_RACE": 20
    },
    "rarity": "EPIC",
    "referencedTags": [
      "IMMUNE"
    ],
    "set": "EXPERT1",
    "text": "Give a friendly Beast +2 Attack and <b>Immune</b> this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Bernie Kang",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 455,
    "flavor": "Why did it have to be snakes?",
    "id": "EX1_554",
    "mechanics": [
      "SECRET"
    ],
    "name": "Snake Trap",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> When one of your minions is attacked, summon three 1/1 Snakes.",
    "type": "SPELL"
  },
  {
    "artist": "Brian Despain",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 778,
    "flavor": "\"Overheat threshold exceeded. System failure. Wheat clog in port two. Shutting down.\"",
    "health": 3,
    "id": "EX1_556",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Harvest Golem",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Deathrattle:</b> Summon a 2/1 Damaged Golem.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1147,
    "elite": true,
    "flavor": "Nat Pagle, Azeroth's premier fisherman!  He invented the Auto-Angler 3000, the Extendo-Pole 3000, and the Lure-o-matic 2099 (still in testing).",
    "health": 4,
    "id": "EX1_557",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Nat Pagle",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "At the start of your turn, you have a 50% chance to draw an extra card.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 912,
    "elite": true,
    "flavor": "“That belongs in the Hall of Explorers!”",
    "health": 4,
    "id": "EX1_558",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Harrison Jones",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Destroy your opponent's weapon and draw cards equal to its Durability.",
    "type": "MINION"
  },
  {
    "artist": "Wayne Reynolds",
    "attack": 5,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 7,
    "dbfId": 1080,
    "elite": true,
    "flavor": "Antonidas was the Grand Magus of the Kirin Tor, and Jaina's mentor.  This was a big step up from being Grand Magus of Jelly Donuts.",
    "health": 7,
    "id": "EX1_559",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Archmage Antonidas",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "Whenever you cast a spell, add a 'Fireball' spell to your hand.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 411,
    "elite": true,
    "flavor": "Time to write some flavor text.",
    "health": 8,
    "id": "EX1_560",
    "name": "Nozdormu",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "Players only have 15 seconds to take their turns.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 581,
    "elite": true,
    "flavor": "Alexstrasza the Life-Binder brings life and hope to everyone.  Except Deathwing.  And Malygos.  And Nekros.",
    "health": 8,
    "id": "EX1_561",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Alexstrasza",
    "playRequirements": {
      "REQ_HERO_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "targetingArrowText": "Set Health to 15.",
    "text": "<b>Battlecry:</b> Set a hero's remaining Health to 15.",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 363,
    "elite": true,
    "flavor": "Onyxia long manipulated the Stormwind Court by disguising herself as Lady Katrana Prestor.   You would have thought that the giant wings and scales would have been a giveaway.",
    "health": 8,
    "id": "EX1_562",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Onyxia",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Summon 1/1 Whelps until your side of the battlefield is full.",
    "type": "MINION"
  },
  {
    "artist": "Michael Komarck",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 436,
    "elite": true,
    "flavor": "Malygos hates it when mortals use magic.  He gets so mad!",
    "health": 12,
    "id": "EX1_563",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Malygos",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "spellDamage": 5,
    "text": "<b>Spell Damage +5</b>",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 531,
    "flavor": "The Faceless Ones are servants of Yogg-Saron, and they feed on fear. Right now they are feeding on your fear of accidentally disenchanting all your good cards.",
    "health": 3,
    "id": "EX1_564",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Faceless Manipulator",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "targetingArrowText": "Become a copy of a minion.",
    "text": "<b>Battlecry:</b> Choose a minion and become a copy of it.",
    "type": "MINION"
  },
  {
    "artist": "Jonathan Ryder",
    "attack": 0,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 1008,
    "flavor": "Totemsmiths like to use the rarest woods for their totems.  There are even rumors of totems made of Ironbark Protectors.",
    "health": 3,
    "howToEarn": "Unlocked at Level 4.",
    "howToEarnGolden": "Unlocked at Level 43.",
    "id": "EX1_565",
    "mechanics": [
      "ADJACENT_BUFF",
      "AURA"
    ],
    "name": "Flametongue Totem",
    "race": "TOTEM",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Adjacent minions have +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "John Polidora",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 5,
    "dbfId": 352,
    "durability": 8,
    "flavor": "Orgrim Doomhammer gave this legendary weapon to Thrall.  His name is a total coincidence.",
    "id": "EX1_567",
    "mechanics": [
      "OVERLOAD",
      "WINDFURY"
    ],
    "name": "Doomhammer",
    "overload": 2,
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "<b>Windfury, Overload:</b> (2)",
    "type": "WEAPON"
  },
  {
    "artist": "Tom Baxa",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 577,
    "flavor": "Chew your food!",
    "id": "EX1_570",
    "name": "Bite",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Give your hero +4 Attack this turn. Gain 4 Armor.",
    "type": "SPELL"
  },
  {
    "artist": "Trevor Jacobs",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 493,
    "flavor": "\"I think I'll just nap under these trees. Wait... AAAAAHHH!\" - Blinkfizz, the Unfortunate Gnome",
    "id": "EX1_571",
    "name": "Force of Nature",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Summon three 2/2 Treants.",
    "type": "SPELL"
  },
  {
    "artist": "Gabor Szikszai",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 1186,
    "elite": true,
    "entourage": [
      "DREAM_01",
      "DREAM_02",
      "DREAM_03",
      "DREAM_04",
      "DREAM_05"
    ],
    "flavor": "Ysera rules the Emerald Dream.  Which is some kind of green-mirror-version of the real world, or something?",
    "health": 12,
    "id": "EX1_572",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Ysera",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "At the end of your turn, add a Dream Card to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 5,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 9,
    "dbfId": 36,
    "elite": true,
    "flavor": "Yes, he's a demigod. No, he doesn't need to wear a shirt.",
    "health": 8,
    "id": "EX1_573",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Cenarius",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "EXPERT1",
    "text": "<b>Choose One -</b> Give your other minions +2/+2; or Summon two 2/2 Treants with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Scott Altmann",
    "attack": 0,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 513,
    "flavor": "It is said that some shaman can say \"Floatin' totem\" 10 times, fast.",
    "health": 3,
    "id": "EX1_575",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Mana Tide Totem",
    "race": "TOTEM",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "At the end of your turn, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Glenn Rane",
    "attack": 9,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 962,
    "elite": true,
    "flavor": "He lives in Blackrock Mountain.  He eats Gnomes.  That's pretty much it.",
    "health": 7,
    "id": "EX1_577",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "The Beast",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Deathrattle:</b> Summon a 3/3 Finkle Einhorn for your opponent.",
    "type": "MINION"
  },
  {
    "artist": "Dave Rapoza",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 481,
    "flavor": "It is true that some druids are savage, but others still enjoy a quiet moment and a spot of tea.",
    "id": "EX1_578",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Savagery",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Deal damage equal to your hero's Attack to a minion.",
    "type": "SPELL"
  },
  {
    "artist": "Scott Altmann",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 461,
    "flavor": "Rogues love sappy movies.",
    "howToEarn": "Unlocked at Level 1.",
    "howToEarnGolden": "Unlocked at Level 40.",
    "id": "EX1_581",
    "name": "Sap",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Return an enemy minion to your opponent's hand.",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 175,
    "flavor": "You don't see a lot of Dalaran warriors.",
    "health": 4,
    "howToEarnGolden": "Unlocked at Mage Level 59.",
    "id": "EX1_582",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Dalaran Mage",
    "rarity": "FREE",
    "set": "CORE",
    "spellDamage": 1,
    "text": "<b>Spell Damage +1</b>",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 424,
    "flavor": "If she threatens to \"moon\" you, it's not what you think.",
    "health": 4,
    "id": "EX1_583",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Priestess of Elune",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Restore #4 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Howard Lyon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 915,
    "flavor": "Sometimes he forgets and just wanders into someone else's game.",
    "health": 5,
    "id": "EX1_584",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ancient Mage",
    "rarity": "RARE",
    "referencedTags": [
      "SPELLPOWER"
    ],
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Give adjacent minions <b>Spell Damage +1</b>.",
    "type": "MINION"
  },
  {
    "artist": "Svetlin Velinov",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 10,
    "dbfId": 211,
    "flavor": "See?  Giant.",
    "health": 8,
    "id": "EX1_586",
    "name": "Sea Giant",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Costs (1) less for each other minion on the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Vance Kovacs",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 178,
    "flavor": "Is there anything worse than a Windspeaker with halitosis?",
    "health": 3,
    "howToEarn": "Unlocked at Level 8.",
    "howToEarnGolden": "Unlocked at Level 45.",
    "id": "EX1_587",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Windspeaker",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "FREE",
    "referencedTags": [
      "WINDFURY"
    ],
    "set": "CORE",
    "targetingArrowText": "Give <b>Windfury</b>.",
    "text": "<b>Battlecry:</b> Give a friendly minion <b>Windfury</b>.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 755,
    "flavor": "The Blood Knights get their holy powers from the Sunwell, which you should NOT bathe in.",
    "health": 3,
    "id": "EX1_590",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Blood Knight",
    "rarity": "EPIC",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> All minions lose <b>Divine Shield</b>. Gain +3/+3 for each Shield lost.",
    "type": "MINION"
  },
  {
    "artist": "Doug Alexander",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 237,
    "flavor": "The Auchenai know the end is coming, but they're not sure when.",
    "health": 5,
    "id": "EX1_591",
    "mechanics": [
      "AURA"
    ],
    "name": "Auchenai Soulpriest",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Your cards and powers that restore Health now deal damage instead.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 670,
    "flavor": "Your face is the place you'd probably least like a dagger, and where rogues are most likely to deliver them.",
    "health": 4,
    "howToEarnGolden": "Unlocked at Druid Level 53.",
    "id": "EX1_593",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Nightblade",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Battlecry: </b>Deal 3 damage to the enemy hero.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 286,
    "flavor": "Rumor has it that Deathwing brought about the Cataclysm after losing a game to this card.  We may never know the truth.",
    "id": "EX1_594",
    "mechanics": [
      "SECRET"
    ],
    "name": "Vaporize",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> When a minion attacks your hero, destroy it.",
    "type": "SPELL"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 811,
    "flavor": "She may be an evil cult master, but she still calls her parents once a week.",
    "health": 2,
    "id": "EX1_595",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Cult Master",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "After a friendly minion dies, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Ben Wootten",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 1142,
    "flavor": "Demonfire is like regular fire except for IT NEVER STOPS BURNING HELLLPPP",
    "id": "EX1_596",
    "name": "Demonfire",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Deal $2 damage to a minion. If it’s a friendly Demon, give it +2/+2 instead.",
    "type": "SPELL"
  },
  {
    "artist": "Mark Gibbons",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 926,
    "flavor": "She would enjoy the job a lot more if she just could get the imps to QUIT BITING HER.",
    "health": 5,
    "id": "EX1_597",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Imp Master",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "[x]At the end of your turn, deal\n1 damage to this minion\n and summon a 1/1 Imp.",
    "type": "MINION"
  },
  {
    "artist": "Phroilan Gardner",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 285,
    "flavor": "\"I'm going to need you to come in on Sunday.\" - Cruel Taskmaster",
    "health": 2,
    "id": "EX1_603",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Cruel Taskmaster",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "targetingArrowText": "Deal 1 damage and grant +2 Attack.",
    "text": "<b>Battlecry:</b> Deal 1 damage to a minion and give it +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Simon Bisley",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 654,
    "flavor": "He used to work as an accountant before he tried his hand at Berserkering.",
    "health": 4,
    "id": "EX1_604",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Frothing Berserker",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Whenever a minion takes damage, gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Michael Komarck",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 1023,
    "flavor": "Shields were invented because Face Block is USELESS.",
    "howToEarn": "Unlocked at Level 8.",
    "howToEarnGolden": "Unlocked at Level 28.",
    "id": "EX1_606",
    "name": "Shield Block",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Gain 5 Armor.\nDraw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Slawomir Maniak",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 0,
    "dbfId": 22,
    "flavor": "They're only smiling on the outside.",
    "id": "EX1_607",
    "name": "Inner Rage",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Deal $1 damage to a minion and give it +2 Attack.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 614,
    "flavor": "Apprentices are great for bossing around.  \"Conjure me some mana buns! And a coffee!  Make that a mana coffee!\"",
    "health": 2,
    "id": "EX1_608",
    "mechanics": [
      "AURA"
    ],
    "name": "Sorcerer's Apprentice",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Your spells cost (1) less.",
    "type": "MINION"
  },
  {
    "artist": "Lorenzo Minaca",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 814,
    "flavor": "A great sniper hits the spot.  Just like a delicious flank of boar. Mmmmm.",
    "id": "EX1_609",
    "mechanics": [
      "SECRET"
    ],
    "name": "Snipe",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> After your opponent plays a minion, deal $4 damage to it.",
    "type": "SPELL"
  },
  {
    "artist": "Brandon Kitkouski",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 585,
    "flavor": "It traps your food AND cooks it for you!",
    "id": "EX1_610",
    "mechanics": [
      "SECRET"
    ],
    "name": "Explosive Trap",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> When your hero is attacked, deal $2 damage to all enemies.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Gaser",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 519,
    "flavor": "\"Dang, that's cold.\" - appropriate response to Freezing Trap, or a mean joke.",
    "id": "EX1_611",
    "mechanics": [
      "SECRET"
    ],
    "name": "Freezing Trap",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> When an enemy minion attacks, return it to its owner's hand. It costs (2) more.",
    "type": "SPELL"
  },
  {
    "artist": "Popo Wei",
    "attack": 4,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 748,
    "flavor": "The Kirin Tor reside in the floating city of Dalaran.  How do you make a Dalaran float?  Two scoops of ice cream, one scoop of Dalaran.",
    "health": 3,
    "id": "EX1_612",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Kirin Tor Mage",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET"
    ],
    "set": "EXPERT1",
    "text": "[x]<b>Battlecry:</b> The next <b>Secret</b>\nyou play this turn costs (0).",
    "type": "MINION"
  },
  {
    "artist": "Efrem Palacios",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 306,
    "elite": true,
    "flavor": "He led the Stonemasons in the reconstruction of Stormwind, and when the nobles refused to pay, he founded the Defias Brotherhood to, well, <i>deconstruct</i> Stormwind.",
    "health": 2,
    "id": "EX1_613",
    "mechanics": [
      "COMBO"
    ],
    "name": "Edwin VanCleef",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Combo:</b> Gain +2/+2 for each other card you've played this turn.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 556,
    "elite": true,
    "flavor": "Illidan's brother, Malfurion, imprisoned him beneath Hyjal for 10,000 years.  Stormrages are not good at letting go of grudges.",
    "health": 5,
    "id": "EX1_614",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Illidan Stormrage",
    "race": "DEMON",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "Whenever you play a card, summon a 2/1 Flame of Azzinoth.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 715,
    "flavor": "They come out at night to eat leftover mana crystals. \"Mmmmmm,\" they say.",
    "health": 2,
    "id": "EX1_616",
    "mechanics": [
      "AURA"
    ],
    "name": "Mana Wraith",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "ALL minions cost (1) more.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 1093,
    "flavor": "Accuracy is not a highly valued trait among the mok'nathal.  Deadliness is near the top, though.",
    "id": "EX1_617",
    "name": "Deadly Shot",
    "playRequirements": {
      "REQ_MINIMUM_ENEMY_MINIONS": 1
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Destroy a random enemy minion.",
    "type": "SPELL"
  },
  {
    "artist": "Michal Ivan",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 756,
    "flavor": "We are all special unique snowflakes... with 1 Health.",
    "id": "EX1_619",
    "name": "Equality",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Change the Health of ALL minions to 1.",
    "type": "SPELL"
  },
  {
    "artist": "Glenn Rane",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 20,
    "dbfId": 1372,
    "flavor": "He gets terrible heartburn.  BECAUSE HE IS FULL OF LAVA.",
    "health": 8,
    "id": "EX1_620",
    "name": "Molten Giant",
    "race": "ELEMENTAL",
    "rarity": "EPIC",
    "set": "HOF",
    "text": "Costs (1) less for each damage your hero has taken.",
    "type": "MINION"
  },
  {
    "artist": "Daarken",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 0,
    "dbfId": 1362,
    "flavor": "It isn't really a circle.",
    "id": "EX1_621",
    "name": "Circle of Healing",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Restore #4 Health to ALL minions.",
    "type": "SPELL"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 1363,
    "flavor": "If you miss, it leaves a lightning-bolt-shaped scar on your target.",
    "howToEarn": "Unlocked at Level 8.",
    "howToEarnGolden": "Unlocked at Level 43.",
    "id": "EX1_622",
    "name": "Shadow Word: Death",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_MIN_ATTACK": 5,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Destroy a minion with 5 or more Attack.",
    "type": "SPELL"
  },
  {
    "artist": "Daren Bader",
    "attack": 6,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 1364,
    "flavor": "He also moonlights Thursday nights as a bouncer at the Pig and Whistle Tavern.",
    "health": 6,
    "id": "EX1_623",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Temple Enforcer",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "EXPERT1",
    "targetingArrowText": "Give +3 Health.",
    "text": "<b>Battlecry:</b> Give a friendly minion +3 Health.",
    "type": "MINION"
  },
  {
    "artist": "Miguel Coimbra",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 1365,
    "flavor": "Often followed by Holy Smokes!",
    "id": "EX1_624",
    "name": "Holy Fire",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Deal $5 damage. Restore #5 Health to your hero.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 1368,
    "flavor": "If a bright light shines on a priest in Shadowform… do they cast a shadow?",
    "id": "EX1_625",
    "name": "Shadowform",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Your Hero Power becomes 'Deal 2 damage'. If already in Shadowform: 3 damage.",
    "type": "SPELL"
  },
  {
    "artist": "Sean O'Daniels",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 1366,
    "flavor": "It dispels buffs, powers, hopes, and dreams.",
    "id": "EX1_626",
    "mechanics": [
      "SILENCE"
    ],
    "name": "Mass Dispel",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Silence</b> all enemy minions. Draw a card.",
    "type": "SPELL"
  },
  {
    "artist": "E. M. Gist",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 1753,
    "flavor": "Zombie.  It's what's for dinner.",
    "health": 3,
    "howToEarn": "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "id": "FP1_001",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Zombie Chow",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> Restore #5 Health to the enemy hero.",
    "type": "MINION"
  },
  {
    "artist": "Jeremy Cranford",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1781,
    "flavor": "Arachnofauxbia: Fear of fake spiders.",
    "health": 2,
    "howToEarn": "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "id": "FP1_002",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Haunted Creeper",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> Summon two 1/1 Spectral Spiders.",
    "type": "MINION"
  },
  {
    "artist": "Eric Browning",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1858,
    "flavor": "OOZE... Ooze... Ooze... (ooze...)",
    "health": 2,
    "howToEarn": "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    "id": "FP1_003",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Echoing Ooze",
    "rarity": "EPIC",
    "set": "NAXX",
    "text": "<b>Battlecry:</b> Summon an exact copy of this minion at the end of the turn.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1783,
    "flavor": "His mother wanted him to be a mage or a warlock, but noooooooo, he had to go and be a scientist like his father.",
    "health": 2,
    "howToEarn": "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "id": "FP1_004",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Mad Scientist",
    "rarity": "COMMON",
    "referencedTags": [
      "SECRET"
    ],
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> Put a <b>Secret</b> from your deck into the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Ittoku",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1784,
    "flavor": "The Shades of Naxxramas <i>hate</i> the living. They even have a slur they use to refer them: <i>Livers</i>.",
    "health": 2,
    "howToEarn": "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    "id": "FP1_005",
    "mechanics": [
      "STEALTH",
      "TRIGGER_VISUAL"
    ],
    "name": "Shade of Naxxramas",
    "rarity": "EPIC",
    "set": "NAXX",
    "text": "<b>Stealth.</b> At the start of your turn, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Justin Thavirat",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1786,
    "flavor": "Eggs are a good source of protein and Nerubians.",
    "health": 2,
    "howToEarn": "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "id": "FP1_007",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Nerubian Egg",
    "rarity": "RARE",
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> Summon a 4/4 Nerubian.",
    "type": "MINION"
  },
  {
    "artist": "Chris Rahn",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 1789,
    "flavor": "What do Faerie Dragons and Spectral Knights have in common?  They both love pasta!",
    "health": 6,
    "howToEarn": "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    "id": "FP1_008",
    "mechanics": [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS"
    ],
    "name": "Spectral Knight",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "Can't be targeted by spells or Hero Powers.",
    "type": "MINION"
  },
  {
    "artist": "Ben Olson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1790,
    "flavor": "\"Rise from your grave!\" - Kel'Thuzad",
    "health": 8,
    "howToEarn": "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    "id": "FP1_009",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Deathlord",
    "rarity": "RARE",
    "set": "NAXX",
    "text": "<b>Taunt. Deathrattle:</b> Your opponent puts a minion from their deck into the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Howard Lyon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 1791,
    "elite": true,
    "flavor": "Maexxna gets super mad when people introduce her as \"Maxina\" or \"Maxxy\".",
    "health": 8,
    "howToEarn": "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "id": "FP1_010",
    "mechanics": [
      "POISONOUS"
    ],
    "name": "Maexxna",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "NAXX",
    "text": "<b>Poisonous</b>",
    "type": "MINION"
  },
  {
    "artist": "Dan Brereton",
    "attack": 1,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 1860,
    "flavor": "Spider cocoons are like little piñatas!",
    "health": 1,
    "howToEarn": "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "id": "FP1_011",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Webspinner",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> Add a random Beast card to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Nate Bowden",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 1793,
    "flavor": "DO NOT GIVE HIM A ROOT BEER.",
    "health": 5,
    "howToEarn": "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "id": "FP1_012",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Sludge Belcher",
    "rarity": "RARE",
    "set": "NAXX",
    "text": "<b>Taunt\nDeathrattle:</b> Summon a 1/2 Slime with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Chris Robinson",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 1794,
    "elite": true,
    "flavor": "Kel'Thuzad could not resist the call of the Lich King. Even when it's just a robo-call extolling the Lich King's virtues.",
    "health": 8,
    "howToEarn": "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    "id": "FP1_013",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Kel'Thuzad",
    "rarity": "LEGENDARY",
    "set": "NAXX",
    "text": "At the end of each turn, summon all friendly minions that died this turn.",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 1796,
    "elite": true,
    "flavor": "Stalagg want to write own flavor text.  \"STALAGG AWESOME!\"",
    "health": 4,
    "howToEarn": "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "id": "FP1_014",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Stalagg",
    "rarity": "LEGENDARY",
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> If Feugen also died this game, summon Thaddius.",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 1797,
    "elite": true,
    "flavor": "Feugen is sad because everyone likes Stalagg better.",
    "health": 7,
    "howToEarn": "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "id": "FP1_015",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Feugen",
    "rarity": "LEGENDARY",
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> If Stalagg also died this game, summon Thaddius.",
    "type": "MINION"
  },
  {
    "artist": "Glenn Rane",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 1799,
    "flavor": "This soul just <i>wails</i> on you. Dang, soul, let up already.",
    "health": 5,
    "howToEarn": "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "id": "FP1_016",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Wailing Soul",
    "rarity": "RARE",
    "referencedTags": [
      "SILENCE"
    ],
    "set": "NAXX",
    "text": "<b>Battlecry: Silence</b> your other minions.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1800,
    "flavor": "Weblords spend all day making giant trampoline parks.",
    "health": 4,
    "howToEarn": "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "id": "FP1_017",
    "mechanics": [
      "AURA"
    ],
    "name": "Nerub'ar Weblord",
    "rarity": "COMMON",
    "referencedTags": [
      "BATTLECRY"
    ],
    "set": "NAXX",
    "text": "Minions with <b>Battlecry</b> cost (2) more.",
    "type": "MINION"
  },
  {
    "artist": "Alex Garner",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 1801,
    "flavor": "The one time when duping cards won't get your account banned!",
    "howToEarn": "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "id": "FP1_018",
    "mechanics": [
      "SECRET"
    ],
    "name": "Duplicate",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "<b>Secret:</b> When a friendly minion dies, put 2 copies of it into your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Brian Despain",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 1802,
    "flavor": "\"Poisonseed Bagel\" is the least popular bagel at McTiggin's Druidic Bagel Emporium.",
    "howToEarn": "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "id": "FP1_019",
    "name": "Poison Seeds",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "Destroy all minions and summon 2/2 Treants to replace them.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan & Gabor",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 1804,
    "flavor": "Several paladins have joined together to deliver justice under the name \"Justice Force\".  Their lawyer talked them out of calling themselves the Justice League.",
    "howToEarn": "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in Frostwyrm Lair, in the Naxxramas adventure.",
    "id": "FP1_020",
    "mechanics": [
      "SECRET"
    ],
    "name": "Avenge",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "<b>Secret:</b> When one of your minions dies, give a random friendly minion +3/+2.",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "attack": 4,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 1805,
    "durability": 2,
    "flavor": "\"Take a bite outta Death.\" - McScruff the Deathlord",
    "howToEarn": "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "id": "FP1_021",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Death's Bite",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> Deal 1 damage to all minions.",
    "type": "WEAPON"
  },
  {
    "artist": "Robb Shoberg",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 1806,
    "flavor": "\"Void!  Here, void!  Here, buddy!\"",
    "health": 4,
    "howToEarn": "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    "id": "FP1_022",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Voidcaller",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> Put a random Demon from your hand into the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Phroilan Gardner",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 1807,
    "flavor": "The Cult of the Damned has found it's best not to mention their name when recruiting new cultists.",
    "health": 4,
    "howToEarn": "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "id": "FP1_023",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Dark Cultist",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> Give a random friendly minion +3 Health.",
    "type": "MINION"
  },
  {
    "artist": "Mike Nicholson",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1808,
    "flavor": "Filling your Ghouls with Rocket Fuel is all the rage at Necromancer school.",
    "health": 3,
    "howToEarn": "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "id": "FP1_024",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Unstable Ghoul",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "<b>Taunt</b>. <b>Deathrattle:</b> Deal 1 damage to all minions.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 1809,
    "flavor": "It's like birth, except you're an adult and you were just dead a second ago.",
    "howToEarn": "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    "id": "FP1_025",
    "name": "Reincarnate",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "Destroy a minion, then return it to life with full Health.",
    "type": "SPELL"
  },
  {
    "artist": "Nate Bowden",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 1810,
    "flavor": "Originally he was called \"Anub'ar Guy who bounces a guy back to your hand\", but it lacked a certain zing.",
    "health": 5,
    "howToEarn": "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Arachnid Quarter, in the Naxxramas adventure.",
    "id": "FP1_026",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Anub'ar Ambusher",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> Return a random friendly minion to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Matt Smith",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1861,
    "flavor": "Stoneskin Gargoyles love freeze tag.",
    "health": 4,
    "howToEarn": "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "id": "FP1_027",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Stoneskin Gargoyle",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "At the start of your turn, restore this minion to full Health.",
    "type": "MINION"
  },
  {
    "artist": "Jonboy Meyers",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 1910,
    "flavor": "In a world where you can run to a spirit healer and resurrect yourself, Undertakers do pretty light business.",
    "health": 2,
    "howToEarn": "Unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Construct Quarter, in the Naxxramas adventure.",
    "id": "FP1_028",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Undertaker",
    "rarity": "COMMON",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "NAXX",
    "text": "Whenever you summon a minion with <b>Deathrattle</b>, gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Jon McConnell",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 1913,
    "flavor": "They like to dance to reggae.",
    "health": 4,
    "howToEarn": "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    "id": "FP1_029",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Dancing Swords",
    "rarity": "COMMON",
    "set": "NAXX",
    "text": "<b>Deathrattle:</b> Your opponent draws a card.",
    "type": "MINION"
  },
  {
    "artist": "Samwise",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 1914,
    "elite": true,
    "flavor": "Loatheb used to be a simple Bog Beast.  This is why we need stricter regulations on mining and agriculture.",
    "health": 5,
    "howToEarn": "Unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Plague Quarter, in the Naxxramas adventure.",
    "id": "FP1_030",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Loatheb",
    "rarity": "LEGENDARY",
    "set": "NAXX",
    "text": "<b>Battlecry:</b> Enemy spells cost (5) more next turn.",
    "type": "MINION"
  },
  {
    "artist": "Ralph Horsley",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 1915,
    "elite": true,
    "flavor": "There used to be five Horsemen but one of them left because a job opened up in the deadmines and the benefits were better.",
    "health": 7,
    "howToEarn": "Unlocked in The Military Quarter, in the Naxxramas adventure.",
    "howToEarnGolden": "Crafting unlocked in The Military Quarter, in the Naxxramas adventure.",
    "id": "FP1_031",
    "mechanics": [
      "AURA"
    ],
    "name": "Baron Rivendare",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "NAXX",
    "text": "Your minions trigger their <b>Deathrattles</b> twice.",
    "type": "MINION"
  },
  {
    "artist": "Chris Seaman",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 46650,
    "flavor": "\"I'm sorry, son.  We had to send Old Howler off…to a farm…to play…\"",
    "health": 3,
    "id": "GIL_113",
    "mechanics": [
      "RUSH"
    ],
    "name": "Rabid Worgen",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Rush</b>",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 46654,
    "flavor": "She sells all manner of keys: from A flat to G sharp.",
    "health": 2,
    "id": "GIL_116",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Arcane Keysmith",
    "rarity": "EPIC",
    "referencedTags": [
      "DISCOVER",
      "SECRET"
    ],
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> <b>Discover</b> a <b>Secret</b>. Put it into the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 46655,
    "flavor": "Does anyone want to play dead!?",
    "health": 6,
    "id": "GIL_117",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Worgen Abomination",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "At the end of your turn, deal 2 damage to all other damaged minions.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 46656,
    "flavor": "Unfortunately, his doctorate is in Murloc Literature.",
    "health": 8,
    "id": "GIL_118",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Deranged Doctor",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Deathrattle:</b> Restore #8 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 46658,
    "flavor": "Decorating tip: Unused cauldrons can make a lovely elemental display.",
    "health": 7,
    "id": "GIL_119",
    "mechanics": [
      "AURA"
    ],
    "name": "Cauldron Elemental",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "Your other Elementals have +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Chris Seaman",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 46659,
    "flavor": "One head is a morning person. The other head hates morning people.",
    "health": 9,
    "id": "GIL_120",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Furious Ettin",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Grace Liu",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 46660,
    "flavor": "Birds of a feather Moonfire together.",
    "health": 8,
    "id": "GIL_121",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Darkmire Moonkin",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "spellDamage": 2,
    "text": "<b>Spell Damage +2</b>",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 46667,
    "flavor": "The hills have eyes. And teeth. Pretty bad breath, too.",
    "health": 7,
    "id": "GIL_124",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Mossy Horror",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> Destroy all other minions with 2 or less Attack.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 46674,
    "flavor": "He's entirely bonkers. All the best goblins are.",
    "health": 2,
    "id": "GIL_125",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Mad Hatter",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_WITH_RACE": 11
    },
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "[x]<b>Battlecry:</b> Randomly toss\n3 hats to other minions.\nEach hat gives +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 8,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 10,
    "dbfId": 46678,
    "elite": true,
    "flavor": "Taste your world's corruption! It tastes like chicken.",
    "health": 8,
    "id": "GIL_128",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Emeriss",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> Double the Attack and Health of all minions in your hand.",
    "type": "MINION"
  },
  {
    "artist": "Jerry Mascho",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 46680,
    "flavor": "Majestic. Ethereal. Still pretty down in the dumps, though.",
    "health": 6,
    "id": "GIL_130",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Gloom Stag",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> If your deck has only odd-Cost cards, gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Vladimir Kafanov",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 46694,
    "flavor": "For a healthier option, try Holy Water: Zero.",
    "id": "GIL_134",
    "name": "Holy Water",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "Deal $4 damage to a minion. If that kills it, add a copy of it to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 1,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 46706,
    "elite": true,
    "flavor": "He's everyone you want to be.",
    "health": 1,
    "id": "GIL_142",
    "name": "Chameleos",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "Each turn this is in your hand, transform it into a card your opponent is holding.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 46710,
    "flavor": "They make wonderful pets if you're not allergic to blood loss.",
    "health": 3,
    "id": "GIL_143",
    "mechanics": [
      "LIFESTEAL",
      "RUSH"
    ],
    "name": "Vicious Scalehide",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Lifesteal</b>\n<b>Rush</b>",
    "type": "MINION"
  },
  {
    "artist": "Milvoj Ceran",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 46713,
    "flavor": "Weirdly, the bells stop ringing after 5.",
    "id": "GIL_145",
    "mechanics": [
      "ECHO"
    ],
    "name": "Sound the Bells!",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Echo</b>\nGive a minion +1/+2.",
    "type": "SPELL"
  },
  {
    "artist": "Anton Zemskov",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 46715,
    "flavor": "Forecast: \"Cloudy with a chance of fireballs.\"",
    "id": "GIL_147",
    "mechanics": [
      "ImmuneToSpellpower"
    ],
    "name": "Cinderstorm",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "Deal $5 damage randomly split among all enemies.",
    "type": "SPELL"
  },
  {
    "artist": "Jason Kang",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 7,
    "dbfId": 46721,
    "elite": true,
    "flavor": "The upper windows used to be for aiming. Then we thought: \"Hey! MORE cannons!\"",
    "health": 8,
    "id": "GIL_152",
    "mechanics": [
      "CANT_ATTACK",
      "TRIGGER_VISUAL"
    ],
    "name": "Blackhowl Gunspire",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "[x]Can't attack. Whenever\nthis minion takes damage,\ndeal 3 damage to a\nrandom enemy.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 1,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 46725,
    "flavor": "Also comes in other colors, but red's in fashion this season.",
    "health": 3,
    "id": "GIL_155",
    "mechanics": [
      "ENRAGED",
      "RUSH"
    ],
    "name": "Redband Wasp",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "<b>Rush</b>\nHas +3 Attack while damaged.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 5,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 46737,
    "flavor": "These elementals, along with feldspar and mica, are often taken for granite.",
    "health": 8,
    "id": "GIL_156",
    "name": "Quartz Elemental",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "Can't attack while damaged.",
    "type": "MINION"
  },
  {
    "artist": "Luke Mancini",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 46859,
    "flavor": "She's a scythe for sore eyes.",
    "health": 2,
    "id": "GIL_188",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Druid of the Scythe",
    "rarity": "COMMON",
    "referencedTags": [
      "RUSH",
      "TAUNT"
    ],
    "set": "GILNEAS",
    "text": "[x]<b>Choose One -</b> Transform\ninto a 4/2 with <b>Rush</b>;\nor a 2/4 with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 4,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 7,
    "dbfId": 46862,
    "flavor": "Everywhelp, get in here!",
    "health": 9,
    "id": "GIL_190",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Nightscale Matriarch",
    "race": "DRAGON",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "Whenever a friendly minion is healed, summon a 3/3 Whelp.",
    "type": "MINION"
  },
  {
    "artist": "Ivan Fomin",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 46864,
    "flavor": "Like a knitting circle, but less evil.",
    "id": "GIL_191",
    "name": "Fiendish Circle",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "[x]Summon four 1/1 Imps.",
    "type": "SPELL"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 46874,
    "elite": true,
    "flavor": "The cards are always golden on the other side.",
    "health": 3,
    "id": "GIL_198",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Azalina Soulthief",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> Replace your hand with a copy of your opponent's.",
    "type": "MINION"
  },
  {
    "artist": "Garrett Hanna",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 46596,
    "flavor": "After a short paws, she's back to herself again.",
    "health": 5,
    "id": "GIL_200",
    "mechanics": [
      "STEALTH"
    ],
    "name": "Duskhaven Hunter",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "[x]<b>Stealth</b>\nEach turn this is in your hand,\nswap its Attack and Health.",
    "type": "MINION"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 46598,
    "flavor": "Time to squash your opponent.",
    "health": 4,
    "id": "GIL_201",
    "mechanics": [
      "LIFESTEAL"
    ],
    "name": "Pumpkin Peasant",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "[x]<b>Lifesteal</b>\nEach turn this is in your hand,\nswap its Attack and Health.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 46601,
    "flavor": "Admittedly, they kind of dropped the ball with Prince Liam.",
    "health": 8,
    "id": "GIL_202",
    "mechanics": [
      "DIVINE_SHIELD",
      "RUSH"
    ],
    "name": "Gilnean Royal Guard",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "[x]<b>Divine Shield</b>, <b>Rush</b>\nEach turn this is in your hand,\nswap its Attack and Health.",
    "type": "MINION"
  },
  {
    "artist": "Tyler West Studio",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 46621,
    "flavor": "When one buke just isn’t enough.",
    "id": "GIL_203",
    "name": "Rebuke",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "Enemy spells cost (5) more next turn.",
    "type": "SPELL"
  },
  {
    "artist": "Dai Yang",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 46634,
    "flavor": "Recruited from the Gilnean opera house.",
    "health": 4,
    "id": "GIL_207",
    "mechanics": [
      "ECHO",
      "TAUNT"
    ],
    "name": "Phantom Militia",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "<b>Echo</b>\n<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Ben Zhang",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 46661,
    "flavor": "That Friends and Familiars Plan is really paying off!",
    "health": 1,
    "id": "GIL_212",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ravencaller",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "[x]<b>Battlecry:</b> Add two\nrandom 1-Cost minions\nto your hand.",
    "type": "MINION"
  },
  {
    "artist": "Sean McNally",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 46665,
    "flavor": "Doom!  Only doom for you!  But pay good tip, maybe less doom.",
    "health": 4,
    "id": "GIL_213",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tanglefur Mystic",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> Add a random\n2-Cost minion to each player's hand.",
    "type": "MINION"
  },
  {
    "armor": 5,
    "artist": "Alex Horley Orlandelli",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 8,
    "dbfId": 46887,
    "elite": true,
    "flavor": "Curse-bringer, tree-twister, mother of wretched things…Hanzo main.",
    "health": 30,
    "id": "GIL_504",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Hagatha the Witch",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> Deal 3 damage to all minions.",
    "type": "HERO"
  },
  {
    "artist": "Rock Niu",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 46897,
    "flavor": "50% off. Every shot must go!",
    "id": "GIL_506",
    "mechanics": [
      "ECHO"
    ],
    "name": "Cheap Shot",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Echo</b>\n Deal $2 damage to a minion.",
    "type": "SPELL"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 4,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 46903,
    "flavor": "Amwitched. Beingwitched. Beenwitched.",
    "health": 1,
    "id": "GIL_507",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Bewitched Guardian",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "[x]<b>Taunt</b>\n<b>Battlecry:</b> Gain +1 Health\n for each card in your hand. ",
    "type": "MINION"
  },
  {
    "artist": "Jiajun Tian",
    "attack": 2,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 46904,
    "flavor": "Happily married with two kids. It was love at first bite.",
    "health": 4,
    "id": "GIL_508",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Duskbat",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> If your hero took damage this turn, summon two 1/1 Bats.",
    "type": "MINION"
  },
  {
    "artist": "Phil Saunders",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 46908,
    "flavor": "One little Mistwraith sitting in a tree. M-I-S-T-I-N-G.",
    "health": 5,
    "id": "GIL_510",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Mistwraith",
    "rarity": "RARE",
    "referencedTags": [
      "ECHO"
    ],
    "set": "GILNEAS",
    "text": "Whenever you play an <b>Echo</b> card, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Tyler West Studio",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 46950,
    "flavor": "She simply refuses to ask for directions.",
    "health": 1,
    "id": "GIL_513",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Lost Spirit",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Deathrattle:</b> Give your minions +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "J. Axer",
    "attack": 2,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 46936,
    "flavor": "He's on the hunt for Togwaggle's missing rat.",
    "health": 2,
    "id": "GIL_515",
    "mechanics": [
      "BATTLECRY",
      "RUSH"
    ],
    "name": "Ratcatcher",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "<b>Rush</b>\n<b>Battlecry:</b> Destroy a friendly minion and gain its Attack and Health.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 46940,
    "flavor": "Emeriss uses Wing Blast.  It's super effective!",
    "id": "GIL_518",
    "name": "Wing Blast",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "Deal $4 damage to a minion. If a minion died this turn, this costs (1).",
    "type": "SPELL"
  },
  {
    "artist": "Tyler West Studio",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 46988,
    "flavor": "They think they're trusted guardians. Dragons think they're convenient snacks.",
    "health": 11,
    "id": "GIL_526",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Wyrmguard",
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 46991,
    "flavor": "Everyone expects an inquisition reference.",
    "health": 6,
    "id": "GIL_527",
    "mechanics": [
      "LIFESTEAL",
      "TAUNT"
    ],
    "name": "Felsoul Inquisitor",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Lifesteal</b>\n<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 46992,
    "flavor": "Same turn delivery - guaranteed!",
    "health": 6,
    "id": "GIL_528",
    "mechanics": [
      "RUSH"
    ],
    "name": "Swift Messenger",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "[x]<b>Rush</b>\nEach turn this is in your hand,\nswap its Attack and Health.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 46994,
    "flavor": "He also goes by \"worg-lock.\"",
    "health": 4,
    "id": "GIL_529",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Spellshifter",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "spellDamage": 1,
    "text": "[x]<b>Spell Damage +1</b>\nEach turn this is in your hand,\nswap its Attack and Health.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 46996,
    "flavor": "Makes shockingly good unagi.",
    "health": 3,
    "id": "GIL_530",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Murkspark Eel",
    "playRequirements": {
      "REQ_DRAG_TO_PLAY": 0
    },
    "race": "BEAST",
    "rarity": "RARE",
    "set": "GILNEAS",
    "targetingArrowText": "Deal 2 damage.",
    "text": "<b>Battlecry:</b> If your deck has only even-Cost cards, deal 2 damage.",
    "type": "MINION"
  },
  {
    "artist": "Sam Hogg",
    "attack": 0,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 46998,
    "flavor": "Is she a frog that became a witch, or a witch that became a frog?",
    "health": 1,
    "id": "GIL_531",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Witch's Apprentice",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Add a random Shaman spell to your hand.",
    "type": "MINION"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 47014,
    "flavor": "Hard time making ends meet? Hate the League of Explorers? Get a job henching!",
    "health": 3,
    "id": "GIL_534",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Hench-Clan Thug",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "After your hero attacks, give this minion +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Wayne Reynolds",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 6,
    "dbfId": 47016,
    "flavor": "Oh look. A Gorehowl.",
    "id": "GIL_537",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Deadly Arsenal",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "Reveal a weapon from your deck. Deal its Attack to all minions.",
    "type": "SPELL"
  },
  {
    "artist": "Dan Scott",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 47033,
    "flavor": "Wanted on three counts of gnomish possession.",
    "id": "GIL_543",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Dark Possession",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "GILNEAS",
    "text": "Deal $2 damage to a friendly character. <b>Discover</b> a Demon.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 47051,
    "flavor": "Maybe we should have called him Ghostly Rusher.",
    "health": 4,
    "id": "GIL_545",
    "mechanics": [
      "DIVINE_SHIELD",
      "RUSH"
    ],
    "name": "Ghostly Charger",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Divine Shield</b>\n<b>Rush</b>",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 4,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 47053,
    "elite": true,
    "flavor": "You either die a villain, or live long enough to see yourself become the hero.",
    "health": 4,
    "id": "GIL_547",
    "mechanics": [
      "RUSH",
      "TRIGGER_VISUAL"
    ],
    "name": "Darius Crowley",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "[x]<b>Rush</b>\nAfter this attacks and kills\na minion, gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 47054,
    "flavor": "Known throughout the land as the Spooky-nomicon.",
    "id": "GIL_548",
    "name": "Book of Specters",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "Draw 3 cards. Discard any spells drawn.",
    "type": "SPELL"
  },
  {
    "artist": "Adam Byrne",
    "attack": 5,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 6,
    "dbfId": 47055,
    "elite": true,
    "flavor": "Just a twist to the left, one quarter turn to the right and … oops! Well, we didn’t need that timeline anyway.",
    "health": 5,
    "id": "GIL_549",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Toki, Time-Tinker",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "[x]<b>Battlecry:</b> Add a random\n<b>Legendary</b> minion from\nthe past to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Max Grecke",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 47063,
    "flavor": "We didn't actually fire the guy who named Dark Wispers.",
    "id": "GIL_553",
    "name": "Wispering Woods",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "[x]Summon a 1/1 Wisp for\neach card in your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler West Studio",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 6,
    "dbfId": 47071,
    "flavor": "She was an ordinary castaway... until she found that cursed volleyball.",
    "health": 3,
    "id": "GIL_557",
    "mechanics": [
      "DEATHRATTLE",
      "RUSH"
    ],
    "name": "Cursed Castaway",
    "race": "PIRATE",
    "rarity": "RARE",
    "referencedTags": [
      "COMBO"
    ],
    "set": "GILNEAS",
    "text": "<b>Rush</b>\n<b>Deathrattle:</b> Draw a <b>Combo</b> card from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 47072,
    "flavor": "A face only a druid could love.",
    "health": 1,
    "id": "GIL_558",
    "mechanics": [
      "LIFESTEAL"
    ],
    "name": "Swamp Leech",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Lifesteal</b>",
    "type": "MINION"
  },
  {
    "artist": "Ivan Fomin",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 47077,
    "flavor": "\"Oh hi bark.\"",
    "health": 4,
    "id": "GIL_561",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Blackwald Pixie",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> Refresh your Hero Power.",
    "type": "MINION"
  },
  {
    "artist": "Tyler West Studio",
    "attack": 1,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 47078,
    "flavor": "It aspires to be a Vilebrood Dancer, but it has eight left feet.",
    "health": 3,
    "id": "GIL_562",
    "mechanics": [
      "POISONOUS",
      "RUSH"
    ],
    "name": "Vilebrood Skitterer",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Poisonous</b>\n<b>Rush</b>",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 4,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 47085,
    "flavor": "The itsy bitsy spiders climbed up the village wall. Then came the witch and the spiders ate them all.",
    "health": 6,
    "id": "GIL_565",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Deathweb Spider",
    "race": "BEAST",
    "rarity": "EPIC",
    "referencedTags": [
      "LIFESTEAL"
    ],
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> If your hero\ntook damage this turn, gain <b>Lifesteal</b>.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 47117,
    "flavor": "The gates to the Gilnean pet cemetary MUST remain locked at all times.",
    "id": "GIL_571",
    "name": "Witching Hour",
    "playRequirements": {
      "REQ_FRIENDLY_MINIONS_OF_RACE_DIED_THIS_GAME": 20,
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "Summon a random friendly Beast that died this game.",
    "type": "SPELL"
  },
  {
    "artist": "Anton Zemskov",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 47128,
    "flavor": "MISSING: One giant rat. Please return to King Togwaggle.",
    "id": "GIL_577",
    "mechanics": [
      "SECRET"
    ],
    "name": "Rat Trap",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "[x]<b>Secret:</b> After your\nopponent plays three\ncards in a turn, summon\na 6/6 Rat.",
    "type": "SPELL"
  },
  {
    "artist": "James Ryman",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 47131,
    "elite": true,
    "flavor": "\"1 minion… ah, ah, ah! 2 minions… ah, ah, ah! 3 minions… ah, ah, ah!\"",
    "health": 6,
    "id": "GIL_578",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Countess Ashmore",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "DEATHRATTLE",
      "LIFESTEAL",
      "RUSH"
    ],
    "set": "GILNEAS",
    "text": "[x]<b>Battlecry:</b> Draw a <b>Rush</b>,\n<b>Lifesteal</b>, and <b>Deathrattle</b>\ncard from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 1,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 47133,
    "flavor": "When he was younger, he was the town crybaby.",
    "health": 2,
    "id": "GIL_580",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Town Crier",
    "rarity": "EPIC",
    "referencedTags": [
      "RUSH"
    ],
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> Draw a <b>Rush</b> minion from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Brian Despain",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 47134,
    "flavor": "The secret is glue.",
    "health": 4,
    "id": "GIL_581",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Sandbinder",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> Draw an Elemental from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 47138,
    "flavor": "When regular totem hours won't cut it.",
    "health": 3,
    "id": "GIL_583",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Totem Cruncher",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Destroy your Totems. Gain +2/+2 for each destroyed.",
    "type": "MINION"
  },
  {
    "artist": "Ursula Dorada",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 47142,
    "flavor": "She rids villages of annoying pests, like rats and children.",
    "health": 3,
    "id": "GIL_584",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Witchwood Piper",
    "race": "DEMON",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "[x]<b>Battlecry:</b> Draw the lowest\nCost minion from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 47152,
    "flavor": "Or it might not.",
    "id": "GIL_586",
    "name": "Earthen Might",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "[x]Give a minion +2/+2.\nIf it's an Elemental, add\na random Elemental\nto your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Nutchapol Thitinunthakorn",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 8,
    "dbfId": 47201,
    "durability": 4,
    "flavor": "Silver’s malleability limits its utility as an edged weapon. On the other hand... SHINY!",
    "id": "GIL_596",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Silver Sword",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "After your hero attacks, give your minions +1/+1.",
    "type": "WEAPON"
  },
  {
    "artist": "J. Axer",
    "attack": 6,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 8,
    "dbfId": 47211,
    "elite": true,
    "flavor": "Those who cannot remember their card history are doomed to repeat it.",
    "health": 6,
    "id": "GIL_598",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tess Greymane",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "[x]<b>Battlecry:</b> Replay every card\nfrom another class you've\nplayed this game <i>(targets\nchosen randomly)</i>.",
    "type": "MINION"
  },
  {
    "artist": "Jason Kang",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 0,
    "dbfId": 47222,
    "flavor": "The material components for this spell are wool socks and a rug.",
    "id": "GIL_600",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER",
      "OVERLOAD"
    ],
    "name": "Zap!",
    "overload": 1,
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "Deal $2 damage to a minion. <b>Overload:</b> (1)",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 47241,
    "flavor": "A popular local alternative to bananas.",
    "health": 4,
    "id": "GIL_601",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Scaleworm",
    "race": "BEAST",
    "rarity": "RARE",
    "referencedTags": [
      "RUSH"
    ],
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Rush</b>.",
    "type": "MINION"
  },
  {
    "artist": "Tyler West Studio",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 47256,
    "flavor": "Not all spiders are born poisonous. That's where he comes in.",
    "health": 4,
    "id": "GIL_607",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Toxmonger",
    "rarity": "EPIC",
    "referencedTags": [
      "POISONOUS"
    ],
    "set": "GILNEAS",
    "text": "[x]Whenever you play a 1-Cost\nminion, give it <b>Poisonous</b>.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 47930,
    "flavor": "\"Shh! You're going to start a howl!\"",
    "health": 1,
    "id": "GIL_607t",
    "mechanics": [
      "ECHO",
      "RUSH"
    ],
    "name": "Hunting Mastiff",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Echo</b>\n<b>Rush</b>",
    "type": "MINION"
  },
  {
    "artist": "Kerem Beyit",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 47262,
    "flavor": "<i>This</i> wood imp. Stop asking!",
    "health": 1,
    "id": "GIL_608",
    "mechanics": [
      "DEATHRATTLE",
      "STEALTH"
    ],
    "name": "Witchwood Imp",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "[x]<b>Stealth</b>\n<b>Deathrattle:</b> Give a random\n  friendly minion +2 Health.",
    "type": "MINION"
  },
  {
    "artist": "Charlene Le Scanff",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 47287,
    "flavor": "\"Aww, I love it! It even kinda looks like me.\"",
    "health": 1,
    "id": "GIL_614",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Voodoo Doll",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "GILNEAS",
    "targetingArrowText": "Curse a minion.",
    "text": "<b>Battlecry:</b> Choose a minion. <b>Deathrattle:</b> Destroy the chosen minion.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 47292,
    "flavor": "No use crying over split Festeroot,",
    "health": 4,
    "id": "GIL_616",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Splitting Festeroot",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "<b>Deathrattle:</b> Summon two 2/2 Splitting Saplings.",
    "type": "MINION"
  },
  {
    "artist": "Jomaro Kindred",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 47295,
    "elite": true,
    "flavor": "Summon an unlimited* number of minions!**\n*Six\n**Wisps",
    "health": 7,
    "id": "GIL_618",
    "mechanics": [
      "AURA"
    ],
    "name": "Glinda Crowskin",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "ECHO"
    ],
    "set": "GILNEAS",
    "text": "Minions in your hand have <b>Echo</b>.",
    "type": "MINION"
  },
  {
    "artist": "J. Axer",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 47298,
    "elite": true,
    "flavor": "The children were puzzled by the scratches covering the insides of their toy-boxes.",
    "health": 6,
    "id": "GIL_620",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Dollmaster Dorian",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "Whenever you draw a minion, summon a 1/1 copy of it.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 47343,
    "flavor": "In a pinch, he'll also settle for Holy Water: Zero.",
    "health": 3,
    "id": "GIL_622",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Lifedrinker",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "[x]<b>Battlecry:</b> Deal 3 damage to\nthe enemy hero. Restore\n#3 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Alex Alexandrov",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 47346,
    "flavor": "You know what they say about people with big hands? Small bears.",
    "health": 12,
    "id": "GIL_623",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Witchwood Grizzly",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "[x]<b>Taunt</b>\n<b>Battlecry:</b> Lose 1 Health\nfor each card in your\nopponent's hand.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 47348,
    "flavor": "Listen to the mew-sic of the night.",
    "health": 3,
    "id": "GIL_624",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Night Prowler",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> If this is the only minion on the battlefield, gain +3/+3.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 47405,
    "flavor": "\"Who are you? Eh, none of my business.\"",
    "health": 4,
    "id": "GIL_634",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Bellringer Sentry",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET"
    ],
    "set": "GILNEAS",
    "text": "<b>Battlecry and Deathrattle:</b> Put a <b>Secret</b> from your deck into the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasper",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 47416,
    "flavor": "Fly like an eagle, drop like a rock.",
    "health": 2,
    "id": "GIL_635",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Cathedral Gargoyle",
    "rarity": "EPIC",
    "referencedTags": [
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, gain <b>Taunt</b> and <b>Divine Shield</b>.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 47423,
    "flavor": "Have you ever heard the wolf cry to the blue corn moon?",
    "id": "GIL_637",
    "name": "Ferocious Howl",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "Draw a card.\nGain 1 Armor for each card in your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Konstad",
    "attack": 4,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 5,
    "dbfId": 47429,
    "flavor": "Experts worry that curios are a gateway to face-collecting.",
    "health": 4,
    "id": "GIL_640",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Curio Collector",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "Whenever you draw a card, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 5,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 5,
    "dbfId": 47438,
    "flavor": "Next step: Marshmallow elementals.",
    "health": 5,
    "id": "GIL_645",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Bonfire Elemental",
    "race": "ELEMENTAL",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> If you played an Elemental last turn, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 47439,
    "flavor": "Most mechs are pretty chill, but this one is all wound up.",
    "health": 4,
    "id": "GIL_646",
    "name": "Clockwork Automaton",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "Double the damage and healing of your Hero Power.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 47458,
    "flavor": "Empty your pockets, I know you’ve got a Wandering Monster in there!",
    "health": 6,
    "id": "GIL_648",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Chief Inspector",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET"
    ],
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> Destroy all enemy <b>Secrets</b>.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 47488,
    "elite": true,
    "flavor": "They’re good dogs, Tess.",
    "health": 6,
    "id": "GIL_650",
    "mechanics": [
      "AURA"
    ],
    "name": "Houndmaster Shaw",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "RUSH"
    ],
    "set": "GILNEAS",
    "text": "Your other minions have\n<b>Rush</b>.",
    "type": "MINION"
  },
  {
    "artist": "Izzy Hoover",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 47511,
    "durability": 2,
    "flavor": "It's a lumberjack's axe and that's ok.",
    "id": "GIL_653",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Woodcutter's Axe",
    "rarity": "COMMON",
    "referencedTags": [
      "RUSH"
    ],
    "set": "GILNEAS",
    "text": "<b>Deathrattle:</b> Give +2/+1 to a random friendly <b>Rush</b> minion.",
    "type": "WEAPON"
  },
  {
    "artist": "Phil Saunders",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 47515,
    "flavor": "\"Left, right, left, right, there's none of the enemy left… Right?\"",
    "id": "GIL_654",
    "mechanics": [
      "ECHO"
    ],
    "name": "Warpath",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Echo</b>\nDeal $1 damage to all minions.",
    "type": "SPELL"
  },
  {
    "artist": "Evgeniy Dlinnov",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 47516,
    "flavor": "Tree puns arboring.",
    "health": 7,
    "id": "GIL_655",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Festeroot Hulk",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "After a friendly minion attacks, gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Craig Elliott",
    "attack": 8,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 8,
    "dbfId": 47520,
    "elite": true,
    "flavor": "We're going to need some bigger tweezers.",
    "health": 8,
    "id": "GIL_658",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Splintergraft",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "targetingArrowText": "Add a 10/10 copy to your hand.",
    "text": "[x]<b>Battlecry:</b> Choose a friendly\nminion. Add a 10/10 copy to\nyour hand that costs (10).",
    "type": "MINION"
  },
  {
    "artist": "Tom Baxa",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 47549,
    "flavor": "Taken up an octave, it's highly effective against stained glass golems.",
    "id": "GIL_661",
    "name": "Divine Hymn",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0
    },
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "Restore #6 Health to all friendly characters.",
    "type": "SPELL"
  },
  {
    "artist": "Vlad Botos",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 47553,
    "flavor": "An apple a day keeps the worgen at bay.",
    "id": "GIL_663",
    "name": "Witchwood Apple",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "Add three 2/2 Treants to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 47554,
    "flavor": "As birds of ill omen, these crows often summon Doomsayers.",
    "health": 3,
    "id": "GIL_664",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Vex Crow",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "Whenever you cast a spell, summon a random\n2-Cost minion.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 47555,
    "flavor": "Warlocks refer to this as a \"balance change.\"",
    "id": "GIL_665",
    "mechanics": [
      "ECHO"
    ],
    "name": "Curse of Weakness",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "<b>Echo</b>\nGive all enemy minions -2 Attack until your next turn.",
    "type": "SPELL"
  },
  {
    "artist": "Steve Prescott",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 47557,
    "flavor": "Key ingredient in Gilnean applesauce.",
    "health": 5,
    "id": "GIL_667",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Rotten Applebaum",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Taunt</b>\n<b>Deathrattle:</b> Restore #4 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Nutchapol Thitinunthakorn",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 47594,
    "durability": 2,
    "flavor": "So sharp it can cut through a spectral tomato!",
    "id": "GIL_672",
    "mechanics": [
      "LIFESTEAL"
    ],
    "name": "Spectral Cutlass",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "[x]<b>Lifesteal</b>\nWhenever you play a card\nfrom another class,\ngain +1 Durability.",
    "type": "WEAPON"
  },
  {
    "artist": "James Ryman",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 47599,
    "elite": true,
    "flavor": "“I’ll trade you a Malfurion for an Anduin.”",
    "health": 2,
    "id": "GIL_677",
    "mechanics": [
      "BATTLECRY",
      "ECHO"
    ],
    "name": "Face Collector",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "<b>Echo</b>\n<b>Battlecry:</b> Add a random <b>Legendary</b> minion to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Jason Kang",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 47600,
    "flavor": "BoOooOogrglgrlgrlooOoOoo!",
    "health": 2,
    "id": "GIL_678",
    "mechanics": [
      "ECHO"
    ],
    "name": "Ghost Light Angler",
    "race": "MURLOC",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Echo</b>",
    "type": "MINION"
  },
  {
    "artist": "Ivan Fomin",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 47602,
    "flavor": "How do you make a walnut laugh? Crack it up!",
    "health": 3,
    "id": "GIL_680",
    "mechanics": [
      "ECHO"
    ],
    "name": "Walnut Sprite",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Echo</b>",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 49502,
    "flavor": "Be all that you can be.",
    "health": 4,
    "id": "GIL_681",
    "name": "Nightmare Amalgam",
    "race": "ALL",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "[x]<i>This is an Elemental, Mech,\nDemon, Murloc, Dragon,\nBeast, Pirate and Totem.</i>",
    "type": "MINION"
  },
  {
    "artist": "Pior Oberson",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 47606,
    "flavor": "You think your job mucks.",
    "health": 8,
    "id": "GIL_682",
    "mechanics": [
      "BATTLECRY",
      "RUSH"
    ],
    "name": "Muck Hunter",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "<b>Rush</b>\n<b>Battlecry:</b> Summon two 2/1 Mucklings for your opponent.",
    "type": "MINION"
  },
  {
    "artist": "Wayne Wu",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 47607,
    "flavor": "She would have gotten away with it, if it weren't for that meddling Drakeslayer.",
    "health": 4,
    "id": "GIL_683",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Marsh Drake",
    "race": "DRAGON",
    "rarity": "COMMON",
    "referencedTags": [
      "POISONOUS"
    ],
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> Summon a 2/1 <b>Poisonous</b> Drakeslayer for your opponent.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 47614,
    "flavor": "She’s all fun and games until someone rings that stupid bell.",
    "health": 5,
    "id": "GIL_685",
    "name": "Paragon of Light",
    "rarity": "RARE",
    "referencedTags": [
      "LIFESTEAL",
      "TAUNT"
    ],
    "set": "GILNEAS",
    "text": "While this minion has 3 or more Attack, it has <b>Taunt</b> and <b>Lifesteal</b>.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 47625,
    "flavor": "Wanted: Dead or Undead.",
    "id": "GIL_687",
    "name": "WANTED!",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "Deal $3 damage to a minion. If that kills it, add a Coin to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "James Ryman",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 47692,
    "elite": true,
    "flavor": "His worgen children call him Archmage AROO-OO-OO-OO-gal.",
    "health": 2,
    "id": "GIL_691",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Archmage Arugal",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "Whenever you draw a minion, add a copy of it to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 47693,
    "elite": true,
    "flavor": "Ever since Sylvanas killed his son, he's dreamed of getting… even.",
    "health": 5,
    "id": "GIL_692",
    "mechanics": [
      "COLLECTIONMANAGER_FILTER_MANA_EVEN",
      "START_OF_GAME"
    ],
    "name": "Genn Greymane",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "[x]<b>Start of Game:</b>\nIf your deck has only even-\nCost cards, your starting\nHero Power costs (1).",
    "type": "MINION"
  },
  {
    "artist": "Qinghao Wu",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 47694,
    "flavor": "Like a sloppy joe for vampires.",
    "health": 6,
    "id": "GIL_693",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Blood Witch",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "At the start of your turn, deal 1 damage to your hero.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 5,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 47696,
    "elite": true,
    "flavor": "\"I have a very particular set of skills. Skills that make me a nightmare for witches like you.\"",
    "health": 5,
    "id": "GIL_694",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Prince Liam",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "[x]<b>Battlecry:</b> Transform all\n1-Cost cards in your deck\n into <b>Legendary</b> minions.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 47799,
    "flavor": "He'll pick anyone's pocket, except a gnome's. He'd never stoop so low.",
    "id": "GIL_696",
    "mechanics": [
      "ECHO"
    ],
    "name": "Pick Pocket",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "<b>Echo</b>\nAdd a random card to your hand <i>(from your opponent's class).</i>",
    "type": "SPELL"
  },
  {
    "artist": "Glenn Rane",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 47819,
    "elite": true,
    "flavor": "Someone called her \"Tweety\". She didn't take it well.",
    "health": 7,
    "id": "GIL_800",
    "mechanics": [
      "AURA"
    ],
    "name": "Duskfallen Aviana",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "On each player's turn, the first card played costs (0).",
    "type": "MINION"
  },
  {
    "artist": "Gonzalo Ordonez",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 47821,
    "flavor": "Lick the ice block. I triple-double-dog-dare-you.",
    "id": "GIL_801",
    "name": "Snap Freeze",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "GILNEAS",
    "text": "<b>Freeze</b> a minion.\nIf it's already <b>Frozen</b>, destroy it.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler West Studio",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 47825,
    "flavor": "She only needs two commands: \"Heel\" and \"Sic 'em!\"",
    "health": 5,
    "id": "GIL_803",
    "mechanics": [
      "BATTLECRY",
      "RUSH"
    ],
    "name": "Militia Commander",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "<b>Rush</b>\n<b>Battlecry:</b> Gain +3 Attack this turn.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 6,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 47836,
    "flavor": "Also does weddings.",
    "health": 5,
    "id": "GIL_805",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Coffin Crasher",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "<b>Deathrattle:</b> Summon a <b>Deathrattle</b> minion from your hand.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 4,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 7,
    "dbfId": 47873,
    "flavor": "The tricky part is getting them to HOLD their shape.",
    "health": 8,
    "id": "GIL_807",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Bogshaper",
    "race": "ELEMENTAL",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "Whenever you cast a spell, draw a minion from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Phil Saunders",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 47895,
    "flavor": "Overpowered Steambot got nerfed.",
    "health": 9,
    "id": "GIL_809",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Unpowered Steambot",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 48002,
    "flavor": "\"I… I dreamed I accidentally crafted a golden Millhouse! It was so REAL!\"",
    "id": "GIL_813",
    "name": "Vivid Nightmare",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_NUM_MINION_SLOTS": 1,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "[x]Choose a friendly minion.\nSummon a copy of it with\n1 Health remaining.",
    "type": "SPELL"
  },
  {
    "artist": "Dave Allsop",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 48039,
    "flavor": "He's gotten big into crypt-o-currency.",
    "health": 2,
    "id": "GIL_815",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Baleful Banker",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "GILNEAS",
    "targetingArrowText": "Shuffle a copy into your deck.",
    "text": "<b>Battlecry:</b> Choose a friendly minion. Shuffle a copy into your deck.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 48106,
    "flavor": "Would you eat them in a ditch? Would you eat them with a witch?",
    "health": 3,
    "id": "GIL_816",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Swamp Dragon Egg",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Deathrattle:</b> Add a random Dragon to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 4,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 48107,
    "elite": true,
    "flavor": "She seems scary, but she's got a glass jaw.",
    "health": 3,
    "id": "GIL_817",
    "mechanics": [
      "DIVINE_SHIELD",
      "TRIGGER_VISUAL"
    ],
    "name": "The Glass Knight",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "[x]<b>Divine Shield</b>\nWhenever you restore Health,\ngain <b>Divine Shield</b>.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 48110,
    "flavor": "Eye of murloc, ear of bat, foot of Fordring, fur of cat…",
    "health": 4,
    "id": "GIL_819",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Witch's Cauldron",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "After a friendly minion dies, add a random Shaman spell to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 6,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 9,
    "dbfId": 48111,
    "elite": true,
    "flavor": "Beware the Shudderwock, my son. We're fresh out of vorpal daggers.",
    "health": 6,
    "id": "GIL_820",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Shudderwock",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "[x]<b>Battlecry:</b> Repeat all other\n<b>Battlecries</b> from cards you\nplayed this game <i>(targets\nchosen randomly)</i>.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 4,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 7,
    "dbfId": 48156,
    "elite": true,
    "flavor": "Betrayed the Alliance. Betrayed the Horde. All for 200 achievement points and a sweet, sweet hat.",
    "health": 4,
    "id": "GIL_825",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Lord Godfrey",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "[x]<b>Battlecry:</b> Deal 2 damage to\nall other minions. If any die,\nrepeat this <b>Battlecry</b>.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 48158,
    "elite": true,
    "flavor": "In her defense, it did look like a cookie.",
    "health": 8,
    "id": "GIL_826",
    "mechanics": [
      "COLLECTIONMANAGER_FILTER_MANA_ODD",
      "START_OF_GAME"
    ],
    "name": "Baku the Mooneater",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "[x]<b>Start of Game:</b>\nIf your deck has only odd-\nCost cards, upgrade\nyour Hero Power.",
    "type": "MINION"
  },
  {
    "artist": "Eva Wildermann",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 48199,
    "flavor": "It's like, SUPER bad at staring contests.",
    "health": 3,
    "id": "GIL_827",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Blink Fox",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> Add a random card to your hand <i>(from your opponent's class).</i>",
    "type": "MINION"
  },
  {
    "artist": "Efrem Palacios",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 48201,
    "flavor": "It's always Huffer. And Huffer. And Huffer. And Huffer.",
    "id": "GIL_828",
    "name": "Dire Frenzy",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0,
      "REQ_TARGET_WITH_RACE": 20
    },
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "Give a Beast +3/+3. Shuffle 3 copies into your deck with +3/+3.",
    "type": "SPELL"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 1,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 48286,
    "flavor": "\"Just sign this waiver, and we'll be on our way.\"",
    "health": 6,
    "id": "GIL_833",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Forest Guide",
    "rarity": "RARE",
    "set": "GILNEAS",
    "text": "At the end of your turn, both players draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Tyler Walpole",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 48360,
    "flavor": "Everyone hail to the squashling song!",
    "health": 1,
    "id": "GIL_835",
    "mechanics": [
      "BATTLECRY",
      "ECHO"
    ],
    "name": "Squashling",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "[x]<b>Echo</b>\n<b>Battlecry:</b> Restore #2 Health.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 48393,
    "flavor": "A lot of shaman have started vaping their invocations.",
    "id": "GIL_836",
    "name": "Blazing Invocation",
    "rarity": "RARE",
    "referencedTags": [
      "BATTLECRY",
      "DISCOVER"
    ],
    "set": "GILNEAS",
    "text": "<b>Discover</b> a <b>Battlecry</b> minion.",
    "type": "SPELL"
  },
  {
    "artist": "Bill Ruan",
    "attack": 4,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 48444,
    "flavor": "Some moths are attracted to flame. This one's attracted to disco.",
    "health": 4,
    "id": "GIL_837",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Glitter Moth",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> If your deck has only odd-Cost cards, double the Health of your other minions.",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasber",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 48445,
    "flavor": "She's so odd, you can't even.",
    "health": 3,
    "id": "GIL_838",
    "mechanics": [
      "BATTLECRY",
      "SPELLPOWER"
    ],
    "name": "Black Cat",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "spellDamage": 1,
    "text": "<b>Spell Damage +1</b>\n <b>Battlecry:</b> If your deck has only odd-Cost cards, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 5,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 48560,
    "elite": true,
    "flavor": "She was a lady in polka dots until the gnomish laundromat incident.",
    "health": 5,
    "id": "GIL_840",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Lady in White",
    "rarity": "LEGENDARY",
    "set": "GILNEAS",
    "text": "[x]<b>Battlecry:</b> Cast 'Inner Fire'\n on every minion in your deck \n<i>(set Attack equal to Health).</i>",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 48585,
    "flavor": "In life he worked as a sword swallower.",
    "health": 4,
    "id": "GIL_902",
    "mechanics": [
      "COMBO"
    ],
    "name": "Cutthroat Buccaneer",
    "race": "PIRATE",
    "rarity": "COMMON",
    "set": "GILNEAS",
    "text": "<b>Combo:</b> Give your weapon +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Daria Tuzova",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 48832,
    "flavor": "Find your own wisdom. Perhaps behind the couch.",
    "id": "GIL_903",
    "mechanics": [
      "SECRET"
    ],
    "name": "Hidden Wisdom",
    "rarity": "EPIC",
    "set": "GILNEAS",
    "text": "[x]<b>Secret:</b> After your\nopponent plays three\ncards in a turn, draw\n2 cards.",
    "type": "SPELL"
  },
  {
    "artist": "Steve Prescott",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 48902,
    "flavor": "Fits easily into overhead luggage bins.",
    "health": 7,
    "id": "GIL_905",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Carrion Drake",
    "race": "DRAGON",
    "rarity": "RARE",
    "referencedTags": [
      "POISONOUS"
    ],
    "set": "GILNEAS",
    "text": "<b>Battlecry:</b> If a minion died this turn, gain <b>Poisonous</b>.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 1927,
    "flavor": "Calling something a flamecannon really doesn't do much to distinguish it from other goblin devices.",
    "id": "GVG_001",
    "name": "Flamecannon",
    "playRequirements": {
      "REQ_MINIMUM_ENEMY_MINIONS": 1
    },
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Deal $4 damage to a random enemy minion.",
    "type": "SPELL"
  },
  {
    "artist": "Gabor Szikszai",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 1928,
    "flavor": "Do the slow chant when he waddles by: \"Chug! Chug! Chug!\"",
    "health": 3,
    "id": "GVG_002",
    "mechanics": [
      "FREEZE"
    ],
    "name": "Snowchugger",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Freeze</b> any character damaged by this minion.",
    "type": "MINION"
  },
  {
    "artist": "Sean O'Daniels",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 1929,
    "flavor": "The denizens of Azeroth have no idea how much work goes into stabilizing portals.  We spend like 30% of GDP on portal upkeep.",
    "id": "GVG_003",
    "name": "Unstable Portal",
    "rarity": "RARE",
    "set": "GVG",
    "text": "Add a random minion to your hand. It costs (3) less.",
    "type": "SPELL"
  },
  {
    "artist": "Glenn Rane",
    "attack": 5,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 1934,
    "flavor": "If you can't find a bomb to throw, just pick up any goblin invention and throw that.",
    "health": 4,
    "id": "GVG_004",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Goblin Blastmage",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Battlecry:</b> If you have a Mech, deal 4 damage randomly split among all enemies.",
    "type": "MINION"
  },
  {
    "artist": "Alex Garner",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 1941,
    "flavor": "Medivh's echo haunts Karazhan, eternally cheating at chess and <i>Hearthstone</i>.",
    "id": "GVG_005",
    "name": "Echo of Medivh",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Put a copy of each friendly minion into your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Phil Saunders",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1940,
    "flavor": "Mechs that summon mechs? What's next? Donuts that summon donuts? Mmmmm.",
    "health": 3,
    "id": "GVG_006",
    "mechanics": [
      "AURA"
    ],
    "name": "Mechwarper",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Your Mechs cost (1) less.",
    "type": "MINION"
  },
  {
    "artist": "Aleksi Briclot",
    "attack": 7,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 7,
    "dbfId": 1939,
    "elite": true,
    "flavor": "Mimiron likes to take the Flame Leviathan out on some sweet joyrides.",
    "health": 7,
    "id": "GVG_007",
    "mechanics": [
      "TOPDECK"
    ],
    "name": "Flame Leviathan",
    "race": "MECHANICAL",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "When you draw this, deal 2 damage to all characters.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 1938,
    "flavor": "This is what happens when you allow goblins to be priests.",
    "id": "GVG_008",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Lightbomb",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Deal damage to each minion equal to its Attack.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 1937,
    "flavor": "Shadowbomber does her job, but she's kind of phoning it in at this point.",
    "health": 1,
    "id": "GVG_009",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Shadowbomber",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Deal 3 damage to each hero.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 1935,
    "flavor": "Velen wrote a \"Lovely Card\" for Tyrande with a picture of the Deeprun Tram that said \"I Choo-Choo-Choose you!\"",
    "id": "GVG_010",
    "name": "Velen's Chosen",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "SPELLPOWER"
    ],
    "set": "GVG",
    "text": "Give a minion +2/+4 and <b>Spell Damage +1</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 1936,
    "flavor": "After the debacle of the Gnomish World Enlarger, gnomes are wary of size-changing inventions.",
    "health": 2,
    "id": "GVG_011",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Shrinkmeister",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "GVG",
    "targetingArrowText": "Give -2 Attack this turn.",
    "text": "<b>Battlecry:</b> Give a minion -2 Attack this turn.",
    "type": "MINION"
  },
  {
    "artist": "Jesper Ejsing",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 1933,
    "flavor": "\"Light it up!\" - Command given to both Lightwardens and Goblins holding Flamecannons.",
    "id": "GVG_012",
    "name": "Light of the Naaru",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "GVG",
    "text": "Restore #3 Health. If the target is still damaged, summon a Lightwarden.",
    "type": "SPELL"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 1932,
    "flavor": "After a while, you don't see the cogs and sprockets. All you see is a robot, a spider tank, a deathray...",
    "health": 2,
    "id": "GVG_013",
    "name": "Cogmaster",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Has +2 Attack while you have a Mech.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 6,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 1931,
    "elite": true,
    "flavor": "Vol'jin is a shadow hunter, which is like a shadow priest except more voodoo.",
    "health": 2,
    "id": "GVG_014",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Vol'jin",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "LEGENDARY",
    "set": "GVG",
    "targetingArrowText": "Swap Health.",
    "text": "<b>Battlecry:</b> Swap Health with another minion.",
    "type": "MINION"
  },
  {
    "artist": "Jeff Haynie",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 2093,
    "flavor": "If you're looking to make an \"Emo\" deck, this card is perfect!",
    "id": "GVG_015",
    "name": "Darkbomb",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Deal $3 damage.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan & Gabor",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 1982,
    "flavor": "So reaver. Much fel. Wow.",
    "health": 8,
    "id": "GVG_016",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Fel Reaver",
    "race": "MECHANICAL",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Whenever your opponent plays a card, remove the top 3 cards of your deck.",
    "type": "MINION"
  },
  {
    "artist": "E.M. Gist",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 2094,
    "flavor": "Real hunters tame hungry crabs.",
    "id": "GVG_017",
    "name": "Call Pet",
    "rarity": "RARE",
    "set": "GVG",
    "text": "Draw a card.\nIf it's a Beast, it costs (4) less.",
    "type": "SPELL"
  },
  {
    "artist": "Carl Critchlow",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 2172,
    "flavor": "Her sister is the Mistress of Pane who sells windows and shower doors.",
    "health": 4,
    "id": "GVG_018",
    "mechanics": [
      "LIFESTEAL"
    ],
    "name": "Mistress of Pain",
    "race": "DEMON",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Lifesteal</b>",
    "type": "MINION"
  },
  {
    "artist": "Kerem Beyit",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 1985,
    "flavor": "Virtually every member of the pro demon lobby is a warlock. Weird.",
    "id": "GVG_019",
    "name": "Demonheart",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Deal $5 damage to a minion.  If it's a friendly Demon, give it +5/+5 instead.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Gaser",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 1997,
    "flavor": "The box says, \"New and improved, with 200% more fel!\"",
    "health": 5,
    "id": "GVG_020",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Fel Cannon",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "GVG",
    "text": "At the end of your turn, deal 2 damage to a non-Mech minion.",
    "type": "MINION"
  },
  {
    "artist": "Wayne Reynolds",
    "attack": 9,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 9,
    "dbfId": 1986,
    "elite": true,
    "flavor": "Mal'Ganis doesn't like being betrayed, so if you discard him, watch out.",
    "health": 7,
    "id": "GVG_021",
    "mechanics": [
      "AURA"
    ],
    "name": "Mal'Ganis",
    "race": "DEMON",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "IMMUNE"
    ],
    "set": "GVG",
    "text": "Your other Demons have +2/+2.\nYour hero is <b>Immune</b>.",
    "type": "MINION"
  },
  {
    "artist": "Den",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 2095,
    "flavor": "\"Get ready to strike oil!\" - Super-cheesy battle cry",
    "id": "GVG_022",
    "mechanics": [
      "COMBO"
    ],
    "name": "Tinker's Sharpsword Oil",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Give your weapon +3 Attack. <b>Combo:</b> Give a random friendly minion +3 Attack.",
    "type": "SPELL"
  },
  {
    "artist": "Zolton Boros",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 1988,
    "flavor": "This guy is excellent at adjusting your haircut and/or height.",
    "health": 2,
    "id": "GVG_023",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Goblin Auto-Barber",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Give your weapon +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Richard Wright",
    "attack": 1,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 1989,
    "durability": 3,
    "flavor": "For tightening cogs and smashin' troggs!",
    "id": "GVG_024",
    "name": "Cogmaster's Wrench",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Has +2 Attack while you have a Mech.",
    "type": "WEAPON"
  },
  {
    "artist": "Danny Beck",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 1990,
    "flavor": "When pirates say there is no \"Eye\" in \"team,\" they are very literal about it.",
    "health": 1,
    "id": "GVG_025",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "One-eyed Cheat",
    "race": "PIRATE",
    "rarity": "RARE",
    "referencedTags": [
      "STEALTH"
    ],
    "set": "GVG",
    "text": "Whenever you summon a Pirate, gain <b>Stealth</b>.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 1991,
    "flavor": "The hardest part about doing a \"Feign Death\" convincingly is learning how to make the right smell. It takes a lot of commitment.",
    "id": "GVG_026",
    "name": "Feign Death",
    "rarity": "EPIC",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "GVG",
    "text": "Trigger all <b>Deathrattles</b> on your minions.",
    "type": "SPELL"
  },
  {
    "artist": "Brian Despain",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 1992,
    "flavor": "Mechs like learning from him because he really speaks their language.\n0110100001101001",
    "health": 2,
    "id": "GVG_027",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Iron Sensei",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "GVG",
    "text": "At the end of your turn, give another friendly Mech +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Wei Wang",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 6,
    "dbfId": 1993,
    "elite": true,
    "flavor": "Gallywix believes in supply and demand. He supplies the beatings and demands you pay up!",
    "health": 8,
    "id": "GVG_028",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Trade Prince Gallywix",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "Whenever your opponent casts a spell, gain a copy of it and give them a Coin.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 1998,
    "flavor": "\"Hey! Ancestors!\" - Ancestor's call",
    "id": "GVG_029",
    "name": "Ancestor's Call",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Put a random minion from each player's hand into the battlefield.",
    "type": "SPELL"
  },
  {
    "artist": "Eva Widermann",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 2096,
    "flavor": "It's adorable! AND OH MY GOODNESS WHY IS IT EATING MY FACE",
    "health": 2,
    "id": "GVG_030",
    "mechanics": [
      "CHOOSE_ONE",
      "TAUNT"
    ],
    "name": "Anodized Robo Cub",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Taunt</b>. <b>Choose One -</b>\n+1 Attack; or +1 Health.",
    "type": "MINION"
  },
  {
    "artist": "Efrem Palacios",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 6,
    "dbfId": 1995,
    "flavor": "Druidic recycling involves putting plastics in one bin and enemy minions in another bin.",
    "id": "GVG_031",
    "name": "Recycle",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "GVG",
    "text": "Shuffle an enemy minion into your opponent's deck.",
    "type": "SPELL"
  },
  {
    "artist": "Chris Rahn",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 2225,
    "flavor": "Likes: Hiking and the great outdoors. Dislikes: Goblin shredders and sandals. (Can’t find any that fit!).",
    "health": 4,
    "id": "GVG_032",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Grove Tender",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Choose One -</b> Give each player a Mana Crystal; or Each player draws a card.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 9,
    "dbfId": 2001,
    "flavor": "Healing: It grows on trees!",
    "id": "GVG_033",
    "name": "Tree of Life",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Restore all characters to full Health.",
    "type": "SPELL"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 7,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 6,
    "dbfId": 2002,
    "entourage": [
      "PART_007",
      "PART_006",
      "PART_005",
      "PART_001",
      "PART_003",
      "PART_002",
      "PART_004"
    ],
    "flavor": "Crushes buildings with his BEAR hands.",
    "health": 6,
    "id": "GVG_034",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Mech-Bear-Cat",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "referencedTags": [
      "SPARE_PART"
    ],
    "set": "GVG",
    "text": "Whenever this minion takes damage, add a <b>Spare Part</b> card to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Oliver Chipping",
    "attack": 9,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 7,
    "dbfId": 2003,
    "elite": true,
    "flavor": "When Malorne isn't mauling hordes of demons, he enjoys attending parties, though he prefers to go stag.",
    "health": 7,
    "id": "GVG_035",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Malorne",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "<b>Deathrattle:</b> Shuffle this minion into your deck.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan & Gabor",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 2004,
    "durability": 2,
    "flavor": "People assume that shamans control the elements, but really, they have to ask them stuff and the elements are like, \"Yeah ok, sure.\"",
    "id": "GVG_036",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Powermace",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Deathrattle:</b> Give a random friendly Mech +2/+2.",
    "type": "WEAPON"
  },
  {
    "artist": "Jim Nelson",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 2005,
    "flavor": "If you pay a little extra, you can get it in \"candy-apple red.\"",
    "health": 2,
    "id": "GVG_037",
    "mechanics": [
      "WINDFURY"
    ],
    "name": "Whirling Zap-o-matic",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Windfury</b>",
    "type": "MINION"
  },
  {
    "artist": "Warren Mahy",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 2006,
    "flavor": "Snap! This card! Pop!",
    "id": "GVG_038",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Crackle",
    "overload": 1,
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Deal $3-$6 damage. <b>Overload:</b> (1)",
    "type": "SPELL"
  },
  {
    "artist": "Guangjian Huang",
    "attack": 0,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 2007,
    "flavor": "You can usually find these at the totemist's market on Saturdays.",
    "health": 3,
    "id": "GVG_039",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Vitality Totem",
    "race": "TOTEM",
    "rarity": "RARE",
    "set": "GVG",
    "text": "At the end of your turn, restore #4 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Clint Langley",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 2008,
    "flavor": "The elements respond to anyone who calls them for a worthy cause, even if you call them by yelling, \"MRGHRGLGLGL!\"",
    "health": 5,
    "id": "GVG_040",
    "mechanics": [
      "OVERLOAD",
      "TRIGGER_VISUAL"
    ],
    "name": "Siltfin Spiritwalker",
    "overload": 1,
    "race": "MURLOC",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Whenever another friendly Murloc dies, draw a card. <b><b>Overload</b>:</b> (1)",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 6,
    "dbfId": 2009,
    "flavor": "Don't worry; we fired the person who named this card.",
    "id": "GVG_041",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Dark Wispers",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "GVG",
    "text": "<b>Choose One -</b> Summon 5 Wisps; or Give a minion +5/+5 and <b>Taunt</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Ruan Jia",
    "attack": 7,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 7,
    "dbfId": 2010,
    "elite": true,
    "flavor": "Neptulon is \"The Tidehunter\". He’s one of the four elemental lords. And he and Ragnaros get together and make really amazing saunas.",
    "health": 7,
    "id": "GVG_042",
    "mechanics": [
      "BATTLECRY",
      "OVERLOAD"
    ],
    "name": "Neptulon",
    "overload": 3,
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Add 4 random Murlocs to your hand. <b>Overload:</b> (3)",
    "type": "MINION"
  },
  {
    "artist": "Gino Whitehall",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 2011,
    "durability": 2,
    "flavor": "For the times when a regular bazooka just isn't enough.",
    "id": "GVG_043",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Glaivezooka",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Give a random friendly minion +1 Attack.",
    "type": "WEAPON"
  },
  {
    "artist": "Dany Orizio",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2012,
    "flavor": "\"What if we put guns on it?\" -Fizzblitz, staring at the spider-transportation-machine",
    "health": 4,
    "id": "GVG_044",
    "name": "Spider Tank",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 2013,
    "flavor": "The shrapnel is waaaaay worse than the explosion.",
    "id": "GVG_045",
    "name": "Imp-losion",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "GVG",
    "text": "Deal $2-$4 damage to a minion. Summon a 1/1 Imp for each damage dealt.",
    "type": "SPELL"
  },
  {
    "artist": "Seamus Gallagher",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 2014,
    "flavor": "He never sleeps.  Not even in the mighty jungle.",
    "health": 6,
    "id": "GVG_046",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "King of Beasts",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Taunt</b>. <b>Battlecry:</b> Gain +1 Attack for each other Beast you have.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 2015,
    "flavor": "Rogues can't stand it. They know you planned it! They are going to set you straight!",
    "id": "GVG_047",
    "mechanics": [
      "COMBO"
    ],
    "name": "Sabotage",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0
    },
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Destroy a random enemy minion. <b>Combo:</b> And your opponent's weapon.",
    "type": "SPELL"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 2016,
    "flavor": "Don't leave them out in the rain. In Un'Goro Crater there is a whole colony of rust-tooth leapers.",
    "health": 3,
    "id": "GVG_048",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Metaltooth Leaper",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Give your other Mechs +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 6,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 7,
    "dbfId": 2017,
    "elite": true,
    "flavor": "The Sen'jin High football team is The Gahz'rillas.",
    "health": 9,
    "id": "GVG_049",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Gahz'rilla",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "Whenever this minion takes damage, double its Attack.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 2018,
    "flavor": "Only goblins would think this was a good idea. Even they are starting to have their doubts.",
    "id": "GVG_050",
    "name": "Bouncing Blade",
    "playRequirements": {
      "REQ_MINIMUM_TOTAL_MINIONS": 1
    },
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Deal $1 damage to a random minion. Repeat until a minion dies.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler Walpole",
    "attack": 1,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 2019,
    "flavor": "Mass production of warbots was halted when it was discovered that they were accidentally being produced at \"sample size.\"",
    "health": 3,
    "id": "GVG_051",
    "mechanics": [
      "ENRAGED"
    ],
    "name": "Warbot",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Has +1 Attack while damaged.",
    "type": "MINION"
  },
  {
    "artist": "Michael Sutfin",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 7,
    "dbfId": 2020,
    "flavor": "Using this card on your enemies is one of the best things in life, according to some barbarians.",
    "id": "GVG_052",
    "name": "Crush",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Destroy a minion. If you have a damaged minion, this costs (4) less.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 5,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 6,
    "dbfId": 2021,
    "flavor": "She has three shieldbearers in her party to supply her with back ups when she gets low on durability.",
    "health": 5,
    "id": "GVG_053",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Shieldmaiden",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Gain 5 Armor.",
    "type": "MINION"
  },
  {
    "artist": "Richard Wright",
    "attack": 4,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 2022,
    "durability": 2,
    "flavor": "Simple, misguided, and incredibly dangerous. You know, like most things ogre.",
    "id": "GVG_054",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Ogre Warmaul",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "50% chance to attack the wrong enemy.",
    "type": "WEAPON"
  },
  {
    "artist": "Jesper Ejsing",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 2023,
    "flavor": "If it breaks, just kick it a couple of times while yelling \"Durn thing!\"",
    "health": 5,
    "id": "GVG_055",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Screwjank Clunker",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 17
    },
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "GVG",
    "targetingArrowText": "Give +2/+2.",
    "text": "<b>Battlecry:</b> Give a friendly Mech +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 6,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 6,
    "dbfId": 2024,
    "elite": true,
    "flavor": "The Iron Juggernaut guards Orgrimmar and has just earned the \"Employee of the Month\" award!",
    "health": 5,
    "id": "GVG_056",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Iron Juggernaut",
    "race": "MECHANICAL",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Shuffle a Mine into your opponent's deck. When drawn, it explodes for 10 damage.",
    "type": "MINION"
  },
  {
    "artist": "Jason Chan",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 2025,
    "flavor": "The walrus of Light restores EIGHT Health.",
    "id": "GVG_057",
    "name": "Seal of Light",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Restore #4 Health to your hero and gain +2 Attack this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 2026,
    "flavor": "He chooses to believe what he is programmed to believe!",
    "health": 2,
    "id": "GVG_058",
    "mechanics": [
      "DIVINE_SHIELD"
    ],
    "name": "Shielded Minibot",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 2027,
    "durability": 3,
    "flavor": "So you ripped this out of a machine, carved some runes on it, stuck it on a handle, and now it's a weapon of great divine power? Seems legit.",
    "id": "GVG_059",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Coghammer",
    "rarity": "EPIC",
    "referencedTags": [
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "set": "GVG",
    "text": "<b>Battlecry:</b> Give a random friendly minion <b>Divine Shield</b> and <b>Taunt</b>.",
    "type": "WEAPON"
  },
  {
    "artist": "Phroilan Gardner",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 2028,
    "flavor": "His specialty? Dividing things into four pieces.",
    "health": 5,
    "id": "GVG_060",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Quartermaster",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Give your Silver Hand Recruits +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Mike Hayes",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 2029,
    "flavor": "\"I'm bringing the guacamole!\" – One of the most successful (yet rare) Silver Hand rallying cries",
    "id": "GVG_061",
    "name": "Muster for Battle",
    "rarity": "RARE",
    "set": "GVG",
    "text": "Summon three 1/1 Silver Hand Recruits. Equip a 1/4 Weapon.",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "attack": 6,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 2030,
    "flavor": "Guardians used to be built out of Adamantium, but production got moved to Gadgetzan and Cobalt was cheap.",
    "health": 3,
    "id": "GVG_062",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Cobalt Guardian",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "GVG",
    "text": "Whenever you summon a Mech, gain <b>Divine Shield</b>.",
    "type": "MINION"
  },
  {
    "artist": "Tooth",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 2031,
    "elite": true,
    "flavor": "Spoiler alert: Bolvar gets melted and then sits on an ice throne and everyone forgets about him.",
    "health": 7,
    "id": "GVG_063",
    "name": "Bolvar Fordragon",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "Whenever a friendly minion dies while this is in your hand, gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2032,
    "flavor": "He pays homage to Morgl, the great murloc oracle! (Who doesn't??)",
    "health": 2,
    "id": "GVG_064",
    "name": "Puddlestomper",
    "race": "MURLOC",
    "rarity": "COMMON",
    "set": "GVG",
    "type": "MINION"
  },
  {
    "artist": "Vinod Rams",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2033,
    "flavor": "Ogres have really terrible short-term chocolate.",
    "health": 4,
    "id": "GVG_065",
    "mechanics": [
      "FORGETFUL",
      "TRIGGER_VISUAL"
    ],
    "name": "Ogre Brute",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "50% chance to attack the wrong enemy.",
    "type": "MINION"
  },
  {
    "artist": "José Ladrönn",
    "attack": 5,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 2034,
    "flavor": "He just closes his eyes and goes for it. Raarararrrarar!",
    "health": 4,
    "id": "GVG_066",
    "mechanics": [
      "FORGETFUL",
      "OVERLOAD",
      "TRIGGER_VISUAL",
      "WINDFURY"
    ],
    "name": "Dunemaul Shaman",
    "overload": 1,
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Windfury, Overload:</b> (1)\n50% chance to attack the wrong enemy.",
    "type": "MINION"
  },
  {
    "artist": "Peet Cooper",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2035,
    "flavor": "The only thing worse than smelling troggs is listening to their poetry.",
    "health": 3,
    "id": "GVG_067",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Stonesplinter Trogg",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Whenever your opponent casts a spell, gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Aleksi Briclot",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2036,
    "flavor": "He's burly because he does CrossFit.",
    "health": 5,
    "id": "GVG_068",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Burly Rockjaw Trogg",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Whenever your opponent casts a spell, gain +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Jesper Ejsing",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2037,
    "flavor": "They don't make 'em like they used to! (Because of explosions, mostly.)",
    "health": 3,
    "id": "GVG_069",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Antique Healbot",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Restore #8 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2038,
    "flavor": "He's recently recovered from being a \"scurvy dog.\"",
    "health": 4,
    "id": "GVG_070",
    "name": "Salty Dog",
    "race": "PIRATE",
    "rarity": "COMMON",
    "set": "GVG",
    "type": "MINION"
  },
  {
    "artist": "Benjamin Zhang",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2039,
    "flavor": "The message, \"If found, please return to Mulgore,\" is tattooed on his rear.",
    "health": 4,
    "id": "GVG_071",
    "name": "Lost Tallstrider",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "GVG",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 2040,
    "flavor": "Punching is its primary function. Also, its secondary function.",
    "health": 3,
    "id": "GVG_072",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Shadowboxer",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "GVG",
    "text": "Whenever a minion is healed, deal 1 damage to a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "Howard Lyon",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 2041,
    "flavor": "\"Cobra Shot\" hurts way, way, way more than \"Cobra Cuddle.\"",
    "id": "GVG_073",
    "name": "Cobra Shot",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Deal $3 damage to a minion and the enemy hero.",
    "type": "SPELL"
  },
  {
    "artist": "Jakub Kasper",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2042,
    "flavor": "They pretend to be wise and enlightened, but they mostly just hate to be left out of a secret.",
    "health": 3,
    "id": "GVG_074",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Kezan Mystic",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET"
    ],
    "set": "GVG",
    "text": "<b>Battlecry:</b> Take control of a random enemy <b>Secret</b>.",
    "type": "MINION"
  },
  {
    "artist": "Warren Mahy",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2043,
    "flavor": "If you hear someone yell, \"Cannonball!\" you're about to get wet. Or crushed.",
    "health": 3,
    "id": "GVG_075",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Ship's Cannon",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "After you summon a Pirate, deal 2 damage to a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "Ralph Horsley",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2044,
    "flavor": "How is this supposed to work?  Your enemies think, \"<i>Hey!</i> Cute sheep!\" and run over to cuddle it?",
    "health": 1,
    "id": "GVG_076",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Explosive Sheep",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Deathrattle:</b> Deal 2 damage to all minions.",
    "type": "MINION"
  },
  {
    "artist": "Josh Harris",
    "attack": 9,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 2045,
    "flavor": "The Dark Animus is evil and mysterious and huge and unable to write sentences that utilize proper grammar.",
    "health": 9,
    "id": "GVG_077",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Anima Golem",
    "race": "MECHANICAL",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "At the end of each turn, destroy this minion if it's your only one.",
    "type": "MINION"
  },
  {
    "artist": "Chris Seaman",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2046,
    "entourage": [
      "PART_007",
      "PART_006",
      "PART_005",
      "PART_001",
      "PART_003",
      "PART_002",
      "PART_004"
    ],
    "flavor": "The yetis of Chillwind Point are a source of both inspiration and savage beatings.",
    "health": 5,
    "id": "GVG_078",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Mechanical Yeti",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "referencedTags": [
      "SPARE_PART"
    ],
    "set": "GVG",
    "text": "<b>Deathrattle:</b> Give each player a <b>Spare Part.</b>",
    "type": "MINION"
  },
  {
    "artist": "Nutchapol Thitinunthakorn",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 2047,
    "flavor": "There is a factory in Tanaris for crafting force-tanks, but it only ever made two, because of cost overruns.",
    "health": 7,
    "id": "GVG_079",
    "mechanics": [
      "DIVINE_SHIELD"
    ],
    "name": "Force-Tank MAX",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Brandon Kitkouski",
    "attack": 4,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 2048,
    "flavor": "The Druids of the Fang live in the Wailing Caverns. They wear cool snake shirts and tell snake jokes and say \"bro\" a lot.",
    "health": 4,
    "id": "GVG_080",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Druid of the Fang",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Battlecry:</b> If you have a Beast, transform this minion into a 7/7.",
    "type": "MINION"
  },
  {
    "artist": "Seamus Gallagher",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2049,
    "flavor": "\"Shhh, I think I hear something.\"\n\"Ah, it's probably nothing.\" - Every Henchman",
    "health": 3,
    "id": "GVG_081",
    "mechanics": [
      "STEALTH"
    ],
    "name": "Gilblin Stalker",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Stealth</b>",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 2050,
    "entourage": [
      "PART_007",
      "PART_006",
      "PART_005",
      "PART_001",
      "PART_003",
      "PART_002",
      "PART_004"
    ],
    "flavor": "Clockwork gnomes are always asking what time it is.",
    "health": 1,
    "id": "GVG_082",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Clockwork Gnome",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "referencedTags": [
      "SPARE_PART"
    ],
    "set": "GVG",
    "text": "<b>Deathrattle:</b> Add a <b>Spare Part</b> card to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Nutchapol Thitinunthakorn",
    "attack": 5,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 2051,
    "flavor": "It's the same as the previous generation but they slapped the word \"upgraded\" on it to sell it for double.",
    "health": 5,
    "id": "GVG_083",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Upgraded Repair Bot",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 17
    },
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "GVG",
    "targetingArrowText": "Give a Mech +4 Health.",
    "text": "<b>Battlecry:</b> Give a friendly Mech +4 Health.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2052,
    "flavor": "To operate, this contraption needs a hula doll on the dashboard. Otherwise it's just a “falling machine.”",
    "health": 4,
    "id": "GVG_084",
    "mechanics": [
      "WINDFURY"
    ],
    "name": "Flying Machine",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Windfury</b>",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2053,
    "flavor": "The inventor of the Annoy-o-Tron was immediately expelled from Tinkerschool, Tinkertown, and was eventually exiled from the Eastern Kingdoms altogether.",
    "health": 2,
    "id": "GVG_085",
    "mechanics": [
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "name": "Annoy-o-Tron",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Taunt</b>\n<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Zero Yue",
    "attack": 5,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 2054,
    "flavor": "Wintergrasp Keep's only weakness!",
    "health": 5,
    "id": "GVG_086",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Siege Engine",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "GVG",
    "text": "Whenever you gain Armor, give this minion +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Jun Kang",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 2055,
    "flavor": "Goblins seldom have the patience for sniping. Most prefer lobbing explosives.",
    "health": 3,
    "id": "GVG_087",
    "name": "Steamwheedle Sniper",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Your Hero Power can target minions.",
    "type": "MINION"
  },
  {
    "artist": "Samwise",
    "attack": 6,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 2056,
    "flavor": "He didn't have the grades to get into ninja school, but his dad pulled some strings.",
    "health": 6,
    "id": "GVG_088",
    "mechanics": [
      "FORGETFUL",
      "STEALTH",
      "TRIGGER_VISUAL"
    ],
    "name": "Ogre Ninja",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Stealth</b>\n50% chance to attack the wrong enemy.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2057,
    "flavor": "\"LUMOS!\" is not what they yell. What do you think this is, Hogwarts?",
    "health": 4,
    "id": "GVG_089",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Illuminator",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET"
    ],
    "set": "GVG",
    "text": "If you control a <b>Secret</b> at the end of your turn, restore #4 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2058,
    "flavor": "Dang, Bomber, calm down.",
    "health": 4,
    "id": "GVG_090",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Madder Bomber",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Deal 6 damage randomly split between all other characters.",
    "type": "MINION"
  },
  {
    "artist": "Zero Yue",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2059,
    "flavor": "There was some hard talk between gnome magi and engineers about inventing this mech.",
    "health": 5,
    "id": "GVG_091",
    "mechanics": [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS",
      "TAUNT"
    ],
    "name": "Arcane Nullifier X-21",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Taunt</b>\nCan't be targeted by spells or Hero Powers.",
    "type": "MINION"
  },
  {
    "artist": "Jesper Ejsing",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2060,
    "flavor": "He's legitimately surprised every time he turns himself into a chicken.",
    "health": 2,
    "id": "GVG_092",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gnomish Experimenter",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Draw a card. If it's a minion, transform it into a Chicken.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 0,
    "dbfId": 2061,
    "flavor": "The engineering equivalent of a \"Kick Me\" sticker.",
    "health": 2,
    "id": "GVG_093",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Target Dummy",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2062,
    "flavor": "This robot is a lean, mean, butlerin' machine.",
    "health": 4,
    "id": "GVG_094",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Jeeves",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "GVG",
    "text": "At the end of each player's turn, that player draws until they have 3 cards.",
    "type": "MINION"
  },
  {
    "artist": "Jesper Ejsing",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2063,
    "flavor": "He’s not such a binge exploder anymore. These days, he only explodes socially.",
    "health": 4,
    "id": "GVG_095",
    "name": "Goblin Sapper",
    "rarity": "RARE",
    "set": "GVG",
    "text": "Has +4 Attack while your opponent has 6 or more cards in hand.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2064,
    "flavor": "Once upon a time, only goblins piloted shredders. These days, everyone from Doomsayer to Lorewalker Cho seems to ride one.",
    "health": 3,
    "id": "GVG_096",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Piloted Shredder",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Deathrattle:</b> Summon a random 2-Cost minion.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2065,
    "flavor": "Warlocks have the town exorcist on speed dial in case they unleash the wrong demon.",
    "health": 3,
    "id": "GVG_097",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Lil' Exorcist",
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "GVG",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Gain +1/+1 for each enemy <b>Deathrattle</b> minion.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan & Gabor",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2066,
    "flavor": "The gnomes are valiant and ready to return to their irradiated, poorly ventilated homeland!",
    "health": 4,
    "id": "GVG_098",
    "mechanics": [
      "CHARGE",
      "TAUNT"
    ],
    "name": "Gnomeregan Infantry",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "<b>Charge</b>\n<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2067,
    "flavor": "He lobbies Orgrimmar daily on behalf of bombs.",
    "health": 3,
    "id": "GVG_099",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Bomb Lobber",
    "rarity": "RARE",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Deal 4 damage to a random enemy minion.",
    "type": "MINION"
  },
  {
    "artist": "Todd Lockwood",
    "attack": 4,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 2068,
    "flavor": "\"Evil Eye Watcher of Doom\" was the original name, but marketing felt it was a bit too aggressive.",
    "health": 4,
    "id": "GVG_100",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Floating Watcher",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "Whenever your hero takes damage on your turn, gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 4,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 2069,
    "flavor": "The Scarlet Crusade is doing market research to find out if the \"Mauve Crusade\" would be better received.",
    "health": 3,
    "id": "GVG_101",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Scarlet Purifier",
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "GVG",
    "text": "<b>Battlecry:</b> Deal 2 damage to all minions with <b>Deathrattle</b>.",
    "type": "MINION"
  },
  {
    "artist": "Gabor Szikszai",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2070,
    "entourage": [
      "PART_007",
      "PART_006",
      "PART_005",
      "PART_001",
      "PART_003",
      "PART_002",
      "PART_004"
    ],
    "flavor": "Won't you take me to... Tinkertown?",
    "health": 3,
    "id": "GVG_102",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tinkertown Technician",
    "rarity": "COMMON",
    "referencedTags": [
      "SPARE_PART"
    ],
    "set": "GVG",
    "text": "<b>Battlecry:</b> If you have a Mech, gain +1/+1 and add a <b>Spare Part</b> to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Skan Srisuwan",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2071,
    "flavor": "This card is the real thing.",
    "health": 2,
    "id": "GVG_103",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Micro Machine",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "GVG",
    "text": "At the start of each turn, gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Laurel D. Austin",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2072,
    "flavor": "Hobgoblins are meeting next week to discuss union benefits.  First on the list: dental plan.",
    "health": 3,
    "id": "GVG_104",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Hobgoblin",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Whenever you play a 1-Attack minion, give it +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Michael Phillippi",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2073,
    "flavor": "The pinnacle of goblin engineering. Includes an espresso machine and foot massager.",
    "health": 4,
    "id": "GVG_105",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Piloted Sky Golem",
    "race": "MECHANICAL",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "<b>Deathrattle:</b> Summon a random 4-Cost minion.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2074,
    "flavor": "One bot's junk is another bot's AWESOME UPGRADE!",
    "health": 5,
    "id": "GVG_106",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Junkbot",
    "race": "MECHANICAL",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Whenever a friendly Mech dies, gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2075,
    "flavor": "His enhancements are gluten free!",
    "health": 2,
    "id": "GVG_107",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Enhance-o Mechano",
    "race": "MECHANICAL",
    "rarity": "EPIC",
    "referencedTags": [
      "DIVINE_SHIELD",
      "TAUNT",
      "WINDFURY"
    ],
    "set": "GVG",
    "text": "<b>Battlecry:</b> Give your other minions <b>Windfury</b>, <b>Taunt</b>, or <b>Divine Shield</b>\n<i>(at random)</i>.",
    "type": "MINION"
  },
  {
    "artist": "Ben Olson",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2076,
    "flavor": "For when you didn’t combobulate quite right the first time around.",
    "health": 2,
    "id": "GVG_108",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Recombobulator",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "GVG",
    "targetingArrowText": "Transform!",
    "text": "<b>Battlecry:</b> Transform a friendly minion into a random minion with the same Cost.",
    "type": "MINION"
  },
  {
    "artist": "Ben Olson",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2077,
    "flavor": "He is sometimes found hiding in the treasure chest in the Gurubashi Arena.",
    "health": 1,
    "id": "GVG_109",
    "mechanics": [
      "SPELLPOWER",
      "STEALTH"
    ],
    "name": "Mini-Mage",
    "rarity": "EPIC",
    "set": "GVG",
    "spellDamage": 1,
    "text": "<b>Stealth</b>\n<b>Spell Damage +1</b>",
    "type": "MINION"
  },
  {
    "artist": "Alex Garner",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 2078,
    "elite": true,
    "flavor": "MARVEL AT HIS MIGHT!",
    "health": 7,
    "id": "GVG_110",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dr. Boom",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Summon two 1/1 Boom Bots. <i>WARNING: Bots may explode.</i>",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2079,
    "elite": true,
    "flavor": "Do not push the big red button!",
    "health": 5,
    "id": "GVG_111",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Mimiron's Head",
    "race": "MECHANICAL",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "At the start of your turn, if you have at least 3 Mechs, destroy them all and form V-07-TR-0N.",
    "type": "MINION"
  },
  {
    "artist": "Michal Ivan",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2080,
    "elite": true,
    "flavor": "Mogor helped reopen the Dark Portal once. You know you're in trouble when you have to rely on an ogre.",
    "health": 6,
    "id": "GVG_112",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Mogor the Ogre",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "All minions have a 50% chance to attack the wrong enemy.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 2081,
    "elite": true,
    "flavor": "Foe reaping is really not so different from harvest reaping, at the end of the day.",
    "health": 9,
    "id": "GVG_113",
    "name": "Foe Reaper 4000",
    "race": "MECHANICAL",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "Also damages the minions next to whomever it attacks.",
    "type": "MINION"
  },
  {
    "artist": "Christopher Moeller",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 2082,
    "elite": true,
    "flavor": "When Sneed was defeated in the Deadmines, his shredder was sold at auction to an anonymous buyer. (Probably Hogger.)",
    "health": 7,
    "id": "GVG_114",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Sneed's Old Shredder",
    "race": "MECHANICAL",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "<b>Deathrattle:</b> Summon a random <b>Legendary</b> minion.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan & Gabor",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2083,
    "elite": true,
    "entourage": [
      "PART_007",
      "PART_006",
      "PART_005",
      "PART_003",
      "PART_002",
      "PART_001",
      "PART_004"
    ],
    "flavor": "Something about power converters.",
    "health": 7,
    "id": "GVG_115",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Toshley",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "SPARE_PART"
    ],
    "set": "GVG",
    "text": "<b>Battlecry and Deathrattle:</b> Add a <b>Spare Part</b> card to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 9,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 2084,
    "elite": true,
    "flavor": "He was obsessed with explosives until he discovered knitting. Now he yells, “SWEATERS! MORE SWEATERS!”",
    "health": 7,
    "id": "GVG_116",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Mekgineer Thermaplugg",
    "race": "MECHANICAL",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "Whenever an enemy minion dies, summon a Leper Gnome.",
    "type": "MINION"
  },
  {
    "artist": "Luke Mancini",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2085,
    "elite": true,
    "flavor": "Gazlowe was voted \"Most Likely to Explode\" in high school.",
    "health": 6,
    "id": "GVG_117",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Gazlowe",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "Whenever you cast a 1-mana spell, add a random Mech to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 2086,
    "elite": true,
    "flavor": "He keeps earthinating the countryside despite attempts to stop him.",
    "health": 6,
    "id": "GVG_118",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Troggzor the Earthinator",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "Whenever your opponent casts a spell, summon a Burly Rockjaw Trogg.",
    "type": "MINION"
  },
  {
    "artist": "Jomaro Kindred",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2087,
    "elite": true,
    "flavor": "PREPARE PARTY SERVOS FOR IMMEDIATE DEPLOYMENT.",
    "health": 4,
    "id": "GVG_119",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Blingtron 3000",
    "race": "MECHANICAL",
    "rarity": "LEGENDARY",
    "set": "GVG",
    "text": "<b>Battlecry:</b> Equip a random weapon for each player.",
    "type": "MINION"
  },
  {
    "artist": "Ralph Horsley",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2088,
    "elite": true,
    "flavor": "It's hard to make a living as a hunter in a world where beasts instantly reappear minutes after you kill them.",
    "health": 3,
    "id": "GVG_120",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Hemet Nesingwary",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 20
    },
    "rarity": "LEGENDARY",
    "set": "GVG",
    "targetingArrowText": "Destroy a Beast.",
    "text": "<b>Battlecry:</b> Destroy a Beast.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 12,
    "dbfId": 2233,
    "flavor": "He and Mountain Giant don't get along.",
    "health": 8,
    "id": "GVG_121",
    "name": "Clockwork Giant",
    "race": "MECHANICAL",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Costs (1) less for each card in your opponent's hand.",
    "type": "MINION"
  },
  {
    "artist": "Jonboy Meyers",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 2234,
    "flavor": "Bane of spellcasters and spelling bees everywhere.",
    "health": 5,
    "id": "GVG_122",
    "mechanics": [
      "ADJACENT_BUFF",
      "AURA"
    ],
    "name": "Wee Spellstopper",
    "rarity": "EPIC",
    "set": "GVG",
    "text": "Adjacent minions can't be targeted by spells or Hero Powers.",
    "type": "MINION"
  },
  {
    "artist": "Phil Saunders",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 2249,
    "flavor": "The inventor of the goblin shredder is involved in several patent disputes with the inventor of the soot spewer.",
    "health": 3,
    "id": "GVG_123",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Soot Spewer",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "GVG",
    "spellDamage": 1,
    "targetingArrowText": "Give <b>Spell Damage +2</b>.",
    "text": "<b>Spell Damage +1</b>",
    "type": "MINION"
  },
  {
    "cardClass": "WARRIOR",
    "collectible": true,
    "dbfId": 7,
    "health": 30,
    "id": "HERO_01",
    "name": "Garrosh Hellscream",
    "rarity": "FREE",
    "set": "CORE",
    "type": "HERO"
  },
  {
    "cardClass": "WARRIOR",
    "collectible": true,
    "dbfId": 2828,
    "health": 30,
    "id": "HERO_01a",
    "name": "Magni Bronzebeard",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "cardClass": "SHAMAN",
    "collectible": true,
    "dbfId": 1066,
    "health": 30,
    "id": "HERO_02",
    "name": "Thrall",
    "rarity": "FREE",
    "set": "CORE",
    "type": "HERO"
  },
  {
    "cardClass": "SHAMAN",
    "collectible": true,
    "dbfId": 40183,
    "health": 30,
    "id": "HERO_02a",
    "name": "Morgl the Oracle",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "cardClass": "ROGUE",
    "collectible": true,
    "dbfId": 930,
    "health": 30,
    "id": "HERO_03",
    "name": "Valeera Sanguinar",
    "rarity": "FREE",
    "set": "CORE",
    "type": "HERO"
  },
  {
    "cardClass": "ROGUE",
    "collectible": true,
    "dbfId": 40195,
    "health": 30,
    "id": "HERO_03a",
    "name": "Maiev Shadowsong",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "cardClass": "PALADIN",
    "collectible": true,
    "dbfId": 671,
    "health": 30,
    "id": "HERO_04",
    "name": "Uther Lightbringer",
    "rarity": "FREE",
    "set": "CORE",
    "type": "HERO"
  },
  {
    "cardClass": "PALADIN",
    "collectible": true,
    "dbfId": 2827,
    "health": 30,
    "id": "HERO_04a",
    "name": "Lady Liadrin",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "cardClass": "PALADIN",
    "collectible": true,
    "dbfId": 46116,
    "health": 30,
    "id": "HERO_04b",
    "name": "Prince Arthas",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "cardClass": "HUNTER",
    "collectible": true,
    "dbfId": 31,
    "health": 30,
    "id": "HERO_05",
    "name": "Rexxar",
    "rarity": "FREE",
    "set": "CORE",
    "type": "HERO"
  },
  {
    "cardClass": "HUNTER",
    "collectible": true,
    "dbfId": 2826,
    "health": 30,
    "id": "HERO_05a",
    "name": "Alleria Windrunner",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "cardClass": "DRUID",
    "collectible": true,
    "dbfId": 274,
    "health": 30,
    "id": "HERO_06",
    "name": "Malfurion Stormrage",
    "rarity": "FREE",
    "set": "CORE",
    "type": "HERO"
  },
  {
    "cardClass": "DRUID",
    "collectible": true,
    "dbfId": 50484,
    "health": 30,
    "id": "HERO_06a",
    "name": "Lunara",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "cardClass": "WARLOCK",
    "collectible": true,
    "dbfId": 893,
    "health": 30,
    "id": "HERO_07",
    "name": "Gul'dan",
    "rarity": "FREE",
    "set": "CORE",
    "type": "HERO"
  },
  {
    "cardClass": "WARLOCK",
    "collectible": true,
    "dbfId": 47817,
    "health": 30,
    "id": "HERO_07a",
    "name": "Nemsy Necrofizzle",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "cardClass": "WARLOCK",
    "collectible": true,
    "dbfId": 51834,
    "health": 30,
    "id": "HERO_07b",
    "name": "Mecha-Jaraxxus",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "cardClass": "MAGE",
    "collectible": true,
    "dbfId": 637,
    "health": 30,
    "id": "HERO_08",
    "name": "Jaina Proudmoore",
    "rarity": "FREE",
    "set": "CORE",
    "type": "HERO"
  },
  {
    "cardClass": "MAGE",
    "collectible": true,
    "dbfId": 2829,
    "health": 30,
    "id": "HERO_08a",
    "name": "Medivh",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "cardClass": "MAGE",
    "collectible": true,
    "dbfId": 39117,
    "health": 30,
    "id": "HERO_08b",
    "name": "Khadgar",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "cardClass": "PRIEST",
    "collectible": true,
    "dbfId": 813,
    "health": 30,
    "id": "HERO_09",
    "name": "Anduin Wrynn",
    "rarity": "FREE",
    "set": "CORE",
    "type": "HERO"
  },
  {
    "cardClass": "PRIEST",
    "collectible": true,
    "dbfId": 41887,
    "health": 30,
    "id": "HERO_09a",
    "name": "Tyrande Whisperwind",
    "rarity": "EPIC",
    "set": "HERO_SKINS",
    "type": "HERO"
  },
  {
    "artist": "James Ryman",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 42327,
    "flavor": "There's no such thing as a free boot.",
    "health": 3,
    "id": "ICC_018",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Phantom Freebooter",
    "race": "PIRATE",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Gain stats equal to your weapon's.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 42328,
    "flavor": "What do you mean there's no such thing as \"Skelemancy?\" But \"Dinomancy\" is ok?",
    "health": 2,
    "id": "ICC_019",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Skelemancer",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Deathrattle:</b> If it's your opponent's turn, summon an 8/8 Skeleton.",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 42320,
    "flavor": "We've all been there after a night of one-too-many funnel cakes.",
    "health": 1,
    "id": "ICC_021",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Exploding Bloatbat",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Deathrattle:</b>\nDeal 2 damage to all enemy minions.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 0,
    "dbfId": 42338,
    "flavor": "On land, a group of penguins is called a \"waddle.\"",
    "health": 1,
    "id": "ICC_023",
    "name": "Snowflipper Penguin",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 42422,
    "flavor": "Don't give up, skeleton!",
    "health": 2,
    "id": "ICC_025",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Rattling Rascal",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "[x]<b>Battlecry:</b> Summon a\n5/5 Skeleton.\n<b>Deathrattle:</b> Summon one\nfor your opponent.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 42438,
    "flavor": "WARNING: Skeletons will NOT explode.",
    "health": 4,
    "id": "ICC_026",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Grim Necromancer",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Summon two 1/1 Skeletons.",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 42439,
    "flavor": "The bone drake brings all the dragons to the yard. He would teach you, but you have no cards.",
    "health": 5,
    "id": "ICC_027",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Bone Drake",
    "race": "DRAGON",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Deathrattle:</b> Add a random Dragon to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 42440,
    "flavor": "Bring valor to Odyn's halls, Champion!",
    "health": 4,
    "id": "ICC_028",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Sunborne Val'kyr",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Give adjacent minions +2 Health.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 42442,
    "flavor": "You get a sword! And you get a sword! Everybody gets a sword!",
    "health": 5,
    "id": "ICC_029",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Cobalt Scalebane",
    "race": "DRAGON",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "At the end of your turn, give another random friendly minion +3 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Nicola Saviori",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 42445,
    "flavor": "Honestly, he howls during the day, too.",
    "health": 4,
    "id": "ICC_031",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Night Howler",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "Whenever this minion takes\ndamage, gain +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 42446,
    "flavor": "Eight times the death of regular-mancers.",
    "health": 5,
    "id": "ICC_032",
    "mechanics": [
      "POISONOUS"
    ],
    "name": "Venomancer",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Poisonous</b>",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 5,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 42462,
    "flavor": "To be honest, he was kind of a jerk even BEFORE he was bitten by that ghoul.",
    "health": 2,
    "id": "ICC_034",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Arrogant Crusader",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Deathrattle:</b> If it's your opponent's turn, summon a 2/2 Ghoul.",
    "type": "MINION"
  },
  {
    "artist": "Evgeniy Dlinnov",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 42467,
    "flavor": "Original name was Tubular Protector, but this seems more bodacious.",
    "health": 1,
    "id": "ICC_038",
    "mechanics": [
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "name": "Righteous Protector",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Taunt</b>\n<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimalinov",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 42469,
    "flavor": "In his court, Uther is judge, jury, AND executioner…",
    "id": "ICC_039",
    "name": "Dark Conviction",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "Set a minion's Attack and Health to 3.",
    "type": "SPELL"
  },
  {
    "artist": "Dave Allsop",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 42471,
    "flavor": "This spell was originally designed to help warlocks clean up their hard drives.",
    "id": "ICC_041",
    "name": "Defile",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "Deal $1 damage to all minions. If any die, cast this again.",
    "type": "SPELL"
  },
  {
    "artist": "Dan Scott",
    "attack": 5,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 42615,
    "flavor": "Her clothing? Pure silk, of course.",
    "health": 3,
    "id": "ICC_047",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Fatespinner",
    "rarity": "EPIC",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "ICECROWN",
    "text": "<b>Choose a Deathrattle (Secretly) -</b> Deal 3 damage to all minions; or Give them +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 42648,
    "flavor": "What doesn't kill you makes you toxic.",
    "id": "ICC_049",
    "name": "Toxic Arrow",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "referencedTags": [
      "POISONOUS"
    ],
    "set": "ICECROWN",
    "text": "Deal $2 damage to a minion. If it survives, give it <b>Poisonous</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 42649,
    "flavor": "O, what a tangled web we weave, hoping spiders dodge the cleave.",
    "id": "ICC_050",
    "name": "Webweave",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "COMMON",
    "referencedTags": [
      "POISONOUS"
    ],
    "set": "ICECROWN",
    "text": "Summon two 1/2 <b>Poisonous</b> Spiders.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 1,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 42651,
    "flavor": "The Druid awoke from troubling dreams to find herself transformed into a giant spider.",
    "health": 2,
    "id": "ICC_051",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Druid of the Swarm",
    "rarity": "RARE",
    "referencedTags": [
      "POISONOUS",
      "TAUNT"
    ],
    "set": "ICECROWN",
    "text": "<b>Choose One -</b> Transform into a 1/2 with <b>Poisonous</b>; or a 1/5 with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 42652,
    "flavor": "He's a very literal dog.",
    "id": "ICC_052",
    "name": "Play Dead",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0,
      "REQ_TARGET_WITH_DEATHRATTLE": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "ICECROWN",
    "text": "Trigger a friendly minion's <b>Deathrattle</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Alexandrov",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 6,
    "dbfId": 42656,
    "flavor": "In the past, plagues were spread by mice or fleas. These days they're spread by elves.",
    "id": "ICC_054",
    "name": "Spreading Plague",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "ICECROWN",
    "text": "Summon a 1/5 Scarab with <b>Taunt</b>. If your opponent has more minions, cast this again.",
    "type": "SPELL"
  },
  {
    "artist": "Kerem Beyit",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 42658,
    "flavor": "Cleans even the toughest clogs with just a flick of the wrist!",
    "id": "ICC_055",
    "mechanics": [
      "LIFESTEAL"
    ],
    "name": "Drain Soul",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Lifesteal</b>\nDeal $2 damage\nto a minion.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 42676,
    "flavor": "We'll thaw you out when we find a cure!",
    "id": "ICC_056",
    "name": "Cryostasis",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "ICECROWN",
    "text": "Give a minion +3/+3 and <b>Freeze</b> it.",
    "type": "SPELL"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 42678,
    "flavor": "He may be frozen fish, but he fights fresh!",
    "health": 2,
    "id": "ICC_058",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Brrrloc",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "race": "MURLOC",
    "rarity": "COMMON",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "ICECROWN",
    "targetingArrowText": "Freeze an enemy.",
    "text": "<b>Battlecry:</b> <b>Freeze</b> an enemy.",
    "type": "MINION"
  },
  {
    "artist": "Ian Ameling",
    "attack": 4,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 42698,
    "flavor": "Excuse me. Your mountain is on fire.",
    "health": 3,
    "id": "ICC_062",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Mountainfire Armor",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Deathrattle:</b> If it's your opponent's turn,\ngain 6 Armor.",
    "type": "MINION"
  },
  {
    "artist": "Joe Wilson",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 42700,
    "durability": 2,
    "flavor": "For the close shave that you've always wanted. Caution: Very sharp.",
    "id": "ICC_064",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Blood Razor",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Battlecry and Deathrattle:</b>\nDeal 1 damage to all minions.",
    "type": "WEAPON"
  },
  {
    "artist": "Brian Despain",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 42712,
    "flavor": "\"Oil,\" \"Rail,\" and \"Blubber\" were already taken.",
    "health": 5,
    "id": "ICC_065",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Bone Baron",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Deathrattle:</b> Add two 1/1 Skeletons to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 42714,
    "flavor": "It's pronounced VERY GHOUL. Don't let anyone tell you different.",
    "health": 1,
    "id": "ICC_067",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Vryghoul",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "[x]<b>Deathrattle:</b> If it's your\nopponent's turn,\nsummon a 2/2 Ghoul.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 1,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 42716,
    "flavor": "Ice <i>Walker</i> you say? He doesn't have feet!",
    "health": 3,
    "id": "ICC_068",
    "name": "Ice Walker",
    "race": "ELEMENTAL",
    "rarity": "RARE",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "ICECROWN",
    "text": "Your Hero Power also <b><b>Freeze</b>s</b> the target.",
    "type": "MINION"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 42718,
    "flavor": "Wearing purple after the holidays? GHASTLY!",
    "health": 6,
    "id": "ICC_069",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ghastly Conjurer",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Add a 'Mirror Image' spell to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Ben Thompson",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 42735,
    "durability": 4,
    "flavor": "These sorrows cut deep.",
    "id": "ICC_071",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Light's Sorrow",
    "rarity": "EPIC",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "ICECROWN",
    "text": "After a friendly minion loses <b>Divine Shield</b>, gain +1 Attack.",
    "type": "WEAPON"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 4,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 42743,
    "flavor": "He's deathspicable.",
    "health": 5,
    "id": "ICC_075",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Despicable Dreadlord",
    "race": "DEMON",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "At the end of your turn, deal 1 damage to all enemy minions.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 42747,
    "flavor": "One of our more snowbally cards.",
    "id": "ICC_078",
    "mechanics": [
      "FREEZE"
    ],
    "name": "Avalanche",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Freeze</b> a minion and deal $3 damage to adjacent ones.",
    "type": "SPELL"
  },
  {
    "artist": "Phil Saunders",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 42748,
    "flavor": "It's rude to gnash with your mouth open.",
    "id": "ICC_079",
    "name": "Gnash",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "Give your hero +3 Attack this turn. Gain 3 Armor.",
    "type": "SPELL"
  },
  {
    "artist": "Luca Zontini",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 42750,
    "flavor": "Sometimes, the best defense is an offensive troll.",
    "health": 8,
    "id": "ICC_081",
    "mechanics": [
      "OVERLOAD",
      "TAUNT"
    ],
    "name": "Drakkari Defender",
    "overload": 3,
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Taunt</b>\n<b>Overload:</b> (3)",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 42754,
    "flavor": "It's like déjà vu, times two.",
    "id": "ICC_082",
    "mechanics": [
      "SECRET"
    ],
    "name": "Frozen Clone",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Secret:</b> After your opponent plays a minion, add two copies of it to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 42756,
    "flavor": "Jaina was never good at keeping up apprentices.",
    "health": 2,
    "id": "ICC_083",
    "mechanics": [
      "AURA"
    ],
    "name": "Doomed Apprentice",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "Your opponent's spells cost (1) more.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 10,
    "dbfId": 42759,
    "flavor": "Ghouls in the pipe, five by five.",
    "id": "ICC_085",
    "name": "Ultimate Infestation",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "[x]Deal $5 damage. Draw\n5 cards. Gain 5 Armor.\nSummon a 5/5 Ghoul.",
    "type": "SPELL"
  },
  {
    "artist": "Evgeniy Dlinnov",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 8,
    "dbfId": 42760,
    "flavor": "The secret is in the frosting.",
    "id": "ICC_086",
    "name": "Glacial Mysteries",
    "playRequirements": {
      "REQ_SECRET_ZONE_CAP_FOR_NON_SECRET": 0
    },
    "rarity": "EPIC",
    "referencedTags": [
      "SECRET"
    ],
    "set": "ICECROWN",
    "text": "Put one of each <b>Secret</b> from your deck into\nthe battlefield.",
    "type": "SPELL"
  },
  {
    "artist": "Sean McNally",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 5,
    "dbfId": 42762,
    "flavor": "The Silver Hand recruits shuddered in terror when they saw the dreaded totem of the Hexxer: A tiny little snowman, impaled with pins.",
    "health": 7,
    "id": "ICC_088",
    "mechanics": [
      "FREEZE",
      "TAUNT"
    ],
    "name": "Voodoo Hexxer",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Taunt</b>\n<b>Freeze</b> any character damaged by this minion.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 42763,
    "flavor": "Glow fish, war fish... blow fish, more fish...",
    "id": "ICC_089",
    "name": "Ice Fishing",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "Draw 2 Murlocs from your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Steve Prescott",
    "attack": 8,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 11,
    "dbfId": 42765,
    "flavor": "This minion goes all the way to 11!",
    "health": 8,
    "id": "ICC_090",
    "name": "Snowfury Giant",
    "race": "ELEMENTAL",
    "rarity": "EPIC",
    "referencedTags": [
      "OVERLOAD"
    ],
    "set": "ICECROWN",
    "text": "Costs (1) less for each Mana Crystal you've <b><b>Overload</b>ed</b> this game.",
    "type": "MINION"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 42766,
    "flavor": "I got two pair, Rags and Armorsmiths. What you got?",
    "id": "ICC_091",
    "name": "Dead Man's Hand",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "Shuffle a copy of your hand into your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Luke Mancini",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 42773,
    "flavor": "This is my Runeblade. There are many like it but this one is mine.",
    "health": 1,
    "id": "ICC_092",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Acherus Veteran",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "ICECROWN",
    "targetingArrowText": "Give +1 Attack.",
    "text": "<b>Battlecry:</b> Give a friendly minion +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 42775,
    "flavor": "If you bring him 500 fish, he'll give you this sweet Kalu'ak Fishing Pole.",
    "health": 3,
    "id": "ICC_093",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tuskarr Fisherman",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "SPELLPOWER"
    ],
    "set": "ICECROWN",
    "targetingArrowText": "Give Spell Damage +1.",
    "text": "<b>Battlecry:</b> Give a friendly minion <b>Spell Damage +1</b>.",
    "type": "MINION"
  },
  {
    "artist": "J. Axer",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 42777,
    "flavor": "It's hard to keep a Shattered Sun Cleric down.",
    "health": 1,
    "id": "ICC_094",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fallen Sun Cleric",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "ICECROWN",
    "targetingArrowText": "Give +1/+1.",
    "text": "<b>Battlecry:</b> Give a friendly minion +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 42779,
    "flavor": "Smelts in his mouth, not in your hand.",
    "health": 6,
    "id": "ICC_096",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Furnacefire Colossus",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Discard all weapons from your hand and gain their stats.",
    "type": "MINION"
  },
  {
    "artist": "Phil Saunders",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 42780,
    "flavor": "I think one of the necromancers got a little carried away.",
    "health": 4,
    "id": "ICC_097",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Grave Shambler",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "Whenever your weapon is destroyed, gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 42781,
    "flavor": "She hangs out in all the tombs, but she rarely posts.",
    "health": 3,
    "id": "ICC_098",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tomb Lurker",
    "rarity": "EPIC",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "ICECROWN",
    "text": "[x]<b>Battlecry:</b> Add a random\n<b>Deathrattle</b> minion that died\nthis game to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 42782,
    "flavor": "Abomination. Emphasis on the second syllable.",
    "health": 6,
    "id": "ICC_099",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Ticking Abomination",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Deathrattle:</b> Deal 5 damage to your minions.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 42525,
    "flavor": "Snakes on a frozen plain.",
    "id": "ICC_200",
    "mechanics": [
      "SECRET"
    ],
    "name": "Venomstrike Trap",
    "rarity": "RARE",
    "referencedTags": [
      "POISONOUS"
    ],
    "set": "ICECROWN",
    "text": "<b>Secret:</b> When one of your minions is attacked, summon a 2/3 <b>Poisonous</b> Cobra.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 42560,
    "flavor": "Call it: Heads or Tailbone…",
    "id": "ICC_201",
    "name": "Roll the Bones",
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "ICECROWN",
    "text": "Draw a card.\nIf it has <b>Deathrattle</b>, cast this again.",
    "type": "SPELL"
  },
  {
    "artist": "Mike Sass",
    "attack": 5,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 42563,
    "elite": true,
    "flavor": "Among his more notable inventions: A tentacle-groomer, a plague that would wipe out all life on Azeroth, and a fidget spinner.",
    "health": 4,
    "id": "ICC_204",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Professor Putricide",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "SECRET"
    ],
    "set": "ICECROWN",
    "text": "After you play a <b>Secret</b>,\nput a random Hunter <b>Secret</b> into the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 42565,
    "flavor": "Never look a gift minion in the mouth.",
    "id": "ICC_206",
    "name": "Treachery",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "Choose a friendly minion and give it to your opponent.",
    "type": "SPELL"
  },
  {
    "artist": "Paul Kwon",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 42566,
    "flavor": "A mind is a terrible thing to waste. Seconds, anyone?",
    "id": "ICC_207",
    "name": "Devour Mind",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "Copy 3 cards in your opponent's deck and add them to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Paul Kwon",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 42574,
    "flavor": "When you're at the bottom, there's nowhere to ascend, but up.",
    "health": 2,
    "id": "ICC_210",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Shadow Ascendant",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "[x]At the end of your turn,\ngive another random\nfriendly minion +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Brom",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 42596,
    "flavor": "It takes many years of practiced study in order to fully master agony.",
    "health": 3,
    "id": "ICC_212",
    "mechanics": [
      "LIFESTEAL"
    ],
    "name": "Acolyte of Agony",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Lifesteal</b>",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 42597,
    "flavor": "What do you mean I don't get overtime pay for this?!",
    "id": "ICC_213",
    "name": "Eternal Servitude",
    "playRequirements": {
      "REQ_FRIENDLY_MINION_DIED_THIS_GAME": 0,
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "ICECROWN",
    "text": "<b>Discover</b> a friendly minion that died this game. Summon it.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 4,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 9,
    "dbfId": 42598,
    "flavor": "The original artist spent many hours with a fine chisel perfecting the facial expression for maximum tauntiness.",
    "health": 8,
    "id": "ICC_214",
    "mechanics": [
      "DEATHRATTLE",
      "LIFESTEAL",
      "TAUNT"
    ],
    "name": "Obsidian Statue",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "[x]<b>Taunt, Lifesteal</b>\n<b>Deathrattle:</b> Destroy a\n random enemy minion.",
    "type": "MINION"
  },
  {
    "artist": "Evgeniy Dlinnov",
    "attack": 4,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 7,
    "dbfId": 42633,
    "elite": true,
    "flavor": "Nobody expects the Archbishop's Benediction!",
    "health": 6,
    "id": "ICC_215",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Archbishop Benedictus",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Shuffle a copy of your opponent's deck into your deck.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 42642,
    "flavor": "The problem is that he carries those cards in his mouth.",
    "health": 6,
    "id": "ICC_218",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Howlfiend",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "Whenever this minion takes damage, discard a random card.",
    "type": "MINION"
  },
  {
    "artist": "Rafael Zanchetin",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 42663,
    "flavor": "His favorite spell is Chum Explosion.",
    "health": 1,
    "id": "ICC_220",
    "mechanics": [
      "LIFESTEAL"
    ],
    "name": "Deadscale Knight",
    "race": "MURLOC",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Lifesteal</b>",
    "type": "MINION"
  },
  {
    "artist": "Ben Thompson",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 42665,
    "flavor": "No actual leeches were harmed in the creation of this card.",
    "id": "ICC_221",
    "name": "Leeching Poison",
    "playRequirements": {
      "REQ_WEAPON_EQUIPPED": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "LIFESTEAL"
    ],
    "set": "ICECROWN",
    "text": "Give your weapon <b>Lifesteal</b>.",
    "type": "SPELL"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 42801,
    "flavor": "Guaranteed to return your weapon directly to your hand! (Wear gloves. Thick ones.)",
    "id": "ICC_233",
    "mechanics": [
      "ImmuneToSpellpower"
    ],
    "name": "Doomerang",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0,
      "REQ_WEAPON_EQUIPPED": 0
    },
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "Throw your weapon at a minion. It deals its damage, then returns to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 42804,
    "flavor": "Difficult to bottle up and sell. But it packs a punch.",
    "id": "ICC_235",
    "name": "Shadow Essence",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "Summon a 5/5 copy of a random minion in your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 1,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 42808,
    "durability": 3,
    "flavor": "A great way to end a conversation.",
    "id": "ICC_236",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Ice Breaker",
    "rarity": "RARE",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "ICECROWN",
    "text": "Destroy any <b>Frozen</b> minion damaged by this.",
    "type": "WEAPON"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 1,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 42810,
    "flavor": "He'd be a lot easier to animate if he would just stand still.",
    "health": 3,
    "id": "ICC_238",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Animated Berserker",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "After you play a minion, deal 1 damage to it.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 42819,
    "flavor": "Don't worry, he'll keep an eye on that for you.",
    "health": 3,
    "id": "ICC_240",
    "mechanics": [
      "AURA"
    ],
    "name": "Runeforge Haunter",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "During your turn, your weapon doesn't lose Durability.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 4,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 42822,
    "flavor": "Her marriage survived death, but it decayed pretty quickly after that.",
    "health": 6,
    "id": "ICC_243",
    "mechanics": [
      "AURA"
    ],
    "name": "Corpse Widow",
    "race": "BEAST",
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "ICECROWN",
    "text": "Your <b>Deathrattle</b> cards cost (2) less.",
    "type": "MINION"
  },
  {
    "artist": "Grace Liu",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 42824,
    "flavor": "They're grateful for the help, but most minions would prefer not dying in the first place.",
    "id": "ICC_244",
    "name": "Desperate Stand",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "ICECROWN",
    "text": "Give a minion \"<b>Deathrattle:</b> Return this to life with 1 Health.\"",
    "type": "SPELL"
  },
  {
    "artist": "James Ryman",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 6,
    "dbfId": 42825,
    "flavor": "\"Did I ever tell you the story of when I single-handedly took down a 29/29 C'thun?\" - Reno Jackson",
    "health": 9,
    "id": "ICC_245",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Blackguard",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "Whenever your hero is healed, deal that much damage to a random enemy minion.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 42836,
    "flavor": "He's freezing his bones off!",
    "health": 4,
    "id": "ICC_252",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Coldwraith",
    "playRequirements": {
      "REQ_FROZEN_TARGET": 0,
      "REQ_MINION_TARGET": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> If an enemy is <b>Frozen</b>, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 42909,
    "flavor": "He was just minding his business, farming corpses, when you meddling adventurers came along.",
    "health": 3,
    "id": "ICC_257",
    "mechanics": [
      "BATTLECRY",
      "DEATH_KNIGHT"
    ],
    "name": "Corpse Raiser",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "ICECROWN",
    "targetingArrowText": "Give \"Deathrattle: Resummon this minion.\"",
    "text": "[x]<b>Battlecry:</b> Give a friendly\nminion \"<b>Deathrattle:</b>\n  Resummon this minion.\"",
    "type": "MINION"
  },
  {
    "artist": "Daria Tuzova",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 42998,
    "flavor": "Powerful weaponry forged by Bronjahm, the Godfather of Souls.",
    "id": "ICC_281",
    "name": "Forge of Souls",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "Draw 2 weapons from your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 4,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 6,
    "dbfId": 43072,
    "elite": true,
    "flavor": "Most disturbing is how Moorabi covers all those frozen minions with flavored syrup.",
    "health": 4,
    "id": "ICC_289",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Moorabi",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "ICECROWN",
    "text": "Whenever another minion is <b>Frozen</b>, add a copy of it to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Glenn Rane",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 42818,
    "elite": true,
    "entourage": [
      "ICC_314t3",
      "ICC_314t2",
      "ICC_314t7",
      "ICC_314t4",
      "ICC_314t5",
      "ICC_314t6",
      "ICC_314t8",
      "ICC_314t1"
    ],
    "flavor": "\"All that I am: anger, cruelty, vengeance, 8 attack - I bestow upon you, my chosen knight.\"",
    "health": 8,
    "id": "ICC_314",
    "mechanics": [
      "TAUNT",
      "TRIGGER_VISUAL"
    ],
    "name": "The Lich King",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "[x]<b>Taunt</b>\nAt the end of your turn,\nadd a random <b>Death Knight</b>\ncard to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 4,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 8,
    "dbfId": 42630,
    "elite": true,
    "flavor": "Daddy! I think I made a Legendary!",
    "health": 6,
    "id": "ICC_405",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Rotface",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "[x]After this minion\nsurvives damage,\nsummon a random\n<b>Legendary</b> minion.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 42670,
    "flavor": "She prefers the term \"Glampire.\"",
    "health": 3,
    "id": "ICC_407",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gnomeferatu",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Remove\nthe top card of your opponent's deck.",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 1,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 42671,
    "flavor": "My Ghoul friend is back and you're gonna be in trouble.",
    "health": 4,
    "id": "ICC_408",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Val'kyr Soulclaimer",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "[x]After this minion\nsurvives damage,\nsummon a 2/2 Ghoul.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 42707,
    "flavor": "He's just exercising his right to bear arms.",
    "health": 2,
    "id": "ICC_415",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Stitched Tracker",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> <b>Discover</b> a copy of a minion in your deck.",
    "type": "MINION"
  },
  {
    "artist": "Max Grecke",
    "attack": 4,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 42711,
    "flavor": "\"Candygram.\"",
    "health": 3,
    "id": "ICC_419",
    "mechanics": [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS"
    ],
    "name": "Bearshark",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "Can't be targeted by spells or Hero Powers.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 42392,
    "flavor": "How's everyone doing? Hurt? Bleeding? Wounded? ... Excellent.",
    "health": 3,
    "id": "ICC_450",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Death Revenant",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Gain +1/+1 for each damaged minion.",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 42395,
    "flavor": "Desperately needs some alone time.",
    "health": 3,
    "id": "ICC_466",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Saronite Chain Gang",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Summon a copy of this minion.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 42394,
    "flavor": "It helps to speak really, really loud.",
    "health": 4,
    "id": "ICC_467",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Deathspeaker",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "IMMUNE"
    ],
    "set": "ICECROWN",
    "targetingArrowText": "Give Immune this turn.",
    "text": "<b>Battlecry:</b> Give a friendly minion <b>Immune</b> this turn.",
    "type": "MINION"
  },
  {
    "artist": "J. Axer",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 42398,
    "flavor": "If you ever tried to plow permafrost, you’d be wretched, too.",
    "health": 1,
    "id": "ICC_468",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Wretched Tiller",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "Whenever this minion attacks, deal 2 damage to the enemy hero.",
    "type": "MINION"
  },
  {
    "artist": "Tyler Walpole",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 42391,
    "flavor": "Stand right... there. Perfect, perfect! Now don't move.",
    "id": "ICC_469",
    "name": "Unwilling Sacrifice",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "Choose a friendly minion. Destroy it and a random enemy minion.",
    "type": "SPELL"
  },
  {
    "armor": 5,
    "artist": "Jerry Mascho",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 5,
    "dbfId": 42987,
    "elite": true,
    "flavor": "\"Do not be afraid. Approach. The dead will sleep… for now.\"",
    "health": 30,
    "id": "ICC_481",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Thrall, Deathseer",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Transform your minions into random ones that cost (2) more.",
    "type": "HERO"
  },
  {
    "artist": "Matt Dixon",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 42783,
    "flavor": "When life gives you snow…",
    "health": 3,
    "id": "ICC_700",
    "name": "Happy Ghoul",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "Costs (0) if your hero was healed this turn.",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 42784,
    "flavor": "It's as though a million Jade Idols cried out, and were suddenly silenced.",
    "health": 6,
    "id": "ICC_701",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Skulking Geist",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Destroy all\n1-Cost spells in both hands and decks.",
    "type": "MINION"
  },
  {
    "artist": "Izzy Hoover",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 42785,
    "flavor": "It's hard to put them six feet under when you're three feet tall.",
    "health": 1,
    "id": "ICC_702",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Shallow Gravedigger",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "<b>Deathrattle:</b> Add a random <b>Deathrattle</b> minion to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Ralph Horsely",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 42790,
    "flavor": "Attacks her job with unbridled enthusiasm.",
    "health": 5,
    "id": "ICC_705",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Bonemare",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "ICECROWN",
    "targetingArrowText": "Give +4/+4 and Taunt.",
    "text": "<b>Battlecry:</b> Give a friendly minion +4/+4 and <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Lars Grant-West",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 42791,
    "flavor": "He loves a good yarn.",
    "health": 5,
    "id": "ICC_706",
    "mechanics": [
      "AURA"
    ],
    "name": "Nerubian Unraveler",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "Spells cost (2) more.",
    "type": "MINION"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 42948,
    "flavor": "Enlistment in her battalion comes with several pairs of earplugs.",
    "health": 2,
    "id": "ICC_801",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Howling Commander",
    "rarity": "RARE",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Draw a <b>Divine Shield</b> minion from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 42992,
    "flavor": "We've got spirit, yes we do! We've got spirit, stolen from you!",
    "id": "ICC_802",
    "mechanics": [
      "LIFESTEAL"
    ],
    "name": "Spirit Lash",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Lifesteal</b>\nDeal $1 damage to all minions.",
    "type": "SPELL"
  },
  {
    "artist": "James Ryman",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 43022,
    "flavor": "It isn't \"grave robbing\" when there's no grave. It's just scavenging…",
    "health": 3,
    "id": "ICC_807",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Strongshell Scavenger",
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Give your <b>Taunt</b> minions +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Konstanin Turovec",
    "attack": 1,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 43025,
    "flavor": "The original fifth beetle!",
    "health": 6,
    "id": "ICC_808",
    "mechanics": [
      "TAUNT",
      "TRIGGER_VISUAL"
    ],
    "name": "Crypt Lord",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "[x]<b>Taunt</b>\nAfter you summon a minion,\n gain +1 Health.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 43028,
    "flavor": "The excruciating pain means it's working!",
    "health": 3,
    "id": "ICC_809",
    "mechanics": [
      "COMBO"
    ],
    "name": "Plague Scientist",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_FOR_COMBO": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "POISONOUS"
    ],
    "set": "ICECROWN",
    "targetingArrowText": "Give Poisonous.",
    "text": "<b>Combo:</b> Give a friendly minion <b>Poisonous</b>.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 43029,
    "flavor": "Don't fear the Arcanite Reaper.",
    "health": 3,
    "id": "ICC_810",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Deathaxe Punisher",
    "rarity": "EPIC",
    "referencedTags": [
      "LIFESTEAL"
    ],
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Give a random <b>Lifesteal</b> minion in your hand +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Gonzalo Ordonez",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 43031,
    "elite": true,
    "flavor": "She doesn't feel pity, or remorse, or fear. And she absolutely will not stop... ever, until all necromancers are dead.",
    "health": 5,
    "id": "ICC_811",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Lilian Voss",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Replace spells in your hand with random spells <i>(from your opponent's class).</i>",
    "type": "MINION"
  },
  {
    "artist": "Rafael Zanchetin",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 43051,
    "flavor": "Necromancers call it \"Meals on Wheels.\"",
    "health": 4,
    "id": "ICC_812",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Meat Wagon",
    "race": "MECHANICAL",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "[x]<b>Deathrattle:</b> Summon a\nminion from your deck\nwith less Attack than\nthis minion.",
    "type": "MINION"
  },
  {
    "artist": "Kevin Chen",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 43127,
    "flavor": "It slices, it dices, it vaporizes! The Chillblade will make a Champion out of even the lowliest gnome.",
    "health": 2,
    "id": "ICC_820",
    "mechanics": [
      "CHARGE",
      "LIFESTEAL"
    ],
    "name": "Chillblade Champion",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Charge</b>\n<b>Lifesteal</b>",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 43193,
    "flavor": "It's like déjà vu, times two.",
    "id": "ICC_823",
    "name": "Simulacrum",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "Copy the lowest Cost minion in your hand.",
    "type": "SPELL"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 6,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 7,
    "dbfId": 43245,
    "flavor": "Frosty the Bowman... was an angry hateful soul... with a fresh hewn bow and a missing nose...",
    "health": 7,
    "id": "ICC_825",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Abominable Bowman",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "[x]<b>Deathrattle:</b> Summon\na random friendly Beast\nthat died this game.",
    "type": "MINION"
  },
  {
    "armor": 5,
    "artist": "James Ryman",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 9,
    "dbfId": 43392,
    "elite": true,
    "flavor": "\"Run away. Hide in your precious keeps, behind your walls and your bodyguards. Night always falls, and shadows will fill your hallowed halls. One day, one of those shadows will be me.\"",
    "health": 30,
    "id": "ICC_827",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Valeera the Hollow",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "STEALTH"
    ],
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Gain <b>Stealth</b> until your next turn.",
    "type": "HERO"
  },
  {
    "armor": 5,
    "artist": "Jomaro Kindred",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 6,
    "dbfId": 43398,
    "elite": true,
    "flavor": "\"You were too slow, old friend. The hunt began long ago. And now... it will never end.\"",
    "health": 30,
    "id": "ICC_828",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Deathstalker Rexxar",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "[x]<b>Battlecry:</b> Deal 2 damage\nto all enemy minions.",
    "type": "HERO"
  },
  {
    "armor": 5,
    "artist": "James Ryman",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 9,
    "dbfId": 43406,
    "elite": true,
    "flavor": "\"Step forward. Confess! Once I was a mere servant of the Light. Now I alone stand in judgement.\"",
    "health": 30,
    "id": "ICC_829",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Uther of the Ebon Blade",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "LIFESTEAL"
    ],
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Equip a 5/3 <b>Lifesteal</b> weapon.",
    "type": "HERO"
  },
  {
    "armor": 5,
    "artist": "Wayne Reynolds",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 8,
    "dbfId": 43408,
    "elite": true,
    "flavor": "\"I will tell you what Velen never taught me. Whosoever stands before the Light… inevitably casts a shadow.\"",
    "health": 30,
    "id": "ICC_830",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Shadowreaper Anduin",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Destroy all minions with 5 or more Attack.",
    "type": "HERO"
  },
  {
    "armor": 5,
    "artist": "Alex Horley Orlandelli",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 10,
    "dbfId": 43415,
    "elite": true,
    "flavor": "\"Still you refuse to bend your knee? None can escape death, you old fool. And in death… all will serve me…\"",
    "health": 30,
    "id": "ICC_831",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Bloodreaver Gul'dan",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Summon all friendly Demons that died this game.",
    "type": "HERO"
  },
  {
    "armor": 5,
    "artist": "Alex Horley Orlandelli",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 7,
    "dbfId": 43417,
    "elite": true,
    "flavor": "\"Cenarius once taught me about the precarious balance between life and death. I have come to understand: there IS no balance. Death always wins.\"",
    "health": 30,
    "id": "ICC_832",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Malfurion the Pestilent",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "POISONOUS",
      "TAUNT"
    ],
    "set": "ICECROWN",
    "text": "[x]<b>Choose One -</b>\nSummon 2 <b>Poisonous</b>\nSpiders; or 2 Scarabs\nwith <b>Taunt</b>.",
    "type": "HERO"
  },
  {
    "armor": 5,
    "artist": "Glenn Rane",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 9,
    "dbfId": 43419,
    "elite": true,
    "flavor": "\"Arthas was a spoiled child, playing with toys he could neither control nor understand. Come into the cold. I will show you the true power of the Frozen Throne.\"",
    "health": 30,
    "id": "ICC_833",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Frost Lich Jaina",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "LIFESTEAL"
    ],
    "set": "ICECROWN",
    "text": "[x]<b>Battlecry:</b> Summon a\n3/6 Water Elemental.\nYour Elementals have\n<b>Lifesteal</b> this game.",
    "type": "HERO"
  },
  {
    "armor": 5,
    "artist": "Greg Staples",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 8,
    "dbfId": 43423,
    "elite": true,
    "flavor": "\"You dare to challenge me? Come! Draw your last breath - and then, you are mine.\"",
    "health": 30,
    "id": "ICC_834",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Scourgelord Garrosh",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "<b>Battlecry</b>: Equip a 4/3 Shadowmourne that also damages adjacent minions.",
    "type": "HERO"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 9,
    "dbfId": 43439,
    "elite": true,
    "flavor": "The viziers of Azjol-Nerub released Hadronox as a last-ditch effort to hold back the Lich King. They did so by VERY carefully scooping him up in a LARGE newspaper and releasing him.",
    "health": 7,
    "id": "ICC_835",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Hadronox",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "ICECROWN",
    "text": "<b>Deathrattle:</b> Summon your <b>Taunt</b> minions that\ndied this game.",
    "type": "MINION"
  },
  {
    "artist": "Eric Braddock",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 1,
    "dbfId": 43502,
    "flavor": "Is it cold in here or is it just Sindragosa?",
    "id": "ICC_836",
    "name": "Breath of Sindragosa",
    "playRequirements": {
      "REQ_MINIMUM_ENEMY_MINIONS": 1
    },
    "rarity": "COMMON",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "ICECROWN",
    "text": "Deal $2 damage to a random enemy minion and <b>Freeze</b> it.",
    "type": "SPELL"
  },
  {
    "artist": "Mike Azevedo",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 43505,
    "flavor": "Brrr, it's cold in here. Let's hope she doesn't have an Auctioneer!",
    "id": "ICC_837",
    "name": "Bring It On!",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "Gain 10 Armor. Reduce the Cost of minions in your opponent's hand by (2).",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 8,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 8,
    "dbfId": 43506,
    "elite": true,
    "flavor": "\"I recognize your effort but I think your magic still has room for improvement.\" - Sindragosa after taking a class on giving constructive feedback.",
    "health": 8,
    "id": "ICC_838",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Sindragosa",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Summon two 0/1 Frozen Champions.",
    "type": "MINION"
  },
  {
    "artist": "Greg Staples",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 43064,
    "elite": true,
    "flavor": "As a young blood-princess she learned the proper way for a lady to curtsy, how to address fellow members of royalty, and how to bite them.",
    "health": 6,
    "id": "ICC_841",
    "mechanics": [
      "LIFESTEAL"
    ],
    "name": "Blood-Queen Lana'thel",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "[x]<b>Lifesteal</b>\nHas +1 Attack for each\ncard you've discarded\nthis game.",
    "type": "MINION"
  },
  {
    "artist": "A.J. Nazzaro",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 45308,
    "flavor": "Once you both get comfortable, darkness is actually pretty snuggly.",
    "id": "ICC_849",
    "name": "Embrace Darkness",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "[x]Choose an enemy minion.\nAt the start of your turn,\ngain control of it.",
    "type": "SPELL"
  },
  {
    "artist": "Matthew O'Connor",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 45338,
    "durability": 2,
    "flavor": "It's tacky to call it \"Shadeblade.\"",
    "id": "ICC_850",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Shadowblade",
    "rarity": "RARE",
    "referencedTags": [
      "IMMUNE"
    ],
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Your hero is <b>Immune</b> this turn.",
    "type": "WEAPON"
  },
  {
    "artist": "Vladimir Kafanov",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 45340,
    "elite": true,
    "flavor": "Three Princes stand before you. This one wants to buff his brothers.",
    "health": 2,
    "id": "ICC_851",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Prince Keleseth",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> If your deck has no 2-Cost cards, give all minions in your deck +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 45341,
    "elite": true,
    "flavor": "Three Princes stand before you. This one wants to copy others.",
    "health": 3,
    "id": "ICC_852",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Prince Taldaram",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE_AND_NO_3_COST_CARD_IN_DECK": 0
    },
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "targetingArrowText": "Transform into a copy.",
    "text": "<b>Battlecry:</b> If your deck has no 3-Cost cards, transform into a 3/3 copy of a minion.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 45342,
    "elite": true,
    "flavor": "Three Princes stand before you. This one devours one after another.",
    "health": 4,
    "id": "ICC_853",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Prince Valanar",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "LIFESTEAL",
      "TAUNT"
    ],
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> If your deck has no 4-Cost cards, gain <b>Lifesteal</b> and <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 45366,
    "elite": true,
    "entourage": [
      "ICC_314t2",
      "ICC_314t3",
      "ICC_314t4",
      "ICC_314t5",
      "ICC_314t7",
      "ICC_314t8",
      "ICC_314t6",
      "ICC_314t1"
    ],
    "flavor": "There must always be a Lick King.",
    "health": 2,
    "id": "ICC_854",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Arfus",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "<b>Deathrattle:</b> Add a random <b>Death Knight</b> card to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Marcelo Vignali",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 45377,
    "flavor": "Don't be fooled, that polar bear's the one in charge.",
    "health": 4,
    "id": "ICC_855",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Hyldnir Frostrider",
    "rarity": "COMMON",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> <b>Freeze</b> your other minions.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 45378,
    "flavor": "Spells offer twice the moisture wicking of cotton.",
    "health": 4,
    "id": "ICC_856",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Spellweaver",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "spellDamage": 2,
    "text": "<b>Spell Damage +2</b>",
    "type": "MINION"
  },
  {
    "artist": "Tooth",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 45392,
    "elite": true,
    "flavor": "He's so hot right now.",
    "health": 7,
    "id": "ICC_858",
    "mechanics": [
      "DIVINE_SHIELD",
      "TRIGGER_VISUAL"
    ],
    "name": "Bolvar, Fireblood",
    "rarity": "LEGENDARY",
    "set": "ICECROWN",
    "text": "<b>Divine Shield</b>\nAfter a friendly minion loses <b>Divine Shield</b>, gain +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Ian Ameling",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 45307,
    "flavor": "An eye for an eye, and a ghoul for a ghoul.",
    "health": 3,
    "id": "ICC_900",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Necrotic Geist",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "Whenever one of your other minions dies, summon a 2/2 Ghoul.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 45309,
    "flavor": "Drakkari sorceresses have the irritating habit of repeating themselves at the end of every sentence. Every sentence.",
    "health": 5,
    "id": "ICC_901",
    "mechanics": [
      "AURA"
    ],
    "name": "Drakkari Enchanter",
    "rarity": "EPIC",
    "set": "ICECROWN",
    "text": "Your end of turn effects trigger twice.",
    "type": "MINION"
  },
  {
    "artist": "Chris Rahn",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 45314,
    "flavor": "He's a mind breaker, dream taker, ghoul trainer, don't you mess around with him.",
    "health": 5,
    "id": "ICC_902",
    "name": "Mindbreaker",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "Hero Powers are disabled.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 45321,
    "flavor": "Have some! This drink is to die for!",
    "health": 1,
    "id": "ICC_903",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Sanguine Reveler",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "ICECROWN",
    "targetingArrowText": "Destroy a friendly minion.",
    "text": "<b>Battlecry:</b> Destroy a friendly minion and gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Nicola Saviori",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 45328,
    "flavor": "It's minions like these that give normal, law-abiding skeletons a bad rap.",
    "health": 1,
    "id": "ICC_904",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Wicked Skeleton",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Battlecry:</b> Gain +1/+1 for each minion that died this turn.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 45329,
    "flavor": "Queen Lana'thel insists on one of these, fried, every morning for breakfast.",
    "health": 4,
    "id": "ICC_905",
    "mechanics": [
      "LIFESTEAL"
    ],
    "name": "Bloodworm",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "text": "<b>Lifesteal</b>",
    "type": "MINION"
  },
  {
    "artist": "Sam Nielsen",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 6,
    "dbfId": 45975,
    "flavor": "It turns out you CAN take it with you.",
    "health": 5,
    "id": "ICC_910",
    "mechanics": [
      "COMBO"
    ],
    "name": "Spectral Pillager",
    "playRequirements": {
      "REQ_TARGET_FOR_COMBO": 0
    },
    "rarity": "EPIC",
    "set": "ICECROWN",
    "targetingArrowText": "Deal 1 damage for each other card played this turn.",
    "text": "[x]<b>Combo:</b> Deal damage equal\nto the number of other cards\nyou've played this turn.",
    "type": "MINION"
  },
  {
    "artist": "Jesper Esjing",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 46101,
    "flavor": "\"What are your strengths?\" the interviewer asked. \"Well,\" she replied, \"I'm really good at keening.\"",
    "health": 5,
    "id": "ICC_911",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Keening Banshee",
    "rarity": "RARE",
    "set": "ICECROWN",
    "text": "Whenever you play a card, remove the top 3 cards of your deck.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 46102,
    "flavor": "Her extensive collection of corpses includes one of nearly every type.  She'd love for you to join it.",
    "health": 3,
    "id": "ICC_912",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Corpsetaker",
    "rarity": "EPIC",
    "referencedTags": [
      "DIVINE_SHIELD",
      "LIFESTEAL",
      "TAUNT",
      "WINDFURY"
    ],
    "set": "ICECROWN",
    "text": "[x]<b>Battlecry:</b> Gain <b>Taunt</b> if your\ndeck has a <b>Taunt</b> minion.\nRepeat for <b>Divine Shield</b>,\n<b>Lifesteal</b>, <b>Windfury</b>.",
    "type": "MINION"
  },
  {
    "artist": "Jesper Esjing",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 46103,
    "flavor": "The love she shares seems to go nowhere. Now she's lost her Light, tosses and turns, she can't sleep at night...",
    "health": 1,
    "id": "ICC_913",
    "mechanics": [
      "DIVINE_SHIELD",
      "SPELLPOWER"
    ],
    "name": "Tainted Zealot",
    "rarity": "COMMON",
    "set": "ICECROWN",
    "spellDamage": 1,
    "text": "<b>Divine Shield</b>\n<b>Spell Damage +1</b>",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 39160,
    "flavor": "\"I know some new tricks, a lot of good tricks. I will show them to you. Medivh will not mind at all if I do.\"",
    "howToEarn": "Unlocked in the Menagerie, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    "id": "KAR_004",
    "mechanics": [
      "SECRET"
    ],
    "name": "Cat Trick",
    "rarity": "RARE",
    "referencedTags": [
      "STEALTH"
    ],
    "set": "KARA",
    "text": "<b>Secret:</b> After your opponent casts a spell, summon a 4/2 Panther with <b>Stealth</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 39481,
    "flavor": "\"Goodness! What… abundant drool you have.\"",
    "health": 1,
    "howToEarn": "Unlocked in the Opera, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Opera, in One Night in Karazhan.",
    "id": "KAR_005",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Kindly Grandmother",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "<b>Deathrattle:</b> Summon a 3/2 Big Bad Wolf.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 39492,
    "flavor": "She's practically GIVING your secrets away!",
    "health": 4,
    "howToEarn": "Unlocked in the Parlor, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    "id": "KAR_006",
    "name": "Cloaked Huntress",
    "rarity": "COMMON",
    "referencedTags": [
      "SECRET"
    ],
    "set": "KARA",
    "text": "Your <b>Secrets</b> cost (0).",
    "type": "MINION"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 1,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 1,
    "dbfId": 39169,
    "flavor": "His idol is the Green Hills of Stranglethorn, and he won't shut up about it.",
    "health": 1,
    "howToEarn": "Unlocked in the Menagerie, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    "id": "KAR_009",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Babbling Book",
    "rarity": "RARE",
    "set": "KARA",
    "text": "<b>Battlecry:</b> Add a random Mage spell to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Luke Mancini",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 39477,
    "flavor": "Originally joined to be Arcanagos’ Templar, but has to admit that ordering pizza has become waaaay easier.",
    "health": 3,
    "howToEarn": "Unlocked in the Menagerie, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    "id": "KAR_010",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Nightbane Templar",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, summon two 1/1 Whelps.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 39476,
    "flavor": "Alas poor Annoy-o-Tron! A fellow of infinite jest, of most excellent fancy!",
    "health": 2,
    "howToEarn": "Unlocked in the Opera, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Opera, in One Night in Karazhan.",
    "id": "KAR_011",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Pompous Thespian",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Rafael Zanchetin",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 39468,
    "flavor": "Even better than a hot shower with vigorous scrubbing!",
    "howToEarn": "Unlocked in the Menagerie, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    "id": "KAR_013",
    "name": "Purify",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "SILENCE"
    ],
    "set": "KARA",
    "text": "<b>Silence</b> a friendly minion. Draw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Rafael Zanchetin",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 39190,
    "flavor": "You can easily defeat her by either dealing 4 damage, or dropping a house on her.",
    "health": 4,
    "howToEarn": "Unlocked in the Opera, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Opera, in One Night in Karazhan.",
    "id": "KAR_021",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Wicked Witchdoctor",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "Whenever you cast a spell, summon a random basic Totem.",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasper",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 39197,
    "flavor": "This is what happens when you tell Khadgar to set the table.",
    "howToEarn": "Unlocked in the Opera, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Opera, in One Night in Karazhan.",
    "id": "KAR_025",
    "name": "Kara Kazham!",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "COMMON",
    "set": "KARA",
    "text": "Summon a 1/1 Candle, 2/2 Broom, and 3/3 Teapot.",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 39495,
    "flavor": "Form ranks! Everyone into the King's Tuskarr Defense!",
    "howToEarn": "Unlocked in the Parlor, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    "id": "KAR_026",
    "name": "Protect the King!",
    "playRequirements": {
      "REQ_MINIMUM_ENEMY_MINIONS": 1,
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "KARA",
    "text": "For each enemy minion, summon a 1/1 Pawn with <b>Taunt</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 39417,
    "durability": 4,
    "flavor": "A fool and his bane are soon parted.",
    "howToEarn": "Unlocked in the Menagerie, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    "id": "KAR_028",
    "name": "Fool's Bane",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "Unlimited attacks each turn. Can't attack heroes.",
    "type": "WEAPON"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 39433,
    "flavor": "Oh man! Runic omelettes are the best!",
    "health": 2,
    "howToEarn": "Unlocked in the Menagerie, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    "id": "KAR_029",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Runic Egg",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "<b>Deathrattle:</b> Draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 39207,
    "flavor": "You have to admit, they make a cute couple.",
    "health": 3,
    "howToEarn": "Unlocked in the Parlor, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    "id": "KAR_030a",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Pantry Spider",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "<b>Battlecry:</b> Summon a\n1/3 Spider.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 39210,
    "flavor": "His favorites are classic tragedies like \"The Hobbit\" and \"Grendel\".",
    "health": 6,
    "howToEarn": "Unlocked in the Spire, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Spire, in One Night in Karazhan.",
    "id": "KAR_033",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Book Wyrm",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND": 0,
      "REQ_TARGET_MAX_ATTACK": 3
    },
    "race": "DRAGON",
    "rarity": "RARE",
    "set": "KARA",
    "targetingArrowText": "Destroy an enemy minion with 3 or less Attack.",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, destroy an enemy minion with 3 or less Attack.",
    "type": "MINION"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 39442,
    "flavor": "Now that's a world champion cheesecake!",
    "health": 6,
    "howToEarn": "Unlocked in the Parlor, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    "id": "KAR_035",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Priest of the Feast",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "Whenever you cast a spell, restore #3 Health to\nyour hero.",
    "type": "MINION"
  },
  {
    "artist": "Alex Aleksandrov",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 39215,
    "flavor": "He used to get work as a Spatial Anomaly, but he got tired of having his polarity reversed.",
    "health": 1,
    "howToEarn": "Unlocked in the Parlor, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    "id": "KAR_036",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Arcane Anomaly",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "Whenever you cast a spell, give this minion\n+1 Health.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 39489,
    "flavor": "He mostly watches light romantic comedies.",
    "health": 6,
    "howToEarn": "Unlocked in the Menagerie, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    "id": "KAR_037",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Avian Watcher",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET",
      "TAUNT"
    ],
    "set": "KARA",
    "text": "<b>Battlecry:</b> If you control a <b>Secret</b>, gain +1/+1\nand <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Jerry Mascho",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 39465,
    "flavor": "He really enjoys lurking and gets a lot of job satisfaction out of it.",
    "health": 3,
    "howToEarn": "Unlocked in the Opera, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Opera, in One Night in Karazhan.",
    "id": "KAR_041",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Moat Lurker",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "set": "KARA",
    "targetingArrowText": "Destroy a minion.",
    "text": "<b>Battlecry:</b> Destroy a minion. <b>Deathrattle:</b> Resummon it.",
    "type": "MINION"
  },
  {
    "artist": "Sean McNally",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 39453,
    "elite": true,
    "flavor": "Moroes runs an army of stewards, but still ends up inflating the balloons himself.",
    "health": 1,
    "howToEarn": "Unlocked in the Parlor, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    "id": "KAR_044",
    "mechanics": [
      "STEALTH",
      "TRIGGER_VISUAL"
    ],
    "name": "Moroes",
    "rarity": "LEGENDARY",
    "set": "KARA",
    "text": "<b>Stealth</b>\nAt the end of your turn, summon a 1/1 Steward.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 4,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 6,
    "dbfId": 39439,
    "flavor": "Do <i>NOT</i> call it a \"horse\".",
    "health": 4,
    "howToEarn": "Unlocked in the Parlor, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    "id": "KAR_057",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ivory Knight",
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "KARA",
    "text": "[x]<b>Battlecry:</b> <b>Discover</b> a spell.\nRestore Health to your hero\nequal to its Cost.",
    "type": "MINION"
  },
  {
    "artist": "Wei Wang",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 39225,
    "elite": true,
    "flavor": "The Curator guards Azeroth’s deadliest creatures, but it’s secretly terrified of squirrels.",
    "health": 6,
    "howToEarn": "Unlocked in the Menagerie, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    "id": "KAR_061",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "The Curator",
    "race": "MECHANICAL",
    "rarity": "LEGENDARY",
    "set": "KARA",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Draw a Beast, Dragon, and Murloc from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Ralph Horsley",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 39554,
    "flavor": "She can tell you all about the history of people not STANDING IN THE GREEN BEAM!",
    "health": 3,
    "howToEarn": "Unlocked in the Spire, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Spire, in One Night in Karazhan.",
    "id": "KAR_062",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Netherspite Historian",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "KARA",
    "text": "<b>Battlecry:</b> If you're holding a Dragon, <b>Discover</b>\na Dragon.",
    "type": "MINION"
  },
  {
    "artist": "Ralph Horsley",
    "attack": 1,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 39694,
    "durability": 3,
    "flavor": "They'll be MUCH easier to use once they add the spirit<i>thumb</i>.",
    "howToEarn": "Unlocked in the Spire, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Spire, in One Night in Karazhan.",
    "id": "KAR_063",
    "name": "Spirit Claws",
    "rarity": "COMMON",
    "referencedTags": [
      "SPELLPOWER"
    ],
    "set": "KARA",
    "text": "[x]Has +2 Attack while you\nhave <b>Spell Damage</b>.",
    "type": "WEAPON"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 5,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 6,
    "dbfId": 39696,
    "flavor": "Please? Can I keep him? I promise to clean his cage <i>every day</i>.",
    "health": 5,
    "howToEarn": "Unlocked in the Menagerie, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    "id": "KAR_065",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Menagerie Warden",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 20
    },
    "rarity": "COMMON",
    "set": "KARA",
    "targetingArrowText": "Summon a copy.",
    "text": "<b>Battlecry:</b> Choose a friendly Beast. Summon a copy of it.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 1,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 39698,
    "flavor": "Was almost named \"Swashb-AAAARRHHH-gler\"",
    "health": 1,
    "howToEarn": "Unlocked in the Opera, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Opera, in One Night in Karazhan.",
    "id": "KAR_069",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Swashburglar",
    "race": "PIRATE",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "<b>Battlecry:</b> Add a random card to your hand <i>(from your opponent's class).</i>",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 39700,
    "flavor": "Yeah, sure. That Ragnaros \"fell off the back of a truck\".",
    "health": 6,
    "howToEarn": "Unlocked in the Spire, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Spire, in One Night in Karazhan.",
    "id": "KAR_070",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ethereal Peddler",
    "rarity": "RARE",
    "set": "KARA",
    "text": "<b>Battlecry:</b> If you're holding any cards from another class, reduce their Cost by (2).",
    "type": "MINION"
  },
  {
    "artist": "Daria Tuzova",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 39712,
    "flavor": "They bill this as a popular resort attraction, but they try and get your money up front.",
    "howToEarn": "Unlocked in the Parlor, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    "id": "KAR_073",
    "name": "Maelstrom Portal",
    "rarity": "RARE",
    "set": "KARA",
    "text": "Deal $1 damage to all enemy minions. Summon a random\n1-Cost minion.",
    "type": "SPELL"
  },
  {
    "artist": "Evgeniy Zaqumyenny",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 6,
    "dbfId": 39714,
    "flavor": "Ain't no party like a Moonglade party ‘cause a Moonglade party got bears.",
    "howToEarn": "Unlocked in the Spire, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Spire, in One Night in Karazhan.",
    "id": "KAR_075",
    "name": "Moonglade Portal",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "KARA",
    "text": "Restore #6 Health. Summon a random\n6-Cost minion.",
    "type": "SPELL"
  },
  {
    "artist": "Gustav Schmidt",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 7,
    "dbfId": 39715,
    "flavor": "Come to beautiful Firelands! Where it's <i>\"Way nicer than the Abyssal Maw!\"</i>",
    "howToEarn": "Unlocked in the Prologue, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Prologue, in One Night in Karazhan.",
    "id": "KAR_076",
    "name": "Firelands Portal",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "KARA",
    "text": "Deal $5 damage. Summon a random\n5-Cost minion.",
    "type": "SPELL"
  },
  {
    "artist": "Jimmy Lo",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 39716,
    "flavor": "What's Millhouse Manastorm doing in Silvermoon?",
    "howToEarn": "Unlocked in the Opera, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Opera, in One Night in Karazhan.",
    "id": "KAR_077",
    "name": "Silvermoon Portal",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "KARA",
    "text": "Give a minion +2/+2. Summon a random\n2-Cost minion.",
    "type": "SPELL"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 39740,
    "flavor": "Malchezaar used to have an imp named Dobby working for him, but there was a tragic accident.",
    "health": 3,
    "howToEarn": "Unlocked in the Spire, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Spire, in One Night in Karazhan.",
    "id": "KAR_089",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Malchezaar's Imp",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "Whenever you discard a card, draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Nate Bowden",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 39747,
    "flavor": "Come to beautiful Ironforge! Where irons are forged and the forges are iron!",
    "howToEarn": "Unlocked in the Spire, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Spire, in One Night in Karazhan.",
    "id": "KAR_091",
    "name": "Ironforge Portal",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "Gain 4 Armor.\nSummon a random\n4-Cost minion.",
    "type": "SPELL"
  },
  {
    "artist": "Sean McNally",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 39767,
    "flavor": "\"Magus Medivh sir, I've brought the flaming balloons, as you requested.\"",
    "health": 3,
    "howToEarn": "Unlocked in the Spire, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Spire, in One Night in Karazhan.",
    "id": "KAR_092",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Medivh's Valet",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE_AND_MINIMUM_FRIENDLY_SECRETS": 1
    },
    "rarity": "COMMON",
    "referencedTags": [
      "SECRET"
    ],
    "set": "KARA",
    "targetingArrowText": "Deal 3 damage.",
    "text": "<b>Battlecry:</b> If you control a <b>Secret</b>, deal 3 damage.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 39822,
    "flavor": "For a proper setting, place the deadly fork <i>after</i> the salad fork, but <i>before</i> the dinner fork.",
    "health": 2,
    "howToEarn": "Unlocked in the Parlor, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    "id": "KAR_094",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Deadly Fork",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "<b>Deathrattle:</b> Add a 3/2 weapon to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 39839,
    "flavor": "The Murloc is taking the picture.",
    "health": 3,
    "howToEarn": "Unlocked in the Menagerie, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    "id": "KAR_095",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Zoobot",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "<b>Battlecry:</b> Give a random friendly Beast, Dragon, and Murloc +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Joe Madureira & Grace Liu",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 39840,
    "elite": true,
    "flavor": "He was super excited to acquire Gorehowl at a garage sale!  Then super disappointed to find out it was a foam reproduction.",
    "health": 6,
    "howToEarn": "Unlocked in the Spire, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Spire, in One Night in Karazhan.",
    "id": "KAR_096",
    "mechanics": [
      "START_OF_GAME"
    ],
    "name": "Prince Malchezaar",
    "race": "DEMON",
    "rarity": "LEGENDARY",
    "set": "KARA",
    "text": "[x]<b>Start of Game:</b>\nAdd 5 extra <b>Legendary</b>\nminions to your deck.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 39841,
    "elite": true,
    "flavor": "If you think the party's great now, just wait 'til he invites the orcs over!",
    "health": 7,
    "howToEarn": "Unlocked in the Spire, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Spire, in One Night in Karazhan.",
    "id": "KAR_097",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Medivh, the Guardian",
    "rarity": "LEGENDARY",
    "set": "KARA",
    "text": "<b>Battlecry:</b> Equip Atiesh, Greatstaff of the Guardian.",
    "type": "MINION"
  },
  {
    "artist": "Garrett Hanna",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 39941,
    "elite": true,
    "flavor": "He used to play every part, until Moroes confiscated his Orb of Deception.",
    "health": 4,
    "howToEarn": "Unlocked in the Opera, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Opera, in One Night in Karazhan.",
    "id": "KAR_114",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Barnes",
    "rarity": "LEGENDARY",
    "set": "KARA",
    "text": "<b>Battlecry:</b> Summon a 1/1 copy of a random minion in your deck.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 39374,
    "flavor": "B4 is a nice place to visit, but he wouldn't want to live there.",
    "health": 4,
    "howToEarn": "Unlocked in the Opera, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Opera, in One Night in Karazhan.",
    "id": "KAR_204",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Onyx Bishop",
    "rarity": "RARE",
    "set": "KARA",
    "text": "<b>Battlecry:</b> Summon a friendly minion that died this game.",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 39380,
    "flavor": "From the secret research labs of the Swiss Army.",
    "health": 3,
    "howToEarn": "Unlocked in the Parlor, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    "id": "KAR_205",
    "mechanics": [
      "InvisibleDeathrattle"
    ],
    "name": "Silverware Golem",
    "rarity": "RARE",
    "set": "KARA",
    "text": "If you discard this minion, summon it.",
    "type": "MINION"
  },
  {
    "artist": "Daria Tuzova",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 39350,
    "flavor": "Once upon a midnight restive, Medivh pondered, feeling festive!",
    "health": 2,
    "howToEarn": "Unlocked in the Prologue, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Prologue, in One Night in Karazhan.",
    "id": "KAR_300",
    "name": "Enchanted Raven",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "KARA",
    "type": "MINION"
  },
  {
    "artist": "Garrett Hanna",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 39269,
    "flavor": "Just between us, if things get tight the Menagerie Magician position will probably be the first to go.",
    "health": 4,
    "howToEarn": "Unlocked in the Menagerie, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Menagerie, in One Night in Karazhan.",
    "id": "KAR_702",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Menagerie Magician",
    "rarity": "COMMON",
    "set": "KARA",
    "text": "<b>Battlecry:</b> Give a random friendly Beast, Dragon, and Murloc +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 39491,
    "flavor": "He’s really just a Blacksmith, but he thought the fancy title would bring in more business.",
    "health": 2,
    "howToEarn": "Unlocked in the Parlor, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Parlor, in One Night in Karazhan.",
    "id": "KAR_710",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Arcanosmith",
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "KARA",
    "text": "<b>Battlecry:</b> Summon a 0/5 minion with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 12,
    "dbfId": 39426,
    "flavor": "Claims to be drawn to Karazhan because of the ley lines. Actually, just loves Moroes’ cooking.",
    "health": 8,
    "howToEarn": "Unlocked in the Opera, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Opera, in One Night in Karazhan.",
    "id": "KAR_711",
    "name": "Arcane Giant",
    "rarity": "EPIC",
    "set": "KARA",
    "text": "[x]Costs (1) less for each spell\nyou've cast this game.",
    "type": "MINION"
  },
  {
    "artist": "Eric Braddock",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 39313,
    "flavor": "She’s much more cheerful after losing the ‘n’ in her name.",
    "health": 3,
    "howToEarn": "Unlocked in the Spire, in One Night in Karazhan.",
    "howToEarnGolden": "Crafting unlocked in the Spire, in One Night in Karazhan.",
    "id": "KAR_712",
    "mechanics": [
      "AURA"
    ],
    "name": "Violet Illusionist",
    "rarity": "COMMON",
    "referencedTags": [
      "IMMUNE"
    ],
    "set": "KARA",
    "text": "During your turn, your hero is <b>Immune</b>.",
    "type": "MINION"
  },
  {
    "artist": "Richard Wright",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 2874,
    "flavor": "Why does a forgotten torch turn into a roaring torch with no provocation?  It's one of life's many mysteries.",
    "howToEarn": "Unlocked by starting the League of Explorers adventure.",
    "howToEarnGolden": "Can be crafted after starting the League of Explorers adventure.",
    "id": "LOE_002",
    "name": "Forgotten Torch",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "LOE",
    "text": "Deal $3 damage. Shuffle a 'Roaring Torch' into your deck that deals 6 damage.",
    "type": "SPELL"
  },
  {
    "artist": "Benjamin Zhang",
    "attack": 6,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 5,
    "dbfId": 2875,
    "flavor": "Despite the name, he's a solid conjurer.",
    "health": 3,
    "howToEarn": "Unlocked in Uldaman, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    "id": "LOE_003",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ethereal Conjurer",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "LOE",
    "text": "<b>Battlecry: Discover</b> a spell.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 1,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 2878,
    "flavor": "He is forever cursing the kids who climb on the rails and the evil archeologists who animate the exhibits.",
    "health": 2,
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_006",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Museum Curator",
    "rarity": "COMMON",
    "referencedTags": [
      "DEATHRATTLE",
      "DISCOVER"
    ],
    "set": "LOE",
    "text": "<b>Battlecry: Discover</b> a <b>Deathrattle</b> card.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 2879,
    "flavor": "This is what happens when Rafaam stubs his toe unexpectedly.",
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_007",
    "name": "Curse of Rafaam",
    "rarity": "COMMON",
    "set": "LOE",
    "text": "Give your opponent a 'Cursed!' card.\nWhile they hold it, they take 2 damage on their turn.",
    "type": "SPELL"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 7,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 7,
    "dbfId": 2881,
    "flavor": "No obsidian is safe around the Obsidian Destroyer!",
    "health": 7,
    "howToEarn": "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "id": "LOE_009",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Obsidian Destroyer",
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "LOE",
    "text": "At the end of your turn, summon a 1/1 Scarab with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Bernie Kang",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 2882,
    "flavor": "It could be worse.  It could be a Snake Pit.",
    "health": 1,
    "howToEarn": "Unlocked in The Ruined City, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    "id": "LOE_010",
    "mechanics": [
      "POISONOUS"
    ],
    "name": "Pit Snake",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "LOE",
    "text": "<b>Poisonous</b>",
    "type": "MINION"
  },
  {
    "artist": "Tyson Murphy",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2883,
    "elite": true,
    "flavor": "Reno is a four-time winner of the 'Best Accessorized Explorer' award.",
    "health": 6,
    "howToEarn": "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "id": "LOE_011",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Reno Jackson",
    "rarity": "LEGENDARY",
    "set": "LOE",
    "text": "<b>Battlecry:</b> If your deck has no duplicates, fully heal your hero.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 2884,
    "flavor": "After the guild broke up, he could no longer raid the tombs.",
    "health": 4,
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_012",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Tomb Pillager",
    "rarity": "COMMON",
    "set": "LOE",
    "text": "<b>Deathrattle:</b> Add a Coin to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Cole Eastburn",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 2888,
    "flavor": "He's a very hungry elemental.",
    "health": 6,
    "howToEarn": "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "id": "LOE_016",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Rumbling Elemental",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "referencedTags": [
      "BATTLECRY"
    ],
    "set": "LOE",
    "text": "After you play a <b>Battlecry</b> minion, deal 2 damage to a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 2889,
    "flavor": "U da man!  No, U da man!",
    "health": 4,
    "howToEarn": "Unlocked in Uldaman, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    "id": "LOE_017",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Keeper of Uldaman",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "LOE",
    "targetingArrowText": "Change to 3/3.",
    "text": "<b>Battlecry:</b> Set a minion's Attack and Health to 3.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "attack": 1,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 2890,
    "flavor": "Sure, they're ugly, but they live in tunnels.  You try your beauty routine without natural light.",
    "health": 3,
    "howToEarn": "Unlocked in Uldaman, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    "id": "LOE_018",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Tunnel Trogg",
    "rarity": "COMMON",
    "referencedTags": [
      "OVERLOAD"
    ],
    "set": "LOE",
    "text": "Whenever you <b>Overload</b>, gain +1 Attack per locked Mana Crystal.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 2891,
    "flavor": "Still hunting for the ones who earthed him.",
    "health": 4,
    "howToEarn": "Unlocked in Uldaman, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    "id": "LOE_019",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Unearthed Raptor",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_DEATHRATTLE": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "LOE",
    "targetingArrowText": "Gain a Deathrattle.",
    "text": "<b>Battlecry:</b> Choose a friendly minion. Gain a copy of its <b>Deathrattle</b>.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 2892,
    "flavor": "Dang.  This card is sweet.  Almost as sweet as Dessert Camel.",
    "health": 4,
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_020",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Desert Camel",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "LOE",
    "text": "<b>Battlecry:</b> Put a 1-Cost minion from each deck into the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 2893,
    "flavor": "Five years of tap-dancing lessons are FINALLY going to pay off!",
    "howToEarn": "Unlocked in The Ruined City, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    "id": "LOE_021",
    "mechanics": [
      "SECRET"
    ],
    "name": "Dart Trap",
    "rarity": "COMMON",
    "set": "LOE",
    "text": "<b>Secret:</b> After an opposing Hero Power is used, deal $5 damage to a random enemy.",
    "type": "SPELL"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 2894,
    "flavor": "Fierce monkey.  That funky monkey.",
    "health": 4,
    "howToEarn": "Unlocked in Uldaman, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    "id": "LOE_022",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Fierce Monkey",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "LOE",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "George Davis",
    "attack": 2,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 2895,
    "flavor": "I'm offering you a bargain here!  This amazing vacuum cleaner for your soul!",
    "health": 2,
    "howToEarn": "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "id": "LOE_023",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dark Peddler",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "LOE",
    "text": "<b>Battlecry: Discover</b> a\n1-Cost card.",
    "type": "MINION"
  },
  {
    "artist": "Ryan Metcalf",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 10,
    "dbfId": 2898,
    "flavor": "Theme song by Ellie Goldfin and Blagghghlrlrl Harris.",
    "howToEarn": "Unlocked in The Ruined City, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    "id": "LOE_026",
    "name": "Anyfin Can Happen",
    "rarity": "RARE",
    "set": "LOE",
    "text": "Summon 7 Murlocs that died this game.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 2899,
    "flavor": "You have chosen poorly.",
    "howToEarn": "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "id": "LOE_027",
    "mechanics": [
      "SECRET"
    ],
    "name": "Sacred Trial",
    "rarity": "COMMON",
    "set": "LOE",
    "text": "<b>Secret:</b> After your opponent has at least 3 minions and plays another, destroy it.",
    "type": "SPELL"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2901,
    "flavor": "It's amazing what you can do with super glue!",
    "health": 1,
    "howToEarn": "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "id": "LOE_029",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Jeweled Scarab",
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "LOE",
    "text": "<b>Battlecry: Discover</b> a\n3-Cost card.",
    "type": "MINION"
  },
  {
    "artist": "Benjamin Zhang",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 2910,
    "flavor": "If she had studied harder, she would have been a C+ witch.",
    "health": 5,
    "howToEarn": "Unlocked in The Ruined City, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    "id": "LOE_038",
    "mechanics": [
      "AURA"
    ],
    "name": "Naga Sea Witch",
    "rarity": "EPIC",
    "set": "LOE",
    "text": "Your cards cost (5).",
    "type": "MINION"
  },
  {
    "artist": "Skan Srisuwan",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2911,
    "flavor": "A-1 and A-2 went nuts, when they should have gone bolts.",
    "health": 4,
    "howToEarn": "Unlocked in The Ruined City, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    "id": "LOE_039",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gorillabot A-3",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "LOE",
    "text": "<b>Battlecry:</b> If you control another Mech, <b>Discover</b> a Mech.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 2918,
    "flavor": "Deals damage when he croaks.",
    "health": 2,
    "howToEarn": "Unlocked in The Ruined City, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    "id": "LOE_046",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Huge Toad",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "LOE",
    "text": "<b>Deathrattle:</b> Deal 1 damage to a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "Turovec Konstantin",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2919,
    "flavor": "Less serious than its cousin, the Grave Spider.",
    "health": 3,
    "howToEarn": "Unlocked in Uldaman, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    "id": "LOE_047",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tomb Spider",
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "LOE",
    "text": "<b>Battlecry: Discover</b> a Beast.",
    "type": "MINION"
  },
  {
    "artist": "Benjamin Zhang",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 2922,
    "flavor": "Clever girl!",
    "health": 2,
    "howToEarn": "Unlocked in Uldaman, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    "id": "LOE_050",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Mounted Raptor",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "LOE",
    "text": "<b>Deathrattle:</b> Summon a random 1-Cost minion.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 4,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 2923,
    "flavor": "The REAL angry chicken!",
    "health": 4,
    "howToEarn": "Unlocked in The Ruined City, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    "id": "LOE_051",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Jungle Moonkin",
    "rarity": "RARE",
    "set": "LOE",
    "spellDamage": 2,
    "text": "Both players have\n<b>Spell Damage +2</b>.",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasper",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2925,
    "flavor": "If you want your wish granted, don't rub him the wrong way.",
    "health": 6,
    "howToEarn": "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "id": "LOE_053",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Djinni of Zephyrs",
    "race": "ELEMENTAL",
    "rarity": "EPIC",
    "set": "LOE",
    "text": "After you cast a spell on another friendly minion, cast a copy of it on this one.",
    "type": "MINION"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2933,
    "flavor": "He's actually a 1/1 who picked up the hammer from the last guy.",
    "health": 4,
    "howToEarn": "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "id": "LOE_061",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Anubisath Sentinel",
    "rarity": "COMMON",
    "set": "LOE",
    "text": "<b>Deathrattle:</b> Give a random friendly minion +3/+3.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 2945,
    "flavor": "This was the only job he could get after the dinosaur theme park debacle.",
    "health": 8,
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_073",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fossilized Devilsaur",
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "LOE",
    "text": "<b>Battlecry:</b> If you control a Beast, gain <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 2948,
    "elite": true,
    "flavor": "In addition to fluent Common, he also speaks fourteen dialects of 'mrgl'.",
    "health": 3,
    "howToEarn": "Unlocked in The Ruined City, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    "id": "LOE_076",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Sir Finley Mrrgglton",
    "race": "MURLOC",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "LOE",
    "text": "<b>Battlecry: Discover</b> a new basic Hero Power.",
    "type": "MINION"
  },
  {
    "artist": "Sam Nielson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 2949,
    "elite": true,
    "flavor": "Contains 75% more fiber than his brother Magni!",
    "health": 4,
    "howToEarn": "Unlocked in Uldaman, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    "id": "LOE_077",
    "mechanics": [
      "AURA"
    ],
    "name": "Brann Bronzebeard",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "BATTLECRY"
    ],
    "set": "LOE",
    "text": "Your <b>Battlecries</b> trigger twice.",
    "type": "MINION"
  },
  {
    "artist": "Luke Mancini",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 2951,
    "elite": true,
    "flavor": "A large part of her job entails not mixing up the Map to the Golden Monkey with the Map to Monkey Island.",
    "health": 5,
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_079",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Elise Starseeker",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0
    },
    "rarity": "LEGENDARY",
    "set": "LOE",
    "text": "<b>Battlecry:</b> Shuffle the 'Map to the Golden Monkey'   into your deck.",
    "type": "MINION"
  },
  {
    "artist": "Jason Kang",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 2958,
    "flavor": "Sometimes it feels like it's always the same slackers that are waiting for a summon.",
    "health": 6,
    "howToEarn": "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "id": "LOE_086",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Summoning Stone",
    "rarity": "RARE",
    "set": "LOE",
    "text": "Whenever you cast a spell, summon a random minion of the same Cost.",
    "type": "MINION"
  },
  {
    "artist": "Sam Nielson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 2961,
    "flavor": "The fourth one fell off in a tragic accident.  They don't talk about it.",
    "health": 6,
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_089",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Wobbling Runts",
    "rarity": "RARE",
    "set": "LOE",
    "text": "<b>Deathrattle:</b> Summon three 2/2 Runts.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 2964,
    "elite": true,
    "flavor": "He's very good at retrieving artifacts.  From other people's museums.",
    "health": 8,
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_092",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Arch-Thief Rafaam",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "LOE",
    "text": "<b>Battlecry: Discover</b> a powerful Artifact.",
    "type": "MINION"
  },
  {
    "artist": "Alex Konstad",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 3015,
    "flavor": "It's perfectly safe as long as you remember to put in air holes.",
    "howToEarn": "Unlocked in The Ruined City, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    "id": "LOE_104",
    "name": "Entomb",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "LOE",
    "text": "Choose an enemy minion.\nShuffle it into your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Joe Wilson",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 3001,
    "flavor": "Harrison Jones was disappointed that he didn't get to be part of the League of Explorers, but his hat did.",
    "howToEarn": "Unlocked by starting the League of Explorers adventure.",
    "howToEarnGolden": "Can be crafted after starting the League of Explorers adventure.",
    "id": "LOE_105",
    "name": "Explorer's Hat",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "LOE",
    "text": "Give a minion +1/+1 and \"<b>Deathrattle:</b> Add an Explorer's Hat to your hand.\"",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 9107,
    "flavor": "Don't blink!  Don't turn your back, don't look away, and DON'T BLINK.",
    "health": 7,
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_107",
    "name": "Eerie Statue",
    "rarity": "RARE",
    "set": "LOE",
    "text": "Can’t attack unless it’s the only minion on the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 9081,
    "flavor": "Warning: Do not expose to direct sunlight.",
    "health": 4,
    "howToEarn": "Unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.",
    "id": "LOE_110",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ancient Shade",
    "rarity": "RARE",
    "set": "LOE",
    "text": "<b>Battlecry:</b> Shuffle an 'Ancient Curse' into your deck that deals 7 damage to you when drawn.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 2999,
    "flavor": "MOM! DAD! DON'T TOUCH IT! IT'S EVIL!!!!!!",
    "howToEarn": "Unlocked in Uldaman, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    "id": "LOE_111",
    "name": "Excavated Evil",
    "rarity": "RARE",
    "set": "LOE",
    "text": "Deal $3 damage to all minions.\nShuffle this card into your opponent's deck.",
    "type": "SPELL"
  },
  {
    "artist": "Andrius Matijoshius",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 7,
    "dbfId": 3007,
    "flavor": "Everyfin is cool when you're part of a murloc team!",
    "howToEarn": "Unlocked in The Ruined City, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    "id": "LOE_113",
    "name": "Everyfin is Awesome",
    "rarity": "RARE",
    "set": "LOE",
    "text": "Give your minions +2/+2.\nCosts (1) less for each Murloc you control.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 13335,
    "flavor": "Was petrified when it found out it didn't make the cut for Azerothian Idol.",
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_115",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Raven Idol",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "LOE",
    "text": "<b>Choose One -</b>\n<b>Discover</b> a minion; or <b>Discover</b> a spell.",
    "type": "SPELL"
  },
  {
    "artist": "Wayne Reynolds",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 13334,
    "flavor": "The Reliquary considers itself the equal of the League of Explorers.  The League of Explorers doesn't.",
    "health": 1,
    "howToEarn": "Unlocked in Uldaman, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in Uldaman, in the League of Explorers adventure.",
    "id": "LOE_116",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Reliquary Seeker",
    "rarity": "RARE",
    "set": "LOE",
    "text": "<b>Battlecry:</b> If you have 6 other minions, gain +4/+4.",
    "type": "MINION"
  },
  {
    "artist": "Craig Mullins",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 35025,
    "durability": 3,
    "flavor": "The Curse is that you have to listen to \"MMMBop\" on repeat.",
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_118",
    "name": "Cursed Blade",
    "rarity": "RARE",
    "set": "LOE",
    "text": "Double all damage dealt to your hero.",
    "type": "WEAPON"
  },
  {
    "artist": "Mike Sass",
    "attack": 4,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 36111,
    "flavor": "Try putting it on.  Wait, let me get my camera.",
    "health": 4,
    "howToEarn": "Unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.",
    "id": "LOE_119",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Animated Armor",
    "rarity": "RARE",
    "set": "LOE",
    "text": "Your hero can only take 1 damage at a time.",
    "type": "MINION"
  },
  {
    "artist": "Oliver Chipping",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 0,
    "dbfId": 13879,
    "flavor": "High mortality rate, from often being hugged to death.",
    "health": 1,
    "howToEarn": "Unlocked in The Ruined City, in the League of Explorers adventure.",
    "howToEarnGolden": "Crafting unlocked in The Ruined City, in the League of Explorers adventure.",
    "id": "LOEA10_3",
    "name": "Murloc Tinyfin",
    "race": "MURLOC",
    "rarity": "COMMON",
    "set": "LOE",
    "type": "MINION"
  },
  {
    "artist": "Chris Seaman",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 7,
    "dbfId": 43112,
    "flavor": "Everybody! Hit the deck!",
    "id": "LOOT_008",
    "name": "Psychic Scream",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0
    },
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "Shuffle all minions into your opponent's deck.",
    "type": "SPELL"
  },
  {
    "artist": "Steve Prescott",
    "attack": 2,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 43121,
    "flavor": "Fortunately he has an even number of fingers.",
    "health": 4,
    "id": "LOOT_013",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Vulgar Homunculus",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Deal 2 damage to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 43122,
    "flavor": "Kobolds sort books using a gooey decimal system.",
    "health": 1,
    "id": "LOOT_014",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Kobold Librarian",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Draw a card. Deal 2 damage to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 43128,
    "faction": "ALLIANCE",
    "flavor": "\"Don't worry about the fine print. Just sign here.\"",
    "id": "LOOT_017",
    "name": "Dark Pact",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "Destroy a friendly minion. Restore #4 Health to your hero.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 4,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 43133,
    "flavor": "The hook is just an accessory. He can reave just fine without it.",
    "health": 4,
    "id": "LOOT_018",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Hooked Reaver",
    "race": "DEMON",
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> If you have 15 or less Health, gain +3/+3 and <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Tyler West Studios",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 43228,
    "flavor": "What’s worse? Seeing the spider, or NOT seeing the spider, but knowing it’s somewhere in your deck?",
    "health": 4,
    "id": "LOOT_026",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fal'dorei Strider",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "[x]<b>Battlecry:</b> Shuffle 3\nAmbushes into your deck.\nWhen drawn, summon\na 4/4 Spider.",
    "type": "MINION"
  },
  {
    "artist": "Max Grecke",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 43237,
    "flavor": "They call her the candled vandal.",
    "health": 1,
    "id": "LOOT_033",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Cavern Shinyfinder",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Draw a weapon from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 4,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 43269,
    "flavor": "What is best in life? To make candle. To keep candle. To hear lamentations of candle-takers.",
    "health": 4,
    "id": "LOOT_041",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Kobold Barbarian",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "At the start of your turn, attack a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "Mike Azevedo",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 43272,
    "flavor": "A purple stone Azari carved\nFor dark hearts, craving, power-starved.\nThe first to bow, the warlock Rin,\nEmbraced the darkness, slew her kin.",
    "id": "LOOT_043",
    "mechanics": [
      "LIFESTEAL"
    ],
    "name": "Lesser Amethyst Spellstone",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Lifesteal.</b> Deal $3 damage to a minion. <i>(Take damage from your cards to upgrade.)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Luca Zontini",
    "attack": 0,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 43277,
    "durability": 2,
    "flavor": "CAUTION: DO NOT SCRATCH NOSE.",
    "id": "LOOT_044",
    "name": "Bladed Gauntlet",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "Has Attack equal to your Armor. Can't attack heroes.",
    "type": "WEAPON"
  },
  {
    "artist": "Lucas Graciano",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 43282,
    "flavor": "Make like a tree… and gain armor.",
    "id": "LOOT_047",
    "name": "Barkskin",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "Give a minion +3 Health. Gain 3 Armor.",
    "type": "SPELL"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 43284,
    "flavor": "Marketed as a \"rust-proof iron golem.\"",
    "health": 6,
    "id": "LOOT_048",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Ironwood Golem",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Taunt</b>\nCan only attack if you have 3 or more Armor.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "cardClass": "DRUID",
    "collectible": true,
    "collectionText": "Deal $2 damage to a minion. <i>(Gain 3 Armor to upgrade.)</i>",
    "cost": 1,
    "dbfId": 43288,
    "flavor": "In ancient woods, elves fought the curse\nThe demon’s shadow to disperse\nBut hatred raged and frail souls turned\nNow horned and hooved their forests burned.",
    "id": "LOOT_051",
    "name": "Lesser Jasper Spellstone",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "Deal $2 damage to a minion. @<i>(Gain 3 Armor to upgrade.)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 43294,
    "entourage": [
      "LOOT_054d",
      "LOOT_054b",
      "LOOT_054c"
    ],
    "flavor": "Three paths diverged in a darkened hall, and I –\nI took the one less traveled by,\nAnd got eaten by a slime.",
    "id": "LOOT_054",
    "name": "Branching Paths",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "[x]<b>Choose Twice -</b> Draw a\ncard; Give your minions \n+1 Attack; Gain 6 Armor.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler West Studios",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 43304,
    "flavor": "Astral kitty litter is surprisingly hard to find.",
    "health": 5,
    "id": "LOOT_056",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Astral Tiger",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> Shuffle a\n copy of this minion into your deck.",
    "type": "MINION"
  },
  {
    "artist": "Phil Saunders",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 43322,
    "flavor": "Shamans always have the firmest handshakes.",
    "id": "LOOT_060",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Crushing Hand",
    "overload": 3,
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "Deal $8 damage to a minion. <b><b>Overload</b>:</b> (3)",
    "type": "SPELL"
  },
  {
    "artist": "Dany Orizio",
    "attack": 1,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 43329,
    "entourage": [
      "CS2_052",
      "CS2_050",
      "NEW1_009",
      "CS2_051"
    ],
    "flavor": "To truly understand candles, it takes YEARS of quiet contemplation.",
    "health": 1,
    "id": "LOOT_062",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Kobold Hermit",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Choose a basic Totem. Summon it.",
    "type": "MINION"
  },
  {
    "artist": "Jason Kang",
    "cardClass": "SHAMAN",
    "collectible": true,
    "collectionText": "Summon 1 copy of a friendly minion. <i>(<b>Overload</b> 3 Mana Crystals to upgrade.)</i>",
    "cost": 7,
    "dbfId": 43331,
    "flavor": "A stone of blue, embraced with glee\nBy murloc lords beneath the sea\nSoon numberless they swarmed the shore\nFirst two, then four, then more...and more...",
    "id": "LOOT_064",
    "name": "Lesser Sapphire Spellstone",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "OVERLOAD"
    ],
    "set": "LOOTAPALOOZA",
    "text": "Summon 1 copy of a friendly minion. @<i>(<b>Overload</b> 3 Mana Crystals to upgrade.)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Andrew Hou",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 43345,
    "flavor": "His clothing is \"ratty\" in more ways than one.",
    "health": 1,
    "id": "LOOT_069",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Sewer Crawler",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Summon a 2/3 Giant Rat.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 43357,
    "flavor": "Wolves to the left and arrows to the right, here I am stuck in the middle with you.",
    "id": "LOOT_077",
    "name": "Flanking Strike",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "Deal $3 damage to a minion. Summon a 3/3 Wolf.",
    "type": "SPELL"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 43358,
    "flavor": "Can be upgraded into a Cave Lurker.",
    "health": 4,
    "id": "LOOT_078",
    "name": "Cave Hydra",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "Also damages the minions next to whomever\nthis attacks.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga & James Martin",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 43359,
    "flavor": "Not all who wander are lost. This one is lost though, for sure.",
    "id": "LOOT_079",
    "mechanics": [
      "SECRET"
    ],
    "name": "Wandering Monster",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Secret:</b> When an enemy attacks your hero, summon a 3-Cost minion as the new target.",
    "type": "SPELL"
  },
  {
    "artist": "Joe Wilson",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 43363,
    "flavor": "An emerald stone for Tauren hands\nWho sought its strength to save their lands\nTheir tribes now lost, their rage released\nWho’s hunting now? And who’s the beast?",
    "id": "LOOT_080",
    "name": "Lesser Emerald Spellstone",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "Summon two 3/3 Wolves. <i>(Play a <b>Secret</b> to upgrade.)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Trent Kaniuga & James Martin",
    "attack": 4,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 7,
    "dbfId": 43369,
    "durability": 2,
    "elite": true,
    "flavor": "Rhok'delar is ready to Rhok'de'casbah!",
    "id": "LOOT_085",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Rhok'delar",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> If your deck has no minions, fill your hand with Hunter spells.",
    "type": "WEAPON"
  },
  {
    "artist": "Luke Mancini",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 43373,
    "flavor": "Also known as \"Liquid Courage.\"",
    "id": "LOOT_088",
    "name": "Potion of Heroism",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "LOOTAPALOOZA",
    "text": "Give a minion <b>Divine Shield</b>.\nDraw a card.",
    "type": "SPELL"
  },
  {
    "artist": "Konstantin Turovec",
    "cardClass": "PALADIN",
    "collectible": true,
    "collectionText": "Summon a 2/2 Spirit with <b>Taunt</b>. <i>(Restore 3 Health to upgrade.)</i>",
    "cost": 2,
    "dbfId": 43382,
    "flavor": "In ages old, when Ancients broke\nAzari of the Legion spoke\nTo tempt the mortals: gems of power\n The weak succumbed, their souls devoured.",
    "id": "LOOT_091",
    "name": "Lesser Pearl Spellstone",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "Summon a 2/2 Spirit with <b>Taunt</b>. @<i>(Restore 3 Health to upgrade.)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Konstantin Turovec",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 43384,
    "flavor": "More personal than a text to arms.",
    "id": "LOOT_093",
    "name": "Call to Arms",
    "rarity": "EPIC",
    "referencedTags": [
      "RECRUIT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "[x]<b>Recruit</b> 3 minions that\n cost (2) or less.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 43407,
    "flavor": "Sometimes it's safer NOT to read the warning signs.",
    "id": "LOOT_101",
    "mechanics": [
      "SECRET",
      "ImmuneToSpellpower"
    ],
    "name": "Explosive Runes",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Secret:</b> After your opponent plays a minion, deal $6 damage to it and any excess to their hero.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "MAGE",
    "collectible": true,
    "collectionText": "Add 1 random Mage spell to your hand. <i>(Play 2 Elementals to upgrade.)</i>",
    "cost": 2,
    "dbfId": 43414,
    "flavor": "The final stone undid its master\nSpun into wards by nameless caster\nAzari wailed a savage roar\nNow sealed in nether, evermore.",
    "id": "LOOT_103",
    "name": "Lesser Ruby Spellstone",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "Add 1 random Mage spell to your hand. @<i>(Play 2 Elementals to upgrade.)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 0,
    "dbfId": 43420,
    "flavor": "Next turn, this is going to be AMAZING.",
    "hideStats": true,
    "id": "LOOT_104",
    "name": "Shifting Scroll",
    "playRequirements": {
      "REQ_CANNOT_PLAY_THIS": 0
    },
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "Each turn this is in your hand, transform it into a random Mage spell.",
    "type": "SPELL"
  },
  {
    "artist": "Efrem Palacios",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 5,
    "dbfId": 43424,
    "flavor": "\"Pick a card, any card. Wait! No! Not that one!\" - Last words of previous owner",
    "id": "LOOT_106",
    "name": "Deck of Wonders",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "Shuffle 5 Scrolls into your deck. When drawn, cast a random spell.",
    "type": "SPELL"
  },
  {
    "artist": "Izzy Hoover",
    "attack": 0,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 6,
    "dbfId": 43426,
    "durability": 3,
    "elite": true,
    "flavor": "PHENOMENAL ARCANE POWER…itty bitty living space.",
    "id": "LOOT_108",
    "mechanics": [
      "TRIGGER_VISUAL",
      "InvisibleDeathrattle"
    ],
    "name": "Aluneth",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "At the end of your turn, draw 3 cards.",
    "type": "WEAPON"
  },
  {
    "artist": "Phil Saunders",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 43453,
    "flavor": "Back in my day, we had to manually scorp.",
    "health": 2,
    "id": "LOOT_111",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Scorp-o-matic",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_MAX_ATTACK": 1
    },
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "targetingArrowText": "Destroy a minion with 1 or less Attack.",
    "text": "<b>Battlecry:</b> Destroy a minion with 1 or less Attack.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 43463,
    "flavor": "Takes double damage from wick-based weapons.",
    "health": 2,
    "id": "LOOT_117",
    "mechanics": [
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "name": "Wax Elemental",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Taunt</b>\n<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Nicola Saviori",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 43465,
    "flavor": "Having a furnace-mouth is really handy for a blacksmith.",
    "health": 4,
    "id": "LOOT_118",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ebon Dragonsmith",
    "race": "DRAGON",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Reduce the Cost of a random weapon in your hand by (2).",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 43469,
    "faction": "ALLIANCE",
    "flavor": "The result of centuries of terrible sanitation.",
    "health": 5,
    "id": "LOOT_122",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Corrosive Sludge",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Destroy your opponent's weapon.",
    "type": "MINION"
  },
  {
    "artist": "Jomaro Kindred",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 43473,
    "flavor": "He is a champion, with no friends. He'll keep on fighting, til the end!",
    "health": 4,
    "id": "LOOT_124",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Lone Champion",
    "rarity": "RARE",
    "referencedTags": [
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> If you control no other minions, gain <b>Taunt</b> and <b>Divine Shield</b>.",
    "type": "MINION"
  },
  {
    "artist": "Julian Del Rey",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 43474,
    "flavor": "He got that way from looking into a mirror.",
    "health": 1,
    "id": "LOOT_125",
    "mechanics": [
      "DIVINE_SHIELD",
      "POISONOUS"
    ],
    "name": "Stoneskin Basilisk",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Divine Shield</b>\n <b>Poisonous</b>",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 43483,
    "flavor": "Tyrant is such a strong word.",
    "health": 4,
    "id": "LOOT_130",
    "name": "Arcane Tyrant",
    "race": "ELEMENTAL",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "Costs (0) if you've cast a spell that costs (5) or more this turn.",
    "type": "MINION"
  },
  {
    "artist": "Anton Kagoukin",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 43485,
    "flavor": "This card really breaks out of the mold.",
    "health": 3,
    "id": "LOOT_131",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Green Jelly",
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "At the end of your turn, summon a 1/2 Ooze with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 43486,
    "flavor": "A pair of stout dwarves nearly averted the Cataclysm.",
    "health": 3,
    "id": "LOOT_132",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dragonslayer",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 24
    },
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "targetingArrowText": "Deal 6 damage.",
    "text": "<b>Battlecry:</b> Deal 6 damage to a Dragon.",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasber",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 43489,
    "flavor": "Do you want to eat an adventurer?  I want to eat an adventurer!",
    "health": 4,
    "id": "LOOT_134",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Toothy Chest",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "At the start of your turn, set this minion's Attack to 4.",
    "type": "MINION"
  },
  {
    "artist": "Ivan Fomin",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 43493,
    "faction": "ALLIANCE",
    "flavor": "The result of a tragic accident involving a Defias Thug, a Wand of Polymorph, and a bundle of Fel Lotus.",
    "health": 2,
    "id": "LOOT_136",
    "mechanics": [
      "STEALTH"
    ],
    "name": "Sneaky Devil",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Stealth</b>\nYour other minions have +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Sean McNally",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 43494,
    "flavor": "Local villagers call her \"Naps Under the Mountain.\"",
    "health": 12,
    "id": "LOOT_137",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Sleepy Dragon",
    "race": "DRAGON",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 43507,
    "flavor": "Keeps his two cents to himself.",
    "health": 6,
    "id": "LOOT_144",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Hoarding Dragon",
    "race": "DRAGON",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> Give your opponent two Coins.",
    "type": "MINION"
  },
  {
    "artist": "Nick Southham",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 43515,
    "flavor": "It likes the smell of dead things, which is curious, as it has no visible nose.",
    "health": 5,
    "id": "LOOT_149",
    "name": "Corridor Creeper",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "Costs (1) less whenever a minion dies while this is in your hand.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 43517,
    "faction": "ALLIANCE",
    "flavor": "Behold, the unstoppable power of MOSS!",
    "health": 1,
    "id": "LOOT_150",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Furbolg Mossbinder",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "targetingArrowText": "Transform a minion.",
    "text": "<b>Battlecry:</b> Transform a friendly minion into a 6/6 Elemental.",
    "type": "MINION"
  },
  {
    "artist": "Ursula Dorada",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 43523,
    "faction": "ALLIANCE",
    "flavor": "As a kid, she fought with rocks.  Now she fights with ROCK!",
    "health": 2,
    "id": "LOOT_152",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Boisterous Bard",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Give your other minions +1 Health.",
    "type": "MINION"
  },
  {
    "artist": "J. Cranford",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 43526,
    "flavor": "It's wurms all the way down.",
    "health": 7,
    "id": "LOOT_153",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Violet Wurm",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> Summon seven 1/1 Grubs.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 43528,
    "flavor": "The mole of La Mancha rides again!",
    "health": 3,
    "id": "LOOT_154",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gravelsnout Knight",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Summon a random 1-Cost minion for your opponent.",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasper",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 45195,
    "flavor": "He's always grumpy until he's eaten his first barista of the morning.",
    "health": 6,
    "id": "LOOT_161",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Carnivorous Cube",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "targetingArrowText": "Destroy a friendly minion.",
    "text": "<b>Battlecry:</b> Destroy\na friendly minion.\n<b>Deathrattle:</b> Summon 2 copies of it.",
    "type": "MINION"
  },
  {
    "artist": "J. Axer",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 45263,
    "elite": true,
    "flavor": "Love like you've never been hurt. Dance like a 1/1 is watching.",
    "health": 2,
    "id": "LOOT_165",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Sonya Shadowdancer",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "After a friendly minion dies, add a 1/1 copy of it to your hand. It costs (1).",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 45265,
    "flavor": "Fungalmancy is the easy major for those who can't cut it at Waxmancy.",
    "health": 2,
    "id": "LOOT_167",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fungalmancer",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Give adjacent minions +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Eva Wildermann",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 45269,
    "flavor": "Quoth the raven, 'Does yours cost more?'",
    "health": 2,
    "id": "LOOT_170",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Raven Familiar",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Reveal a spell in each deck. If yours costs more, draw it.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 5,
    "dbfId": 45271,
    "flavor": "“C’mon Hucklemuck. She’ll never notice if we take just one little coin.”",
    "id": "LOOT_172",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Dragon's Fury",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "Reveal a spell from your deck. Deal damage equal to its Cost to all minions.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Garner",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 45287,
    "flavor": "Float like a Faerie Dragon, sting like a Hivequeen.",
    "health": 3,
    "id": "LOOT_184",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Silver Vanguard",
    "rarity": "COMMON",
    "referencedTags": [
      "RECRUIT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> <b>Recruit</b> an\n8-Cost minion.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 45353,
    "flavor": "If you’re experiencing resurrection sickness, press 1.",
    "id": "LOOT_187",
    "name": "Twilight's Call",
    "playRequirements": {
      "REQ_FRIENDLY_MINION_DIED_THIS_GAME": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "LOOTAPALOOZA",
    "text": "Summon 1/1 copies of 2 friendly <b>Deathrattle</b> minions\nthat died this game.",
    "type": "SPELL"
  },
  {
    "artist": "Eva Wildermann",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 46892,
    "flavor": "A courser is a courser of course, of course, she's more of a unicorn than a horse...",
    "health": 3,
    "id": "LOOT_193",
    "name": "Shimmering Courser",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "Only you can target\nthis with spells and\nHero Powers.",
    "type": "MINION"
  },
  {
    "artist": "A.J. Nazzaro",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 7,
    "dbfId": 45519,
    "flavor": "To dwarves of stone the demon called\nWith promises of might, enthralled\nIn grasping greed they found their doom\nForever bound in mithril tombs.",
    "id": "LOOT_203",
    "name": "Lesser Mithril Spellstone",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "Summon one 5/5 Mithril Golem. <i>(Equip a weapon to upgrade.)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 45520,
    "flavor": "Reported.",
    "id": "LOOT_204",
    "mechanics": [
      "SECRET"
    ],
    "name": "Cheat Death",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Secret:</b> When a friendly minion dies, return it to your hand.\nIt costs (2) less.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler Walpole",
    "attack": 0,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 45528,
    "durability": 3,
    "elite": true,
    "flavor": "Crafted by Deathwing's goblin horde, but the dragon added the rainbow sparkles himself.",
    "id": "LOOT_209",
    "name": "Dragon Soul",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "After you cast 3 spells in a turn, summon a 5/5 Dragon.",
    "type": "WEAPON"
  },
  {
    "artist": "Matt Dixon",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 45529,
    "flavor": "You thought he was your bro-bold, but turns out he's your foe-bold.",
    "id": "LOOT_210",
    "mechanics": [
      "SECRET"
    ],
    "name": "Sudden Betrayal",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Secret:</b> When a minion attacks your hero, instead it attacks one of its neighbors.",
    "type": "SPELL"
  },
  {
    "artist": "Wayne Wu",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 45531,
    "flavor": "\"After that gig in Hamlin went south, I swore off rats.\"",
    "health": 2,
    "id": "LOOT_211",
    "mechanics": [
      "COMBO"
    ],
    "name": "Elven Minstrel",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0
    },
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Combo:</b> Draw 2 minions from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 45535,
    "flavor": "Works on weapons, missiles, and taxes.",
    "id": "LOOT_214",
    "mechanics": [
      "SECRET"
    ],
    "name": "Evasion",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "<b>Secret:</b> After your hero takes damage, become <b>Immune</b> this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler West Studios",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 7,
    "dbfId": 45539,
    "elite": true,
    "flavor": "A diet of pure magic is great for the complexion but wreaks havoc on one's mood.",
    "health": 1,
    "id": "LOOT_216",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Lynessa Sunsorrow",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "[x]<b>Battlecry:</b> Cast each spell\nyou cast on your minions\n this game on this one.",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 6,
    "dbfId": 45546,
    "entourage": [
      "NEW1_032",
      "NEW1_033",
      "NEW1_034"
    ],
    "flavor": "I hunt alone.  Well, me and Misha.  And Huffer.  And Leokk.",
    "id": "LOOT_217",
    "name": "To My Side!",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "[x]Summon an Animal\nCompanion, or 2 if your\ndeck has no minions.",
    "type": "SPELL"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 45547,
    "flavor": "It's certainly not civilized gibbering.",
    "health": 1,
    "id": "LOOT_218",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Feral Gibberer",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "After this minion attacks a hero, add a copy of it to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Anton Magdalin",
    "attack": 1,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 45537,
    "durability": 3,
    "flavor": "Once called Cahn’delar, Shortbow of the Ancient Whisker.",
    "id": "LOOT_222",
    "name": "Candleshot",
    "rarity": "COMMON",
    "referencedTags": [
      "IMMUNE"
    ],
    "set": "LOOTAPALOOZA",
    "text": "Your hero is <b>Immune</b> while attacking.",
    "type": "WEAPON"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 1,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 1,
    "dbfId": 45590,
    "flavor": "Ethereal armor dissipates in 6 hours which can cause extreme awkwardness for first time buyers.",
    "health": 2,
    "id": "LOOT_231",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Arcane Artificer",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "Whenever you cast a spell, gain Armor equal to its Cost.",
    "type": "MINION"
  },
  {
    "artist": "Adam Byrne",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 45594,
    "flavor": "Politer than his brother, the cursing disciple, but far more evil.",
    "health": 1,
    "id": "LOOT_233",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Cursed Disciple",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> Summon a 5/1 Revenant.",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 45707,
    "flavor": "You especially don't want to make a dire mountain out of a dire mole hill.",
    "health": 3,
    "id": "LOOT_258",
    "name": "Dire Mole",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 45759,
    "entourage": [
      "LOOT_278t1",
      "LOOT_278t2",
      "LOOT_278t3",
      "LOOT_278t4"
    ],
    "flavor": "\"Here, taste this.\" (Slurp) \"What is it?\" \"I don't know, I found it in one of the labs.\"",
    "id": "LOOT_278",
    "name": "Unidentified Elixir",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "Give a minion +2/+2. Gains a bonus effect in your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Dan Scott",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 6,
    "dbfId": 45775,
    "entourage": [
      "LOOT_285t",
      "LOOT_285t2",
      "LOOT_285t3",
      "LOOT_285t4"
    ],
    "flavor": "The kobold stared at the bundle for a long time. “Ah hah!” he said. “It’s a shield.”",
    "id": "LOOT_285",
    "name": "Unidentified Shield",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "Gain 5 Armor.\nGains a bonus effect in your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Dan Scott",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 45782,
    "durability": 2,
    "entourage": [
      "LOOT_286t2",
      "LOOT_286t3",
      "LOOT_286t1",
      "LOOT_286t4"
    ],
    "flavor": "When all you have is an unidentified maul, everything else looks like an unidentified nail.",
    "id": "LOOT_286",
    "name": "Unidentified Maul",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "Gains a bonus effect in your hand.",
    "type": "WEAPON"
  },
  {
    "artist": "Andrew Hou",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 45784,
    "flavor": "Side effects guaranteed!",
    "health": 4,
    "id": "LOOT_291",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Shroom Brewer",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "targetingArrowText": "Restore 4 Health.",
    "text": "<b>Battlecry:</b> Restore #4 Health.",
    "type": "MINION"
  },
  {
    "artist": "Garrett Hanna",
    "attack": 2,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 45820,
    "flavor": "If you don't keep up with your payments, it'll be a repossessed lackey.",
    "health": 2,
    "id": "LOOT_306",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Possessed Lackey",
    "rarity": "RARE",
    "referencedTags": [
      "RECRUIT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> <b>Recruit</b> a Demon.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 45828,
    "flavor": "The Guild used oak trees until they all turned to ash.",
    "id": "LOOT_309",
    "name": "Oaken Summons",
    "rarity": "COMMON",
    "referencedTags": [
      "RECRUIT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "Gain 6 Armor.\n<b>Recruit</b> a minion that costs (4) or less.",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "attack": 5,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 6,
    "dbfId": 45833,
    "flavor": "Standard issue recruit gear: 1 silver sword, 1 Lordaeron insignia, 2 bags of crystal kibble.",
    "health": 5,
    "id": "LOOT_313",
    "mechanics": [
      "DIVINE_SHIELD"
    ],
    "name": "Crystal Lion",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "[x]<b>Divine Shield</b>\nCosts (1) less for each Silver\nHand Recruit you control.",
    "type": "MINION"
  },
  {
    "artist": "Alexey Aparin",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 8,
    "dbfId": 45835,
    "flavor": "Favorite sandwich? Grizzled cheese.",
    "health": 5,
    "id": "LOOT_314",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Grizzled Guardian",
    "race": "BEAST",
    "rarity": "RARE",
    "referencedTags": [
      "RECRUIT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "<b>Taunt</b>\n<b>Deathrattle:</b> <b>Recruit</b> 2 minions that cost (4) or less.",
    "type": "MINION"
  },
  {
    "artist": "Chris Seaman",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 45837,
    "flavor": "His breath smells like agony and despair, which is still better than most troggs.",
    "health": 5,
    "id": "LOOT_315",
    "mechanics": [
      "POISONOUS",
      "TAUNT"
    ],
    "name": "Trogg Gloomeater",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Taunt</b>\n<b>Poisonous</b>",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 45859,
    "elite": true,
    "flavor": "We suggest crafting Ixlid; he'll grow on you. Literally.",
    "health": 4,
    "id": "LOOT_329",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Ixlid, Fungal Lord",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "After you play a minion, summon a copy of it.",
    "type": "MINION"
  },
  {
    "artist": "Wayne Reynolds",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 45877,
    "flavor": "Ding!\nGrats.",
    "id": "LOOT_333",
    "name": "Level Up!",
    "rarity": "EPIC",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "Give your Silver Hand Recruits +2/+2 and <b>Taunt</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Ivan Fomin",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 45905,
    "flavor": "All that remained from the first kobold colony: a single talisman and the word \"Flamestrike.\"",
    "id": "LOOT_344",
    "name": "Primal Talismans",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "LOOTAPALOOZA",
    "text": "Give your minions \"<b>Deathrattle:</b> Summon a random basic Totem.\"",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 45929,
    "flavor": "Horrible secret: The Darkness is immune to Arcane Missiles.",
    "health": 1,
    "id": "LOOT_347",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Kobold Apprentice",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Deal 3 damage randomly split among all enemies.",
    "type": "MINION"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 45945,
    "flavor": "Sparkliest of the seven deadly sprites.",
    "health": 1,
    "id": "LOOT_351",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Greedy Sprite",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> Gain an empty Mana Crystal.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 45979,
    "flavor": "She prefers calling it \"Psionic Tickling.\"",
    "id": "LOOT_353",
    "name": "Psionic Probe",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "Copy a spell in your opponent's deck and add it to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 45988,
    "elite": true,
    "flavor": "My name is Marin the Fox. You took my treasure. Prepare to die.",
    "health": 6,
    "howToEarn": "Unlocked by opening a Kobolds & Catacombs pack.",
    "howToEarnGolden": "Unlocked with the BlizzCon 2017 virtual ticket.",
    "id": "LOOT_357",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Marin the Fox",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Summon a 0/8 Treasure Chest for your opponent. <i>(Break it for awesome loot!)</i>",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 7,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 6,
    "dbfId": 45995,
    "elite": true,
    "flavor": "The grumbling grew to a mighty rumbling, and out of the caverns the kobolds came tumbling.",
    "health": 7,
    "id": "LOOT_358",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Grumble, Worldshaker",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Return your other minions to your hand. They cost (1).",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 46007,
    "flavor": "Hard time: 6-10 turns for candle-nappin'.",
    "health": 1,
    "id": "LOOT_363",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Drygulch Jailor",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> Add 3 Silver Hand Recruits to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 46026,
    "flavor": "Look. Cautious Flurries will only get you so far in life.",
    "id": "LOOT_364",
    "name": "Reckless Flurry",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "Spend all your Armor. Deal that much damage to all minions.",
    "type": "SPELL"
  },
  {
    "artist": "Luca Zontini",
    "attack": 5,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 6,
    "dbfId": 46027,
    "flavor": "Perfectly accessorized to attract adventurers.",
    "health": 9,
    "id": "LOOT_365",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Gemstudded Golem",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Taunt</b>\nCan only attack if you have 5 or more Armor.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 46031,
    "flavor": "Kobolds use anything for armor: Pots, pans, garbage cans… even other kobolds.",
    "health": 2,
    "id": "LOOT_367",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Drywhisker Armorer",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> For each enemy minion, gain 2 Armor.",
    "type": "MINION"
  },
  {
    "artist": "Jerry Mascho",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 9,
    "dbfId": 46056,
    "flavor": "Never let it hold your checkbook.",
    "health": 9,
    "id": "LOOT_368",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Voidlord",
    "race": "DEMON",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "[x]<b>Taunt</b>\n <b>Deathrattle:</b> Summon three\n1/3 Demons with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 6,
    "dbfId": 46058,
    "flavor": "Thrilling adventure! Danger guaranteed! Loot uncertain! Death optional!  Who’s with me?",
    "id": "LOOT_370",
    "name": "Gather Your Party",
    "rarity": "RARE",
    "referencedTags": [
      "RECRUIT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "<b>Recruit</b> a minion.",
    "type": "SPELL"
  },
  {
    "artist": "Hideaki Takamura",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 46067,
    "flavor": "It's filled with electrolytes!",
    "id": "LOOT_373",
    "mechanics": [
      "ImmuneToSpellpower"
    ],
    "name": "Healing Rain",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "Restore #12 Health randomly split among all friendly characters.",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 46069,
    "flavor": "The original telemarketer.",
    "health": 4,
    "id": "LOOT_375",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Guild Recruiter",
    "rarity": "COMMON",
    "referencedTags": [
      "RECRUIT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> <b>Recruit</b> a minion that costs (4) or less.",
    "type": "MINION"
  },
  {
    "artist": "Matthew O'Connor",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 8,
    "dbfId": 46077,
    "durability": 3,
    "elite": true,
    "flavor": "Turn that frown into TWO frowns!",
    "id": "LOOT_380",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Woecleaver",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "RECRUIT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "After your hero attacks, <b>Recruit</b> a minion.",
    "type": "WEAPON"
  },
  {
    "artist": "Sam Nielsen",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 46079,
    "flavor": "There is no candle.",
    "health": 6,
    "id": "LOOT_382",
    "name": "Kobold Monk",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "Your hero can't be targeted by spells or Hero Powers.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 46082,
    "flavor": "How can he be hungry… if he's Ettin!?",
    "health": 10,
    "id": "LOOT_383",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Hungry Ettin",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Summon a random 2-Cost minion for your opponent.",
    "type": "MINION"
  },
  {
    "artist": "Max Greck",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 46087,
    "flavor": "Qualifications: Born with pointy hat.",
    "health": 3,
    "id": "LOOT_388",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fungal Enchanter",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Restore #2 Health to all friendly characters.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga & James Martin",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 46088,
    "flavor": "\"Broken longsword is brand new shortsword.\" - Kobold Proverb",
    "health": 3,
    "id": "LOOT_389",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Rummaging Kobold",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Return one of your destroyed weapons to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Alexey Aparin",
    "attack": 1,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 46107,
    "durability": 5,
    "elite": true,
    "flavor": "For druids who want to branch out.",
    "id": "LOOT_392",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Twig of the World Tree",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> Gain 10 Mana Crystals.",
    "type": "WEAPON"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 46118,
    "flavor": "Auditioning for the next Fungal Idol.",
    "health": 2,
    "id": "LOOT_394",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Shrieking Shroom",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "At the end of your turn, summon a random\n1-Cost minion.",
    "type": "MINION"
  },
  {
    "artist": "Ware Lee",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 46258,
    "flavor": "Wish #1: funnel cakes. Wish #2: funnel cakes. Wish #3: FUNNEL CAKES.",
    "health": 4,
    "id": "LOOT_398",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Benevolent Djinn",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "At the end of your turn, restore #3 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 45899,
    "flavor": "Waking up at the break of dusk is just not as impressive.",
    "health": 3,
    "id": "LOOT_410",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Duskbreaker",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_MINION_TARGET": 0
    },
    "race": "DRAGON",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> If you're holding\na Dragon, deal 3 damage to all other minions.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 45936,
    "faction": "ALLIANCE",
    "flavor": "He can make ANYTHING look like a candle.",
    "health": 3,
    "id": "LOOT_412",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Kobold Illusionist",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> Summon a 1/1 copy of a minion from your hand.",
    "type": "MINION"
  },
  {
    "artist": "Ian Ameling",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 45930,
    "flavor": "\"Ok, your party has defeated the beetle.\" \"I put it on my head.\" \"What?\" \"I put it on my head. Like a hat.\"",
    "health": 3,
    "id": "LOOT_413",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Plated Beetle",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> Gain 3 Armor.",
    "type": "MINION"
  },
  {
    "artist": "Ursula Dorada",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 46032,
    "flavor": "Qualifications: Found pointy hat.",
    "health": 7,
    "id": "LOOT_414",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Grand Archivist",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "At the end of your turn, cast a spell from your deck <i>(targets chosen randomly)</i>.",
    "type": "MINION"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 46040,
    "elite": true,
    "flavor": "Signed and sealed, she delivers oblivion.",
    "health": 6,
    "id": "LOOT_415",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Rin, the First Disciple",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "<b>Taunt</b>\n<b>Deathrattle:</b> Add 'The First Seal' to your hand.",
    "type": "MINION"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 46286,
    "flavor": "RUN FROM SKY CANDLES! THEY BURN! RUN!",
    "id": "LOOT_417",
    "name": "Cataclysm",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "Destroy all minions. Discard your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Matthew O'Connor",
    "attack": 0,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 46299,
    "durability": 3,
    "elite": true,
    "flavor": "Don't trust the skull.",
    "id": "LOOT_420",
    "mechanics": [
      "TRIGGER_VISUAL",
      "InvisibleDeathrattle"
    ],
    "name": "Skull of the Man'ari",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "At the start of your turn, summon a Demon from your hand.",
    "type": "WEAPON"
  },
  {
    "artist": "James Ryman",
    "attack": 4,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 6,
    "dbfId": 46263,
    "durability": 2,
    "elite": true,
    "flavor": "Recently unearthed in one of the deepest kobold caves. Traded for a large candle.",
    "id": "LOOT_500",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Val'anyr",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> Give a minion in your hand +4/+2. When it dies, reequip this.",
    "type": "WEAPON"
  },
  {
    "artist": "Arthur Bozonnet",
    "cardClass": "ROGUE",
    "collectible": true,
    "collectionText": "Destroy 1 random enemy minion.\n<i>(Play 3 <b>Deathrattle</b> cards to upgrade.)</i>",
    "cost": 5,
    "dbfId": 46296,
    "flavor": "The trolls of old embraced the gift\nA jewel of black for daggers swift\nNo party lasts who finds the stone\nThose wielding it soon stand alone.",
    "id": "LOOT_503",
    "name": "Lesser Onyx Spellstone",
    "playRequirements": {
      "REQ_MINIMUM_ENEMY_MINIONS": 1
    },
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "LOOTAPALOOZA",
    "text": "Destroy 1 random enemy minion.\n@<i>(Play 3 <b>Deathrattle</b> cards to upgrade.)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Tooth",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 46303,
    "flavor": "They grow up so fast.",
    "id": "LOOT_504",
    "name": "Unstable Evolution",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "Transform a friendly minion into\none that costs (1) more. Repeatable this turn.",
    "type": "SPELL"
  },
  {
    "artist": "Jakub Kasper",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 8,
    "dbfId": 46305,
    "durability": 3,
    "elite": true,
    "flavor": "When asked what the runes do, the tauren smith smiled: \"A little of this, a little of that...\"",
    "id": "LOOT_506",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "The Runespear",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "LOOTAPALOOZA",
    "text": "After your hero attacks, <b>Discover</b> a spell\nand cast it with random targets.",
    "type": "WEAPON"
  },
  {
    "artist": "Tyler West Studios",
    "cardClass": "PRIEST",
    "collectible": true,
    "collectionText": "Resurrect 2 different friendly minions. <i>(Cast 4 spells to upgrade.)</i>",
    "cost": 7,
    "dbfId": 46307,
    "flavor": "A diamond, white, this stone the eighth\nA precious jewel for those of faith\nA whispered prayer restores the lost\nBut none among them know the cost.",
    "id": "LOOT_507",
    "name": "Lesser Diamond Spellstone",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "Resurrect 2 different friendly minions. @<i>(Cast 4 spells to upgrade.)</i>",
    "type": "SPELL"
  },
  {
    "artist": "Garrett Hanna",
    "attack": 6,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 8,
    "dbfId": 46390,
    "elite": true,
    "flavor": "She’s not one of those treehugger elves – but she does like the occasional cuddle.",
    "health": 6,
    "id": "LOOT_511",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Kathrena Winterwisp",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "RECRUIT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry and Deathrattle:</b> <b>Recruit</b> a Beast.",
    "type": "MINION"
  },
  {
    "artist": "Sean McNally",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 46403,
    "elite": true,
    "flavor": "Her name seems a bit cheesy.",
    "health": 2,
    "id": "LOOT_516",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Zola the Gorgon",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "targetingArrowText": "Add a Golden copy to your hand.",
    "text": "<b>Battlecry:</b> Choose a friendly minion. Add a Golden copy of it to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 1,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 46432,
    "flavor": "Déjà Dude.",
    "health": 1,
    "id": "LOOT_517",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Murmuring Elemental",
    "race": "ELEMENTAL",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Your next <b>Battlecry</b> this turn triggers twice.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 5,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 5,
    "dbfId": 46440,
    "flavor": "Don't ever doubt Al'Akir's love for basic totems.",
    "health": 5,
    "id": "LOOT_518",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Windshear Stormcaller",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> If you control all 4 basic Totems, summon Al'Akir the Windlord.",
    "type": "MINION"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 4,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 8,
    "dbfId": 46442,
    "elite": true,
    "flavor": "Once crafted a gauntlet out of earwax and pure ambition.",
    "health": 8,
    "id": "LOOT_519",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Geosculptor Yip",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "At the end of your turn, summon a random minion with Cost equal to your Armor <i>(up to 10)</i>.",
    "type": "MINION"
  },
  {
    "artist": "Anton Kagoukin",
    "attack": 5,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 6,
    "dbfId": 46445,
    "flavor": "Uh, you might want to get that looked at.",
    "health": 4,
    "id": "LOOT_520",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Seeping Oozeling",
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Gain the <b>Deathrattle</b> of a random minion in your deck.",
    "type": "MINION"
  },
  {
    "artist": "Max Grecke",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 46449,
    "elite": true,
    "flavor": "His adventuring party consists of Goldshire Footman, Frostwolf Grunt and Hadronox.",
    "health": 5,
    "id": "LOOT_521",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Master Oakheart",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "RECRUIT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> <b>Recruit</b> a 1, 2, and 3-Attack minion.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 7,
    "dbfId": 46450,
    "flavor": "\"It could be worse!\" \"It's worse.\"",
    "id": "LOOT_522",
    "name": "Crushing Walls",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "Destroy your opponent's left and right-most minions.",
    "type": "SPELL"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 20,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 46454,
    "elite": true,
    "flavor": "I would rather light a single candle than curse the darkness. But I'm willing to do both.",
    "health": 20,
    "id": "LOOT_526",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "The Darkness",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "[x]Starts dormant.\n<b>Battlecry:</b> Shuffle 3 Candles\ninto the enemy deck. When\ndrawn, this awakens.",
    "type": "MINION"
  },
  {
    "artist": "Tooth",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 46460,
    "flavor": "The dragons mostly keep him around as a snack.",
    "health": 4,
    "id": "LOOT_528",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Twilight Acolyte",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND": 0
    },
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "targetingArrowText": "Swap Attack.",
    "text": "<b>Battlecry:</b> If you're holding\na Dragon, swap this minion's Attack with another minion's.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 46461,
    "flavor": "You had to put the portable hole inside the bag of holding, didn't you?!",
    "health": 3,
    "id": "LOOT_529",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Void Ripper",
    "race": "DEMON",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Swap the\nAttack and Health of all other minions.",
    "type": "MINION"
  },
  {
    "artist": "Erik Gist",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 46495,
    "flavor": "You hear a coin rattling inside the slotted gargoyle...What could it mean?",
    "health": 2,
    "id": "LOOT_534",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Gilded Gargoyle",
    "rarity": "COMMON",
    "set": "LOOTAPALOOZA",
    "text": "<b>Deathrattle:</b> Add a Coin to your hand.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 9,
    "dbfId": 46499,
    "elite": true,
    "flavor": "Her secret is using a gentle voice and carrying a baggie of hotdogs.",
    "health": 3,
    "id": "LOOT_535",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Dragoncaller Alanna",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Summon a 5/5 Dragon for each spell you cast this game that costs (5) or more.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 4,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 46541,
    "flavor": "The shortest distance between two points is a leyline.",
    "health": 5,
    "id": "LOOT_537",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Leyline Manipulator",
    "race": "ELEMENTAL",
    "rarity": "RARE",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> If you're holding any cards that didn't start in your deck, reduce their Cost by (2).",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "attack": 6,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 7,
    "dbfId": 46544,
    "elite": true,
    "flavor": "Follows adventurers, seeking the ultimate time magic: the ability to reload.",
    "health": 6,
    "id": "LOOT_538",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Temporus",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "<b>Battlecry:</b> Your opponent takes two turns. Then you take two turns.",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 46551,
    "flavor": "Sometimes she'll summon a Doomsayer. Out of spite.",
    "health": 4,
    "id": "LOOT_539",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Spiteful Summoner",
    "rarity": "EPIC",
    "set": "LOOTAPALOOZA",
    "text": "[x]<b>Battlecry:</b> Reveal a spell\nfrom your deck. Summon\n a random minion with\nthe same Cost.",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 46557,
    "flavor": "Which came first?  The dragon or the dragonhatcher?",
    "health": 4,
    "id": "LOOT_540",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Dragonhatcher",
    "rarity": "EPIC",
    "referencedTags": [
      "RECRUIT"
    ],
    "set": "LOOTAPALOOZA",
    "text": "At the end of your turn, <b>Recruit</b> a Dragon.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 46589,
    "elite": true,
    "flavor": "Management of the Kobold Empire requires a careful balance between a lack of social services and fiscal irresponsibility.",
    "health": 5,
    "id": "LOOT_541",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "King Togwaggle",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "[x]<b>Battlecry:</b> Swap decks\nwith your opponent.\nGive them a Ransom\nspell to swap back.",
    "type": "MINION"
  },
  {
    "artist": "Evgeniy Dlinnov",
    "attack": 1,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 47035,
    "durability": 3,
    "elite": true,
    "flavor": "But it has a soft spot for emperors.",
    "health": 3,
    "id": "LOOT_542",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Kingsbane",
    "rarity": "LEGENDARY",
    "set": "LOOTAPALOOZA",
    "text": "[x]<b>Deathrattle:</b> Shuffle\nthis into your deck.\nIt keeps any\nenchantments.",
    "type": "WEAPON"
  },
  {
    "artist": "Jim Nelson",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 0,
    "dbfId": 163,
    "flavor": "This is the reason that Demons never really become friends with Warlocks.",
    "howToEarn": "Unlocked at Level 8.",
    "howToEarnGolden": "Unlocked at Level 15.",
    "id": "NEW1_003",
    "name": "Sacrificial Pact",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0,
      "REQ_TARGET_WITH_RACE": 15
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Destroy a Demon. Restore #5 Health to your hero.",
    "type": "SPELL"
  },
  {
    "artist": "Sean O’Daniels",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 6,
    "dbfId": 196,
    "howToEarn": "Unlocked at Level 8.",
    "howToEarnGolden": "Unlocked at Level 23.",
    "id": "NEW1_004",
    "name": "Vanish",
    "rarity": "FREE",
    "set": "CORE",
    "text": "Return all minions to their owner's hand.",
    "type": "SPELL"
  },
  {
    "artist": "Dave Allsop",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 6,
    "dbfId": 287,
    "flavor": "He just wants people to see his vacation photos.",
    "health": 3,
    "id": "NEW1_005",
    "mechanics": [
      "COMBO"
    ],
    "name": "Kidnapper",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_FOR_COMBO": 0
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "targetingArrowText": "Return a minion to hand.",
    "text": "<b>Combo:</b> Return a minion to its owner's hand.",
    "type": "MINION"
  },
  {
    "artist": "Richard Wright",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 86,
    "flavor": "Is the sky falling?  Yes.  Yes it is.",
    "id": "NEW1_007",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Starfall",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Choose One -</b>\nDeal $5 damage to a minion; or $2 damage to all enemy minions.",
    "type": "SPELL"
  },
  {
    "artist": "Patrik Hjelm",
    "attack": 5,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 7,
    "dbfId": 920,
    "flavor": "Go ahead, carve your initials in him.",
    "health": 5,
    "id": "NEW1_008",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Ancient of Lore",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "<b>Choose One -</b> Draw a card; or Restore #5 Health.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 8,
    "dbfId": 32,
    "elite": true,
    "flavor": "He is the weakest of the four Elemental Lords.  And the other three don't let him forget it.",
    "health": 5,
    "id": "NEW1_010",
    "mechanics": [
      "CHARGE",
      "DIVINE_SHIELD",
      "TAUNT",
      "WINDFURY"
    ],
    "name": "Al'Akir the Windlord",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Charge, Divine Shield, Taunt, Windfury</b>",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 4,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 28,
    "flavor": "The Kor'kron are the elite forces of Garrosh Hellscream. Let's just say you don't want to run into these guys while wearing a blue tabard.",
    "health": 3,
    "howToEarn": "Unlocked at Level 4.",
    "howToEarnGolden": "Unlocked at Level 44.",
    "id": "NEW1_011",
    "mechanics": [
      "CHARGE"
    ],
    "name": "Kor'kron Elite",
    "rarity": "FREE",
    "set": "CORE",
    "text": "<b>Charge</b>",
    "type": "MINION"
  },
  {
    "artist": "Blizzard Cinematics",
    "attack": 1,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 1,
    "dbfId": 405,
    "flavor": "These wyrms feed on arcane energies, and while they are generally considered a nuisance rather than a real threat, you really shouldn't leave them alone with a bucket of mana.",
    "health": 3,
    "id": "NEW1_012",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Mana Wyrm",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Whenever you cast a spell, gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Ron Spencer",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 887,
    "flavor": "She's actually a male tauren.  People don't call him \"Master of Disguise\" for nothing.",
    "health": 4,
    "id": "NEW1_014",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Master of Disguise",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "STEALTH"
    ],
    "set": "EXPERT1",
    "targetingArrowText": "Give <b>Stealth</b>.",
    "text": "<b>Battlecry:</b> Give a friendly minion <b>Stealth</b> until your next turn.",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 530,
    "flavor": "Pirates and Parrots go together like Virmen and Carrots.",
    "health": 1,
    "howToEarn": "Unlocked when you have all the Pirates from the Classic Set.",
    "howToEarnGolden": "Unlocked when you have all the Golden Pirates from the Expert Set.",
    "id": "NEW1_016",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Captain's Parrot",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "HOF",
    "text": "<b>Battlecry:</b> Draw a Pirate from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 443,
    "flavor": "Murloc.  It's what's for dinner.",
    "health": 2,
    "id": "NEW1_017",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Hungry Crab",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 14
    },
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "targetingArrowText": "Destroy a Murloc.",
    "text": "<b>Battlecry:</b> Destroy a Murloc and gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 999,
    "flavor": "\"I only plunder on days that end in 'y'.\"",
    "health": 3,
    "id": "NEW1_018",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Bloodsail Raider",
    "race": "PIRATE",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Gain Attack equal to the Attack\nof your weapon.",
    "type": "MINION"
  },
  {
    "artist": "Matt Cavotta",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1073,
    "flavor": "Ambitious Knife Jugglers sometimes graduate to Bomb Jugglers.    They never last long enough to make it onto a card though.",
    "health": 2,
    "id": "NEW1_019",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Knife Juggler",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "[x]After you summon a\nminion, deal 1 damage\nto a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 1014,
    "flavor": "BOOM BABY BOOM!  BAD IS GOOD!  DOWN WITH GOVERNMENT!",
    "health": 2,
    "id": "NEW1_020",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Wild Pyromancer",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "After you cast a spell, deal 1 damage to ALL minions.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 138,
    "flavor": "He's almost been right so many times. He was <i>sure</i> it was coming during the Cataclysm.",
    "health": 7,
    "id": "NEW1_021",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Doomsayer",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "At the start of your turn, destroy ALL minions.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 878,
    "flavor": "\"Yarrrr\" is a pirate word that means \"Greetings, milord.\"",
    "health": 3,
    "id": "NEW1_022",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Dread Corsair",
    "race": "PIRATE",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "<b>Taunt</b>\nCosts (1) less per Attack of your weapon.",
    "type": "MINION"
  },
  {
    "artist": "Samwise",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 609,
    "flavor": "Adorable.  Immune to Magic.  Doesn't pee on the rug.  The perfect pet!",
    "health": 2,
    "id": "NEW1_023",
    "mechanics": [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS"
    ],
    "name": "Faerie Dragon",
    "race": "DRAGON",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Can't be targeted by spells or Hero Powers.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 456,
    "elite": true,
    "flavor": "He was <i>this close</i> to piloting a massive juggernaut into Stormwind Harbor. If it weren't for those pesky kids!",
    "health": 4,
    "id": "NEW1_024",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Captain Greenskin",
    "race": "PIRATE",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Give your weapon +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Randy Gallegos",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 997,
    "flavor": "Every pirate uses the same four digits to access Automated Gold Dispensers.  It's called the \"Pirate's Code\".",
    "health": 2,
    "id": "NEW1_025",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Bloodsail Corsair",
    "race": "PIRATE",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "[x]<b>Battlecry:</b> Remove\n1 Durability from your\nopponent's weapon.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 1029,
    "flavor": "If you don't pay attention, you may be turned into a pig.  And then you get your name on the board.",
    "health": 5,
    "id": "NEW1_026",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Violet Teacher",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Whenever you cast a spell, summon a 1/1 Violet Apprentice.",
    "type": "MINION"
  },
  {
    "artist": "Ken Steacy",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 680,
    "flavor": "When he saves enough plunder, he's going to commission an enormous captain's hat.  He has hat envy.",
    "health": 3,
    "id": "NEW1_027",
    "mechanics": [
      "AURA"
    ],
    "name": "Southsea Captain",
    "race": "PIRATE",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "Your other Pirates have +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 855,
    "elite": true,
    "flavor": "\"I'm gonna light you up, sweetcheeks!\"",
    "health": 4,
    "id": "NEW1_029",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Millhouse Manastorm",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Enemy spells cost (0) next turn.",
    "type": "MINION"
  },
  {
    "artist": "Bernie Kang",
    "attack": 12,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 10,
    "dbfId": 834,
    "elite": true,
    "flavor": "Once a noble dragon known as Neltharion, Deathwing lost his mind and shattered Azeroth before finally being defeated.  Daddy issues?",
    "health": 12,
    "id": "NEW1_030",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Deathwing",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Destroy all other minions and discard your hand.",
    "type": "MINION"
  },
  {
    "artist": "Wei Wang",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 437,
    "entourage": [
      "NEW1_032",
      "NEW1_033",
      "NEW1_034"
    ],
    "flavor": "You could summon Misha, Leokk, or Huffer!  Huffer is more trouble than he's worth.",
    "howToEarn": "Unlocked at Level 2.",
    "howToEarnGolden": "Unlocked at Level 45.",
    "id": "NEW1_031",
    "name": "Animal Companion",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "FREE",
    "set": "CORE",
    "text": "Summon a random Beast Companion.",
    "type": "SPELL"
  },
  {
    "artist": "Wayne Reynolds",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 1026,
    "flavor": "\"Shout! Shout! Let it all out!\" - Advice to warriors-in-training",
    "id": "NEW1_036",
    "name": "Commanding Shout",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "Your minions can't be reduced below 1 Health this turn. Draw a card.",
    "type": "SPELL"
  },
  {
    "artist": "E.M. Gist",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 351,
    "flavor": "He's currently trying to craft a \"flail-axe\", but all the other swordsmiths say it can't be done.",
    "health": 3,
    "id": "NEW1_037",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Master Swordsmith",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "At the end of your turn, give another random friendly minion +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Kev Walker",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 526,
    "elite": true,
    "flavor": "He's Gruul \"the Dragonkiller\".  He just wanted to cuddle them… he never meant to…",
    "health": 7,
    "id": "NEW1_038",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Gruul",
    "rarity": "LEGENDARY",
    "set": "EXPERT1",
    "text": "At the end of each turn, gain +1/+1 .",
    "type": "MINION"
  },
  {
    "artist": "Laurel D. Austin",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 640,
    "elite": true,
    "flavor": "Hogger is super powerful. If you kill him, it's because he <i>let</i> you.",
    "health": 4,
    "id": "NEW1_040",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Hogger",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "EXPERT1",
    "text": "At the end of your turn, summon a 2/2 Gnoll with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 1371,
    "flavor": "This Kodo is so big that he can stampede by <i>himself</i>.",
    "health": 5,
    "id": "NEW1_041",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Stampeding Kodo",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "EXPERT1",
    "text": "<b>Battlecry:</b> Destroy a random enemy minion with 2 or less Attack.",
    "type": "MINION"
  },
  {
    "artist": "Jerry Mascho",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 38227,
    "flavor": "Nobody expects the Vilefin Inquisition!",
    "health": 3,
    "id": "OG_006",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Vilefin Inquisitor",
    "race": "MURLOC",
    "rarity": "EPIC",
    "set": "OG",
    "text": "<b>Battlecry:</b> Your Hero Power becomes 'Summon a   1/1 Murloc.'",
    "type": "MINION"
  },
  {
    "artist": "Jimmy Lo",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 38262,
    "flavor": "Golce and Dabbana have a new line of Earth Totems available at vendors everywhere this holiday season.",
    "id": "OG_023",
    "name": "Primal Fusion",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "OG",
    "text": "Give a minion +1/+1 for each of your Totems.",
    "type": "SPELL"
  },
  {
    "artist": "E. M. Gist",
    "attack": 7,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 38263,
    "flavor": "He's on fire! Boomshakalaka!",
    "health": 7,
    "id": "OG_024",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Flamewreathed Faceless",
    "overload": 2,
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Overload:</b> (2)",
    "type": "MINION"
  },
  {
    "artist": "J. Meyers & Nutchapol",
    "attack": 3,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 38265,
    "flavor": "Just try to avoid eye contact.",
    "health": 2,
    "id": "OG_026",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Eternal Sentinel",
    "rarity": "EPIC",
    "referencedTags": [
      "OVERLOAD"
    ],
    "set": "OG",
    "text": "<b>Battlecry:</b> Unlock your <b>Overloaded</b> Mana Crystals.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 38266,
    "flavor": "So you say you want an evolution. Well, you know. We all want to change the board.",
    "id": "OG_027",
    "name": "Evolve",
    "rarity": "RARE",
    "set": "OG",
    "text": "Transform your minions into random minions that cost (1) more.",
    "type": "SPELL"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 5,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 6,
    "dbfId": 38267,
    "flavor": "Just can't resist the opportunity to hang around with a bunch of totems.",
    "health": 5,
    "id": "OG_028",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Thing from Below",
    "rarity": "RARE",
    "set": "OG",
    "text": "[x]<b>Taunt</b>\nCosts (1) less for each\nTotem you've summoned\nthis game.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 4,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 5,
    "dbfId": 38270,
    "durability": 2,
    "flavor": "Stop! It's Twilight Hammer time.",
    "id": "OG_031",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Hammer of Twilight",
    "rarity": "EPIC",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Summon a 4/2 Elemental.",
    "type": "WEAPON"
  },
  {
    "artist": "Alex Konstad",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 38279,
    "durability": 2,
    "flavor": "That's right. Garrosh just slapped you to death with a tentacle.",
    "id": "OG_033",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Tentacles for Arms",
    "rarity": "EPIC",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Return this to your hand.",
    "type": "WEAPON"
  },
  {
    "artist": "Jakub Kasber",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 38304,
    "flavor": "If your hero doesn't attack, it's just \"Silithid Loner\".",
    "health": 5,
    "id": "OG_034",
    "name": "Silithid Swarmer",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "OG",
    "text": "Can only attack if your hero attacked this turn.",
    "type": "MINION"
  },
  {
    "artist": "Samwise",
    "attack": 10,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 10,
    "dbfId": 38312,
    "elite": true,
    "flavor": "When he's working out, he binds all that rage back into a ponytail.",
    "health": 10,
    "id": "OG_042",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Y'Shaarj, Rage Unbound",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "At the end of your turn, put a minion from your deck into the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 38318,
    "elite": true,
    "flavor": "Always manages to mention \"Back when I was creating the World Tree…\" in EVERY conversation. Sheesh! Enough already.",
    "health": 5,
    "id": "OG_044",
    "mechanics": [
      "AURA"
    ],
    "name": "Fandral Staghelm",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "Your <b>Choose One</b> cards and powers have both effects combined.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 38329,
    "flavor": "The best part is the look on their face when you jump out of the cake! Err… corpse.",
    "id": "OG_045",
    "name": "Infest",
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "OG",
    "text": "Give your minions \"<b>Deathrattle:</b> Add a random Beast to your hand.\"",
    "type": "SPELL"
  },
  {
    "artist": "Alex Alexandrov",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 38334,
    "flavor": "Let's be honest. One option is a lot ragier than the other.",
    "id": "OG_047",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Feral Rage",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Choose One -</b> Give your hero +4 Attack this turn; or Gain 8 Armor.",
    "type": "SPELL"
  },
  {
    "artist": "Efrem Palacios",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 38337,
    "flavor": "Y'Shaarj had three sons: Mark, Theodore, and Chris.",
    "id": "OG_048",
    "name": "Mark of Y'Shaarj",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "OG",
    "text": "Give a minion +2/+2.\nIf it's a Beast, draw\na card.",
    "type": "SPELL"
  },
  {
    "artist": "Grace Liu",
    "attack": 1,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 38340,
    "flavor": "This Ancient was banned from the local tavern after tucking a 'Dr. Boom' up its sleeve.",
    "health": 1,
    "id": "OG_051",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Forbidden Ancient",
    "rarity": "EPIC",
    "set": "OG",
    "text": "<b>Battlecry:</b> Spend all your Mana. Gain +1/+1 for each mana spent.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 38377,
    "flavor": "The mastiff giggles if you don't hit any ducks.",
    "id": "OG_061",
    "name": "On the Hunt",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "OG",
    "text": "Deal $1 damage.\nSummon a 1/1 Mastiff.",
    "type": "SPELL"
  },
  {
    "artist": "Jakub Kasber",
    "attack": 1,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 38391,
    "flavor": "He has a poor understanding of the law of diminishing returns.",
    "health": 2,
    "id": "OG_070",
    "mechanics": [
      "COMBO"
    ],
    "name": "Bladed Cultist",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Combo:</b> Gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 38393,
    "flavor": "Don't stop believing there's something below.",
    "id": "OG_072",
    "name": "Journey Below",
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE",
      "DISCOVER"
    ],
    "set": "OG",
    "text": "<b>Discover</b> a <b>Deathrattle</b> card.",
    "type": "SPELL"
  },
  {
    "artist": "Matthew O'Connor",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 6,
    "dbfId": 38395,
    "flavor": "Aren't Thistles prickly?  Why would you drink them? I don't get Rogues.",
    "id": "OG_073",
    "name": "Thistle Tea",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "RARE",
    "set": "OG",
    "text": "Draw a card. Add 2 extra copies of it to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 38403,
    "elite": true,
    "entourage": [
      "OG_080d",
      "OG_080e",
      "OG_080f",
      "OG_080c",
      "OG_080b"
    ],
    "flavor": "It's basically your own fault if you go around drinking weird green potions handed out by creepy mantid dudes.",
    "health": 2,
    "id": "OG_080",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Xaril, Poisoned Mind",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "<b>Battlecry and Deathrattle:</b> Add a random Toxin card to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 38407,
    "flavor": "What's cooler than being cool?",
    "id": "OG_081",
    "name": "Shatter",
    "playRequirements": {
      "REQ_FROZEN_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "OG",
    "text": "Destroy a <b>Frozen</b> minion.",
    "type": "SPELL"
  },
  {
    "artist": "Genevieve Tsai & Nutchapol",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 38408,
    "flavor": "You no take tentacle!",
    "health": 2,
    "id": "OG_082",
    "mechanics": [
      "SPELLPOWER"
    ],
    "name": "Evolved Kobold",
    "rarity": "COMMON",
    "set": "OG",
    "spellDamage": 2,
    "text": "<b>Spell Damage +2</b>",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 38409,
    "flavor": "Make sure you summon a Twilight Marshmallowcaller too! Mmmm Mmm Mmm!!",
    "health": 2,
    "id": "OG_083",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Twilight Flamecaller",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Battlecry:</b> Deal 1 damage to all enemy minions.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 38412,
    "flavor": "He prefers that you refer to him by his nickname: 'Frostwaker.'",
    "health": 4,
    "id": "OG_085",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Demented Frostcaller",
    "rarity": "RARE",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "OG",
    "text": "After you cast a spell, <b>Freeze</b> a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 0,
    "dbfId": 38413,
    "flavor": "WARNING: This flame is not to be used unless you are a licensed acolyte of the Old Gods.",
    "id": "OG_086",
    "mechanics": [
      "AFFECTED_BY_SPELL_POWER"
    ],
    "name": "Forbidden Flame",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "OG",
    "text": "Spend all your Mana. Deal that much damage to a minion.",
    "type": "SPELL"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 5,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 5,
    "dbfId": 38414,
    "flavor": "Yogg-Saron always likes to complain about how he has too many servants and there are too many mouths to feed.",
    "health": 4,
    "id": "OG_087",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Servant of Yogg-Saron",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Battlecry:</b> Cast a random spell that costs (5) or less <i>(targets chosen randomly)</i>.",
    "type": "MINION"
  },
  {
    "artist": "Milivoj Ceran",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 5,
    "dbfId": 38418,
    "flavor": "What's in there? I bet it's cookie recipes!",
    "id": "OG_090",
    "name": "Cabalist's Tome",
    "rarity": "EPIC",
    "set": "OG",
    "text": "Add 3 random Mage spells to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Jesper Ejsing",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 38426,
    "flavor": "Because you're wrapped in a protective layer of… tentacles?",
    "id": "OG_094",
    "name": "Power Word: Tentacles",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "OG",
    "text": "Give a minion +2/+6.",
    "type": "SPELL"
  },
  {
    "artist": "Alex Garner",
    "attack": 6,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 38429,
    "flavor": "First she separates them from the lights, washes them in cold water, and hang-dries.",
    "health": 5,
    "id": "OG_096",
    "mechanics": [
      "BATTLECRY",
      "RITUAL"
    ],
    "name": "Twilight Darkmender",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Battlecry:</b> If your C'Thun  has at least 10 Attack, restore #10 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 38433,
    "flavor": "It's more succinct than \"Shadow Word: Suck Into Vortex.\"",
    "id": "OG_100",
    "name": "Shadow Word: Horror",
    "rarity": "RARE",
    "set": "OG",
    "text": "Destroy all minions with 2 or less Attack.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 0,
    "dbfId": 38434,
    "flavor": "But the minion arrives covered in goo.",
    "id": "OG_101",
    "name": "Forbidden Shaping",
    "rarity": "EPIC",
    "set": "OG",
    "text": "Spend all your Mana. Summon a random minion that costs that much.",
    "type": "SPELL"
  },
  {
    "artist": "Phroi Gardner",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 38436,
    "flavor": "People often think that Darkspeaker is the arch nemesis of Lightspeaker, but that title actually belongs to Heavyspeaker.",
    "health": 6,
    "id": "OG_102",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Darkspeaker",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "OG",
    "targetingArrowText": "Swap stats.",
    "text": "<b>Battlecry:</b> Swap stats with a friendly minion.",
    "type": "MINION"
  },
  {
    "artist": "Rafael Zanchetin",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 38439,
    "flavor": "For when your Auchenai Soulpriests call in sick.",
    "id": "OG_104",
    "name": "Embrace the Shadow",
    "rarity": "EPIC",
    "set": "OG",
    "text": "This turn, your healing effects deal damage instead.",
    "type": "SPELL"
  },
  {
    "artist": "Rafael Zanchetin",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 38447,
    "flavor": "Do NOT be late with your overdue fines.",
    "health": 2,
    "id": "OG_109",
    "mechanics": [
      "BATTLECRY",
      "DEATHRATTLE"
    ],
    "name": "Darkshire Librarian",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Battlecry:</b>\nDiscard a random card. <b>Deathrattle:</b>\nDraw a card.",
    "type": "MINION"
  },
  {
    "artist": "Garrett Hanna",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 38452,
    "flavor": "Democracy in action!",
    "health": 5,
    "id": "OG_113",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Darkshire Councilman",
    "rarity": "COMMON",
    "set": "OG",
    "text": "[x]After you summon a minion,\n gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Evgeniy Zagumennyy",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 0,
    "dbfId": 38454,
    "flavor": "Actually, C'Thun gives his full support for this ritual.",
    "id": "OG_114",
    "name": "Forbidden Ritual",
    "rarity": "RARE",
    "set": "OG",
    "text": "Spend all your Mana. Summon that many 1/1 Tentacles.",
    "type": "SPELL"
  },
  {
    "artist": "Mauricio Herrera",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 38456,
    "flavor": "Most citizens of Darkshire wear those surgical masks to prevent spreading Madness to tourists.",
    "id": "OG_116",
    "mechanics": [
      "ImmuneToSpellpower"
    ],
    "name": "Spreading Madness",
    "rarity": "RARE",
    "set": "OG",
    "text": "Deal $9 damage randomly split among ALL characters.",
    "type": "SPELL"
  },
  {
    "artist": "Dan Scott",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 38461,
    "flavor": "SEE YA DARKNESS!",
    "id": "OG_118",
    "name": "Renounce Darkness",
    "rarity": "EPIC",
    "set": "OG",
    "text": "Replace your Hero Power and Warlock cards with another class's. The cards cost (1) less.",
    "type": "SPELL"
  },
  {
    "artist": "Kan Liu",
    "attack": 8,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 8,
    "dbfId": 38463,
    "elite": true,
    "flavor": "That's short for \"Anomnomnomnomalus\".",
    "health": 6,
    "id": "OG_120",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Anomalus",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Deal 8 damage to all minions.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 7,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 7,
    "dbfId": 38464,
    "elite": true,
    "flavor": "Even after all this time, Gul'dan still makes Cho'gall go get donuts and coffee.",
    "health": 7,
    "id": "OG_121",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Cho'gall",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "<b>Battlecry:</b> The next spell you cast this turn costs Health instead of Mana.",
    "type": "MINION"
  },
  {
    "artist": "Sam Nielson",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 38468,
    "elite": true,
    "flavor": "Pro tip: DO NOT BOGART THE BANANAS.",
    "health": 5,
    "id": "OG_122",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Mukla, Tyrant of the Vale",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "<b>Battlecry:</b> Add 2 Bananas to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Daria Tuzova",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 38475,
    "elite": true,
    "flavor": "It's like being able to play with THREE angry chickens!",
    "health": 1,
    "id": "OG_123",
    "name": "Shifter Zerus",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "Each turn this is in your hand, transform it into a random minion.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 38488,
    "elite": true,
    "flavor": "Do they make decisions based on age? \"I'm two minutes older therefore we burn this village.\"",
    "health": 6,
    "id": "OG_131",
    "mechanics": [
      "BATTLECRY",
      "RITUAL",
      "TAUNT"
    ],
    "name": "Twin Emperor Vek'lor",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "[x]<b><b>Taunt</b>\nBattlecry:</b> If your C'Thun has\nat least 10 Attack, summon\nanother Emperor.",
    "type": "MINION"
  },
  {
    "artist": "Tyson Murphy",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 10,
    "dbfId": 38496,
    "elite": true,
    "flavor": "Has not been able to get \"Under the Sea\" out of his head for like FIVE THOUSAND YEARS.",
    "health": 7,
    "id": "OG_133",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "N'Zoth, the Corruptor",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "OG",
    "text": "<b>Battlecry:</b> Summon your <b>Deathrattle</b> minions that died this game.",
    "type": "MINION"
  },
  {
    "artist": "Tooth",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 10,
    "dbfId": 38505,
    "elite": true,
    "flavor": "I spell your doom... Y-O-U-R D-O-O-M!",
    "health": 5,
    "id": "OG_134",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Yogg-Saron, Hope's End",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "<b>Battlecry:</b> Cast a random spell for each spell you've cast this game <i>(targets chosen randomly)</i>.",
    "type": "MINION"
  },
  {
    "artist": "Lars Grant-West",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 38517,
    "flavor": "It’s a self-reducing prophecy.",
    "health": 4,
    "id": "OG_138",
    "name": "Nerubian Prophet",
    "rarity": "COMMON",
    "set": "OG",
    "text": "At the start of your turn, reduce this card's\nCost by (1).",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 10,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 10,
    "dbfId": 38521,
    "flavor": "Rejected names: Forty-Foot Faceless, Big ol' No-face, Huge Creature Sans Face, Teddy.",
    "health": 10,
    "id": "OG_141",
    "name": "Faceless Behemoth",
    "rarity": "COMMON",
    "set": "OG",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 38522,
    "flavor": "Often wonders what path his life might have taken if he wasn't named, you know, \"Eldritch Horror\".",
    "health": 10,
    "id": "OG_142",
    "name": "Eldritch Horror",
    "rarity": "COMMON",
    "set": "OG",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 38526,
    "flavor": "\"Annoyinger-o-Tron\" was just too unwieldy. And accurate.",
    "health": 4,
    "id": "OG_145",
    "mechanics": [
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "name": "Psych-o-Tron",
    "race": "MECHANICAL",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Taunt</b>\n<b>Divine Shield</b>",
    "type": "MINION"
  },
  {
    "artist": "Jesper Esjing",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 38528,
    "flavor": "Not so much \"corrupted\" as \"has terrible aim\".",
    "health": 6,
    "id": "OG_147",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Corrupted Healbot",
    "race": "MECHANICAL",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Restore #8 Health to the enemy hero.",
    "type": "MINION"
  },
  {
    "artist": "Dany Orizio",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 38530,
    "flavor": "But goes by \"Ravishing Ghoul\" when he hits the club.",
    "health": 3,
    "id": "OG_149",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ravaging Ghoul",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Battlecry:</b> Deal 1 damage to all other minions.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 38531,
    "flavor": "I berserk, therefore I am.",
    "health": 5,
    "id": "OG_150",
    "mechanics": [
      "ENRAGED"
    ],
    "name": "Aberrant Berserker",
    "rarity": "COMMON",
    "set": "OG",
    "text": "Has +2 Attack while damaged.",
    "type": "MINION"
  },
  {
    "artist": "J. Meyers & T. Washington",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 38532,
    "flavor": "Because EVERYDAY is the Day of the Tentacle of N'zoth.",
    "health": 1,
    "id": "OG_151",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Tentacle of N'Zoth",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Deal 1 damage to all minions.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 38533,
    "flavor": "They say that \"grotesque is in the eye of the beholder,\" but that's just because they've never seen a Grotesque Dragonhawk. Yikes!",
    "health": 5,
    "id": "OG_152",
    "mechanics": [
      "WINDFURY"
    ],
    "name": "Grotesque Dragonhawk",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Windfury</b>",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 38534,
    "flavor": "He's tried other things, but bog sidling, bog ambling, and bog trundling just aren't as effective as bog creeping.",
    "health": 8,
    "id": "OG_153",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Bog Creeper",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 38538,
    "flavor": "Bile actually makes for surprisingly sturdy fins.",
    "health": 1,
    "id": "OG_156",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Bilefin Tidehunter",
    "race": "MURLOC",
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "OG",
    "text": "<b>Battlecry:</b> Summon a 1/1 Ooze with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Cole Eastburn",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 38541,
    "flavor": "Ok, Initiate. You need to settle down and do your job. In this case, that means die so someone else can get a minor buff.",
    "health": 1,
    "id": "OG_158",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Zealous Initiate",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Give a random friendly minion +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Ryan Metcalf",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 38545,
    "flavor": "For seers, it's very handy to have your crystal ball hanging right in front of your face.",
    "health": 3,
    "id": "OG_161",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Corrupted Seer",
    "race": "MURLOC",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Battlecry:</b> Deal 2 damage to all non-Murloc minions.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 38547,
    "flavor": "C’Thun’s recruiting pitch involves cookies, which is why it’s the most popular Old God.",
    "health": 1,
    "id": "OG_162",
    "mechanics": [
      "BATTLECRY",
      "RITUAL"
    ],
    "name": "Disciple of C'Thun",
    "playRequirements": {
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "set": "OG",
    "targetingArrowText": "Deal 2 damage.",
    "text": "<b>Battlecry:</b> Deal 2 damage. Give your C'Thun +2/+2 <i>(wherever it is)</i>.",
    "type": "MINION"
  },
  {
    "artist": "A. J. Nazzaro",
    "attack": 9,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 38567,
    "flavor": "Add two cups of Blood of the Ancient One to one cup of lemon juice. Add just a dash of sugar and stir. Delicious!",
    "health": 9,
    "id": "OG_173",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Blood of The Ancient One",
    "rarity": "EPIC",
    "set": "OG",
    "text": "If you control two of these\nat the end of your turn, merge them into 'The Ancient One'.",
    "type": "MINION"
  },
  {
    "artist": "Alex Alexandrov",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 38569,
    "flavor": "\"What is that thing?!\" \"I'm not sure, but it seems to be sort of Ysera shaped.\"",
    "health": 1,
    "id": "OG_174",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Faceless Shambler",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "OG",
    "targetingArrowText": "Copy a friendly minion's Attack and Health.",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Copy a friendly minion's Attack and Health.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 38578,
    "flavor": "It's like a backstab, only from the front. And with two more stabs.",
    "id": "OG_176",
    "name": "Shadow Strike",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0,
      "REQ_UNDAMAGED_TARGET": 0
    },
    "rarity": "COMMON",
    "set": "OG",
    "text": "Deal $5 damage to an undamaged character.",
    "type": "SPELL"
  },
  {
    "artist": "Andrew Hou",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 38584,
    "flavor": "He'll always be our first.",
    "health": 1,
    "id": "OG_179",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Fiery Bat",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Deal 1 damage to a random enemy.",
    "type": "MINION"
  },
  {
    "artist": "Cole Eastburn",
    "attack": 4,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 38621,
    "flavor": "Amberweaving is a specialty course at the local trade school.",
    "health": 5,
    "id": "OG_188",
    "mechanics": [
      "BATTLECRY",
      "RITUAL"
    ],
    "name": "Klaxxi Amber-Weaver",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Battlecry:</b> If your C'Thun has at least 10 Attack, gain +5 Health.",
    "type": "MINION"
  },
  {
    "artist": "Skan Srisuwan",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 7,
    "dbfId": 38655,
    "flavor": "They're just normal wisps, actually. The \"Of the Old Gods\" bit is just marketing.",
    "id": "OG_195",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Wisps of the Old Gods",
    "rarity": "EPIC",
    "set": "OG",
    "text": "<b>Choose One -</b> Summon seven 1/1 Wisps; or Give your minions +2/+2.",
    "type": "SPELL"
  },
  {
    "artist": "Mike Franchina",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 0,
    "dbfId": 38666,
    "flavor": "No one's quite sure why it's forbidden. And yes, that should make you nervous.",
    "id": "OG_198",
    "name": "Forbidden Healing",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "OG",
    "text": "Spend all your Mana. Restore twice that much Health.",
    "type": "SPELL"
  },
  {
    "artist": "Dan Orizio",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 38669,
    "flavor": "Really feels good about himself and is in a much better place now. But… he sure does miss piloting those shredders.",
    "health": 7,
    "id": "OG_200",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Validated Doomsayer",
    "rarity": "EPIC",
    "set": "OG",
    "text": "At the start of your turn, set this minion's Attack to 7.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 38718,
    "flavor": "\"Hey.... Is that Mire for sale?\" \n\"No.  I'm keeping it.\"",
    "health": 3,
    "id": "OG_202",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Mire Keeper",
    "rarity": "RARE",
    "set": "OG",
    "text": "[x]<b>Choose One -</b> Summon a\n2/2 Slime; or Gain an\nempty Mana Crystal.",
    "type": "MINION"
  },
  {
    "artist": "Maurico Herrera",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 38724,
    "flavor": "WARNING: DO NOT TOUCH THE PURPLE BALL OF LIGHTNING",
    "id": "OG_206",
    "mechanics": [
      "OVERLOAD"
    ],
    "name": "Stormcrack",
    "overload": 1,
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "OG",
    "text": "Deal $4 damage to a minion. <b>Overload:</b> (1)",
    "type": "SPELL"
  },
  {
    "artist": "Mark Abadier",
    "attack": 5,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 6,
    "dbfId": 38725,
    "flavor": "They never get the recognition they deserve.",
    "health": 5,
    "id": "OG_207",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Faceless Summoner",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Battlecry:</b> Summon a random 3-Cost minion.",
    "type": "MINION"
  },
  {
    "artist": "Wayne Reynolds",
    "attack": 4,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 5,
    "dbfId": 38722,
    "elite": true,
    "flavor": "Hallazeals all your dallazamage.",
    "health": 6,
    "id": "OG_209",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Hallazeal the Ascended",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "Whenever your spells deal damage, restore that much Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 9,
    "dbfId": 38727,
    "flavor": "\"Hello. Misha, Leokk and Huffer aren't here right now, but if you leave a message we'll get back to you right away.\" BEEP.",
    "id": "OG_211",
    "name": "Call of the Wild",
    "rarity": "EPIC",
    "set": "OG",
    "text": "Summon all three Animal Companions.",
    "type": "SPELL"
  },
  {
    "artist": "E. Guiton & A. Bozonnet",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 4,
    "dbfId": 38734,
    "flavor": "A little flea powder will fix that right up.",
    "health": 3,
    "id": "OG_216",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Infested Wolf",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Summon two 1/1 Spiders.",
    "type": "MINION"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 4,
    "dbfId": 38738,
    "flavor": "He thought the set was called \"Flippers of the Old Cods\" and hungrily volunteered to be in it.  He is definitely going to get his hearing checked.",
    "health": 6,
    "id": "OG_218",
    "mechanics": [
      "ENRAGED",
      "TAUNT"
    ],
    "name": "Bloodhoof Brave",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Taunt</b>\nHas +3 Attack while damaged.",
    "type": "MINION"
  },
  {
    "artist": "E. Guiton & Nutchapol",
    "attack": 6,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 7,
    "dbfId": 38739,
    "elite": true,
    "flavor": "Garrosh's best buddy. It's true. Look it up.",
    "health": 5,
    "id": "OG_220",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Malkorok",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "<b>Battlecry:</b> Equip a random weapon.",
    "type": "MINION"
  },
  {
    "artist": "Rafael Zanchetin",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 38740,
    "flavor": "\"Don't worry about me… I'll just be here... under these tentacles.\"",
    "health": 1,
    "id": "OG_221",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Selfless Hero",
    "rarity": "RARE",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "OG",
    "text": "<b>Deathrattle:</b> Give a random friendly minion <b>Divine Shield</b>.",
    "type": "MINION"
  },
  {
    "artist": "Jeremy Cranford",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 38745,
    "durability": 2,
    "flavor": "As far as blades go, this one is pretty great in the motivation department.",
    "id": "OG_222",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Rallying Blade",
    "rarity": "RARE",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "OG",
    "text": "<b>Battlecry:</b> Give +1/+1 to your minions with <b>Divine Shield</b>.",
    "type": "WEAPON"
  },
  {
    "artist": "Eva Wilderman",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 38749,
    "flavor": "Every year a few paladins get disqualified from the Westfall weight lifting championship for using Divine Strength.",
    "id": "OG_223",
    "name": "Divine Strength",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "OG",
    "text": "Give a minion +1/+2.",
    "type": "SPELL"
  },
  {
    "artist": "James Ryman",
    "attack": 8,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 8,
    "dbfId": 38758,
    "elite": true,
    "flavor": "What happens when you try and corrupt a corrupted firelord? DOUBLE NEGATIVE, INSECT!",
    "health": 8,
    "id": "OG_229",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Ragnaros, Lightlord",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "At the end of your turn, restore #8 Health to a damaged friendly character.",
    "type": "MINION"
  },
  {
    "artist": "Chris Seaman",
    "attack": 4,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 38764,
    "flavor": "The secret ingredient: liquified funnel cake.",
    "health": 5,
    "id": "OG_234",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Darkshire Alchemist",
    "playRequirements": {
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "COMMON",
    "set": "OG",
    "targetingArrowText": "Restore 5 Health.",
    "text": "<b>Battlecry:</b> Restore #5 Health.",
    "type": "MINION"
  },
  {
    "artist": "Raymond Swanland",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 10,
    "dbfId": 38770,
    "flavor": "We ran out of space for \"DOOOOOOOOOOOM!!!!!\"",
    "id": "OG_239",
    "name": "DOOM!",
    "rarity": "EPIC",
    "set": "OG",
    "text": "Destroy all minions. Draw a card for each.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 38774,
    "flavor": "It's like a pinata! A lame disgusting horrific pinata.",
    "health": 1,
    "id": "OG_241",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Possessed Villager",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Summon a 1/1 Shadowbeast.",
    "type": "MINION"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 38781,
    "flavor": "Sometimes the Old Gods' corruptions gives you power untold, sometimes you get +1 Attack. We can’t all be winners in the Eldritch lottery.",
    "health": 1,
    "id": "OG_247",
    "mechanics": [
      "STEALTH"
    ],
    "name": "Twisted Worgen",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Stealth</b>",
    "type": "MINION"
  },
  {
    "artist": "Matt Gaser",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 38782,
    "flavor": "peerc rewop",
    "health": 5,
    "id": "OG_248",
    "name": "Am'gam Rager",
    "rarity": "COMMON",
    "set": "OG",
    "type": "MINION"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 38784,
    "flavor": "The Overmind and the Old Gods are surprisingly similar.",
    "health": 3,
    "id": "OG_249",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Infested Tauren",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Taunt</b>\n<b>Deathrattle:</b> Summon a 2/2 Slime.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 38792,
    "flavor": "You don't want to be around after it has eaten an explosive trap.  You thought Sludge Belcher was bad...",
    "health": 4,
    "id": "OG_254",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Eater of Secrets",
    "rarity": "RARE",
    "referencedTags": [
      "SECRET"
    ],
    "set": "OG",
    "text": "<b>Battlecry:</b> Destroy all enemy <b>Secrets</b>. Gain +1/+1 for each.",
    "type": "MINION"
  },
  {
    "artist": "Benjamin Zhang",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 38795,
    "flavor": "\"Hello, is Doom there? No? Can I leave a message?\"",
    "health": 9,
    "id": "OG_255",
    "mechanics": [
      "BATTLECRY",
      "RITUAL"
    ],
    "name": "Doomcaller",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Battlecry:</b> Give your C'Thun +2/+2 <i>(wherever it is).</i> If it's dead, shuffle it into your deck.",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 38797,
    "flavor": "Who's a cute widdle N'Zoth? You are! Yes you are! Yes you're the cutest widdle N'Zoth in the whole world!!!",
    "health": 2,
    "id": "OG_256",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Spawn of N'Zoth",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Give your minions +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 38825,
    "flavor": "Quick! Before I drown! Let me sharpen your sword for you.",
    "health": 4,
    "id": "OG_267",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Southsea Squidface",
    "race": "PIRATE",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Give your weapon +2 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Luke Mancini",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 38832,
    "flavor": "I like it because it scales.",
    "health": 8,
    "id": "OG_271",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Scaled Nightmare",
    "race": "DRAGON",
    "rarity": "EPIC",
    "set": "OG",
    "text": "At the start of your turn, double this minion's Attack.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 38833,
    "flavor": "If you strike him down, he shall become more powerful than you can possibly imagine.",
    "health": 1,
    "id": "OG_272",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Twilight Summoner",
    "rarity": "EPIC",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Summon a 5/5 Faceless Destroyer.",
    "type": "MINION"
  },
  {
    "artist": "Ralph Horsley",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 5,
    "dbfId": 38843,
    "flavor": "Or if you're too tired, you can just kind of lean against the darkness.",
    "id": "OG_273",
    "name": "Stand Against Darkness",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "COMMON",
    "set": "OG",
    "text": "Summon five 1/1 Silver Hand Recruits.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 38848,
    "flavor": "They have an uneasy rivalry with the Blood Paladins.",
    "id": "OG_276",
    "name": "Blood Warriors",
    "rarity": "EPIC",
    "set": "OG",
    "text": "Add a copy of each damaged friendly minion to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "James Ryman",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 10,
    "dbfId": 38857,
    "elite": true,
    "flavor": "C'Thun's least favorite Hearthstone card: Eye for an Eye.",
    "health": 6,
    "howToEarn": "Unlocked when opening a Whispers of the Old Gods pack.",
    "howToEarnGolden": "Crafting unlocked after opening a Whispers of the Old Gods pack.",
    "id": "OG_280",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "C'Thun",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "<b>Battlecry:</b> Deal damage equal to this minion's Attack randomly split among all enemies.",
    "type": "MINION"
  },
  {
    "artist": "Eva Wilderman",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 38859,
    "flavor": "Here, Evil!  C'mon boy!",
    "health": 3,
    "howToEarn": "Unlocked when opening a Whispers of the Old Gods pack.",
    "howToEarnGolden": "Crafting unlocked after opening a Whispers of the Old Gods pack.",
    "id": "OG_281",
    "mechanics": [
      "BATTLECRY",
      "RITUAL"
    ],
    "name": "Beckoner of Evil",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Battlecry:</b> Give your C'Thun +2/+2 <i>(wherever it is).</i>",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 9,
    "dbfId": 38861,
    "flavor": "C'Thun demands a sacrifice! Preferably a Deathwing.",
    "health": 4,
    "id": "OG_282",
    "mechanics": [
      "BATTLECRY",
      "RITUAL"
    ],
    "name": "Blade of C'Thun",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "OG",
    "targetingArrowText": "Destroy a minion.",
    "text": "<b>Battlecry:</b> Destroy a minion. Add its Attack and Health to your C'Thun's <i>(wherever it is).</i>",
    "type": "MINION"
  },
  {
    "artist": "Jesper Esjing",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 38863,
    "flavor": "He gave her a promise ring and everything.",
    "health": 2,
    "id": "OG_283",
    "mechanics": [
      "BATTLECRY",
      "DIVINE_SHIELD",
      "RITUAL"
    ],
    "name": "C'Thun's Chosen",
    "rarity": "COMMON",
    "set": "OG",
    "text": "[x]<b>Divine Shield</b>\n<b>Battlecry:</b> Give your C'Thun\n+2/+2 <i>(wherever it is).</i>",
    "type": "MINION"
  },
  {
    "artist": "Eric Braddock",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 38864,
    "flavor": "\"Ok C'Thun, repeat after me: 'Your mother was a hamster.'\"",
    "health": 4,
    "id": "OG_284",
    "mechanics": [
      "BATTLECRY",
      "RITUAL",
      "TAUNT"
    ],
    "name": "Twilight Geomancer",
    "rarity": "COMMON",
    "set": "OG",
    "text": "[x]<b>Taunt</b>\n<b>Battlecry:</b> Give your C'Thun\n<b>Taunt</b> <i>(wherever it is).</i>",
    "type": "MINION"
  },
  {
    "artist": "Tooth",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 38868,
    "flavor": "Just doesn't understand those Twilight Youngsters any more - with their comic books and their rock music.",
    "health": 4,
    "id": "OG_286",
    "mechanics": [
      "RITUAL",
      "TRIGGER_VISUAL"
    ],
    "name": "Twilight Elder",
    "rarity": "COMMON",
    "set": "OG",
    "text": "At the end of your turn, give your C'Thun +1/+1 <i>(wherever it is).</i>",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 38873,
    "flavor": "\"honey, can u run down to the store and pick up some 10 cost minions? thx\"",
    "health": 6,
    "id": "OG_290",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Ancient Harbinger",
    "rarity": "EPIC",
    "set": "OG",
    "text": "At the start of your turn, put a 10-Cost minion from your deck into your hand.",
    "type": "MINION"
  },
  {
    "artist": "J. Meyers & A. Bozonnet",
    "attack": 4,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 38876,
    "flavor": "I mean, it's not creepy if you ASK before you steal their shadow to make a small replica of them to keep on your shelf.",
    "health": 4,
    "id": "OG_291",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Shadowcaster",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "EPIC",
    "set": "OG",
    "targetingArrowText": "Add a 1/1 copy to your hand.",
    "text": "<b>Battlecry:</b> Choose a friendly minion. Add a 1/1 copy to your hand that costs (1).",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 4,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 38875,
    "flavor": "He's going to leave the dying up to you, if that's cool.",
    "health": 2,
    "id": "OG_292",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Forlorn Stalker",
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "OG",
    "text": "<b>Battlecry:</b> Give all <b>Deathrattle</b> minions in your hand +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Nutchapol Thitinunthakorn",
    "attack": 5,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 6,
    "dbfId": 38882,
    "flavor": "There's a whole gradient of Arakkoa! This one is on the darker side.",
    "health": 7,
    "id": "OG_293",
    "mechanics": [
      "BATTLECRY",
      "RITUAL",
      "TAUNT"
    ],
    "name": "Dark Arakkoa",
    "rarity": "COMMON",
    "set": "OG",
    "text": "[x]<b>Taunt</b>\n<b>Battlecry:</b> Give your C'Thun\n+3/+3 <i>(wherever it is).</i>",
    "type": "MINION"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 38888,
    "flavor": "Cults need pharmacists too.",
    "health": 4,
    "id": "OG_295",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Cult Apothecary",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Battlecry:</b> For each enemy minion, restore #2 Health to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 38895,
    "elite": true,
    "flavor": "Has 20 years of training in classical ballet, but ALLLLLL he ever gets asked to do is boogie.",
    "health": 7,
    "id": "OG_300",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "The Boogeymonster",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "Whenever this attacks and kills a minion, gain +2/+2.",
    "type": "MINION"
  },
  {
    "artist": "Alex Konstad",
    "attack": 6,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 7,
    "dbfId": 38897,
    "flavor": "Back in her day, each shield weighed two tons and she had to carry four of them on each arm!",
    "health": 6,
    "id": "OG_301",
    "mechanics": [
      "BATTLECRY",
      "RITUAL"
    ],
    "name": "Ancient Shieldbearer",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Battlecry:</b> If your C'Thun has at least 10 Attack, gain 10 Armor.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 5,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 38898,
    "flavor": "Nothing unburdens your soul like a good ushing!",
    "health": 6,
    "id": "OG_302",
    "mechanics": [
      "RITUAL",
      "TRIGGER_VISUAL"
    ],
    "name": "Usher of Souls",
    "rarity": "COMMON",
    "set": "OG",
    "text": "Whenever a friendly minion dies, give your C'Thun +1/+1\n<i>(wherever it is).</i>",
    "type": "MINION"
  },
  {
    "artist": "J. Meyers & T. Washington",
    "attack": 3,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 38900,
    "flavor": "No matter how many times we tell her not to, she keeps feeding C'Thun scraps under the table.",
    "health": 2,
    "id": "OG_303",
    "mechanics": [
      "RITUAL",
      "SPELLPOWER",
      "TRIGGER_VISUAL"
    ],
    "name": "Cult Sorcerer",
    "rarity": "RARE",
    "set": "OG",
    "spellDamage": 1,
    "text": "[x]<b><b>Spell Damage</b> +1</b>\nAfter you cast a spell,\ngive your C'Thun +1/+1\n<i>(wherever it is).</i>",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 8,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 8,
    "dbfId": 38909,
    "flavor": "Banned from every all-you-can-eat buffet on Azeroth.",
    "health": 8,
    "id": "OG_308",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Giant Sand Worm",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "OG",
    "text": "Whenever this attacks and kills a minion, it may attack again.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 6,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 38910,
    "elite": true,
    "flavor": "She flitters around Ahn'Qiraj dreaming of the day she will meet a sweet prince, whom she can lay thousands of eggs with.",
    "health": 5,
    "id": "OG_309",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Princess Huhuran",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_DEATHRATTLE": 0
    },
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "OG",
    "targetingArrowText": "Trigger a Deathrattle.",
    "text": "<b>Battlecry:</b> Trigger a friendly minion's <b>Deathrattle</b>.",
    "type": "MINION"
  },
  {
    "artist": "Phroi Gardner",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 3,
    "dbfId": 38911,
    "flavor": "Turns out divine shields are way cheaper if you buy in bulk.",
    "health": 3,
    "id": "OG_310",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Steward of Darkshire",
    "rarity": "RARE",
    "referencedTags": [
      "DIVINE_SHIELD"
    ],
    "set": "OG",
    "text": "Whenever you summon a 1-Health minion, give it <b>Divine Shield</b>.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 38913,
    "flavor": "Wait, how can you have a light in the dark?  If you turn on a light while it’s dark, doesn’t that mean it’s no longer dark?",
    "id": "OG_311",
    "name": "A Light in the Darkness",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "OG",
    "text": "<b>Discover</b> a minion.\nGive it +1/+1.",
    "type": "SPELL"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 1,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 38914,
    "flavor": "Hates when N'Zoth yells \"Ahoy Matey!!\", but there's not really much he can do about it.",
    "health": 1,
    "id": "OG_312",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "N'Zoth's First Mate",
    "race": "PIRATE",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Battlecry:</b> Equip a 1/3 Rusty Hook.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 38916,
    "flavor": "Druids who spend too long in bear form are more susceptible to the whispers of the Old Gods.  Right now they are whispering the lyrics to \"La Bamba\".",
    "health": 2,
    "id": "OG_313",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Addled Grizzly",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "OG",
    "text": "After you summon a minion, give it +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 38918,
    "flavor": "For his next trick, he turns the ichor back to blood and stuffs it back in you.",
    "id": "OG_314",
    "name": "Blood To Ichor",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "OG",
    "text": "Deal $1 damage to a minion. If it survives, summon a 2/2 Slime.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 3,
    "dbfId": 38920,
    "flavor": "They're really just in it for the Blood Parrot.",
    "health": 4,
    "id": "OG_315",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Bloodsail Cultist",
    "race": "PIRATE",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Battlecry:</b> If you control another Pirate, give your weapon +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Luke Mancini",
    "attack": 5,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 6,
    "dbfId": 38922,
    "elite": true,
    "flavor": "His whole job is yelling \"Yogg-Saron comin'!\"",
    "health": 5,
    "id": "OG_316",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Herald Volazj",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "<b>Battlecry:</b> Summon a 1/1 copy of each of your other minions.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 12,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 10,
    "dbfId": 38943,
    "elite": true,
    "flavor": "To his credit, Deathwing really took to heart the feedback he was receiving that he needed to be \"more of a team player\".",
    "health": 12,
    "id": "OG_317",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Deathwing, Dragonlord",
    "race": "DRAGON",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Put all Dragons from your hand into the battlefield.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 38944,
    "elite": true,
    "flavor": "When C'thun went to sleep, he checked under his bed for Hogger.",
    "health": 6,
    "id": "OG_318",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Hogger, Doom of Elwynn",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "OG",
    "text": "Whenever this minion takes damage, summon a 2/2 Gnoll with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Todd Lockwood",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 38957,
    "flavor": "Still fearsome in the daytime.",
    "health": 4,
    "id": "OG_320",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Midnight Drake",
    "race": "DRAGON",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Battlecry:</b> Gain +1 Attack for each other card\nin your hand.",
    "type": "MINION"
  },
  {
    "artist": "Gonzalo Ordonez",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 38958,
    "flavor": "Every month they share a pancake breakfast with the Perfectly Rational Worshippers.",
    "health": 6,
    "id": "OG_321",
    "mechanics": [
      "RITUAL",
      "TAUNT",
      "TRIGGER_VISUAL"
    ],
    "name": "Crazed Worshipper",
    "rarity": "EPIC",
    "set": "OG",
    "text": "<b>Taunt.</b> Whenever this minion takes damage, give your C'Thun +1/+1 <i>(wherever it is).</i>",
    "type": "MINION"
  },
  {
    "artist": "Max Grecke",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 38960,
    "flavor": "\"Look, they fell off the back of a ship, do you want them or not? I have a meeting with Y'Shaarj in like ten minutes.\"",
    "health": 5,
    "id": "OG_322",
    "name": "Blackwater Pirate",
    "race": "PIRATE",
    "rarity": "RARE",
    "set": "OG",
    "text": "Your weapons cost (2) less.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 38961,
    "flavor": "Roll ‘greed’ OR THIS COULD HAPPEN TO YOU.",
    "health": 2,
    "id": "OG_323",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Polluted Hoarder",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Draw a card.",
    "type": "MINION"
  },
  {
    "artist": "Kan Liu",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 38985,
    "flavor": "Carrion, my wayward grub.",
    "health": 5,
    "id": "OG_325",
    "name": "Carrion Grub",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "OG",
    "type": "MINION"
  },
  {
    "artist": "Samwise",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 39002,
    "flavor": "Often excluded from dinner parties.  To be fair, he is very boaring.",
    "health": 1,
    "id": "OG_326",
    "name": "Duskboar",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "OG",
    "type": "MINION"
  },
  {
    "artist": "L. Lullabi & Nutchapol",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 39003,
    "flavor": "Yeah, I think we can agree that killing the squirming tentacle first is a good idea.",
    "health": 4,
    "id": "OG_327",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Squirming Tentacle",
    "rarity": "COMMON",
    "set": "OG",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 4,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 39008,
    "flavor": "Will be really useful in the new \"Hearthémon\" game.",
    "health": 5,
    "id": "OG_328",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Master of Evolution",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Battlecry:</b> Transform a friendly minion into a random one that costs (1) more.",
    "type": "MINION"
  },
  {
    "artist": "Jon Neimeister",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 39026,
    "flavor": "Psst! Wanna buy a random class card (from your opponent's class)?",
    "health": 2,
    "id": "OG_330",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Undercity Huckster",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Deathrattle:</b> Add a random card to your hand <i>(from your opponent's class)</i>.",
    "type": "MINION"
  },
  {
    "artist": "Adam Byrne",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 39033,
    "flavor": "Wait, what kind of acolyte doesn't wear a hood?",
    "health": 6,
    "id": "OG_334",
    "mechanics": [
      "RITUAL",
      "TRIGGER_VISUAL"
    ],
    "name": "Hooded Acolyte",
    "rarity": "COMMON",
    "set": "OG",
    "text": "Whenever a character is healed, give your\nC'Thun +1/+1 <i>(wherever it is).</i>",
    "type": "MINION"
  },
  {
    "artist": "Tyler Walpole",
    "attack": 4,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 39034,
    "flavor": "Yeah, it's cooler in the shade, but you're also more likely to get JACKED.",
    "health": 3,
    "id": "OG_335",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Shifting Shade",
    "rarity": "RARE",
    "set": "OG",
    "text": "[x]<b>Deathrattle:</b> Copy a card\nfrom your opponent's deck\n and add it to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Garrett Hanna",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 39041,
    "flavor": "What are the qualifications for being a 'Horror?'  Just how horrible do you have to be?",
    "health": 3,
    "id": "OG_337",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Cyclopian Horror",
    "rarity": "EPIC",
    "set": "OG",
    "text": "<b>Taunt</b>. <b>Battlecry:</b> Gain      +1 Health for each enemy minion.",
    "type": "MINION"
  },
  {
    "artist": "Steve Prescott",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 39046,
    "elite": true,
    "flavor": "You can take away his humanity, but you will never take away his fishing pole.",
    "health": 4,
    "id": "OG_338",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Nat, the Darkfisher",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "At the start of your opponent's turn, they have a 50% chance to draw an extra card.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 39118,
    "flavor": "Just before he comes into play, there is an AWESOME training montage with C'Thun.",
    "health": 6,
    "id": "OG_339",
    "mechanics": [
      "BATTLECRY",
      "RITUAL"
    ],
    "name": "Skeram Cultist",
    "rarity": "RARE",
    "set": "OG",
    "text": "<b>Battlecry:</b> Give your C'Thun +2/+2 <i>(wherever it is).</i>",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 39119,
    "elite": true,
    "flavor": "Don't tell Soggoth, but in the future he gets totally owned by the Master's Glaive and his skull becomes a tourist attraction.",
    "health": 9,
    "id": "OG_340",
    "mechanics": [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS",
      "TAUNT"
    ],
    "name": "Soggoth the Slitherer",
    "rarity": "LEGENDARY",
    "set": "OG",
    "text": "<b>Taunt</b>\nCan't be targeted by spells or Hero Powers.",
    "type": "MINION"
  },
  {
    "artist": "Samwise Didier",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 1754,
    "elite": true,
    "entourage": [
      "PRO_001a",
      "PRO_001b",
      "PRO_001c"
    ],
    "flavor": "He's looking for a drummer.  The current candidates are: Novice Engineer, Sen'jin Shieldmasta', and Ragnaros the Firelord.",
    "health": 5,
    "howToEarnGolden": "Awarded at BlizzCon 2013.",
    "id": "PRO_001",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Elite Tauren Chieftain",
    "rarity": "LEGENDARY",
    "set": "HOF",
    "text": "<b>Battlecry:</b> Give both players the power to ROCK! (with a Power Chord card)",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 397,
    "flavor": "'Flesheating' is an unfair name.  It's just that there's not really much else for him to eat.",
    "health": 3,
    "id": "tt_004",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Flesheating Ghoul",
    "rarity": "COMMON",
    "set": "EXPERT1",
    "text": "Whenever a minion dies, gain +1 Attack.",
    "type": "MINION"
  },
  {
    "artist": "Gonzalo Ordonez",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 366,
    "flavor": "While it's fun to intercept enemy lightning bolts, a spellbender much prefers to intercept opposing Marks of the Wild.  It just feels meaner.  And blood elves... well, they're a little mean.",
    "id": "tt_010",
    "mechanics": [
      "SECRET"
    ],
    "name": "Spellbender",
    "rarity": "EPIC",
    "set": "EXPERT1",
    "text": "<b>Secret:</b> When an enemy casts a spell on a minion, summon a 1/3 as the new target.",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41076,
    "flavor": "Aww.  So cute.  Want to feed him another finger?",
    "health": 2,
    "id": "UNG_001",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Pterrordax Hatchling",
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "<b><b>Battlecry:</b> Adapt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 41120,
    "flavor": "Always fun to say out loud \"VOL-CA-NO-SAUUUR!\"",
    "health": 6,
    "id": "UNG_002",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Volcanosaur",
    "race": "BEAST",
    "rarity": "RARE",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> <b>Adapt</b>, then <b>Adapt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Andrew Hou",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 8,
    "dbfId": 41130,
    "flavor": "Comes with fries and a drink.",
    "id": "UNG_004",
    "name": "Dinosize",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "Set a minion's Attack and Health to 10.",
    "type": "SPELL"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 41137,
    "flavor": "Doesn't like to adapt unless others are watching. Some minions are such show-offs.",
    "health": 2,
    "id": "UNG_009",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ravasaur Runt",
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> If you control at least 2 other minions, <b>Adapt.</b>",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 41138,
    "flavor": "Bet you can't eat just one murloc!",
    "health": 7,
    "id": "UNG_010",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Sated Threshadon",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Deathrattle:</b> Summon three 1/1 Murlocs.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 2,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 41139,
    "flavor": "Murloc hydrologists are pretty rare.  Most murloc undergrads pick computer science.",
    "health": 2,
    "id": "UNG_011",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Hydrologist",
    "race": "MURLOC",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER",
      "SECRET"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> <b>Discover</b> a <b>Secret</b>.",
    "type": "MINION"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 6,
    "dbfId": 41145,
    "elite": true,
    "flavor": "Ironically, his favorite number is 4.",
    "health": 7,
    "id": "UNG_015",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Sunkeeper Tarim",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Set all other minions' Attack and Health to 3.",
    "type": "MINION"
  },
  {
    "artist": "Chris Seaman",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 41151,
    "flavor": "Oh, a wise geyser eh?",
    "id": "UNG_018",
    "name": "Flame Geyser",
    "playRequirements": {
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "Deal $2 damage.\nAdd a 1/2 Elemental to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Evgeniy Dlinnov",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 41152,
    "faction": "HORDE",
    "flavor": "Makes a mean puff pastry.",
    "health": 1,
    "id": "UNG_019",
    "mechanics": [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS"
    ],
    "name": "Air Elemental",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "Can't be targeted by spells or Hero Powers.",
    "type": "MINION"
  },
  {
    "artist": "Eva Widermann",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 41153,
    "flavor": "What did you draw? Shhhh… it’s a secret.",
    "health": 3,
    "id": "UNG_020",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Arcanologist",
    "rarity": "COMMON",
    "referencedTags": [
      "SECRET"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> Draw a <b>Secret</b> from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Jakub Kasber",
    "attack": 5,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 41154,
    "flavor": "Explorers nicknamed him the Teapot Elemental.",
    "health": 4,
    "id": "UNG_021",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Steam Surger",
    "race": "ELEMENTAL",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "[x]<b>Battlecry:</b> If you played\nan Elemental last turn,\nadd a 'Flame Geyser'\nto your hand.",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 41155,
    "flavor": "Mirage is actually the name of its long-lost cat.",
    "health": 3,
    "id": "UNG_022",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Mirage Caller",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "rarity": "RARE",
    "set": "UNGORO",
    "targetingArrowText": "Summon a 1/1 copy.",
    "text": "<b>Battlecry:</b> Choose a friendly minion. Summon a 1/1 copy of it.",
    "type": "MINION"
  },
  {
    "artist": "Izzy Hoover",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 3,
    "dbfId": 41158,
    "flavor": "Nice spell.  YOINK!",
    "id": "UNG_024",
    "mechanics": [
      "SECRET"
    ],
    "name": "Mana Bind",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "<b>Secret:</b> When your opponent casts a spell, add a copy to your hand that costs (0).",
    "type": "SPELL"
  },
  {
    "artist": "Gustav Schmidt",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 5,
    "dbfId": 41159,
    "flavor": "Many young shaman summon a volcano as their first school project.",
    "id": "UNG_025",
    "mechanics": [
      "OVERLOAD",
      "ImmuneToSpellpower"
    ],
    "name": "Volcano",
    "overload": 2,
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "Deal $15 damage randomly split among all minions.\n<b>Overload:</b> (2)",
    "type": "SPELL"
  },
  {
    "artist": "Mike Sass",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 41162,
    "elite": true,
    "flavor": "If you strike her down, she shall become more powerful than you can possibly… well, she'll become a 6/6 anyways.",
    "health": 2,
    "id": "UNG_027",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Pyros",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "<b>Deathrattle:</b> Return this to your hand as a 6/6 that costs (6).",
    "type": "MINION"
  },
  {
    "artist": "Rafael Zanchetin",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 1,
    "dbfId": 41168,
    "elite": true,
    "flavor": "Although powerful, the incantation is simple. It’s just a jump to the left, and then a step to the right.",
    "id": "UNG_028",
    "mechanics": [
      "QUEST"
    ],
    "name": "Open the Waygate",
    "questReward": "UNG_028t",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "[x]<b>Quest:</b> Cast 6 spells that\ndidn't start in your deck.\n<b>Reward:</b> Time Warp.",
    "type": "SPELL"
  },
  {
    "artist": "Nutchapol Thitinunthakorn",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 41169,
    "flavor": "This one’s a bird. And here’s a bunny!",
    "id": "UNG_029",
    "name": "Shadow Visions",
    "rarity": "EPIC",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "UNGORO",
    "text": "<b>Discover</b> a copy of a spell in your deck.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler Walpole",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 41170,
    "flavor": "By accepting this healing, you agree to the following terms…",
    "id": "UNG_030",
    "name": "Binding Heal",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "Restore #5 Health to a minion and your hero.",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 1,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 41173,
    "faction": "HORDE",
    "flavor": "Being made of light has its disadvantages, but at least it's always looking on the bright side.",
    "health": 1,
    "id": "UNG_032",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Crystalline Oracle",
    "race": "ELEMENTAL",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "[x]<b>Deathrattle:</b> Copy a card\nfrom your opponent's deck\n and add it to your hand.",
    "type": "MINION"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 2,
    "dbfId": 41176,
    "flavor": "It's a literal lava lamp!",
    "health": 3,
    "id": "UNG_034",
    "mechanics": [
      "AURA"
    ],
    "name": "Radiant Elemental",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "Your spells cost (1) less.",
    "type": "MINION"
  },
  {
    "artist": "Servando Lupini",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 3,
    "dbfId": 41177,
    "flavor": "George promised to be good. But it's easy for little Glimmerroots to forget.",
    "health": 3,
    "id": "UNG_035",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Curious Glimmerroot",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "[x]<b>Battlecry:</b> Look at 3 cards.\nGuess which one started\nin your opponent's deck\nto get a copy of it.",
    "type": "MINION"
  },
  {
    "artist": "Garrett Hanna",
    "attack": 2,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 4,
    "dbfId": 41180,
    "flavor": "A hero... In a half-shell.",
    "health": 6,
    "id": "UNG_037",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Tortollan Shellraiser",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "[x]<b>Taunt</b>\n<b>Deathrattle:</b> Give a random\n friendly minion +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 4,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 41191,
    "flavor": "For better results, feed your pterrordax low-fat, high-fiber minions.",
    "health": 4,
    "id": "UNG_047",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Ravenous Pterrordax",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "targetingArrowText": "Destroy a friendly minion.",
    "text": "<b>Battlecry:</b> Destroy a friendly minion to <b>Adapt</b> twice.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 1,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 41194,
    "flavor": "Hi, Tar here. Long time lurking, first time taunting…",
    "health": 7,
    "id": "UNG_049",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Tar Lurker",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Taunt</b>\nHas +3 Attack during your opponent's turn.",
    "type": "MINION"
  },
  {
    "artist": "Chanchai Luechaiwattanasopon",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 41207,
    "flavor": "The result of a fundamental misunderstanding of the phrase \"flower power\".",
    "id": "UNG_057",
    "name": "Razorpetal Volley",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "Add two Razorpetals to your hand that deal 1 damage.",
    "type": "SPELL"
  },
  {
    "artist": "Sojin Hwang",
    "attack": 2,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 41208,
    "flavor": "The reason why there are no zombies in Un'goro.",
    "health": 2,
    "id": "UNG_058",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Razorpetal Lasher",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "[x]<b>Battlecry:</b> Add a\nRazorpetal to your hand\nthat deals 1 damage.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 41212,
    "flavor": "Jinx!",
    "id": "UNG_060",
    "name": "Mimic Pod",
    "playRequirements": {
      "REQ_MINION_TARGET": 0
    },
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "Draw a card, then add a copy of it to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 41213,
    "durability": 3,
    "flavor": "You know you’re a Rogue when a sharp rock makes you go “Ooh!  Dagger!”",
    "id": "UNG_061",
    "name": "Obsidian Shard",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "[x]Costs (1) less for each\ncard you've played from\nanother class.",
    "type": "WEAPON"
  },
  {
    "artist": "Craig Elliot",
    "attack": 1,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 2,
    "dbfId": 41216,
    "flavor": "AKA Edwin VanLeaf.",
    "health": 1,
    "id": "UNG_063",
    "mechanics": [
      "COMBO"
    ],
    "name": "Biteweed",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "<b>Combo:</b> Gain +1/+1 for each other card you've played this turn.",
    "type": "MINION"
  },
  {
    "artist": "Efrem Palacios",
    "attack": 3,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 5,
    "dbfId": 41217,
    "flavor": "'Cause slayers gonna slay, slay, slay, slay, slay.",
    "health": 4,
    "id": "UNG_064",
    "mechanics": [
      "COMBO"
    ],
    "name": "Vilespine Slayer",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_FOR_COMBO": 0
    },
    "rarity": "EPIC",
    "set": "UNGORO",
    "targetingArrowText": "Destroy a minion.",
    "text": "<b>Combo:</b> Destroy a minion.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 5,
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 4,
    "dbfId": 41218,
    "elite": true,
    "flavor": "A Tortollan gardener's worst nightmare.",
    "health": 3,
    "id": "UNG_065",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Sherazin, Corpse Flower",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "<b>Deathrattle:</b> Go dormant. Play 4 cards in a turn to revive this minion.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 41222,
    "elite": true,
    "flavor": "Why can't it ever be The Taverns Below?",
    "id": "UNG_067",
    "mechanics": [
      "QUEST"
    ],
    "name": "The Caverns Below",
    "questReward": "UNG_067t1",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "[x]<b>Quest:</b> Play five minions\nwith the same name.\n<b>Reward:</b> Crystal Core.",
    "type": "SPELL"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 41241,
    "flavor": "He spends a lot of time keeping himself in stoneshape.",
    "health": 5,
    "id": "UNG_070",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tol'vir Stoneshaper",
    "rarity": "RARE",
    "referencedTags": [
      "DIVINE_SHIELD",
      "TAUNT"
    ],
    "set": "UNGORO",
    "text": "[x]<b>Battlecry:</b> If you played an\nElemental last turn, gain\n <b>Taunt</b> and <b>Divine Shield</b>.",
    "type": "MINION"
  },
  {
    "artist": "Chanchai Luechaiwattanasopon",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 41242,
    "flavor": "Still salty about it not being the \"Year of the Mastodon.\"",
    "health": 10,
    "id": "UNG_071",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Giant Mastodon",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Mark Gibbons",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41243,
    "flavor": "Briefly tried stand-up comedy under the name \"Stonehill Offender\", but turtles are just too thin-skinned.",
    "health": 4,
    "id": "UNG_072",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Stonehill Defender",
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "UNGORO",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> <b>Discover</b> a <b>Taunt</b> minion.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 41245,
    "flavor": "Loves crab meat. Fears crabs.",
    "health": 3,
    "id": "UNG_073",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Rockpool Hunter",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 14
    },
    "race": "MURLOC",
    "rarity": "COMMON",
    "set": "UNGORO",
    "targetingArrowText": "Give +1/+1.",
    "text": "<b>Battlecry:</b> Give a friendly Murloc +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41247,
    "flavor": "A youngster who is truly hungry for self-improvement.",
    "health": 3,
    "id": "UNG_075",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Vicious Fledgling",
    "race": "BEAST",
    "rarity": "RARE",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "After this minion attacks a hero, <b>Adapt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41249,
    "flavor": "Often misunderstood, it's just that he likes to use the eggs as pillows.",
    "health": 1,
    "id": "UNG_076",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Eggnapper",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Deathrattle:</b> Summon two 1/1 Raptors.",
    "type": "MINION"
  },
  {
    "artist": "Jerry Mascho",
    "attack": 2,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 2,
    "dbfId": 41252,
    "flavor": "In the Tortollan tongue, Un’goro is known as the “Land of the Lost and Found.”",
    "health": 2,
    "id": "UNG_078",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tortollan Forager",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> Add a random minion with 5 or more Attack to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 41253,
    "flavor": "Goes by the online handle \"KoolKrusher99.\"",
    "health": 8,
    "id": "UNG_079",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Frozen Crusher",
    "race": "ELEMENTAL",
    "rarity": "RARE",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "UNGORO",
    "text": "After this minion attacks, <b>Freeze</b> it.",
    "type": "MINION"
  },
  {
    "artist": "Hideaki Takamura",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41257,
    "flavor": "What? THUNDER LIZARD is adapting!",
    "health": 3,
    "id": "UNG_082",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Thunder Lizard",
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry</b>: If you played an Elemental last turn, <b>Adapt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Bozonnet",
    "attack": 0,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41259,
    "flavor": "A key ingredient in all discerning Funnel Cake recipes.",
    "health": 3,
    "id": "UNG_083",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Devilsaur Egg",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "<b>Deathrattle:</b> Summon a 5/5 Devilsaur.",
    "type": "MINION"
  },
  {
    "artist": "Dan Scott",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 41260,
    "flavor": "This is what happens when you use a volcano as a bird bath.",
    "health": 3,
    "id": "UNG_084",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fire Plume Phoenix",
    "playRequirements": {
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "targetingArrowText": "Deal 2 damage.",
    "text": "<b>Battlecry:</b> Deal 2 damage.",
    "type": "MINION"
  },
  {
    "artist": "Rafael Zanchetin",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 41261,
    "faction": "HORDE",
    "flavor": "She rules the emerald hive at the end of the yellow brick trail.",
    "health": 3,
    "id": "UNG_085",
    "mechanics": [
      "AURA"
    ],
    "name": "Emerald Hive Queen",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "Your minions cost (2) more.",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 5,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 7,
    "dbfId": 41262,
    "flavor": "Must be something it ate.",
    "health": 3,
    "id": "UNG_086",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Giant Anaconda",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "<b>Deathrattle:</b> Summon a minion from your hand with 5 or more Attack.",
    "type": "MINION"
  },
  {
    "artist": "Mark Gibbons",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 41263,
    "flavor": "It's actually only the middle head that's bitter. The others are sweet and spicy.",
    "health": 8,
    "id": "UNG_087",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Bittertide Hydra",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "Whenever this minion takes damage, deal 3 damage to your hero.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 41264,
    "flavor": "I see pizza in my future.",
    "health": 4,
    "id": "UNG_088",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tortollan Primalist",
    "rarity": "EPIC",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> <b>Discover</b> a spell and cast it with random targets.",
    "type": "MINION"
  },
  {
    "artist": "Brian Despain",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 41265,
    "flavor": "\"Low, low rents! Must enjoy a nomadic lifestyle. Quasi-sentient, bipedal, amphibious humanoids ONLY!\"",
    "health": 4,
    "id": "UNG_089",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gentle Megasaur",
    "race": "BEAST",
    "rarity": "EPIC",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> <b>Adapt</b> your Murlocs.",
    "type": "MINION"
  },
  {
    "artist": "Luke Mancini",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 41286,
    "flavor": "What happens when a dinosaur mixes soda and pop rocks.",
    "health": 7,
    "id": "UNG_099",
    "mechanics": [
      "BATTLECRY",
      "CHARGE"
    ],
    "name": "Charged Devilsaur",
    "race": "BEAST",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "<b>Charge</b>\n<b>Battlecry:</b> Can't attack heroes this turn.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 5,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 40971,
    "flavor": "Always sticking its neck into other people’s business.",
    "health": 4,
    "id": "UNG_100",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Verdant Longneck",
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> <b>Adapt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Matt Dixon",
    "attack": 3,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 40973,
    "flavor": "Master of the Three Shell Monte.",
    "health": 3,
    "id": "UNG_101",
    "mechanics": [
      "CHOOSE_ONE"
    ],
    "name": "Shellshifter",
    "rarity": "RARE",
    "referencedTags": [
      "STEALTH",
      "TAUNT"
    ],
    "set": "UNGORO",
    "text": "[x]<b>Choose One - </b>Transform\ninto a 5/3 with <b>Stealth</b>;\nor a 3/5 with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Grace Liu",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 4,
    "dbfId": 40991,
    "flavor": "The most powerful mushrooms are commonly found in boxes marked with \"?\".",
    "id": "UNG_103",
    "name": "Evolving Spores",
    "rarity": "RARE",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "<b>Adapt</b> your minions.",
    "type": "SPELL"
  },
  {
    "artist": "Mike Azevedo",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 41081,
    "flavor": "You can make your own Earthen Scales at home. Step 1: Roll around in the dirt. Step 2: Magic.",
    "id": "UNG_108",
    "name": "Earthen Scales",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "UNGORO",
    "targetingArrowText": "Give +1/+1.",
    "text": "Give a friendly minion +1/+1, then gain Armor equal to its Attack.",
    "type": "SPELL"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 5,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 3,
    "dbfId": 41086,
    "entourage": [
      "UNG_999t10",
      "UNG_999t2",
      "UNG_999t3",
      "UNG_999t4",
      "UNG_999t5",
      "UNG_999t6",
      "UNG_999t7",
      "UNG_999t8",
      "UNG_999t13",
      "UNG_999t14"
    ],
    "flavor": "And so the bartender says, “Why the long neck?”",
    "health": 1,
    "id": "UNG_109",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Elder Longneck",
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> If you're holding a minion with 5 or more Attack, <b>Adapt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Matt Gaser",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 5,
    "dbfId": 41094,
    "flavor": "If you truly love your mana, set it free.",
    "id": "UNG_111",
    "name": "Living Mana",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "Transform your Mana Crystals into 2/2 Treants. Recover the mana when they die.",
    "type": "SPELL"
  },
  {
    "artist": "Trent Kaniuga",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 41096,
    "flavor": "Also inordinately excited for cupcakes.",
    "health": 4,
    "id": "UNG_113",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Bright-Eyed Scout",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> Draw a card. Change its Cost to (5).",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 1,
    "dbfId": 41099,
    "elite": true,
    "flavor": "Forming the Golakka Crater was the end of Barnabus' disastrous career as a dancer.",
    "id": "UNG_116",
    "mechanics": [
      "QUEST"
    ],
    "name": "Jungle Giants",
    "questReward": "UNG_116t",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "[x]<b>Quest:</b> Summon\n5 minions with\n5 or more Attack.\n<b>Reward:</b> Barnabus.",
    "type": "SPELL"
  },
  {
    "artist": "Jakub Kasber",
    "attack": 0,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 41105,
    "flavor": "Emits a sound only murlocs can hear, which is good because it’s REALLY annoying.",
    "health": 3,
    "id": "UNG_201",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Primalfin Totem",
    "race": "TOTEM",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "At the end of your turn, summon a 1/1 Murloc.",
    "type": "MINION"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 1,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 2,
    "dbfId": 41107,
    "flavor": "Good for summoning elementals. Great for making s'mores.",
    "health": 1,
    "id": "UNG_202",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fire Plume Harbinger",
    "race": "ELEMENTAL",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> Reduce the Cost of Elementals in your hand by (1).",
    "type": "MINION"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 41111,
    "flavor": "Ice, ice, baby!",
    "health": 1,
    "id": "UNG_205",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Glacial Shard",
    "playRequirements": {
      "REQ_ENEMY_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "referencedTags": [
      "FREEZE"
    ],
    "set": "UNGORO",
    "targetingArrowText": "Freeze an enemy.",
    "text": "<b>Battlecry:</b> <b>Freeze</b> an enemy.",
    "type": "MINION"
  },
  {
    "artist": "Rudy Siswanto",
    "attack": 4,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 7,
    "dbfId": 41116,
    "flavor": "He and his friends just want to rock out.",
    "health": 4,
    "id": "UNG_208",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Stone Sentinel",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_TARGET_WITH_DEATHRATTLE": 0
    },
    "race": "ELEMENTAL",
    "rarity": "EPIC",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> If you played an Elemental last turn, summon two 2/3 Elementals with <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 7,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 8,
    "dbfId": 41331,
    "elite": true,
    "flavor": "All that's missing is a little heart.",
    "health": 7,
    "id": "UNG_211",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Kalimos, Primal Lord",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "[x]<b>Battlecry:</b> If you played an\nElemental last turn, cast an\nElemental Invocation.",
    "type": "MINION"
  },
  {
    "artist": "Chris Seaman",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 3,
    "dbfId": 41304,
    "flavor": "Likes to scare his friends half to death.",
    "health": 3,
    "id": "UNG_800",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Terrorscale Stalker",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_DEATHRATTLE": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "UNGORO",
    "targetingArrowText": "Trigger a Deathrattle.",
    "text": "<b>Battlecry:</b> Trigger a friendly minion's <b>Deathrattle</b>.",
    "type": "MINION"
  },
  {
    "artist": "Paul Mafayon",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 41305,
    "flavor": "Roc eggs are great in omelettes, sandwiches, and as bait to turn poachers into bird food.",
    "health": 7,
    "id": "UNG_801",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Nesting Roc",
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> If you control at least 2 other minions, gain <b>Taunt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Rafael Zanchetin",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 41309,
    "flavor": "Not to be confused with clubbing enthusiast Emerald Raver.",
    "health": 1,
    "id": "UNG_803",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Emerald Reaver",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> Deal 1 damage to each hero.",
    "type": "MINION"
  },
  {
    "artist": "Laurel Austin",
    "attack": 7,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 10,
    "dbfId": 41315,
    "flavor": "Evolved the really long neck to spy on its neighbors.",
    "health": 14,
    "id": "UNG_806",
    "name": "Ultrasaur",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "UNGORO",
    "type": "MINION"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 41316,
    "flavor": "Universally adored by both control decks and ninjas.",
    "health": 3,
    "id": "UNG_807",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Golakka Crawler",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 23
    },
    "race": "BEAST",
    "rarity": "RARE",
    "set": "UNGORO",
    "targetingArrowText": "Destroy a Pirate.",
    "text": "<b>Battlecry:</b> Destroy a Pirate and gain +1/+1.",
    "type": "MINION"
  },
  {
    "artist": "Aaron Miller",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 41318,
    "flavor": "Stubbornly pursuing its dream to become Azeroth's fastest animal!",
    "health": 2,
    "id": "UNG_808",
    "mechanics": [
      "POISONOUS",
      "TAUNT"
    ],
    "name": "Stubborn Gastropod",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Taunt</b>\n  <b>Poisonous</b>",
    "type": "MINION"
  },
  {
    "artist": "Evgeniy Dlinnov",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 1,
    "dbfId": 41323,
    "faction": "ALLIANCE",
    "flavor": "Archnemeses: small children with glass jars.",
    "health": 2,
    "id": "UNG_809",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Fire Fly",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Battlecry</b>: Add a 1/2 Elemental to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 41324,
    "flavor": "Level 40 Tortollan Paladins quest to tame a Stegodon.  There are no level 41 Tortollan Paladins.",
    "health": 6,
    "id": "UNG_810",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Stegodon",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Taunt</b>",
    "type": "MINION"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 8,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 41415,
    "flavor": "It's gotten a bit long in the tooth.",
    "health": 2,
    "id": "UNG_812",
    "mechanics": [
      "STEALTH"
    ],
    "name": "Sabretooth Stalker",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Stealth</b>",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 41327,
    "flavor": "Aspiring meteorologist!",
    "health": 8,
    "id": "UNG_813",
    "mechanics": [
      "WINDFURY"
    ],
    "name": "Stormwatcher",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Windfury</b>",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41328,
    "flavor": "Float like a butterfly, sting like a giant wasp!",
    "health": 2,
    "id": "UNG_814",
    "mechanics": [
      "POISONOUS",
      "STEALTH"
    ],
    "name": "Giant Wasp",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Stealth</b>\n <b>Poisonous</b>",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 41410,
    "flavor": "He's doing his best, but his mom thinks that if he had just applied himself in school Kalimos would be working for HIM.",
    "health": 5,
    "id": "UNG_816",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Servant of Kalimos",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_TARGET_WITH_DEATHRATTLE": 0
    },
    "race": "ELEMENTAL",
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "UNGORO",
    "text": "[x]<b>Battlecry:</b> If you played\nan Elemental last turn,\n <b>Discover</b> an Elemental.",
    "type": "MINION"
  },
  {
    "artist": "Max Grecke",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 4,
    "dbfId": 41521,
    "flavor": "Also good for removing pesky stains.",
    "id": "UNG_817",
    "name": "Tidal Surge",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "Deal $4 damage to a minion. Restore #4 Health to your hero.",
    "type": "SPELL"
  },
  {
    "artist": "Nicola Saviori",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 2,
    "dbfId": 41524,
    "flavor": "Currently in an anger management class with Raging Worgen, Grommash Hellscream, and The Angry Chicken. It isn't helping.",
    "health": 1,
    "id": "UNG_818",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Volatile Elemental",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Deathrattle:</b> Deal 3 damage to a random enemy minion.",
    "type": "MINION"
  },
  {
    "artist": "Mauricio Herrera",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 3,
    "dbfId": 41834,
    "flavor": "Like Deadly Poison, but deadlier.",
    "id": "UNG_823",
    "name": "Envenom Weapon",
    "playRequirements": {
      "REQ_WEAPON_EQUIPPED": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "POISONOUS"
    ],
    "set": "UNGORO",
    "text": "Give your weapon <b>Poisonous</b>.",
    "type": "SPELL"
  },
  {
    "artist": "Konstantin Turovec",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 1,
    "dbfId": 41856,
    "elite": true,
    "flavor": "They asked, “And what must we give in return?” Gul’dan lowered his hood and answered: “Six… cards…”",
    "id": "UNG_829",
    "mechanics": [
      "QUEST"
    ],
    "name": "Lakkari Sacrifice",
    "questReward": "UNG_829t1",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "[x]<b>Quest:</b> Discard 6 cards.\n<b>Reward:</b> Nether Portal.",
    "type": "SPELL"
  },
  {
    "artist": "Dany Orizio",
    "attack": 5,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 6,
    "dbfId": 41869,
    "flavor": "As that old saying goes: \"you don't get into dinomancing to make friends.\"",
    "health": 5,
    "id": "UNG_830",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Cruel Dinomancer",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "[x]<b>Deathrattle:</b> Summon a\nrandom minion you\ndiscarded this game.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 41871,
    "flavor": "The most terrifying of Un’goro magics is both silent… AND deadly.",
    "id": "UNG_831",
    "name": "Corrupting Mist",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "Corrupt every minion. Destroy them at the start of your next turn.",
    "type": "SPELL"
  },
  {
    "artist": "Tyler Walpole",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 41872,
    "entourage": [
      "UNG_999t10",
      "UNG_999t2",
      "UNG_999t3",
      "UNG_999t4",
      "UNG_999t5",
      "UNG_999t6",
      "UNG_999t7",
      "UNG_999t8",
      "UNG_999t13",
      "UNG_999t14"
    ],
    "flavor": "Help save mana.  Donate blood today!",
    "id": "UNG_832",
    "name": "Bloodbloom",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "The next spell you cast this turn costs Health instead of Mana.",
    "type": "SPELL"
  },
  {
    "artist": "Dave Allsop",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 4,
    "dbfId": 41873,
    "flavor": "Guaranteed to track tar all over your carpet.",
    "health": 8,
    "id": "UNG_833",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Lakkari Felhound",
    "race": "DEMON",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Discard two random cards.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 5,
    "dbfId": 41874,
    "flavor": "True, they're only 1/1s, but they eat as much as most 4/4s!",
    "id": "UNG_834",
    "name": "Feeding Time",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "Deal $3 damage to a minion. Summon three 1/1 Pterrordaxes.",
    "type": "SPELL"
  },
  {
    "artist": "Slawomir Maniak",
    "attack": 3,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 3,
    "dbfId": 41875,
    "flavor": "Ear to the ground, he carefully interpreted the chittering noises: “You wanna cast a spell? I wanna cast a spell!”",
    "health": 3,
    "id": "UNG_835",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Chittering Tunneler",
    "race": "BEAST",
    "rarity": "EPIC",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> <b>Discover</b> a spell. Deal damage to your hero equal to its Cost.",
    "type": "MINION"
  },
  {
    "artist": "Anton Zemskov",
    "attack": 2,
    "cardClass": "WARLOCK",
    "collectible": true,
    "cost": 2,
    "dbfId": 41876,
    "elite": true,
    "flavor": "A bit of a snob: still refuses to drive anything with automatic transmission.",
    "health": 2,
    "id": "UNG_836",
    "mechanics": [
      "InvisibleDeathrattle"
    ],
    "name": "Clutchmother Zavas",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "Whenever you discard this, give it +2/+2 and return it to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Jim Nelson",
    "attack": 1,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 7,
    "dbfId": 41881,
    "flavor": "Tar Lord, man... legendary monster? Aw, forget it.",
    "health": 11,
    "id": "UNG_838",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Tar Lord",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Taunt</b>\nHas +4 Attack during your opponent’s turn.",
    "type": "MINION"
  },
  {
    "artist": "Sam Nielson",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 6,
    "dbfId": 41885,
    "elite": true,
    "flavor": "The goblin travel agency lost his luggage, but he's still having a great vacation!",
    "health": 6,
    "id": "UNG_840",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Hemet, Jungle Hunter",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> Destroy all cards in your deck that cost (3) or less.",
    "type": "MINION"
  },
  {
    "artist": "Jimmy Lo",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 41913,
    "elite": true,
    "flavor": "I am the Voraxx.  I speak for the weeds.",
    "health": 3,
    "id": "UNG_843",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "The Voraxx",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "[x]After you cast a spell on\nthis minion, summon a\n1/1 Plant and cast\nanother copy on it.",
    "type": "MINION"
  },
  {
    "artist": "Tooth",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41925,
    "faction": "ALLIANCE",
    "flavor": "Loves goblins.  In a light cream sauce.",
    "health": 8,
    "id": "UNG_844",
    "mechanics": [
      "CANT_ATTACK"
    ],
    "name": "Humongous Razorleaf",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "Can't attack.",
    "type": "MINION"
  },
  {
    "artist": "Tyler West Studio",
    "attack": 2,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41926,
    "flavor": "We wanted to name him \"Ingenious Elemental\", but he just wasn't that bright.",
    "health": 3,
    "id": "UNG_845",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Igneous Elemental",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Deathrattle:</b> Add two 1/2 Elementals to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Luca Zontini",
    "attack": 2,
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 41927,
    "flavor": "HATES being summoned for Kirin Tor party lighting.",
    "health": 1,
    "id": "UNG_846",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Shimmering Tempest",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Deathrattle:</b> Add a random Mage spell to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Dave Allsop",
    "attack": 6,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 7,
    "dbfId": 41928,
    "flavor": "For when a flamecaller just won't do.",
    "health": 6,
    "id": "UNG_847",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Blazecaller",
    "playRequirements": {
      "REQ_NONSELF_TARGET": 0,
      "REQ_TARGET_IF_AVAILABE_AND_ELEMENTAL_PLAYED_LAST_TURN": 0
    },
    "race": "ELEMENTAL",
    "rarity": "EPIC",
    "set": "UNGORO",
    "targetingArrowText": "Deal 5 damage.",
    "text": "<b>Battlecry:</b> If you played an Elemental last turn, deal 5 damage.",
    "type": "MINION"
  },
  {
    "artist": "Mike Sass",
    "attack": 4,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 8,
    "dbfId": 41929,
    "flavor": "Before he became a rap artist.",
    "health": 8,
    "id": "UNG_848",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Primordial Drake",
    "race": "DRAGON",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "[x]<b>Taunt</b>\n<b>Battlecry:</b> Deal 2 damage\nto all other minions.",
    "type": "MINION"
  },
  {
    "artist": "Luke Mancini",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 5,
    "dbfId": 41935,
    "elite": true,
    "flavor": "Reno taught her that blazing her own trail is a lot more fun than following someone else's map.",
    "health": 5,
    "id": "UNG_851",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Elise the Trailblazer",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> Shuffle a sealed <b>Un'Goro</b> pack into your deck.",
    "type": "MINION"
  },
  {
    "artist": "Chris Rahn",
    "attack": 12,
    "cardClass": "DRUID",
    "collectible": true,
    "cost": 10,
    "dbfId": 41954,
    "elite": true,
    "flavor": "Millennia of evolutionary pressures turned his species into the Faerie Dragons we know today.",
    "health": 12,
    "id": "UNG_852",
    "mechanics": [
      "CANT_BE_TARGETED_BY_SPELLS",
      "CANT_BE_TARGETED_BY_HERO_POWERS"
    ],
    "name": "Tyrantus",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "Can't be targeted by spells or Hero Powers.",
    "type": "MINION"
  },
  {
    "artist": "Anton Magdalina",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 8,
    "dbfId": 42009,
    "flavor": "Bingo! Minion DNA!",
    "id": "UNG_854",
    "name": "Free From Amber",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_NUM_MINION_SLOTS": 1,
      "REQ_TARGET_WITH_DEATHRATTLE": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "UNGORO",
    "text": "<b>Discover</b> a minion that costs (8) or more. Summon it.",
    "type": "SPELL"
  },
  {
    "artist": "Daria Tuzova",
    "cardClass": "ROGUE",
    "collectible": true,
    "cost": 1,
    "dbfId": 42011,
    "flavor": "It's the good kind of hallucination.",
    "id": "UNG_856",
    "name": "Hallucination",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "UNGORO",
    "text": "<b>Discover</b> a card from your opponent's class.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 4,
    "dbfId": 41289,
    "elite": true,
    "flavor": "She sees the fate of anyone she meets, but it's always the same: dinosaur attack.",
    "health": 4,
    "id": "UNG_900",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Spiritsinger Umbra",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "UNGORO",
    "text": "After you summon a minion, trigger its <b>Deathrattle</b> effect.",
    "type": "MINION"
  },
  {
    "artist": "Tooth",
    "attack": 5,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 9,
    "dbfId": 41294,
    "elite": true,
    "flavor": "Between you and me, Ozruk is a bit obsessed with his body.",
    "health": 5,
    "id": "UNG_907",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Ozruk",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "[x]<b>Taunt</b>\n<b>Battlecry:</b> Gain +5 Health\nfor each Elemental you\nplayed last turn.",
    "type": "MINION"
  },
  {
    "artist": "Slawomir Maniak",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 41350,
    "flavor": "Ooh.  I'll have a bite of this, and of this, and of this...",
    "id": "UNG_910",
    "name": "Grievous Bite",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "Deal $2 damage to a minion and $1 damage to adjacent ones.",
    "type": "SPELL"
  },
  {
    "artist": "James Ryman",
    "attack": 1,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 41353,
    "flavor": "It’s not LITERALLY jeweled. The goblins were terribly disappointed.",
    "health": 1,
    "id": "UNG_912",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Jeweled Macaw",
    "race": "BEAST",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> Add a random Beast to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Mike Azevedo",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 5,
    "dbfId": 41354,
    "flavor": "Ferocious in combat… and even more terrifying in pet battles.",
    "health": 5,
    "id": "UNG_913",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Tol'vir Warden",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> Draw two 1-Cost minions from your deck.",
    "type": "MINION"
  },
  {
    "artist": "Jaemin Kim",
    "attack": 2,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 41357,
    "flavor": "They’re just baby teeth. Lots and lots of baby teeth.",
    "health": 1,
    "id": "UNG_914",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Raptor Hatchling",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "<b>Deathrattle:</b> Shuffle a 4/3 Raptor into your deck.",
    "type": "MINION"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "attack": 3,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 41358,
    "flavor": "Wasn't clever enough to go AROUND the electric fence.",
    "health": 2,
    "id": "UNG_915",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Crackling Razormaw",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_IF_AVAILABLE": 0,
      "REQ_TARGET_WITH_RACE": 20
    },
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "targetingArrowText": "Adapt a Beast.",
    "text": "<b>Battlecry:</b> <b>Adapt</b> a friendly Beast.",
    "type": "MINION"
  },
  {
    "artist": "Daren Bader",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 41360,
    "flavor": "Many hunters long for the pitter-patter of enormous feet.",
    "id": "UNG_916",
    "name": "Stampede",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "Each time you play a Beast this turn, add a random Beast to your hand.",
    "type": "SPELL"
  },
  {
    "artist": "Arthur Bozonnet",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 2,
    "dbfId": 41363,
    "flavor": "Anyone can dinomance. Just put your lips together and RAAWWWAARGGGH.",
    "id": "UNG_917",
    "name": "Dinomancy",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "Your Hero Power becomes 'Give a Beast +2/+2.'",
    "type": "SPELL"
  },
  {
    "artist": "Alex Horley Orlandelli",
    "attack": 9,
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 7,
    "dbfId": 41366,
    "elite": true,
    "flavor": "Swamp King Dred, more like Swamp King Dead, amiright?",
    "health": 9,
    "id": "UNG_919",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Swamp King Dred",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "After your opponent plays a minion, attack it.",
    "type": "MINION"
  },
  {
    "artist": "A.J. Nazzaro",
    "cardClass": "HUNTER",
    "collectible": true,
    "cost": 1,
    "dbfId": 41368,
    "elite": true,
    "flavor": "Question: What's scarier, one giant angry dinosaur or 15 smaller vicious ones? Answer: AHHHHHHH THEY FOUND MEEEEEE",
    "id": "UNG_920",
    "mechanics": [
      "QUEST"
    ],
    "name": "The Marsh Queen",
    "questReward": "UNG_920t1",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "[x]<b>Quest:</b> Play seven\n1-Cost minions.\n<b>Reward:</b> Queen Carnassa.",
    "type": "SPELL"
  },
  {
    "artist": "Jerry Mascho",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 41400,
    "flavor": "It turns out cards DO grow on trees!",
    "id": "UNG_922",
    "name": "Explore Un'Goro",
    "rarity": "EPIC",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "UNGORO",
    "text": "Replace your deck with copies of \"<b>Discover</b> a card.\"",
    "type": "SPELL"
  },
  {
    "artist": "Phil Saunders",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 41401,
    "flavor": "Week 6. I remain covered head to toe with scales. They do not yet realize that I am not a dinosaur.",
    "id": "UNG_923",
    "name": "Iron Hide",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "Gain 5 Armor.",
    "type": "SPELL"
  },
  {
    "artist": "Luca Zontini",
    "attack": 5,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 6,
    "dbfId": 41404,
    "flavor": "\"It's an herbivore.  How dangerous can it be?\"  - Famous last words",
    "health": 5,
    "id": "UNG_925",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Ornery Direhorn",
    "race": "BEAST",
    "rarity": "COMMON",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> <b>Adapt</b>.",
    "type": "MINION"
  },
  {
    "artist": "Jomaro Kindred",
    "attack": 2,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 2,
    "dbfId": 41406,
    "flavor": "The Draenei are seriously considering cancelling \"Bring Your Murderous Pet to Work Day.\"",
    "health": 6,
    "id": "UNG_926",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Cornered Sentry",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "<b>Taunt</b>. <b>Battlecry:</b> Summon three 1/1 Raptors for your opponent.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 41407,
    "flavor": "Being hurt can make you another person.",
    "id": "UNG_927",
    "name": "Sudden Genesis",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "Summon copies of your damaged minions.",
    "type": "SPELL"
  },
  {
    "artist": "Jim Nelson",
    "attack": 1,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41418,
    "flavor": "If you won't come to the tar pits, we'll bring them to you!",
    "health": 5,
    "id": "UNG_928",
    "mechanics": [
      "TAUNT"
    ],
    "name": "Tar Creeper",
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "<b>Taunt</b>\nHas +2 Attack during your opponent's turn.",
    "type": "MINION"
  },
  {
    "artist": "James Ryman",
    "attack": 1,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 41420,
    "durability": 1,
    "flavor": "It’s a sword! It’s a knife! It’s a swizzle-stick!",
    "id": "UNG_929",
    "name": "Molten Blade",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "Each turn this is in your hand, transform it into a new weapon.",
    "type": "WEAPON"
  },
  {
    "artist": "James Ryman",
    "attack": 9,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 9,
    "dbfId": 41425,
    "elite": true,
    "flavor": "He's a terror at concerts.",
    "health": 7,
    "id": "UNG_933",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "King Mosh",
    "race": "BEAST",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> Destroy all damaged minions.",
    "type": "MINION"
  },
  {
    "artist": "Nate Bowden",
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 1,
    "dbfId": 41427,
    "elite": true,
    "flavor": "Why does an active volcano need to be defended? To save its ash.",
    "id": "UNG_934",
    "mechanics": [
      "QUEST"
    ],
    "name": "Fire Plume's Heart",
    "questReward": "UNG_934t1",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "UNGORO",
    "text": "[x]<b>Quest:</b> Play\n7 <b>Taunt</b> minions.\n<b>Reward:</b> Sulfuras.",
    "type": "SPELL"
  },
  {
    "artist": "Dany Orizio",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41478,
    "flavor": "Lookout is a self-appointed title that's mostly an excuse to beat things up.",
    "health": 2,
    "id": "UNG_937",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Primalfin Lookout",
    "race": "MURLOC",
    "rarity": "COMMON",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> If you control another Murloc, <b>Discover</b> a Murloc.",
    "type": "MINION"
  },
  {
    "artist": "Gustav Schmidt",
    "attack": 2,
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 41479,
    "flavor": "NONE SHALL PASS until at least an hour after eating.",
    "health": 4,
    "id": "UNG_938",
    "mechanics": [
      "BATTLECRY",
      "TAUNT"
    ],
    "name": "Hot Spring Guardian",
    "playRequirements": {
      "REQ_TARGET_IF_AVAILABLE": 0
    },
    "race": "ELEMENTAL",
    "rarity": "COMMON",
    "set": "UNGORO",
    "targetingArrowText": "Restore 3 Health.",
    "text": "<b>Taunt</b>\n<b>Battlecry:</b> Restore #3 Health.",
    "type": "MINION"
  },
  {
    "artist": "Konstantin Turovec",
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 1,
    "dbfId": 41494,
    "elite": true,
    "flavor": "They keep hitting the Snooze button.",
    "id": "UNG_940",
    "mechanics": [
      "QUEST"
    ],
    "name": "Awaken the Makers",
    "questReward": "UNG_940t8",
    "rarity": "LEGENDARY",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "UNGORO",
    "text": "<b>Quest:</b> Summon\n7 <b>Deathrattle</b> minions.<b>\nReward:</b> Amara, Warden of Hope.",
    "type": "SPELL"
  },
  {
    "artist": "Matthew O'Connor",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 2,
    "dbfId": 41496,
    "flavor": "It's the Ancient Tol'vir symbol for \"Whoops!\"",
    "id": "UNG_941",
    "name": "Primordial Glyph",
    "rarity": "EPIC",
    "referencedTags": [
      "DISCOVER"
    ],
    "set": "UNGORO",
    "text": "<b>Discover</b> a spell. Reduce its Cost by (2).",
    "type": "SPELL"
  },
  {
    "artist": "Steve Prescott",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 1,
    "dbfId": 41499,
    "elite": true,
    "flavor": "Form feet and legs!  Form arms and body!  Oh.  Sorry.  I was thinking about Mechafin.",
    "id": "UNG_942",
    "mechanics": [
      "QUEST"
    ],
    "name": "Unite the Murlocs",
    "questReward": "UNG_942t",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "[x]<b>Quest:</b> Summon\n10 Murlocs.\n<b>Reward:</b> Megafin.",
    "type": "SPELL"
  },
  {
    "artist": "A.J. Nazzaro",
    "attack": 3,
    "cardClass": "NEUTRAL",
    "collectible": true,
    "cost": 3,
    "dbfId": 41683,
    "flavor": "Three time winner of the Un'Goro weapon eating contest.",
    "health": 3,
    "id": "UNG_946",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Gluttonous Ooze",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_WITH_DEATHRATTLE": 0
    },
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> Destroy your opponent's weapon and gain Armor equal to its Attack.",
    "type": "MINION"
  },
  {
    "artist": "L. Lullabi & K. Turovec",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 4,
    "dbfId": 41690,
    "flavor": "Dang, I'm looking pretty hot!",
    "id": "UNG_948",
    "name": "Molten Reflection",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "Choose a friendly minion. Summon a copy of it.",
    "type": "SPELL"
  },
  {
    "artist": "Joe Wilson",
    "attack": 4,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 7,
    "dbfId": 41859,
    "durability": 3,
    "flavor": "George and Karl!  Thank the Light we found you!",
    "id": "UNG_950",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Vinecleaver",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "[x]After your hero attacks,\nsummon two 1/1 Silver\nHand Recruits.",
    "type": "WEAPON"
  },
  {
    "artist": "Jim Nelson",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 6,
    "dbfId": 41864,
    "flavor": "What beats cavalry? Dinosaur cavalry.",
    "id": "UNG_952",
    "name": "Spikeridged Steed",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "RARE",
    "referencedTags": [
      "TAUNT"
    ],
    "set": "UNGORO",
    "text": "Give a minion +2/+6 and <b>Taunt</b>. When it dies, summon a Stegodon.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Dixon",
    "attack": 1,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 2,
    "dbfId": 41866,
    "flavor": "Sure, he'll return your stuff.  OVER HIS DEAD BODY!",
    "health": 2,
    "id": "UNG_953",
    "mechanics": [
      "DEATHRATTLE"
    ],
    "name": "Primalfin Champion",
    "race": "MURLOC",
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "[x]<b>Deathrattle:</b> Return any\nspells you cast on this\nminion to your hand.",
    "type": "MINION"
  },
  {
    "artist": "Arthur Gimaldinov",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 41868,
    "elite": true,
    "flavor": "“Impossible!” exclaimed the Silver Hand Recruit, his eyes filled with fear. Uther shook his head, turning the crystal until it caught the light: “Life finds a way.”",
    "id": "UNG_954",
    "mechanics": [
      "QUEST"
    ],
    "name": "The Last Kaleidosaur",
    "questReward": "UNG_954t1",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "<b>Quest:</b> Cast 6 spells\non your minions.\n<b>Reward:</b> Galvadon.",
    "type": "SPELL"
  },
  {
    "artist": "Matt Gaser",
    "cardClass": "MAGE",
    "collectible": true,
    "cost": 6,
    "dbfId": 41878,
    "flavor": "When you absolutely, positively have to kill all the dinosaurs.",
    "id": "UNG_955",
    "name": "Meteor",
    "playRequirements": {
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "EPIC",
    "set": "UNGORO",
    "text": "Deal $15 damage to a minion and $3 damage to adjacent ones.",
    "type": "SPELL"
  },
  {
    "artist": "Hideaki Takamura",
    "cardClass": "SHAMAN",
    "collectible": true,
    "cost": 3,
    "dbfId": 41879,
    "flavor": "I guess you can say they’re… “soul survivors.”",
    "id": "UNG_956",
    "name": "Spirit Echo",
    "rarity": "EPIC",
    "referencedTags": [
      "DEATHRATTLE"
    ],
    "set": "UNGORO",
    "text": "Give your minions \"<b>Deathrattle:</b> Return  this to your hand.\"",
    "type": "SPELL"
  },
  {
    "artist": "Peter Stapleton",
    "attack": 3,
    "cardClass": "WARRIOR",
    "collectible": true,
    "cost": 5,
    "dbfId": 41890,
    "flavor": "His mom could beat up your mom.",
    "health": 6,
    "id": "UNG_957",
    "mechanics": [
      "DEATHRATTLE",
      "TAUNT"
    ],
    "name": "Direhorn Hatchling",
    "race": "BEAST",
    "rarity": "RARE",
    "set": "UNGORO",
    "text": "<b>Taunt</b>\n<b>Deathrattle:</b> Shuffle a 6/9 Direhorn with <b>Taunt</b> into your deck.",
    "type": "MINION"
  },
  {
    "artist": "Zoltan Boros",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 41912,
    "faction": "ALLIANCE",
    "flavor": "George and Karl were never heard from again.",
    "id": "UNG_960",
    "name": "Lost in the Jungle",
    "playRequirements": {
      "REQ_NUM_MINION_SLOTS": 1
    },
    "rarity": "COMMON",
    "set": "UNGORO",
    "text": "Summon two 1/1 Silver Hand Recruits.",
    "type": "SPELL"
  },
  {
    "artist": "Hideaki Takamura",
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 1,
    "dbfId": 41944,
    "flavor": "Pray for salvation. If that fails, pray for extra horns or bigger teeth.",
    "id": "UNG_961",
    "name": "Adaptation",
    "playRequirements": {
      "REQ_FRIENDLY_TARGET": 0,
      "REQ_MINION_TARGET": 0,
      "REQ_TARGET_TO_PLAY": 0
    },
    "rarity": "COMMON",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "<b>Adapt</b> a friendly minion.",
    "type": "SPELL"
  },
  {
    "artist": "Dan Scott",
    "attack": 3,
    "cardClass": "PALADIN",
    "collectible": true,
    "cost": 4,
    "dbfId": 41945,
    "flavor": "“Come now, Johnston. I think those horns are quite fetching on you.”",
    "health": 4,
    "id": "UNG_962",
    "mechanics": [
      "BATTLECRY"
    ],
    "name": "Lightfused Stegodon",
    "race": "BEAST",
    "rarity": "RARE",
    "referencedTags": [
      "ADAPT"
    ],
    "set": "UNGORO",
    "text": "<b>Battlecry:</b> <b>Adapt</b> your Silver Hand Recruits.",
    "type": "MINION"
  },
  {
    "artist": "Phil Saunders",
    "attack": 3,
    "cardClass": "PRIEST",
    "collectible": true,
    "cost": 5,
    "dbfId": 42046,
    "elite": true,
    "flavor": "Arise, fair sun, and kill my envious foes. They don't have a legendary as beautiful as you.",
    "health": 5,
    "id": "UNG_963",
    "mechanics": [
      "TRIGGER_VISUAL"
    ],
    "name": "Lyra the Sunshard",
    "race": "ELEMENTAL",
    "rarity": "LEGENDARY",
    "set": "UNGORO",
    "text": "Whenever you cast a spell, add a random Priest spell to your hand.",
    "type": "MINION"
  }
]
