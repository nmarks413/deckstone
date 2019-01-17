import React from 'react';

import { decode } from 'deckstrings';
import { Input } from 'reactstrap';

import ReactTable from "react-table";
import 'react-table/react-table.css'

const $ = require('jquery');

const columns = [{
  Header: 'Cardname',
  accessor: 'cardname'
},
{
  Header: 'Amount',
  accessor: 'amnt'
}]

var cardList = "";
$.getJSON('https://api.hearthstonejson.com/v1/28329/enUS/cards.collectible.json?callback=?"', function(data) {
  cardList = data;
})

//Sample Deckstring: AAECAZICCLQDxQTeBcLOApnTApvoAuT7AvX8AgtAX+kB0wPkCKDNAofOApjSAp7SAtvTAr/yAgA=


function format(decklist)
{
  let array = [];
  for (const i of decklist['cards'])
  {
    let key = {};
    key['cardname'] = search(i[0]);
    key['amnt'] = i[1];
    array.push(key)
  }
  return array;

}

function search(dbfId)
{
  for (const i of cardList)
  {
    if (i.dbfId == dbfId) {return i.name;}
  }
}

export default class DeckstringDisplay extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: props.value || "",
      deckstring: []
    }
  }

  changeValue(event) {
    let value = event.target.value
    this.setState({value: value});
  }

  handleKeyPress(event) {
    if (event.which == 13) {
      let s = event.target.value
      try {
        s = format(decode(event.target.value));
        this.setState({
          deckstring: s,
        });
        console.log(this.state.deckstring)
      } catch (e) {
        console.log(e);
      }



    }
  }

  render(){
    return(
      <div>
        <Input type="text" onChange={this.changeValue.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} value={this.state.value}/>
        <ReactTable data={this.state.deckstring} columns={columns}/>
      </div>
    )
  }
}
